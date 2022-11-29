import { createRouter, createWebHistory } from "vue-router"
import {defineAsyncComponent} from 'vue'

import Home from '../views/Home.vue'

const autocred = ()=> import('../views/Autocred.vue')
const login = ()=> import('../views/login.vue')
const Compradores = ()=> import('../views/compradores.vue')
const encuesta = ()=> import('../views/encuesta.vue') 
const servicioTag = ()=> import('../views/ServicioTag.vue')
const calendario = ()=> import('../views/CalendarioVanMovil.vue')
const nosotros = ()=> import('../views/nosotros.vue')
const faq = ()=> import('../views/preguntas-frecuentes.vue')
const registro = ()=> import('../views/registro.vue')
const servicios = ()=> import('../views/servicios.vue')
const transferencias = ()=> import('../views/ServicioTransferencia.vue')
const financiamiento = ()=> import('../views/ServicioFinanciamiento.vue')
const seguro = ()=> import('../views/ServicioSeguro.vue')
const vendedores = ()=> import('../views/vendedores.vue')
const blog = ()=> import('../views/Blog.vue')
const articulo = ()=> import('../views/article.vue')
const termino = ()=> import('../views/Terms.vue')
const notFound = ()=> import('../views/NotFound.vue')
const yapo = ()=> import('../views/Yapo/Yapo.vue')
const yapoFinanciamiento = ()=> import('../views/Yapo/Financiamiento.vue')
const comparaOnline = ()=> import('../views/compara-online/ComparaOnline.vue')
const comparaFinanciamiento = ()=> import('../views/compara-online/ComparaFinanciamiento.vue')
const amotor = ()=> import('../views/amotor/Amotor.vue')
const amotorFinanciamiento = ()=> import('../views/amotor/AmotorFinanciamiento.vue')
const autocredFinanciamiento = ()=> import('../views/autocred/AutocredFinanciamiento.vue')
const autocredFinanciamientoView =  ()=> import('../views/autocred/AutocredView.vue')

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', name: 'Autocred', component: autocred,
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/login', name: 'Login', component: login },
                { path: '/compradores', name: 'Compradores', component: Compradores},
                { path: '/encuesta', name: 'Encuesta', component: encuesta },
                { path: '/calendario', name: 'Calendario', component: calendario},
                { path: '/nosotros', name: 'Nosotros', component: nosotros },
                {
                    path: '/preguntas-frecuentes',
                    name: 'Preguntas Frecuentes',
                    component: faq
                },
                {
                    path: '/registro', name: 'Registro',
                    component: registro,
                    props: (route) => ({
                        ...route.params
                    })
                },
                { path: '/servicios', name: 'Servicios', component: servicios, redirect:"/servicios/financiamiento",
                children:[
                    { path:'/servicios/tag', name:'serviciotag', component: servicioTag},
                    { path:'/servicios/transferencias', name:'serviciotransferencias', component: transferencias},
                    { path:'/servicios/financiamiento', name:'serviciofinanciamiento', component: financiamiento},
                    { path:'/servicios/seguro', name:'servicioseguro', component: seguro},
                ]
            },
                { path: '/vendedores', name: 'Vendedores', component: vendedores },
                { path: '/blog', name: 'Blog', component: blog },
                { path: '/blog/:id', name: 'Articulo', component: articulo },
                { path: '/terminos-y-condiciones', name: 'Terms', component: termino },

            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFound },
        {
            path: '/yapo', name: 'Yapo', component: yapo,
            children: [
                { path: '/yapo/financiamiento', name: 'Financiamiento-Yapo', component: yapoFinanciamiento },
            ]
        },
        {
            path: '/compara-online', name: 'comprara-online', component: comparaOnline,
            children: [
                { path: '/compara-online/financiamiento', name: 'Financiamiento-comprara-online', component: comparaFinanciamiento},
            ]
        },
        {
            path: '/amotor', name: 'amotor', component:amotor,
            children: [
                { path: '/amotor/financiamiento', name: 'Amotor', component: amotorFinanciamiento},
            ]
        },

        {
            path: '/autocred-financiamiento', name: 'autocred-financiamiento', component: autocredFinanciamiento,
            children: [
                { path: '/autocred-financiamiento/financiamiento', name: 'Autocred-financiamiento', component: autocredFinanciamientoView },
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