<template>
    <Container>
        <div class="shadow-2xl md:w-1/2 mx-auto rounded-lg p-10">
            <Paragraph class="text-center text-primary-900 mb-14 text-3xl font-semibold">Vendedores Autocred</Paragraph>
            <ListaVendedoresAutocred  :options="options" />
            <div class="flex justify-center mt-14">
                <Loading medium v-if="isLoading" />
                <Button text="Guardar" secondary class="w-1/2" @click="enviarData" v-else-if="!isLoading && !warningMensaje"></Button>
                <Paragraph v-else="warningMensaje && !isLoading">{{ mensaje }}</Paragraph>
            </div>
        </div>
 
    </Container>
</template>

<script setup>
    import Container from '../layouts/Container.vue';
    import ListaVendedoresAutocred from '../layouts/ListaVendedoresAutocred.vue'
    import {ref,watch} from 'vue';
    import axios from 'axios';
    import Button from '../components/Button.vue';
    import Loading from '../components/Loading.vue';
    import Paragraph from '../components/Paragraph.vue';
    import { useContactoStore } from '../stores/contacto';
    
    const contactoStore = useContactoStore()
    const options = ref()
    const isLoading = ref(false)
    const mensaje = ref("")
    const warningMensaje = ref(false)

    //  onMounted(async()=>{
    //    await contactoStore.getData()
    //     options.value = contactoStore.options
    //     console.log(contactoStore.telefonoWhatsapp.length)
    //     console.log (Math.ceil(Math.random() * contactoStore.telefonoWhatsapp.length))
    //  })
    
    watch(contactoStore,()=>{
        options.value = contactoStore.options
    })
    
     const enviarData = async()=>{
        isLoading.value = true
        try {
            const respuesta = await axios.put('https://calendardev.autocred.cl/api/numeros/createNumberWhatsapp',{ data: JSON.stringify(options.value) })
            console.log(respuesta)
            if(respuesta.status == 200){
                warningMensaje.value = true
                mensaje.value = "se ha actualizado el registro"
            }
        } catch (error) {
            if(respuesta.status != 200){
                warningMensaje.value = true
                mensaje.value = "ha ocurrido un problema"
            }
            console.log(error)
        }
        isLoading.value = false
        setTimeout(() => {
            warningMensaje.value = false
        }, 3000);
     }

    //  const getData = async()=>{
    //     try {
    //         const respuesta = await axios.get('https://calendardev.autocred.cl/api/numeros/getNumberWhatsapp')
    //         options.value = JSON.parse(respuesta.data)
    //         contactoStore.telefonoWhatsapp = options.value.filter(elegido => elegido.check == true)
    //         console.log(contactoStore.telefonoWhatsapp)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //  }

</script>

<style  scoped>

</style>


//   {
    //   "data":"[ { name: 'Jose Lopez', telefono:'56946483871', email: 'jose.lopez@autocred.cl' , id: 1, check:true }, { name: 'Barbara Saavedra', telefono:'56946478330', email: 'barbara.saavedra@autocred.cl' , id: 2 , check:false }, { name: 'Iris Castro', telefono:'56946474281', email: 'iris.castro@autocred.cl' , id: 3 , check:false }, { name: 'Solange Canales', telefono:'56946481460', email: 'solange.canales@autocred.cl' , id: 4 , check:false }, { name: 'Jacky Martinez', telefono:'56932592736', email: 'jacky.martinez@autocred.cl' , id: 5 , check:false }, { name: 'Francisco Stemann', telefono:'56946337158', email: 'francisco.stemann@autocred.cl' , id: 7, check:false }, { name: 'Cristian Fernandez', telefono:'56946373862', email: 'cristian.fernandez@autocred.cl' , id: 8, check:false }, { name: 'Carolina Ortiz', telefono:'56946390268', email: 'carolina.ortiz@autocred.cl' , id: 9, check:false }, { name: 'josseline vejar', telefono:'56946453667', email: 'josseline.vejar@autocred.cl' , id: 10, check:false }, { name: 'Felipe Macaya', telefono:'56946439563', email: 'felipe.macaya@autocred.cl' , id: 11, check:false }, { name: 'Valeria Ruiz', telefono:'56946384765', email: 'Valeria Ruiz@autocred.cl' , id: 12, check:false }, { name: 'Pablo Farias', telefono:'56946351290', email: 'pablo.farias@autocred.cl' , id: 13, check:false }]"
    // }