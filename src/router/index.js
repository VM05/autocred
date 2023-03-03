import { createRouter, createWebHistory } from "vue-router"
import isAuthenticated from "./auth"

import Home from '../views/Home.vue'


const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', name: 'Autocred', component: ()=> import('../views/Autocred.vue'),
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/login', name: 'Login', component: ()=> import('../views/login.vue') },
                { path: '/compradores', name: 'Compradores', component: ()=> import('../views/compradores.vue')},
                { path: '/encuesta', name: 'Encuesta', component: ()=> import('../views/encuesta.vue')  },
                { path: '/calendario', name: 'Calendario', component: ()=> import('../views/CalendarioVanMovil.vue')},
                { path: '/nosotros', name: 'Nosotros', component: ()=> import('../views/nosotros.vue') },
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
                { path: '/new-home', name: 'newHome', component: ()=> import('../views/HomeNew.vue') },
                { path: '/new-transferencia', name: 'new-transferencia', component: ()=> import('../views/NuevoServicioTransferencia.vue') },
                { path: '/new-seguro', name: 'new-seguro', component: ()=> import('../views/NuevoServicioSeguro.vue') },
                { path: '/new-tag', name: 'new-tag', component: ()=> import('../views/NuevoServicioTag.vue') },
                { path: '/new-financiamiento', name: 'new-financiamiento', component: ()=> import('../views/NuevoServicioFinanciamiento.vue') },
                { path: '/nuestros-agentes', name: 'nuestros-agentes', component: ()=> import('../views/NuestrosAgentes.vue') },
                { path: '/redirect', name: 'redirect', component: ()=> import('../components/RedirectTel.vue') },
                { path: '/servicios-generales', name: 'servicios-generales', component: ()=> import('../views/ServiciosGenerales.vue') },
                { path: '/servicios', name: 'Servicios', component: ()=> import('../views/servicios.vue'),
                children:[
                    { path:'/servicios/tag', name:'serviciotag', component: ()=> import('../views/ServicioTag.vue')},
                    { path:'/servicios/transferencias', name:'serviciotransferencias', component: ()=> import('../views/ServicioTransferencia.vue')},
                    { path:'/servicios/financiamiento', name:'serviciofinanciamiento', component: ()=> import('../views/ServicioFinanciamiento.vue')},
                    { path:'/servicios/seguro', name:'servicioseguro', component: ()=> import('../views/ServicioSeguro.vue')},
                ]
            },
                { path: '/vendedores', name: 'Vendedores', component: ()=> import('../views/vendedores.vue') },
                { path: '/blog', name: 'Blog', component: ()=> import('../views/Blog.vue') },
                { path: '/blog/:id', name: 'Articulo', component: ()=> import('../views/article.vue') },
                { path: '/terminos-y-condiciones', name: 'Terms', component: ()=> import('../views/Terms.vue') },
                { path: '/login-vendedores', name: 'login-vendedores', component: ()=> import('../views/LoginVendedores.vue') },
                { path: '/vendedores-autocred', name: 'vendedores-autocred', beforeEnter: [isAuthenticated], component: ()=> import('../views/VendedoresAutocred.vue') },
            
            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component:  ()=> import('../views/NotFound.vue') },
        {
            path: '/yapo', name: 'Yapo', component: ()=> import('../views/Yapo/Yapo.vue'),
            children: [
                { path: '/yapo/financiamiento', name: 'Financiamiento-Yapo', component: ()=> import('../views/Yapo/Financiamiento.vue') },
            ]
        },
        {
            path: '/compara-online', name: 'comprara-online', component: ()=> import('../views/compara-online/ComparaOnline.vue'),
            children: [
                { path: '/compara-online/financiamiento', name: 'Financiamiento-comprara-online', component: ()=> import('../views/compara-online/ComparaFinanciamiento.vue')},
            ]
        },
        {
            path: '/amotor', name: 'amotor', component:()=> import('../views/amotor/Amotor.vue'),
            children: [
                { path: '/amotor/financiamiento', name: 'Amotor', component: ()=> import('../views/amotor/AmotorFinanciamiento.vue')},
            ]
        },

        {
            path: '/autocred-financiamiento', name: 'autocred-view', component:  ()=> import('../views/autocred/AutocredView.vue'),
            children: [
                { path: '/autocred-financiamiento/financiamiento', name: 'Autocred-financiamiento', component: ()=> import('../views/autocred/AutocredFinanciamiento.vue') },
            ]
        },

        {
            path: '/club-porsche', name: 'club-porsche', component: ()=> import('../views/club-porsche/ClubPorsche.vue'),
            children: [
                { path: '/club-porsche/financiamiento', name: 'porsche-financiamiento', component: ()=> import('../views/club-porsche/ClubPorscheFinanciamiento.vue') },
            ]
        },

        {
            path: '/MBA-UC', name: 'universidad-catolica', component: ()=> import('../views/UC/UniversidadCatolica.vue'),
            children: [
                { path: '/MBA-UC/financiamiento', name: 'catolica-financiamiento', component: ()=> import('../views/UC/UcFinanciamiento.vue') },
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