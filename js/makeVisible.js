function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const img_focus_antes = document.querySelector('.img_focus_antes');
const img_focus_depois = document.querySelector('.img_focus_depois');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(img_focus_antes) ?
        makeVisible():
        false;
})

function makeVisible() {
    if (isInViewport) {
        img_focus_antes.classList.add('visivel');
        img_focus_depois.classList.add('visivel');
    }
}

