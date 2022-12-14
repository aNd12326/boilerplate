const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const movieRouter = require("./movies");

const router = Router();
router.use("/series", movieRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
