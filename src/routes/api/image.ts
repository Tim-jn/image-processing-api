import express, { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import path from "path";
import { dataImages } from "../../index";

const images = express.Router();

const resizeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const filename = req.query.filename as string;
  const imagePath = path.resolve(__dirname, `../../../assets/images/`);

  try {
    if (filename === undefined || !dataImages.includes(filename)) {
      res.send(
        `</span>Input file is missing : please enter a valid <b>filename</b> !<br/> <br/>For example : <a href='images?filename=encenadaport&width=250&height=250'>api/images?filename=encenadaport&width=250&height=250</a></span><br/> <br/>Here is a list of available filenames : ${dataImages}`
      );
    } else if (isNaN(width && height)) {
      res.send(
        "</span>Please enter a valid number for <b>height</b> and <b>width</b>, for example : <a href='images?filename=encenadaport&width=250&height=250'>api/images?filename=encenadaport&width=250&height=250</a></span>"
      );
    } else if (dataImages.includes(filename) && !isNaN(width && height)) {
      await sharp(`${imagePath}/full/${filename}.jpg`)
        .resize({
          width,
          height,
        })
        .toFile(`${imagePath}/thumb/${filename}-${width}x${height}.jpg`);
    }
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
  next();
};

images.use("/", resizeImage);

images.get("/", (req, res) => {
  res.sendFile(
    `${path.resolve(__dirname, `../../../assets/images/`)}/thumb/${
      req.query.filename
    }-${req.query.width}x${req.query.height}.jpg`
  );
});

export default images;
