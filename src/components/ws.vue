<template>
   
    <div class="contenedor-boton">
        <a href="https://api.whatsapp.com/send?phone=56972698316" target="_blank" class="linkWhatshapp">
            <div class="nube">
                <p>¿necesitas ayuda?</p>
            </div>
            <div class="imagen-call-center">
                <img src="../assets/img/call-center-agente.png" alt="">
            </div>
        </a>
        <a class="boton-minimizar">
            <span class="line-1"></span>
            <span class="line-2"></span>
        </a>
    </div>

</template>

<script>

    


</script>

<style scoped>

    .contenedor-boton{
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 20;
        width: 200px;
    }

    .contenedor-boton.achicar {
        animation: slideaway 200ms forwards;
    }

    
    .nube.desaparecer{
        animation: esconder 0.3s forwards;
    }

   


    .nube{
        position: relative;
        width: 100%;
        max-width:150px;
        left: -30px;
        transition: all 0.3s ease;
    }

    .nube p{
        position: absolute;
        top: 15px;
        overflow: hidden;
        background: #BA0B7C;
        text-align: center;
        border-radius: 20px;
        color:white;
        font-weight: lighter;
        width: 180px;
        padding: 5px;
      
    }

    .nube::after{
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 0 12px 12px 0;
        border-color: transparent #BA0B7C transparent transparent;
        top: 45px;
        right: 0;
    }

    .imagen-call-center{
        position: absolute;
        max-width: 70px;
        top: 50px;
        width: 100%;
        right: 0;
    }

    .imagen-call-center img{
        width: 100%;
    }

    .linkWhatshapp{
        width: 200px;
        height: 120px;
        display: inline-block;
    }

    .boton-minimizar{
        z-index: 25;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        right: -10px;
        color: #9ca3af;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color:#d8dce0;
        cursor:pointer;
        font-size: 12px;
        padding-bottom: 2px;
    }

    .line-1,.line-2{
        width: 2px;
        height: 12px;
        background-color: #9ca3af;
        transition: all 0.2s ease;
    }

    .line-1{
        transform:rotate(45deg) translate(1px, 0px)
    }
    .line-2{
        transform:rotate(-45deg) translate(-1px, 0px)
    }

    .cambiar .line-1{
        height: 10px;
        transform:rotate(0deg) translate(0px, 1px)
    }

    .cambiar .line-2{
        height: 9px;
        transform:rotate(90deg) translate(0px, 2px)
    }

    @keyframes entrar{
        from{
             transform: translateX(50px);
             opacity: 0;      
        }

        to{
            transform: translateX(0px);
             opacity: 1;
        }

    }

    @keyframes esconder {

        from{
            opacity: 1;
            display: block;
        }

        to{
            opacity: 0;
            display: none;
        }

    }

    @keyframes slideaway {
        from {
          transform: scale(1);
        }
        to { 
            transform: scale(0.6);
            bottom: 0;
            right: 0;
        }
    }

</style>