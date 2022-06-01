import { defineStore } from "pinia";
import { dataServicios } from "../assets/helpers/constants";

export const useContactoStore = defineStore("contacto", {
    state: () => {
        return {
            selectService: dataServicios[0],
        }
    },
})