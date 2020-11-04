const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  var objectBody = Buffer.from(event.data, "base64");
  var objectKey = process.env.OBJECT_NAME;
  var params = {
    Bucket: process.env.BUCKET_NAME,
    Key: objectKey,
    Body: objectBody
  };
  const putImage = async (params) => {
    return new Promise((resolve, reject) => {
      s3.putObject(params, function (err, data) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(params);
        }
      });
    });
  };
  return {
    statusCode: 200,
    body: JSON.stringify(await putImage(params)),
  };
};
