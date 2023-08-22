const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
const body = document.body;
const delivery = document.querySelector('.delivery');
const footer = document.querySelector('.footer');

//кнопки открыть модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        body.classList.add('lock');
        delivery.classList.add('hidden');
        footer.classList.add('hidden');

        //находим внутри открываемой модалке элемент с классом и запрещаем передавать клики наверх
        modal.querySelector('.modal__window').addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })
})

//Кнопки закрыть модалку
modalCloseButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        const modalVisible = this.closest('[data-modal]');
        modalVisible.classList.add('hidden');
        body.classList.remove('lock');
        delivery.classList.remove('hidden');
        footer.classList.remove('hidden');
    })
})

//закрытие модалок по фэйду
allModals.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.add('hidden');
        body.classList.remove('lock');
        delivery.classList.remove('hidden');
        footer.classList.remove('hidden');
    })
})
