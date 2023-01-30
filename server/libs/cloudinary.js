import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dxldle8by",
  api_key: "987183351245283",
  api_secret: "BQZHkkfU2Sr7u4F0EvJC0Ax0HJE",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
