var modal = document.getElementById('my-modal');
var modalBackground = document.getElementById('modal-background');

setTimeout(addExitPopupEventListener, 5000);

modalBackground.addEventListener('click', function (event) {
    hideModal();
});

function showModal() {
    modal.classList.remove('hidden');
    modalBackground.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
    modalBackground.classList.add('hidden');
}

function addExitPopupEventListener() {
    window.document.addEventListener('mouseleave', function (event) {
        var modalShown = !!modal.dataset.shown;
        if (modalShown) {
            return;
        }

        modal.dataset.shown = true;
        showModal();
    });
}

//window.onbeforeunload = function (event) {
//    event.preventDefault();
//    event.returnValue = 'Where are you going?';
//    return;
//};
