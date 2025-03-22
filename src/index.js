// Package imports
const express = require('express');

// File imports
const { PORT } = require('./config/serverConfig');
const ApiRoute = require('./routes/index');

const setupAndStartServer = async () => {
    const app = express();

    // Middlewares
    app.use(express.json()); // Inbuilt parsing middleware (like body-parser)
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', ApiRoute);

    app.listen(PORT, () => {
        console.log(`Server is running on Port : ${PORT}`);
    });
};

setupAndStartServer();
