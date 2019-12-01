import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from "path";

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: any[], port: number) {
    this.app = express();
    this.port = port;
 
    // Template configuration
    this.app.set("view engine", "ejs");
    this.app.set("views", "public");
    // Static files configuration
    this.app.use("/assets", express.static(path.join(__dirname, "frontend")));
    this.app.get('/',  (req, res) => {
        res.render("index");
    });
    this.app.use(bodyParser.json());
    this.initializeControllers(controllers);
  }
 
 
  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;