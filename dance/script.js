// script.js
document.getElementById('yesBtn').addEventListener('click', () => {
    alert("Yay! I love you too! ❤️");
    document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
});

document.getElementById('noBtn').addEventListener('click', () => {
    alert("It's okay, I'll wait forever! 💔");
    document.body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";
});
