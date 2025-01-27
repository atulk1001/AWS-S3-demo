# create .env file to root of the project

# login to AWS and create security credentials

# create a S3 bucket in AWS in a region, Keep in the mind that S3 buckets are region specific

# add follwing keys to .env file

ACCESS_KEY
SECRET_ACCESS_KEY
S3_BUCKET
S3_REGION
PORT

# ignore .env to .gitignore, .env file should be created envirnment specific

# do npm install

# Use Postman to run http://localhost:3000/file/upload

    select POST method
    select Body as form-data
    key : 'profilePic'
    type : File
    Browse the file you want to upload.

# 200 OK response for successfull upload
