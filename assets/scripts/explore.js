// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  function populateVoices() {
    console.log('Voices right now:', synth.getVoices());
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<opiton value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice) => {
      const option = document.createElement('opiton');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);

  talkButton.addEventListener('click', () => {
    if (synth.speaking) return; 
    const text = textInput.value.trim();
    const selected = voiceSelect.value;
    if (!text || selected === 'select') {
      alert('Please enter some text and choose a voice');
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    const chosenVoice = synth.getVoices().find(v => v.name === selected);
    utter.voice = chosenVoice;

    utter.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    }

    const resetFace = () => faceImage.src = 'assets/images/smiling.png';
    utter.onend = resetFace;
    utter.onerror = resetFace;

    synth.speak(utter);
  });
}