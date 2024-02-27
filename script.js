// Lógica para manejar la funcionalidad de voz
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.trim().toLowerCase();
        console.log(speechResult); // Aquí puedes implementar la lógica para identificar la orden
    };

    recognition.start();
});
