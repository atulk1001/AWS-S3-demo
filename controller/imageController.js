const config = require("../config");
const uploadFileToS3 = require("../utils/functions");
const uploadImage = async (req, res) => {
  try {
    if (req.files.profilePic.name) {
      const result = await uploadFileToS3(
        req.files.profilePic,
        config.development.S3_BUCKET
      );
      return res.sendStatus(result);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = uploadImage;
