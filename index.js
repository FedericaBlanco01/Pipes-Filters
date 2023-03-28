const express = require('express')
const app = express()
const { descontarIVA, calcularGanancia } = require('./Filters')
const { Pipeline } = require('./Pipeline')


app.get('/ganancias', (req, res) => {
    const input = req.query.input;
    const processedInput = input.split("/");

    let pipeline = new Pipeline();

    pipeline.use(descontarIVA);
    pipeline.use(calcularGanancia);

    const data = pipeline.run(processedInput)
    res.send({result:data})
})

app.listen(3000);
