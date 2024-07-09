import fs from "fs"
import express, {Express, Request, Response} from "express"

const port = 9000;
const app: Express = express();

/*GET REQUEST*/
app.get("/", (req: Request, res: Response) => {
    res.send("This is a TS REST API");
});

/*GET REQUEST*/
app.get("/test", (req: Request, res: Response) => {
    res.send("You're testing basic API endpoints");
});

/*GET REQUEST*/
app.get("/addition", (req: Request, res: Response) => {

    /*Test of a function*/
    const addNumber = (a: number, b: number) => {
        return a + b
    }

    const input1 = 2
    const input2 = 3

    /*save value of addition*/
    const addition = addNumber(input1, input2)

    res.send(`${input1} + ${input2} = ${addition}`);
});


/*Print test.txt after each compile*/
fs.writeFileSync("test.txt", "test")

/*Prints server port*/
app.listen(port, ()=>{
    console.log(`now listening on port ${port}`)
})