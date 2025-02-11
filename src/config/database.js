import mongoose from "mongoose";

const url = process.env.DB_URL;
const database = async () => {
  await mongoose.connect(url, {
    dbName: "",
  });
};

export default database;
