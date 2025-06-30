let seconds = 0;
let cronometro;
let h1 = document.querySelector('.cronometro1');
let isRunning = false; // Variável para verificar se o cronômetro está em execução

function start() {
    if (!isRunning) { // Verifica se o cronômetro não está em execução
        isRunning = true; // Marca como em execução
        document.getElementById('startStopButton').innerText = 'STOP'; // Muda o texto do botão para STOP
        cronometro = setInterval(function () {
            seconds++; // Incrementa os segundos
            updateDisplay(); // Atualiza a exibição a cada segundo
        }, 1000);
    } else {
        clearInterval(cronometro); // Para o cronômetro
        isRunning = false; // Marca como não em execução
        document.getElementById('startStopButton').innerText = 'START'; // Muda o texto do botão para START
    }
}

function reset() {
    clearInterval(cronometro); // Para o cronômetro
    seconds = 0; // Zera os segundos
    updateDisplay(); // Atualiza a exibição para 00:00:00
    document.getElementById('startStopButton').innerText = 'START'; // Reseta o texto do botão para START
    isRunning = false; // Marca como não em execução
}

function updateDisplay() {
    let hours = Math.floor(seconds / 3600); // Calcula as horas
    let minutes = Math.floor((seconds % 3600) / 60); // Calcula os minutos
    let secs = seconds % 60; // Calcula os segundos restantes

    // Formata a exibição com dois dígitos
    h1.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}