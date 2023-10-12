const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('#studocu-url');
    const base64 = input.value;

    const img = document.querySelector('img');

    img.src = `data:image/jpeg;base64,${base64}`;
    img.style.display = 'block';
});
