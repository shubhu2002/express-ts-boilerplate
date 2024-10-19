import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome to the server !!");
});
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
export default app;
