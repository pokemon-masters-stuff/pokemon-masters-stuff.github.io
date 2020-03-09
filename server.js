const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Heya from Helper!' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/builds', require('./routes/builds'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
