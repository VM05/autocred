import { createRouter, createWebHistory } from "vue-router"
import {defineAsyncComponent} from 'vue'

import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', name: 'Autocred', component: defineAsyncComponent(()=> import('../views/Autocred.vue')),
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/login', name: 'Login', component: defineAsyncComponent(()=> import('../views/login.vue')) },
                { path: '/compradores', name: 'Compradores', component:defineAsyncComponent( ()=> import('../views/compradores.vue') )},
                { path: '/encuesta', name: 'Encuesta', component:defineAsyncComponent( ()=> import('../views/encuesta.vue') )},
                { path: '/calendario', name: 'Calendario', component:defineAsyncComponent( ()=> import('../views/CalendarioVanMovil.vue') )},
                { path: '/nosotros', name: 'Nosotros', component:defineAsyncComponent(()=> import('../views/nosotros.vue')) },
                {
                    path: '/preguntas-frecuentes',
                    name: 'Preguntas Frecuentes',
                    component:defineAsyncComponent( ()=> import('../views/preguntas-frecuentes.vue'))
                },
                {
                    path: '/registro', name: 'Registro',
                    component: defineAsyncComponent(()=> import('../views/registro.vue')),
                    props: (route) => ({
                        ...route.params
                    })
                },
                { path: '/servicios', name: 'Servicios', component:defineAsyncComponent(()=> import('../views/servicios.vue')), redirect:"/servicios/financiamiento",
                children:[
                    { path:'/servicios/tag', name:'serviciotag', component:defineAsyncComponent( ()=> import('../views/ServicioTag.vue'))},
                    { path:'/servicios/transferencias', name:'serviciotransferencias', component:defineAsyncComponent( ()=> import('../views/ServicioTransferencia.vue'))},
                    { path:'/servicios/financiamiento', name:'serviciofinanciamiento', component:defineAsyncComponent( ()=> import('../views/ServicioFinanciamiento.vue'))},
                    { path:'/servicios/seguro', name:'servicioseguro', component:()=> import('../views/ServicioSeguro.vue')},
                ]
            },
                { path: '/vendedores', name: 'Vendedores', component:defineAsyncComponent( ()=> import('../views/vendedores.vue')) },
                { path: '/blog', name: 'Blog', component:()=> import('../views/Blog.vue') },
                { path: '/blog/:id', name: 'Articulo', component:defineAsyncComponent( ()=> import('../views/article.vue')) },
                { path: '/terminos-y-condiciones', name: 'Terms', component:defineAsyncComponent(()=> import('../views/Terms.vue')) },

            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component:defineAsyncComponent( ()=> import('../views/NotFound.vue')) },
        {
            path: '/yapo', name: 'Yapo', component:defineAsyncComponent( ()=> import('../views/Yapo/Yapo.vue')),
            children: [
                { path: '/yapo/financiamiento', name: 'Financiamiento-Yapo', component:defineAsyncComponent( ()=> import('../views/Yapo/Financiamiento.vue')) },
            ]
        },
        {
            path: '/compara-online', name: 'comprara-online', component:defineAsyncComponent( ()=> import('../views/compara-online/ComparaOnline.vue')),
            children: [
                { path: '/compara-online/financiamiento', name: 'Financiamiento-comprara-online', component:defineAsyncComponent( ()=> import('../views/compara-online/ComparaFinanciamiento.vue') )},
            ]
        },
        {
            path: '/amotor', name: 'amotor', component:defineAsyncComponent( ()=> import('../views/amotor/Amotor.vue')),
            children: [
                { path: '/amotor/financiamiento', name: 'Amotor', component:defineAsyncComponent( ()=> import('../views/amotor/AmotorFinanciamiento.vue'))},
            ]
        },

        {
            path: '/autocred-financiamiento', name: 'autocred-financiamiento', component:defineAsyncComponent( ()=> import('../views/autocred/AutocredFinanciamiento.vue')),
            children: [
                { path: '/autocred-financiamiento/financiamiento', name: 'Autocred-financiamiento', component:defineAsyncComponent( ()=> import('../views/autocred/AutocredView.vue')) },
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