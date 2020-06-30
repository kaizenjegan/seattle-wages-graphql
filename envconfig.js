const dbUser = process.env.mongoUser;
const dbPassword = process.env.mongoPassword;
const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0-bxbjj.azure.mongodb.net/seattlegov?retryWrites=true&w=majority`;
module.exports = {
  connectionString:   connectionString
}