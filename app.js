const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const tarefasRoutes = require('./routes/tarefasRoutes');
app.use('/', tarefasRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});