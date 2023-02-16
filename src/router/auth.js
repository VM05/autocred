import { useContactoStore } from "../stores/contacto"

const isAuthenticated = (from,to,next)=>{
    const contactoStore = useContactoStore()
    if(contactoStore.authenticated) next() 

    else next({name:'login-vendedores'})
}

export default isAuthenticated