# Cuestionario con Vue

Vue (pronunciado /vjuː/, como view) é un framework progresivo para construir interfaces de usuario. 

A libraría central está enfocada só á capa de visualización. É fácil de utilizar e integrar con outras librarías e tamén con proxectos xa existentes. 

Vue é tamén perfectamente capaz de impulsar sofisticadas SPA - *Single-Page Applications*- cando se utiliza en combinación con [ferramentas modernas](https://es.vuejs.org/v2/guide/single-file-components) e [librarías de apoio](https://github.com/vuejs/awesome-vue#components--libraries).

Con Vue se poden crear potentes aplicacións interactivas.

## Cuestionario interactivo
O obxectivo é crear unha aplicación de quiz interactiva. Trátase dunha aplicación web na que os usuarios poden responder a preguntas e recibir puntuacións baseadas nas súas respostas. 

Normalmente, os proxectos con Vue.js están compostos por varios arquivos e carpetas importantes:


- O arquivo ``package.json``, que contén información sobre as dependencias do proxecto e comandos para executar, probar ou construír a aplicación.
- A carpeta ``src/``, que contén o código fonte principal da aplicación. Aquí atoparás o controlador central da aplicación - normalmente 
``App.vue``; ee o arquivo ``index.js`` que hase conectar con teun arquivo ``index.html`` unha vez compilado para produción. TAmén neste cartafol atoparás arquivos o subcartafol ``components`` cos distintos arquivos ``.vue`` que representan cada unha das compoñentes que se empregarán na aplicación, que conteñen os compoñentes da interface de usuario, así como outros arquivos JavaScript, CSS, e recursos necesarios para a aplicación. Estes arquivos describen a aparencia e o comportamento da interfaz de usuario. *Podes ver como os diferentes elementos se relacionan entre si e como se xestiona a lóxica da aplicación.*

```bash
$ npm create vue@latest
Need to install the following packages:
create-vue@3.9.1
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue-quiz
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes

Scaffolding project in C:\laragon\www\vue-quiz...

Done. Now run:

  cd vue-quiz
  npm install
  npm run format
  npm run dev
```

## Crear interface de usuario 
Cada compoñente Vue consta de tres seccións: 
- ``<template>`` que contén o código HTML do compoñente 
- ``<script>`` que contén a lóxica de negocio 
- ``<style>`` que contén código CSS para o estilo do compoñente 

Para a esta aplicación usaremos catro compoñentes: 
- Unha compoñente onde se amosarán os avances no cuestionario: `QuizHeader.vue`
- Unha compoñente de presentación/selección: `Card.vue`
- Unha compoñente pregunta: `Question.vue`
- E unha compoñente para amosar o resultado final da proba: `Result.vue`

Ademais empregaremos dous arquivos para as vistas que aloxaremos en `src/views`:
- Un para amosar a pantalla principal onde se poderá seleccionar entre distintas temáticas: `QuizesView.vue`
- Outro pa amosar *a pregunta* seleccionada: `QuizView.vue`

Dado que se premite elixir entre máis dunha posibilidade - 3 - precisaremos establecer un mecanismo de enrotamento que dirixa ao usuario aos distintos apartados da páxina. 
Aloxaremos o enrutador en `src/router`:

```js
// src/router/index.js
// importar a libraría vue-router
import {createRouter, createWebHistory} from 'vue-router'

// importar as compoñentes requiridas
import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"

// resolver as rutas da aplicación
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        }
    ]
})

export default router
```

## Zoom image no :hover
https://www.npmjs.com/package/vue-zoomer

``pnpm install vue-zoomer``


## Estrutura do cartafol
Será unha estrutura bastante sinxela.

```
/components
    CustomModal.vue
    Quiz.vue
App.vue
main.js
```

``App.vue`` é o arquivo principal onde se reunen tódolos compoñentes