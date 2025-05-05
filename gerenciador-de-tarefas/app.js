
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect('mongodb+srv://despacittogta:Bicicleta2008@cluster0.aunkiug.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB Atlas'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB Atlas:', err));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
