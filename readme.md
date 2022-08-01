# ¡Gracias por usar FundBecasMX! :)

Esta beca está pensada para ayudar a estudiantes mexicanos en la busqueda de becas, tanto a nivel nacional como internacional, a continuación se dará una breve explicación para hacer uso de esta API.

## * [ ] ***Para consultar la API puedes accecer a:***

**https://lit-island-68464.herokuapp.com
 	/international** (para acceder a las becas internacionales)
	**/national** (para acceder a las becas nacionales)

    **/id** (para consultar por id de beca)

Ex. https://lit-island-68464.herokuapp.com/international/2 => Beca Turkiye Burslari

## * [ ] Para obtener el código de la API:

Requiere de: node.js, heroku(opcional) y git(opcional).

1. Obtener los archivos: Puedes descargarlos directamente en el botón **CODE** como un archivo zip (7-zip es un software libre que puede ayudar para descomprimirlo). También puedes clonarlo desde la terminal con git clone.
2. Abrir los archivos en un editor de código.
3. Abrir la terminal dentro la carpeta **/FundBecasMX API**
4. Escribir **"npm i"** en la terminal para instalar las dependencias especificadas en el package.json, una vez finalizado este paso se habra creado un package-lock.json y una carpeta node_modules.

   ```term
   npm i
   ```
5. Levantar el servidor (localhost:3000) con ayuda de los scripts definidos:

   ```term
   * npm start : Levanta el servidor una vez
   * npm run dev : Levanta el servidor con nodemon, por lo que se actualiza con cada cambio (Recomendado)
   * npm run server: Levanta json server con el archivo db.json
   ```

Para realizar pruebas a la API de forma sencilla se usa **Postman**, por lo que dentro de la carpeta de **assets** hay archivos json que puedes importar dentro de la aplicación:

* Una colection que contiene para cada endpoint: 3 get (getAll, getAll query params, getOne), post, patch, put y delete.
* Un environment con localhost.
* Un environment con heroku**

### ** Hacer un deployment en Heroku es opcional, para ello es necesario seguir los siguientes pasos:

1. Crear una cuenta e instalar Heroku.
2. En la terminal hacer login con "heroku login"
3. Poner los siguientes comandos dentro de la terminal en /FundBecasMX API

   ```term
   git init
   git add .
   git commit -m "My first commit"
   ```
4. Crear app de Heroku desde terminal

   ```term
   heroku create
   ```
5. Probar el despliegue

   ```term
   heroku local web
   ```
6. Hacer un push a heroku

   ```term
   git push heroku main
   ```
