var modal = document.getElementById('my-modal');
var modalBackground = document.getElementById('modal-background');

setTimeout(addExitPopupEventListener, 5000);

modalBackground.addEventListener('click', function (event) {
    hideModal();
});

function showModal() {
    modal.classList.remove('hidden');
    modalBackground.classList.remove('hidden');
    removeExitPopupEventListener();
}

function hideModal() {
    modal.classList.add('hidden');
    modalBackground.classList.add('hidden');
}

function beforeUnloadCallback(event) {
    var event = event || window.event;
    var message = '';

    event.preventDefault();
    showModal();

    if (event) {
        event.returnValue = message; // for IE/Firefox
    }

    return message; // for Safari/Chrome
}

function mouseLeaveCallback(event) {
    showModal();
}

function addExitPopupEventListener() {
    window.addEventListener('beforeunload', beforeUnloadCallback);
    window.document.addEventListener('mouseleave', mouseLeaveCallback);
}

function removeExitPopupEventListener() {
    window.removeEventListener('beforeunload', beforeUnloadCallback);
    window.document.removeEventListener('mouseleave', mouseLeaveCallback);
}
