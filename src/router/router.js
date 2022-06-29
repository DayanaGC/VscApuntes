
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
       path: '/',
       component: () => import (/*wekpackChunkName: "List Page"*/'../modules/pokemon/pages/PokemonPage')
    },
    { path: '/about', 
      component: () => import (/*wekpackChunkName: "About Page"*/'../modules/pokemon/pages/AboutPage')
    },
    { path: '/id', 
      component: () => import (/*wekpackChunkName: "Pokemon Page"*/'../modules/pokemon/pages/PokemonPage')
    },
    { path: '/:pathMatch(.*)*',
      component: () => import (/*wekpackChunkName: "NoPageFound"*/'../modules/shared/pages/NoPageFound')
    },

  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })


  export default router 