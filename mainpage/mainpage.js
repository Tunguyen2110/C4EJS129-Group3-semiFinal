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


{
//Modal box
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
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

