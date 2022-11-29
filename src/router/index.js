import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', name: 'Autocred', component: ()=> import('../views/Autocred.vue'),
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/login', name: 'Login', component: ()=> import('../views/login.vue') },
                { path: '/compradores', name: 'Compradores', component: ()=> import('../views/compradores.vue') },
                { path: '/encuesta', name: 'Encuesta', component: ()=> import('../views/encuesta.vue') },
                { path: '/calendario', name: 'Calendario', component: ()=> import('../views/CalendarioVanMovil.vue') },
                { path: '/nosotros', name: 'Nosotros', component:()=> import('../views/nosotros.vue') },
                {
                    path: '/preguntas-frecuentes',
                    name: 'Preguntas Frecuentes',
                    component: ()=> import('../views/preguntas-frecuentes.vue')
                },
                {
                    path: '/registro', name: 'Registro',
                    component: ()=> import('../views/registro.vue'),
                    props: (route) => ({
                        ...route.params
                    })
                },
                { path: '/servicios', name: 'Servicios', component:()=> import('../views/servicios.vue'), redirect:"/servicios/financiamiento",
                children:[
                    { path:'/servicios/tag', name:'serviciotag', component: ()=> import('../views/ServicioTag.vue')},
                    { path:'/servicios/transferencias', name:'serviciotransferencias', component: ()=> import('../views/ServicioTransferencia.vue')},
                    { path:'/servicios/financiamiento', name:'serviciofinanciamiento', component: ()=> import('../views/ServicioFinanciamiento.vue')},
                    { path:'/servicios/seguro', name:'servicioseguro', component:()=> import('../views/ServicioSeguro.vue')},
                ]
            },
                { path: '/vendedores', name: 'Vendedores', component: ()=> import('../views/vendedores.vue') },
                { path: '/blog', name: 'Blog', component:()=> import('../views/Blog.vue') },
                { path: '/blog/:id', name: 'Articulo', component: ()=> import('../views/article.vue') },
                { path: '/terminos-y-condiciones', name: 'Terms', component:()=> import('../views/Terms.vue') },

            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=> import('../views/NotFound.vue') },
        {
            path: '/yapo', name: 'Yapo', component: ()=> import('../views/Yapo/Yapo.vue'),
            children: [
                { path: '/yapo/financiamiento', name: 'Financiamiento-Yapo', component: ()=> import('../views/Yapo/Financiamiento.vue') },
            ]
        },
        {
            path: '/compara-online', name: 'comprara-online', component: ()=> import('../views/compara-online/ComparaOnline.vue'),
            children: [
                { path: '/compara-online/financiamiento', name: 'Financiamiento-comprara-online', component: ()=> import('../views/compara-online/ComparaFinanciamiento.vue') },
            ]
        },
        {
            path: '/amotor', name: 'amotor', component: ()=> import('../views/amotor/Amotor.vue'),
            children: [
                { path: '/amotor/financiamiento', name: 'Amotor', component: ()=> import('../views/amotor/AmotorFinanciamiento.vue')},
            ]
        },

        {
            path: '/autocred-financiamiento', name: 'autocred-financiamiento', component: ()=> import('../views/autocred/AutocredFinanciamiento.vue'),
            children: [
                { path: '/autocred-financiamiento/financiamiento', name: 'Autocred-financiamiento', component: ()=> import('../views/autocred/AutocredView.vue') },
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