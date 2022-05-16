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
        { path: '/registro', name: 'Registro', component: registro },
        { path: '/servicios', name: 'Servicios', component: servicios },
        { path: '/vendedores', name: 'Vendedores', component: vendedores },
        // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
})

export default router