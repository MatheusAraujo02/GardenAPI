const express = require("express");

const app = express();

// const porta = process.env.PORT || 3306;
const porta = 3306;

app.listen(porta, () => {
   console.log(`Servidor iniciado na porta ${porta}`);
});
]