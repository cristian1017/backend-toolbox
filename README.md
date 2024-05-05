# API de Reformato de Información

## Descripción del Proyecto
Este proyecto es un API REST desarrollado en Node.js utilizando Express.js. Su propósito es consumir información de un API externa, procesarla y exponerla de manera reformateada. La fuente de datos es un servicio externo documentado en Swagger, donde se obtienen archivos CSV con datos estructurados.

## Requisitos
- Node.js v14
- npm (Node Package Manager)
- Docker (para contenerización)

## librerias
- express
- axios
- standard
- cors 
- mocha
- chai
- nodemon

## Instalación
Para instalar el proyecto y sus dependencias, sigue estos pasos:
1. Clona el repositorio:

```
git clone [URL_DEL_REPOSITORIO] backend
cd backend
```
2. Instala las dependencias del proyecto:
```
npm install
```

## Uso
Para iniciar el servidor del API, ejecuta:
```
npm start
```
Esto iniciará el servidor en http://localhost:9000. Para consumir el API, utiliza el siguiente comando curl:

```
curl -v -X GET "http://localhost:9000/files/data" -H "accept: application/json"
```
y para ejecutar lint de StandarJs `npm run lint`


## Pruebas
Para ejecutar las pruebas automatizadas, usa:
```
npm test
```
Las pruebas están desarrolladas con Mocha y Chai para validar la funcionalidad del API.



## Nota sobre Docker Compose
Para integrar múltiples servicios, como la API y el frontend, se recomienda utilizar Docker Compose. Una vez que tengas este repositorio y el del frontend clonados, crea un archivo docker-compose.yml en la raíz, junto a los directorios de la API y el frontend. Aquí un ejemplo básico de configuración:

```
proyecto/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   │   └── (archivos de código fuente del backend)
│   └── node_modules/
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   │   └── (archivos de código fuente del frontend)
│   └── node_modules/
│
└── docker-compose.yml

```
Una vez creado el archivo `docker-compose.yml`, agregamos lo siguiente.
```
version: "3.8"
services:
  backend:
    build: ./backend
    ports:
      - "9000:9000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development

  frontend:
    build: ./frontend
    ports:
      - "8080:8080"
    volumes:
      - ./frontend/src:/app/src
      - /app/node_modules
    environment:
      - NODE_ENV=development
    depends_on:
      - backend
```

una vez realizes este paso, asegurate que estes corriendo Docker, y ejecuta el siguiente comando:
```
docker-compose up
```

Esto creara los contenedores correspondientes del `API` y `FRONT`, despues podras correr los enpoints en los puertos expuestos
- API 
  - http://localhost:9000/files/data
  - http://localhost:9000/files/data?fileName={name_file}
  - http://localhost:9000/files/list
  
- FRONT
  - http://localhost:8080/


Este archivo configura tanto el backend como el frontend para trabajar en conjunto, facilitando el desarrollo y la puesta en marcha de los servicios.

