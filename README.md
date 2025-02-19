# Juego de Buscaminas Personalizado con Next.js

¡Bienvenido al Juego de Buscaminas Personalizado! Este proyecto es una reinterpretación interactiva del clásico juego de buscaminas, construido con las últimas tecnologías web: **Next.js**, **React** y **Tailwind CSS**.  Además, para mejorar la experiencia del usuario con notificaciones y alertas visuales, se ha integrado la librería **SweetAlert2**.

## Descripción del Proyecto

Este juego ofrece una experiencia de buscaminas única y personalizable.  A diferencia del buscaminas tradicional, en esta versión, el objetivo no es solo evitar las "minas", sino también **sumar los valores numéricos** que se revelan al hacer clic en las casillas.

Las principales características del juego son:

*   **Matriz de Tamaño Personalizable:** El usuario puede definir el tamaño de la matriz del juego (N x N) a través de un input interactivo.
*   **Generación Dinámica de Valores:** Cada casilla de la matriz se genera con un valor numérico aleatorio entre 0 y N (inclusive).  Existe una probabilidad del 40% de que el valor asignado a una casilla sea 0.
*   **Revelación Interactiva:** Inicialmente, las casillas se muestran en blanco. El valor de cada casilla se revela únicamente cuando el usuario hace clic en ella.
*   **Suma de Resultados:** Un botón de "Resultado" muestra la suma acumulada de los valores de todas las casillas reveladas hasta el momento (excluyendo las casillas con valor 0).
*   **Alertas y Notificaciones con SweetAlert2:** Se ha integrado SweetAlert2 para proporcionar alertas visuales atractivas y mejorar la interacción del usuario con el juego.

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías y librerías:

*   **[Next.js](https://nextjs.org/):** Framework de React para la construcción de aplicaciones web del lado del servidor y del cliente, optimizado para rendimiento y experiencia de desarrollo.
*   **[React](https://reactjs.org/):** Librería de JavaScript para construir interfaces de usuario interactivas y basadas en componentes.
*   **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS "utility-first" para un diseño rápido y responsivo con clases predefinidas.
*   **[SweetAlert2](https://sweetalert2.github.io/):** Librería JavaScript para crear alertas modales hermosas, responsivas y personalizables.

## Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para configurar y ejecutar el juego en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd [NOMBRE_DEL_REPOSITORIO]
    ```

2.  **Instalar las dependencias:**
    ```bash
    npm install  # o yarn install o pnpm install (según tu gestor de paquetes preferido)
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev  # o yarn dev o pnpm dev
    ```

4.  **Abrir en el navegador:**
    Abre tu navegador web y visita [http://localhost:3000](http://localhost:3000) para ver el juego en funcionamiento.

## Cómo Jugar

1.  **Ingresar el Tamaño de la Matriz:** En el input introduce un número entero positivo. Este número determinará las dimensiones de la matriz del juego (N x N).
2.  **Generar Matriz:** Haz clic en el botón con el icono ">>" para confirmar la dimensión de la matriz. Se generará una matriz de botones vacíos.
3.  **Revelar Casillas:** Haz clic en las casillas individuales de la matriz para revelar su valor numérico.
4.  **Sumar Puntos:**  Observa el "Resultado" que se actualiza automáticamente con la suma de los valores de las casillas que has revelado (los valores 0 no se suman).
5.  **Continúa Revelando:** Sigue haciendo clic en diferentes casillas para explorar la matriz y aumentar tu puntuación.
6. **En caso de Ganar o Perder:** Se mostrará un modal con la información de tu juego.

