const express = require('express');
const { ServerConfig } = require('./config/index.js');
const apiRoutes = require('./routes/index.js');

const app = express();

app.use('/api', apiRoutes);
app.listen( ServerConfig.PORT, () => {
    console.log(`Server is running on ${ ServerConfig.PORT}`);
  
});
