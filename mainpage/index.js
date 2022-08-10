{
  mybutton = document.getElementById("myBtn");
  bar = document.querySelector(".bar");
  // cart = document.querySelector(".cart");
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      bar.style.display = "flex";
      // cart.style.display = "flex";
      mybutton.style.display = "block";
    } else {
      bar.style.display = "none";
      // cart.style.display = "none";
      mybutton.style.display = "none";
    }
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let listBtnPlus = document.querySelectorAll('div.card-plus');
let listBtnMinus = document.querySelectorAll('div.card-minus');
let listCardCheck = document.querySelectorAll('div.card-check');
for (let i = 0; i < listBtnPlus.length; i++) {
  listBtnPlus[i].addEventListener('click', (e) => {
    listCardCheck[i].style.display = "flex";
  })
  listBtnMinus[i].addEventListener('click', (e) => {
    listCardCheck[i].style.display = "none";
  })
};


let sidebar_hid = document.querySelector(".sidebar-plc-hidden");
let xemthem = document.querySelector(".xemthem");
let count = 1;
console.log(sidebar_hid);


function xemthem_sidebar() {
  if (count === 1) {
    sidebar_hid.style.display = 'block';
    xemthem.innerHTML = "Kéo lên";
    count++;
  } else {
    sidebar_hid.style.display = 'none';
    xemthem.innerHTML = "Xem thêm";
    count = 1;
  }

} 

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
function switchToRegister(){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm-register").style.display = "block";
}
function switchToLogin(){
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm-register").style.display = "none";
}

//login
const listUser = [
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

document.getElementById('login_submit').onclick = function(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('psw').value;

  if (email.length <10 || email.includes('#')) {
    alert('email chưa đúng định dạng');
    return;
  }
  if (password.length < 6) {
    alert('password chưa hợp lệ');
    return;
  }

  let checkEmail = false;
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
window.onload = function() {
	if (localStorage) {
	  document.getElementById('register_submit').addEventListener('submit', function() {
	      let name = document.getElementById('email+').value;
	      localStorage.setItem('name', JSON.stringify(listUser));
	  });
	}
}
localStorage.foo = 'bar';
localStorage.foo = 'bar';
localStorage.setItem("listUser", JSON.stringify(listUser));
// const places= document.getElementsByClassName("card-type");
const tt=[1,2,3];
console.log(tt);
const att=tt.filter(function(value){
  return value=="1";
});
console.log(att);



//filter
const data= [
  {
    image: "../media/spck/ham2.jpg",
    type: "Danh lam thắng cảnh - Phường 4",
    price: "Price",
    title: "Đường hầm điêu khắc Đà Lạt",
    location: " Phường 4 - Tp. Đà Lạt - Lâm Đồng",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/_MG_7157.jpg",
    type: "Khu vui chơi, công viên - Phường 4",
    price: "Price",
    title: "Khu vui chơi Đà Lạt Wonderland",
    location: " 19 Đ. Hoa Hồng - Phường 4 - Tp. Đà Lạt - Lâm Đồng",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/tuyenlam.jpg",
    type: "Danh lam thắng cảnh - Phường 4",
    price: "Price",
    title: "Happy Hill Đà Lạt",
    location: " Khu du lịch sinh thái - nhà hàng Đá Tiên - hồ Tuyền Lâm",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/rungthong4.jpg",
    type: "Nhà hàng - Phường 4",
    price: "Price",
    title: "Rừng Thông Mơ Farm & Bistro",
    location: "Đ. Hoa Hồng - Phường 4 - Tp. Đà Lạt - Lâm Đồng ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/land4.png",
    type: "Khu vui chơi, công viên - Phường 5",
    price: "Price",
    title: "Vùng Đất Cổ Tích Fairytale Land Đà Lạt",
    location: " Đ. Hoa Hồng - Phường 4 - Tp. Đà Lạt - Lâm Đồng ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/qij6cdhlwescboqpkhaz.webp",
    type: "Khu vui chơi, công viên - Phường 5",
    price: "Price",
    title: "Làng Hoa Vạn Thành",
    location: " 40 Vạn Thành - Phường 5 - Tp. Đà Lạt - Lâm Đồng ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/hoa-son-dien-trang-da-lat-6.jpg",
    type: "Danh lam thắng cảnh - Phường 5",
    price: "Price",
    title: "Khu Du Lịch Sinh Thái Hoa Sơn Điền Trang",
    location: " 1D Hoàng Văn Thụ - Tiểu khu 159 Phường 5 hướng đi đèo Tà Nung ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/xiumai.jpg",
    type: "Ẩm thực địa phương - Phường 5",
    price: "Price",
    title: "Bánh Mì Xíu Mại Hoàng Diệu",
    location: " 26 đường Hoàng Diệu - phường 5 - Tp. Đà Lạt ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/lac_tien_goi_3.jpg",
    type: "Danh lam thắng cảnh - Phường 5",
    price: "Price",
    title: "Lạc Tiên Giới Đà Lạt",
    location: " 1/3 Lâm Sinh - Phường 5 - Tp Đà Lạt - Lâm Đồng ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/nhatho.jpg",
    type: "Công trình văn hóa kiến trúc - Phường 6",
    price: "Price",
    title: "Nhà Thờ Domaine De Marie Đà Lạt",
    location: " 1 Ngô Quyền - phường 6 - Tp. Đà Lạt - tỉnh Lâm Đồng ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/ham2.jpg",
    type: "Nhà hàng - Phường 6",
    price: "50,000đ - 200,000đ",
    title: "Ốc Nhồi Thịt 33",
    location: " 33 đường Hai Bà Trưng - Phường 6 - Tp. Đà Lạt ",
    more: "Xem thêm",
  },
  {
    image: "../media/spck/trieudoahong.jpg",
    type: "Quán cà phê - Phường 6",
    price: "Price",
    title: "Cà Phê Triệu Đóa Hồng",
    location: " 25 Đường Thi Sách - Phường 6 - Tp. Đà Lạt ",
    more: "Xem thêm",
  },
]
let stringHTML = "";
const container_item_main = document.getElementById("container-item-main");
for(let element of data){
  stringHTML += `
                <div class="card">
                    <img src=${element.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-type" > ${element.type}</div>
                        <div class="card-price"><i class="fa-solid fa-tag"></i> ${element.price}</div>
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${element.location}</p>
                        <a href="#" class="btn btn-primary" id="card-footer">${element.more}</a>
                        <div class="card-plus"><i class='bx bx-plus-circle'></i></div>
                        <div class="card-minus"><i class='bx bx-minus-circle'></i></div>
                        <div class="card-check"><i class='bx bx-checkbox-checked'></i></div>
                    </div>
                </div>
  `
}
container_item_main.innerHTML = stringHTML;

console.log(stringHTML);



const filtered = data.filter(str=>{
  return str.includes("Phường 4");
});
console.log(filtered);

// const nodes=document.querySelectorAll('.card-type');
// console.log(nodes);
// const texts = [...nodes].map(n => n.textContent);
// console.log(texts);
// const filtered = [...nodes].filter(n => n.textContent.includes('Phường 4'));
// console.log(filtered);

// function ttat(){
//  let card_hide= document.querySelectorAll('.card');
//  card_hide.forEach(card => {
// card.style.display ="none";
//  });
//  document.querySelectorAll('.card').innerHTML = parent.forEach.filtered;
// }