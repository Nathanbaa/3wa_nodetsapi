import multer from "multer";

const uploadImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const imagesMiddleware = multer({ storage: uploadImage }).array("images", 10); // pas + de 10 images pour un plat

export { imagesMiddleware };
