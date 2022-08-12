// const nav = document.querySelector('.navbar')
// fetch("header.html")
// .then(res => res.text())
// .then(data => {
//     nav.innerHTML = data
// })

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


//login
function openFormLogin() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm-register").style.display = "none";
}

function closeFormLogin() {
    document.getElementById("myForm").style.display = "none";
}
function openFormRegister() {
    document.getElementById("myForm-register").style.display = "block";
    document.getElementById("myForm").style.display = "none";
}

function closeFormRegister() {
    document.getElementById("myForm-register").style.display = "none";
}
function switchToRegister() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm-register").style.display = "block";
}
function switchToLogin() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm-register").style.display = "none";
}
let listUser = [
    {
        email: 'abcxyz@gmail.com',
        password: '123456',
    },
    {
        email: 'test@gmail.com',
        password: '123456',
    },
    {
        email: 'test1@gmail.com',
        password: '123456',
    },
    {
        email: 'test2@gmail.com',
        password: '123456',
    },
];
let login = document.getElementById('ln');
let register=document.getElementById('reg');
let tung = window.localStorage.setItem('user', JSON.stringify(listUser));
let anhien = JSON.parse(window.localStorage.getItem('user'));
console.log(anhien)

let bigform=document.getElementById('navbar-login-form');
console.log(document.getElementById("register_submit"));
console.log(document.querySelector('#login_submit'));
console.log(document.getElementById('login_submit'));
document.getElementById('login_submit').onclick = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.length < 10 || email.includes('#')) {
        alert('email chưa đúng định dạng');
        return;
    }
    if (password.length < 6) {
        alert('password chưa hợp lệ');
        return;
    }


    for (let user of listUser) {
        if (user.email === email) {
            if (user.password === password) {
                alert('Đăng nhập thành công');
                window.location = './homepage.html';
            } else {
                alert('Password sai');
            }

            checkEmail = true;
        }
    }
    if (checkEmail === false) {
        alert('Email chưa được đăng ký');
    }
};


document.getElementById('register_submit').onclick = function () {
    const email = document.getElementById('email+').value;
    const password = document.getElementById('psw+').value;

    if (email.length < 10 || email.includes('#')) {
        alert('email chưa đúng định dạng');
        return;
    }
    if (password.length < 6) {
        alert('password chưa đủ điều kiện');
        return;
    }
    let checkEmail = false;
    for (let user of anhien) {
        {
            if (user.email === email) {
                alert('trùng mail');
            } else {

                alert('Đăng kí thành công');
                login.style.display ="none";
                register.style.display="none";
                closeFormRegister();
                return
            }
            checkEmail = true;
        }
    }
    if (checkEmail === false) {
        alert('Email đã được đăng ký');}
}

