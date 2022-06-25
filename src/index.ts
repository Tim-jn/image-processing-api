import express from "express";
import routes from "./routes/index";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the image processing API !</h1><p>This API is the first project of <b>Udacity's Full Stack Javascript Developer Nanodegree</b> program. <br/><br/> It resizes and saves images to user specifications when visiting a URL.<br/><br/>Examples : <ul><li><span>If you want to see the full size image : </span><a href='api/images?filename=encenadaport'>api/images?filename=encenadaport</a></li><li><span>If you want to see the resized image : </span><a href='api/images?filename=encenadaport&width=250&height=250'>api/images?filename=encenadaport&width=250&height=250</a></li></ul></p>"
  );
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
