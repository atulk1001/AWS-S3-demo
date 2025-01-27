const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    S3_ACCESS_KEY: process.env.ACCESS_KEY,
    S3_SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    PORT: process.env.PORT || 3000,
  },
};
