import { defineStore } from "pinia";

export const useSimuladorStore = defineStore("simulador", {
    state: () => ({
        marca: '',
        modelos: [],
        modelo: { name: "Modelo" },
        anio: '',
        typeCredit: '',
        empleo: '',
        antiguedad: '',
        nacionalidad: ''
    }),
    actions: {
        resetModelo() {
            this.modelo = { name: "Modelo" }
        }
    }
})