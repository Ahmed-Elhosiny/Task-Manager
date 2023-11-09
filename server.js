const connectDB = require('./db/connect');
require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 3000;
const start = (async () => {
  try {
    await connectDB(process.env.DATABASE);
    console.log(`DB Connected...`);
    app.listen(
      PORT,
      console.log(
        `Server is listening on port ${PORT}...`
      )
    );
  } catch (err) {
    console.log(
      `Error Connecting to DB 💥 => ${err}`
    );
  }
})();
