import { defineStore } from "pinia";

export const useSimuladorStore = defineStore("simulador", {
    state: () => ({
        marca: '',
        modelos: [],
        modelo: '',
        rut: '',
        version: '',
        type: '',
        valor: 0,
        pie: 0,

    })
})