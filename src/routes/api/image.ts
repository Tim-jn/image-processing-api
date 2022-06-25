import express, { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import path from "path";
const images = express.Router();
const imagePath = path.resolve(__dirname, `../../../assets/images/`);

const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  try {
    await sharp(`${imagePath}/full/${req.query.filename}.jpg`)
      .resize({
        width,
        height,
      })
      .toFile(
        `${imagePath}/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
      );
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
  next();
};

images.use(resizeImage);

images.get("/", (req, res) => {
  try {
    res.sendFile(
      `${imagePath}/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
    );
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
});

export default images;
