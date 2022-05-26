import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import compradores from '../views/compradores.vue'
import encuesta from '../views/encuesta.vue'
import login from '../views/login.vue'
import nosotros from '../views/nosotros.vue'
import FAQ from '../views/preguntas-frecuentes.vue'
import registro from '../views/registro.vue'
import servicios from '../views/servicios.vue'
import vendedores from '../views/vendedores.vue'
import Blog from '../views/Blog.vue'
import article from '../views/article.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: login },
        { path: '/compradores', name: 'Compradores', component: compradores },
        { path: '/encuesta', name: 'Encuesta', component: encuesta },
        { path: '/nosotros', name: 'Nosotros', component: nosotros },
        {
            path: '/preguntas-frecuentes',
            name: 'Preguntas Frecuentes',
            component: FAQ
        },
        {
            path: '/registro', name: 'Registro',
            component: registro,
            props: (route) => ({
                ...route.params
            })
        },
        { path: '/servicios', name: 'Servicios', component: servicios, props: (route) => ({ ...route.params }) },
        { path: '/vendedores', name: 'Vendedores', component: vendedores },
        { path: '/blog', name: 'Blog', component: Blog },
        { path: '/blog/:id', name: 'Articulo', component: article },


        // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 100,
                behavior: 'smooth',
            }
        } else {
            return { top: 0 }
        }
    }
})

export default router