<template>
   
    <div class="contenedor-boton">
        <a href="https://api.whatsapp.com/send?phone=56972698316" target="_blank">
            <div class="nube">
                <p>¿necesitas ayuda?</p>
            </div>
            <div class="imagen">
                <img src="../assets/img/call-center-agente.png" alt="">
            </div>
        </a>
        <a class="boton-minimizar">X</a>
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
        animation: entrar 1s forwards ;
        animation-delay: 1s;
        opacity: 0;
    }

    .contenedor-boton.hide {
        animation: slideaway 200ms forwards;
    }

    @keyframes slideaway {
        from {
            opacity: 1;
            display: block;
        }
        to { 
            transform: translateY(40px);
            opacity: 0;
            display: none;
        }
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

    .nube::after{
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 0 12px 12px 0;
        border-color: transparent #BA0B7C transparent transparent;
        top: 45px;
        right: 0;
    }

    .imagen{
        position: absolute;
        max-width: 80px;
        top: 50px;
        width: 100px;
        right: 0;
    }

    a{
        width: 200px;
        height: 120px;
        display: inline-block;
    }

    .boton-minimizar{
        z-index: 25;
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0;
        right: 0;
    }


</style>