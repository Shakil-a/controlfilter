
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
