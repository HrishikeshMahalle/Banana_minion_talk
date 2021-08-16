const translate = document.querySelector('.translate');
const text = document.querySelector('.to');
const to = document.querySelector('.text');

translate.addEventListener('click', async (e) => {
    try {
        const response = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${text.value}`);
        const minion = await response.json();

        to.textContent = minion.contents.translated;
    } catch (err) {
        console.error(err.message);
    }

    e.preventDefault();
});