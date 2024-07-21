import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import todoRoutes from './routes/todosRoutes';
import { loggerMiddleware, logger } from './utils/logger';
import { setupSwagger } from './docs/swagger';

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(loggerMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
