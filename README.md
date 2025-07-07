
#  Calculadora de Gastos

Una aplicación web simple para **registrar, visualizar y eliminar gastos** personales, desarrollada con Node.js, Express y HTML/CSS. Guarda los datos en un archivo JSON localmente.

---

##  Vista previa



## Características

- Registrar nuevos gastos (concepto, monto y categoría)
- Ver listado de gastos con su categoría y monto
- Calcular el total acumulado automáticamente
- Eliminar gastos individualmente
- Datos persistentes en archivo `gastos.json`

---

##  Tecnologías utilizadas

- Node.js
- Express.js
- HTML5 + CSS3
- File System (`fs`)
- (Opcional: `localStorage` para navegador)

---

## Estructura del proyecto

```
calculadora-gastos/
├── data/
│   └── gastos.json           
├── node_modules/             
├── src/
│   └── app.js               
├── views/
│   ├── form.html              
│   └── ver-gastos.html        
├── .gitignore
├── Dockerfile
├── package.json
└── README.md
```

---

## Cómo usar

1. Clona este repositorio o descarga los archivos.

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
npm start
```

4. Abre tu navegador en:  
[http://localhost:3000]

---

## 🐳 Docker (opcional)

Si deseas ejecutarlo en Docker:

1. Construye la imagen:

```bash
docker build -t calculadora-gastos .
```

2. Ejecuta el contenedor:

```bash
docker run -p 3000:3000 calculadora-gastos
```

##  Notas

- Asegúrate que el puerto `3000` no esté ocupado.
- El archivo `gastos.json` se crea automáticamente si no existe.
- Puedes mejorar esta app agregando autenticación, exportación de datos, base de datos externa, etc.

## Karen Patagua
