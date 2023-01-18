<template>
    <Container>
        <div class="shadow-2xl w-1/2 mx-auto rounded-lg p-10">
            <Heading content="Vendedores Autocred" class="text-center text-primary-900 mb-5" heading-type="h2" />
            <ListaVendedoresAutocred  :options="options"/>
            {{ options }}
        </div>
       
        
    </Container>
</template>

<script setup>
    import Container from '../layouts/Container.vue';
    import ListaVendedoresAutocred from '../layouts/ListaVendedoresAutocred.vue'
    import Heading from '../components/heading.vue'
    import {ref} from 'vue';

    const options = ref([ { name: "Luther", telefono:'+56972698316', id: 1, check:true },
        { name: "Diego", telefono:'+56972698316', id: 2 , check:false },
        { name: "Allison", telefono:'+56972698316', id: 3 , check:false },
        { name: "Klaus", telefono:'+56972698316', id: 4 , check:false },
        { name: "Five", telefono:'+56972698316', id: 5 , check:false },
        { name: "Ben", telefono:'+56972698316', id: 6 , check:false },
        { name: "Vanya", telefono:'+56972698316', id: 7, check:false },])
</script>

<style  scoped>

</style>