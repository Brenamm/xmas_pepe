// Simple snowflake animation
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 300);
});

// Redirection vers "Coming Soon" pour les liens désactivés
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'soon.html';
    });
});

