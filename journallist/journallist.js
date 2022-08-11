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

$(document).ready(() => {
    const listPlace = JSON.parse(localStorage.getItem('listPlace') ?? '');
    const listBookmarked = JSON.parse(localStorage.getItem('mainpage') ?? '');

    console.log(listPlace, listBookmarked)

    let listBookmarkedHTML = '';

    for (let i = 0; i < listPlace.length; i += 1) {
        if (listBookmarked.find(value => parseInt(value) === listPlace[i].id)) {
            listBookmarkedHTML += `
            <div class="journal-list-content">
                <img src="${listPlace[i].imageConvertedFile}" alt="${listPlace[i].name}" />
                <div class="detail-list">
                    <h4 class="title">${listPlace[i].name}</h4>
                    <p class="locaiton">${listPlace[i].address}</p>
                </div>
                <div class="action-list">
                    <i class="bi bi-bookmark-fill fa-5x"></i>
                    <input type="checkbox" />
                </div>
            </div>
            `
        }
    }

    document.getElementById('list-bookmarked').innerHTML = listBookmarkedHTML;
})