async function playAudioAfterDelay() {
    // var audio = new Audio('./Assets/WindowsUnlock.wav');
    let audioPlayer = document.getElementById("audioPlayer")

    // Wait for 5 seconds
    await new Promise(r => setTimeout(r, 5000));

    // Play the audio
    // audio.play();
    audioPlayer.play();
}

// Call the function to play audio after a delay
window.onload = function() {
    playAudioAfterDelay();
};

