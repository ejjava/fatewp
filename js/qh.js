$(document).ready(function() {
    var currentPage = localStorage.getItem('currentPage') || '1.html';
    $('#content').load(currentPage);
});
