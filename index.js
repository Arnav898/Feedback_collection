import 'dotenv/config';
import express from 'express';
import feedbackRoutes from './src/routes/feedbackRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ 
    message: `Welcome to ${process.env.APP_NAME}!`
  });
});

app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server started! Visit http://localhost:${port}`);
}); 