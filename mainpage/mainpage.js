const nav = document.querySelector('.navbar')
fetch("header.html")
.then(res => res.text())
.then(data => {
    nav.innerHTML = data
})

const foot = document.querySelector('.footer')
fetch("footer.html")
.then(res => res.text())
.then(data => {
    foot.innerHTML = data
})