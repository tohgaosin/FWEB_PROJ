import express from "express";
import cors from "cors";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());    

app.get("/", async(req, res)=> {
    res.send("<h1>Hello World</h1>").status(200)
});

app.use("/record", records);

// Start server
app.listen(PORT, ()=> {
    console.log(`Server is running on port: http://localhost:${PORT}`); 
});