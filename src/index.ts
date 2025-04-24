import express from "express";
import userRouter from "./routers/user"
import workerRouter from "./routers/worker"
import cors from "cors";

const app = express();
//const PORT = process.env.PORT; //takes the port
app.use(express.json());
app.use(cors())


app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000)
console.log("listning at 3000");

