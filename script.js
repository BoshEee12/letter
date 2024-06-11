document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // Adjust volume as needed

    const taylorSwiftSongs = {
        "Delicate": "This ain't for the best, my reputation's never been worse, so",
        // Add more titles and lines here
    };

 

    const toggleButton = document.getElementById('toggle-button');
    const englishLetter = document.getElementById('english-letter');
    const arabicLetter = document.getElementById('arabic-letter');

    toggleButton.addEventListener('click', () => {
        if (englishLetter.style.display === 'none') {
            englishLetter.style.display = 'block';
            arabicLetter.style.display = 'none';
            toggleButton.textContent = 'Switch to Arabic';
        } else {
            englishLetter.style.display = 'none';
            arabicLetter.style.display = 'block';
            toggleButton.textContent = 'Switch to English';
        }
    });
});
