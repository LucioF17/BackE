import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "./routes/post.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    temFileDir: "./upload",
  })
);

//routes
app.use(postsRoutes);

export default app;
