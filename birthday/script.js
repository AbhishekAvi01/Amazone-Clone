// Play Birthday Song
const playMusic = document.getElementById('playMusic');
const music = new Audio('https://www.soundjay.com/misc/birthday-song.mp3');

playMusic.addEventListener('click', () => {
  music.play();
});

// Upload and Display Photo
const uploadPhoto = document.getElementById('uploadPhoto');
const photoPreview = document.getElementById('photoPreview');

uploadPhoto.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    photoPreview.src = URL.createObjectURL(file);
    photoPreview.style.display = 'block';
  }
});
