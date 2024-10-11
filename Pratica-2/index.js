import express from 'express';
import router from './routers/union.js';
import cors from "cors";



const app = express();

// CORS Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Cambia esto a la URL de tu frontend en Vercel
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());


app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 3000');
});