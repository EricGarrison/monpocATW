const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_PATH = '/monpocATW';

// Serve static files from dist directory with correct MIME types
app.use(BASE_PATH, express.static(path.join(__dirname, 'dist'), {
  maxAge: '1d',
  etag: false
}));

// SPA fallback - redirect all non-file requests to index.html
app.get(BASE_PATH + '/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Root redirect
app.get('/', (req, res) => {
  res.redirect(BASE_PATH + '/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`App available at http://localhost:${PORT}${BASE_PATH}/`);
});
