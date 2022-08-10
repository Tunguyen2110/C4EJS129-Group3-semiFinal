let head = document.querySelector('.header')
fetch("./header.html")
.then(res => res.text())
.then(data => {
    head.innerHTML = data
})