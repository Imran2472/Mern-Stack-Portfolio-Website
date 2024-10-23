import multer from "multer";

const storage = multer.diskStorage({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 2MB
  },
});

const upload = multer({ storage: storage });

export default upload;
