import { defineStore } from "pinia";
import { dataServicios } from "../assets/helpers/constants";
import { procedencias } from "../assets/helpers/API";
import axios from 'axios';

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
            mobile: '',
            browserName:'',
            dispositivo:'',
            telefonoWhatsapp:'',
            options:'',
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
        },
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
               
                this.mobile= true
                
              } else {
                
                this.mobile= false
              }
        },
        randomNumber(){
            console.log (Math.round(Math.random() * 10))
        },
        
       encuentraDispositivo(){
            let userAgent = navigator.userAgent;
          
            if (userAgent.match(/chrome|chromium|crios/i)) {
              this.browserName = "Chrome";
            } else if (userAgent.match(/firefox|fxios/i)) {
              this.browserName = "Firefox";
            } else if (userAgent.match(/safari/i)) {
              this.browserName= "Safari";
            } else if (userAgent.match(/opr\//i)) {
              this.browserName= "Opera";
            } else if (userAgent.match(/edg/i)) {
              this.browserName= "Edge";
            } else {
              this.browserName = "Unknown";
            }
          
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
                this.dispositivo = "tablet";
            } else if (
              /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                userAgent
              )
            ) {
                this.dispositivo = "mobile";
            }
                this.dispositivo = "desktop";
          },

        async getData(){
            try {
                const respuesta = await axios.get('https://calendardev.autocred.cl/api/numeros/getNumberWhatsapp')
                this.options = JSON.parse(respuesta.data)
                this.telefonoWhatsapp = this.options.filter(elegido => elegido.check == true)
            } catch (error) {
                console.log(error)
            }
         }
    }
})