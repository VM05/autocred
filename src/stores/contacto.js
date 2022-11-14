import { defineStore } from "pinia";
import { dataServicios } from "../assets/helpers/constants";
import { procedencias } from "../assets/helpers/API";

export const useContactoStore = defineStore("contacto", {

    state: () => {
        return {
            selectService: dataServicios[0],
            selectServiceTest: [],
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
            utm_procedenciaId: '',
            utm_tipoProcedencia: '',
            modal_open: true,

        }
    },
    actions: {
        fetchUtms() {
            const URL = window.location.search;
            const urlParams = new URLSearchParams(URL);
            urlParams.has('utm_source') ? this.utm_source = urlParams.get("utm_source") : ''
            urlParams.has('utm_medium') ? this.utm_medium = urlParams.get("utm_medium") : ''
            urlParams.has('utm_campaign') ? this.utm_campaign = urlParams.get("utm_campaign") : ''
        },
        getProcedencia() {
            const parametros = window.location.search;

            if (parametros) {
                const urlparams = new URLSearchParams(parametros);
                const utm = urlparams.get("utm_source");
                if (utm) {
                    const procedencia = procedencias.find(
                        (procedencia) => procedencia.name.toLowerCase() === utm.toLowerCase()
                    );

                    if (procedencia != undefined) {
                        this.utm_procedenciaId = procedencia.procedenciaId;
                        this.utm_tipoProcedencia = procedencia.name.toLowerCase();
                    } else {
                        this.utm_procedenciaId = 103;
                    }
                }
            } else {
                this.utm_procedenciaId = 103;

            }
        }
    }
})