import mongoose from "mongoose";

mongoose
  .connect
  // STRING DE CONEXÃO COM MONGODB ATLAS
  ();

let db = mongoose.connection;

export default db;
