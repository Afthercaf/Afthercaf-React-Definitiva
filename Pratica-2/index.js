import express from 'express';
import router from './routers/union.js';


const app = express();

app.use(express.json());


app.use(router);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Server running on port 3000');
});