import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todosRoutes';
import { loggerMiddleware, logger } from './utils/logger';
import { setupSwagger } from './docs/swagger';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(loggerMiddleware);

app.use('/api/todos', todoRoutes);

setupSwagger(app);


app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
