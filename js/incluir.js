fetch('header-footer/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error cargando header:', err));

fetch('header-footer/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer:', err));