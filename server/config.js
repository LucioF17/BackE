import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://proyectolucio1:lflflf777@cluster1.stxrpia.mongodb.net/testdb";
export const PORT = process.env.PORT || 4000;
