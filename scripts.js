let compliments = [];

function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentElement = document.querySelector('.compliment-text');
    complimentElement.textContent = compliment;
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

// Adicione essa função para carregar os elogios do arquivo JSON
function loadCompliments() {
    fetch('compliments.json')
        .then(response => response.json())
        .then(data => {
            compliments = data;
            showRandomCompliment();
        })
        .catch(error => console.error('Erro ao carregar os elogios:', error));
}

// Carrega os elogios ao iniciar o script
loadCompliments();
