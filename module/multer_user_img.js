const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.loadFromPath('./config/aws_config.json');

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'line-mini-bucket',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, "user_img/" + file.originalname);
        }
    })
});

module.exports = upload;