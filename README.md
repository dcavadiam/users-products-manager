# Users Products Manager
Este proyecto tiene como objetivo crear una interfaz web minimalista y moderna, utilizando componentes reutilizables, iconos para mejorar la experiencia del usuario y efectos para añadir dinamismo a la UI. La arquitectura del proyecto está basada en componentes modulares que permiten una fácil expansión y mantenimiento.

## Estructura del Proyecto
La estructura de carpetas y archivos sigue una organización clara y modular. Cada parte de la UI que se puede reutilizar ha sido extraída en componentes independientes para facilitar su mantenimiento y escalabilidad.

## Estructura de Carpetas:

- app: Contiene la estructura de la aplicación, incluyendo la página principal, el layout, los componentes de la barra de navegación y el estilo global.
- components: Contiene componentes reutilizables como botones, formularios, cards, etc.
- containers: Contiene secciones o contenedores para organizar y mantener la lógica de la aplicación.
- context: Contiene contextos que se utilizan para compartir datos y estados entre componentes.
- mocks: Contiene datos de ejemplo para pruebas y desarrollo.
- schemas: Contiene esquemas de validación de datos.

## Decisiones de Diseño
- Minimalismo: El diseño de la aplicación sigue una filosofía minimalista, buscando una interfaz limpia y fácil de usar. Se ha evitado la sobrecarga visual para mejorar la experiencia del usuario, eliminando elementos innecesarios y dejando espacio para que el contenido y las acciones sean lo más destacado.

- Componentes Modernos: Se incorporaron componentes modernos como tarjetas (cards) para organizar la información de manera más eficiente y atractiva. Las tarjetas ofrecen una forma clara y dinámica de presentar contenido relacionado o agrupado.

- Iconos: Los iconos fueron utilizados para hacer que la interfaz sea más intuitiva. Ayudan a los usuarios a comprender rápidamente las funciones de los botones, campos de entrada y otros elementos interactivos sin necesidad de leer texto adicional. Se ha utilizado una librería de iconos moderna para asegurar que se mantengan actualizados y sean consistentes.


## Tecnologías Utilizadas

- Next.js: Es una plataforma de desarrollo web moderna y rápida que se enfoca en la creación de aplicaciones web de alto rendimiento. Ofrece una estructura de archivos estándarizada y una gran cantidad de funciones y herramientas para facilitar el desarrollo.

- Tailwind CSS: Es una biblioteca de CSS que proporciona una estructura de clases flexible y fácil de usar. Proporciona una gran cantidad de clases predefinidas para estilizar elementos como bordes, texto, imágenes, etc. Además, ofrece una gran cantidad de funciones de utilidad para crear diseños personalizados.

- React: Es una biblioteca de JavaScript para construir interfaces de usuario interactivas. Proporciona una gran cantidad de componentes y patrones de diseño para crear aplicaciones web de alto rendimiento.

- Zod: Es una biblioteca de validación de datos que se utiliza para definir esquemas de validación de datos. Permite definir reglas de validación de datos de manera clara y concisa, lo que facilita la creación de formularios de alta calidad.

- Vercel: Es una plataforma de hosting y despliegue de aplicaciones web que se enfoca en la creación de aplicacione s de alto rendimiento. Proporciona un entorno de desarrollo y producción seguro y escalable, así como herramientas de optimización y monitorización.

## Como Usar

### Instalación

1. Clonar el repositorio:

```
git clone https://github.com/dcavadiam/users-products-manager.git
```

2. Instalar las dependencias:

```
npm install
```

3. Iniciar el servidor de desarrollo:

```
npm run dev
```

4. Abrir el navegador y acceder a http://localhost:3000

### Desarrollo

Para realizar cambios en el código, siga estos pasos:

1. Abrir el archivo correspondiente en la carpeta src.
2. Modificar el código.
3. Guardar el archivo.
4. Ver los cambios en el navegador. La página se actualiza automáticamente. 

### Despliegue

Este proyecto está desplegado en Vercel en el siguiente enlace: https://users-products-manager.vercel.app/
