const async = require('async');
const pool = require('../config/dbPool.js');

module.exports = {
  queryParamCnt_None : async (...args) => {
    const query = args[0];
    let result;
    try {
      var connection = await pool.getConnection();
      result = await connection.query(query);
    }
    catch(err) {
      console.log("mysql error! err log =>" + err);
    }
    finally {
      pool.releaseConnection(connection);
      return result;
    }
  },
  queryParamCnt_Arr : async (...args) => {
    const query = args[0];
    const data = args[1];

    let result;
    try {
      var connection = await pool.getConnection();
      result = await connection.query(query, data);
    }
    catch(err) {
      console.log("mysql error! err log =>" + err);
    }
    finally {
      pool.releaseConnection(connection);
      return result;
    }
  },
  Transaction : async (...args) => {
    let result = "Success";

    try{
      var connection = await pool.getConnection();
      await connection.beginTransaction();

      await args[0](connection, ...args);
      await connection.commit();
    }
    catch(err){
      await connection.rollback();
      console.log("mysql error! err log =>" + err);
      result = undefined;
    }
    finally {
      pool.releaseConnection(connection);
      return result;
    }
  }
};