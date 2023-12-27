// require("dotenv").config();
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import express from 'express';
import connectDB from './db/db.js';

// const app = express();

dotenv.config({
  path: './env',
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Listening of http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed!!!', err);
  });

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}`);
//     app.on('error', (error) => {
//       console.log('ERROR : ', error);
//       throw error;
//     });

//     const port = process.env.PORT || 5000;

//     app.listen(port, () => {
//       console.log(`Listening on http://localhost:${port}`);
//     });
//   } catch (error) {
//     console.log('ERROR: ', error);
//     throw new Error(error);
//   }
// };
