# Citas Miguel App

Esta es una aplicación de citas diseñada para ayudar a gestionar citas de manera eficiente. La aplicación permite a los usuarios crear, obtener y eliminar citas.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
citas-miguel-app
├── src
│   ├── app.ts                  # Punto de entrada de la aplicación
│   ├── controllers
│   │   └── citasController.ts   # Controlador para manejar las operaciones de citas
│   ├── models
│   │   └── cita.ts              # Modelo que define la estructura de una cita
│   ├── routes
│   │   └── citasRoutes.ts       # Rutas para las operaciones de citas
│   ├── services
│   │   └── citasService.ts      # Lógica de negocio para gestionar citas
│   └── types
│       └── index.ts             # Definición de tipos utilizados en la aplicación
├── package.json                 # Configuración de npm y dependencias
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Documentación del proyecto
```

## Funcionalidades

- **Crear Cita**: Permite a los usuarios crear nuevas citas.
- **Obtener Citas**: Permite a los usuarios ver todas las citas existentes.
- **Eliminar Cita**: Permite a los usuarios eliminar citas específicas.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd citas-miguel-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.