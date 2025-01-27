# import S3Client from @aws-sdk/client-s3

# initialize s3Client

- s3Client = new S3Client({
-      region: <S3 Region>,
-      credentials: {
-        accessKeyId: <access key>,
-        secretAccessKey: <secret access key>,
-      },
- });

# uploading file to bucket

- const params = {
- Bucket: <s3 bucket name>,
- Key: <file name>,
- Body: <file data>,
- };
- await s3Client.send(new PutObjectCommand(params));
