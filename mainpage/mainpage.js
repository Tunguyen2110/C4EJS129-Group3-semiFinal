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

const saveBookmark = (index) => {
    const data = JSON.parse(localStorage.getItem('mainpage')) ?? [];

    if (data && data !== '') {
        const checkExist = data.find(value => value === index);

        if (!checkExist) {
            data.push(index);

            localStorage.setItem('mainpage', JSON.stringify(data));
            
            console.log('Thêm bookmark thành công!!')
        } else {
            data.splice(index - 1, 1);

            localStorage.setItem('mainpage', JSON.stringify(data));

            console.log('Đã xoá bookmark!');
        }
    }
}

$(document).ready(() => {
    const data = JSON.parse(localStorage.getItem('listPlace') ?? '');
    let listImage = '';

    data.forEach((value, idx) => {
        listImage += `
        <div class="card" style="width: 18rem">
            <div class="card-body">
                <a href="#">
                    <img
                    src="${value.imageConvertedFile}"
                    class="card-img-top"
                    alt="${value.image}"
                    />
                    <h5 class="card-title">${value.name}</h5>
                </a>
                <div class="card-indentify">
                    <p class="card-address">${value.address}</p>
                    <i class="bi bi-bookmark" onclick="saveBookmark('${value.id}')"></i>
                    <!-- <i class="bi bi-bookmark-fill"></i> -->
                </div>
            </div>
        </div>
        `
    })

    document.getElementById('display-picture').innerHTML = listImage;
})