import { defineStore } from "pinia";
import { dataServicios } from "../assets/helpers/constants";

export const useContactoStore = defineStore("contacto", {

    state: () => {
        return {
            selectService: dataServicios[0],
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
        }
    },
    actions: {
        fetchUtms() {
            const URL = window.location.search;
            const urlParams = new URLSearchParams(URL);
            urlParams.has('utm_source') ? this.utm_source = urlParams.get("utm_source") : ''
            urlParams.has('utm_medium') ? this.utm_medium = urlParams.get("utm_medium") : ''
            urlParams.has('utm_campaign') ? this.utm_campaign = urlParams.get("utm_campaign") : ''
        }
    }
})