// C:\Users\HP\Downloads\GoZee-api-master\test-db-connection.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is not defined in your .env file!");
  process.exit(1);
}

console.log("Attempting to connect to MongoDB with URI:", uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully!");
  mongoose.connection.close(); // Close connection after successful test
})
.catch(err => {
  console.error("❌ MongoDB Connection Error:", err.message);
  console.error("Full error object:", err);
  mongoose.connection.close(); // Close connection on error
});