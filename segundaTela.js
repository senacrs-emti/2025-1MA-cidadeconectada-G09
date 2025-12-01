
       const BotaoBike = document.getElementById("btnBike");
         if (botaoBike) {
        
        botaoBicicleta.addEventListener('click', () => {
        
            window.location.href = 'segundatela.html';
        });

    } else {
        console.error("Elemento com ID 'btn-bicicleta' não encontrado.");
    }
