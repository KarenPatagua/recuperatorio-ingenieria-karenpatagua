const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const gastosPath = path.join(__dirname, 'data', 'gastos.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    fs.readFile(gastosPath, 'utf8', (err, data) => {
        const gastos = data ? JSON.parse(data) : [];
        let total = gastos.reduce((acc, g) => acc + parseFloat(g.monto), 0);
        let html = `<h1>Gastos</h1><ul>`;
        gastos.forEach((g, i) => {
            html += `<li>${g.concepto} - ${g.categoria} - $${g.monto} <a href="/delete/${i}">Eliminar</a></li>`;
        });
        html += `</ul><p><strong>Total:</strong> $${total}</p><a href="/add">Agregar gasto</a>`;
        res.send(html);
    });
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/add', (req, res) => {
    const nuevoGasto = {
        concepto: req.body.concepto,
        monto: parseFloat(req.body.monto),
        categoria: req.body.categoria
    };

    if (!nuevoGasto.concepto || isNaN(nuevoGasto.monto) || nuevoGasto.monto <= 0) {
        return res.send('Datos inválidos. <a href="/add">Volver</a>');
    }

    fs.readFile(gastosPath, 'utf8', (err, data) => {
        const gastos = data ? JSON.parse(data) : [];
        gastos.push(nuevoGasto);
        fs.writeFile(gastosPath, JSON.stringify(gastos), err => {
            res.redirect('/');
        });
    });
});

app.get('/delete/:id', (req, res) => {
    fs.readFile(gastosPath, 'utf8', (err, data) => {
        let gastos = JSON.parse(data);
        gastos.splice(req.params.id, 1);
        fs.writeFile(gastosPath, JSON.stringify(gastos), err => {
            res.redirect('/');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});
