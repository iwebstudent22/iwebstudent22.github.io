document.addEventListener('DOMContentLoaded', function () {
    var mySearchButton = document.querySelector('.search-icon-button');
    var mySearchForm = document.querySelector('.search');
    mySearchButton.addEventListener('click', function () {
        mySearchForm.classList.toggle('expanded');
    });
});