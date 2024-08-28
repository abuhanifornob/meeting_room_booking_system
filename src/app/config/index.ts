import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  databseURL: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_token_secret: process.env.WT_ACCESS_TOKEN,
};
