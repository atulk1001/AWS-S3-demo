// upload to s3 bucket
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const config = require("../config");

const uploadFileToS3 = async (file, bucketName) => {
  try {
    const s3Client = new S3Client({
      region: config.development.S3_REGION,
      credentials: {
        accessKeyId: config.development.S3_ACCESS_KEY,
        secretAccessKey: config.development.S3_SECRET_ACCESS_KEY,
      },
    });
    const fileName = `pic_${Date.now().toString()}_${
      file.mimetype.split("/")[1]
    }`;
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: file.data,
    };
    await s3Client.send(new PutObjectCommand(params));
    // Read the object.
    const Body = await s3Client.send(
      new GetObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      })
    );
    const statusCode = Body["$metadata"].httpStatusCode;
    return statusCode;
  } catch (error) {
    return 500;
  }
};
module.exports = uploadFileToS3;
