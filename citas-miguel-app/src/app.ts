import express from 'express';
import { json } from 'body-parser';
import { setCitasRoutes } from './routes/citasRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setCitasRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});