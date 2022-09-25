const { Router } = require("express");
const { getAllData } = require("../controllers/movie-controller");

const router = Router();

router.get("/", getAllData);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
