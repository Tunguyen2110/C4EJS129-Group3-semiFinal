let listPlace;

// Toán tử nullish trong javascript
if (localStorage.getItem("listPlace") != null) {
  listPlace = JSON.parse(localStorage.getItem("listPlace"));
} else {
  listPlace = [];
}

document.getElementById("add").onclick = function () {
  // Get info from input and image from user
  const name = document.getElementById("name-dl").value;
  const image = document.getElementById("image-dl").value;
  const address = document.getElementById("address-dl").value;

  //   Tạo một object mới chứa thông tin sản phẩm
  const place = {
    // name: name,
    name,
    image,
    address,
  };

  listPlace.push(place);
  //   Cập nhật dữ liệu vào localStorage
  localStorage.setItem("listPlace", JSON.stringify(listPlace));

  renderPlace(listPlace);
};

function deletePlace(index) {

    listPlace.splice(index, 1);
    //   Cập nhật dữ liệu vào localStorage
    localStorage.setItem('listPlace', JSON.stringify(listPlace));
    renderPlace(listPlace);
}

function updatePlace(index) {
    // Hiển thị giá trị lên thẻ input và textarea
    document.getElementById('name-dl').value = listPlace[index].name;
    document.getElementById('img-dl').value = listPlace[index].image;
    document.getElementById('address-dl').value = listPlace[index].address;
  
    document.getElementById('update').style.display = 'block';
    document.getElementById('add').style.display = 'none';
}

// -Update:
// +Khi click vào button Update Product thì sẽ lấy được những thông tin mới nhất
// trong các thẻ input và textarea để cập nhật vào dữ liệu

function renderPlace(listPlace) {
    const content = document.getElementById('content');
    if (listPlace.length === 0) {
      content.innerHTML = 'Chưa có địa điểm nào cả';
    } else {
      let stringHTML = '';
      for (let i = 0; i <= listPlace.length - 1; i++) {
        stringHTML += `
          <tr>
              <th scope="row">${i + 1}</th>
              <td>${listPlace[i].name}</td>
              <td>${listPlace[i].image}</td>
              <td>${listPlace[i].address}</td>
              <td>
                <button class="btn btn-secondary" onclick="updatePlace('${i}')">Update</button>
                <button class="btn btn-danger" onclick="deletePlace('${i}')">Delete</button>
              </td>
            </tr>
      `;
      }
  
      document.getElementById('content').innerHTML = stringHTML;
    }
  }
  renderPlace(listPlace);

  // Task 4: Mỗi lần click vào button Add Product thì sẽ thêm sản phẩm mới lên trên bảng