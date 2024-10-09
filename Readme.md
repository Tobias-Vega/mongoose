# Sistema de Ventas para Comercio de Suministros de Limpieza
Crear un modelo de Base de Datos para almacenar los datos de los empleados, registar las ventas individuales de los mismos y gestionar la autenticación de sus credenciales para acceder a la aplicación.

## Dependencias Utilizadas

- **Mongoose**: Librería para la modelación de datos con MongoDB.

## Instalación

npm install

## Uso de esquemas referenciados
Para este proyecto se utlizaron esquemas referenciados por las siguientes razones:
1. Modularización: Cada uno de los esquemas se encuentran en diferentes archivos para una mejor organización y reducción de tamaño del código
2. Escalabilidad: permiten manejar de mejor manera grandes volumenes de datos.
3. Eficiencia a la hora de actualizar: Si se desea modificar datos de algunos de los campos, no será necesario hacerlo a los esquemas donde se realizan la correspondiente referencia.