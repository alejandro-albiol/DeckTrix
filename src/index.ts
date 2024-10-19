import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended: true}));

const publicPath = path.join(__dirname, '../../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html', 'index.html'));
});

app.get('/blackjack', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html', 'blackjack.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
