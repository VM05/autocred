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
import NotFound from '../views/NotFound.vue'
import Autocred from '../views/Autocred.vue'
import Yapo from '../views/Yapo/Yapo.vue'
import Financiamiento from '../views/Yapo/Financiamiento.vue'
import Terms from '../views/Terms.vue'
import ComparaOnline from '../views/compara-online/ComparaOnline.vue'
import ComparaFinanciamiento from '../views/compara-online/ComparaFinanciamiento.vue'
import calendarioVanMovil from '../views/CalendarioVanMovil.vue'
import Amotor from '../views/amotor/Amotor.vue'
import AmotorFinanciamiento from '../views/amotor/AmotorFinanciamiento.vue'
import AutocredFinanciamiento from '../views/autocred/AutocredFinanciamiento.vue'
import AutocredView from '../views/autocred/AutocredView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', name: 'Autocred', component: Autocred,
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/login', name: 'Login', component: login },
                { path: '/compradores', name: 'Compradores', component: compradores },
                { path: '/encuesta', name: 'Encuesta', component: encuesta },
                { path: '/calendario', name: 'Calendario', component: calendarioVanMovil },
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
                { path: '/servicios', name: 'Servicios', component: servicios },
                { path: '/vendedores', name: 'Vendedores', component: vendedores },
                { path: '/blog', name: 'Blog', component: Blog },
                { path: '/blog/:id', name: 'Articulo', component: article },
                { path: '/terminos-y-condiciones', name: 'Terms', component: Terms },

            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        {
            path: '/yapo', name: 'Yapo', component: Yapo,
            children: [
                { path: '/yapo/financiamiento', name: 'Financiamiento-Yapo', component: Financiamiento },
            ]
        },
        {
            path: '/compara-online', name: 'comprara-online', component: ComparaOnline,
            children: [
                { path: '/compara-online/financiamiento', name: 'Financiamiento-comprara-online', component: ComparaFinanciamiento },
            ]
        },
        {
            path: '/amotor', name: 'amotor', component: Amotor,
            children: [
                { path: '/amotor/financiamiento', name: 'Amotor', component: AmotorFinanciamiento },
            ]
        },

        {
            path: '/autocred-financiamiento', name: 'autocred-financiamiento', component: AutocredView,
            children: [
                { path: '/autocred-financiamiento/financiamiento', name: 'Autocred-financiamiento', component: AutocredFinanciamiento },
            ]
        },

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