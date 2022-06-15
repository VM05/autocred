import { defineStore } from "pinia";

export const useSimuladorStore = defineStore("simulador", {
    state: () => ({
        marca: '',
        modelos: [],
        modelo: '',
        anio: '',
        typeCredit: '',
        empleo: '',
        antiguedad: '',
        nacionalidad: ''
    })
})