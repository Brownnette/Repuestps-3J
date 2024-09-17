const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Asegúrate de instalar y usar el paquete cors
const authRoutes = require('./controllers/routes/authRoutes');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
//# sourceMappingURL=app.js.map