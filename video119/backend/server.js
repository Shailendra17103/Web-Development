import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());                 // Enables requests from React (5173)
app.use(express.json());        // ✅ Parses incoming JSON

app.post('/', (req, res) => {
  console.log(req.body);        // ✅ Should now log the object sent from React
  res.send('Post request received!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
