const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Activates express and dedicates the port to use
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Error catch for invalid responses
app.use((req, res) => {
    res.status(404).end();
});

// Starts the server on the listed Port
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});