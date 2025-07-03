const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = 'mysecretkey';

// Fake user data
const users = [{ id: 1, username: 'user1', password: 'pass1' }];

// Login route to get JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  // Create JWT token
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Protected route example
app.get('/profile', authenticateToken, (req, res) => {
  // In real app, fetch user info from DB
  res.json({ userId: req.user.userId, message: 'This is your profile data' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
