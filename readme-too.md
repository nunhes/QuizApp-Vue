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
``App.vue``; e o arquivo ``index.js`` que hase conectar co arquivo ``index.html`` unha vez compilado para produción. Tamén neste cartafol atoparás o subcartafol ``components`` cos distintos arquivos ``.vue`` que representan cada unha das compoñentes que se empregarán na aplicación - interface de usuario-.


## Estrutura do cartafol ``src``
Se trata dunha estrutura bastante sinxela.

```
/data
    quizes.json      // preguntas
/router
    index.js         // xestiona as rutas
/components
    Card.vue         // presenta as opcións ou asignaturas
    QuizHeader.vue   // vixia o avance
    Question.vue     // presenta as distintas preguntas
    Result.vue       // mostra os resultados
    Footer.vue
    Header.vue
App.vue
main.js
```


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

O cartafol ``data`` conten un arquivo ``quizes.json`` que contén as preguntas: distintos obxectos ou materias que a súa vez conteñen as preguntas, incluido aquela que é a resposta acertada sinalada de xeito que sexa útil para o funcionamento da aplicación.

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
Para darlle algo animación se engade a dependencia
[``gsap``](https://gsap.com/)
e  tamén ``vue-zoomer`` que permite facer zoom nas imaxes no :hover
https://www.npmjs.com/package/vue-zoomer

``pnpm install vue-zoomer``


