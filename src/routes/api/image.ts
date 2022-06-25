import express, { Request, Response, NextFunction } from "express";
import sharp from "sharp";
const images = express.Router();

// type Props = {
//   req: Request;
//   res: Response;
//   next: NextFunction;
// };

const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | string> => {
  try {
    await sharp(`./assets/images/full/${req.query.filename}.jpg`)
      .resize({
        width: parseInt(req.query.width as string),
        height: parseInt(req.query.height as string),
      })
      .toFile(
        `./assets/images/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
      );
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
  next();
};

const sendResizedImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    await resizeImage(req, res, next);
    res.sendFile(
      `C:/Users/Tim28/Desktop/dev/udacity/image-processing-api/assets/images/thumb/${req.query.filename}-${req.query.width}x${req.query.height}.jpg`
    );
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
  next();
};

images.get("/", (req, res, next) => {
  resizeImage(req, res, next);
  sendResizedImage(req, res, next);
});

export default images;
