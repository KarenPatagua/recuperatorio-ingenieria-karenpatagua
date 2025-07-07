# Calculadora de Gastos

Aplicación web básica para registrar, visualizar y eliminar gastos, desarrollada con **Node.js**, **Express** y **HTML/CSS**.

---

## Características

- Registrar nuevos gastos con concepto, monto y categoría.
- Visualizar la lista de gastos registrados.
- Ver el total acumulado.
- Eliminar gastos específicos.
- Persistencia de datos en archivo `gastos.json`.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- HTML y CSS
- LocalStorage (opcional en versión cliente)
- File System (`fs`) de Node.js

---

##  Estructura del proyecto

recuperatorio-ingenieria-karenpatagua
├── data/
│ └── gastos.json
├── node_modules/
├── src/
│ └── app.js
├── views/
│ ├── form.html
│ └── (opcional: ver-gastos.html)
├── .gitignore
├── Dockerfile
├── package.json
└── README.md



# Luego sale una URL http://localhost:3000
- concepto : cena de amigos
- Monto : 45
- categoria : Comida

# Click guardar datos
# ver gastos y le saldra los gastos 

# Docker (opcional)
-Puedes correrlo también con Docker:

bash
Copiar
Editar
# docker build -t calculadora-gastos .
# docker run -p 3000:3000 calculadora-gastos

