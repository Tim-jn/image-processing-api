import express, { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import path from "path";
const images = express.Router();

const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await sharp(
      path.resolve(
        __dirname,
        `../../../assets/images/full/${req.query.filename}.jpg`
      )
    )
      .resize({
        width: parseInt(req.query.width as string),
        height: parseInt(req.query.height as string),
      })
      .toFile(
        path.resolve(
          __dirname,
          `../../../assets/images/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
        )
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
      path.resolve(
        __dirname,
        `../../../assets/images/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
      )
    );
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
});

export default images;
