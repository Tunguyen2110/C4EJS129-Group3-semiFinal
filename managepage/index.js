
let listPlace = [];

// Toán tử nullish trong javascript
if (localStorage.getItem("listPlace") != null) {
  listPlace = JSON.parse(localStorage.getItem("listPlace") ?? '');
}

function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}

function deletePlace(index) {
    listPlace.splice(index, 1);

    //   Cập nhật dữ liệu vào localStorage
    localStorage.setItem('listPlace', JSON.stringify(listPlace));
    renderPlace(listPlace);
}

function updatePlace(index) {
    // Hiển thị giá trị lên thẻ input và textarea
    document.getElementById('index').value = index;
    document.getElementById('name-dl').value = listPlace[index].name;
    document.getElementById('address-dl').value = listPlace[index].address;

    document.querySelector('#submit').innerText = 'Update place';
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
            <td>${listPlace[i]?.name ?? ''}</td>
            <td>${listPlace[i]?.image ?? ''}</td>
            <td>${listPlace[i]?.address ?? ''}</td>
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

// handle Add Place listener
document.getElementById("submit").onclick = async function () {
  // Get info from input and image from user
  const name = document.getElementById("name-dl").value;
  const imageFile = document.getElementById("image-dl").files[0];
  const address = document.getElementById("address-dl").value;
  const currentIndex = document.getElementById('index').value;

   // handle convert file to base64
   if (imageFile !== undefined) {
    convertFileToBase64(imageFile)
    .then(convertedResult => {
      //   Tạo một object mới chứa thông tin sản phẩm
      let place = {
        id: listPlace.length + 1,
        name,
        address,
        imageConvertedFile: convertedResult,
        image: imageFile.name
      };

      if (currentIndex === '') {
        listPlace.push(place);
      } else {
        listPlace[currentIndex] = place;
      }

      // Cập nhật dữ liệu vào localStorage
      localStorage.setItem("listPlace", JSON.stringify(listPlace));

      renderPlace(listPlace);

      // Trả text cho button
      document.querySelector('#submit').innerText = 'Add place';

      // reset form
      document.getElementById("name-dl").value = '';
      document.getElementById("image-dl").files[0] = '';
      document.getElementById("image-dl").files[0].name = '';
      document.getElementById("address-dl").value = '';
      document.getElementById('index').value = '';
    })
    .catch(e => console.log(e))
   } else {
    let place = {
      name,
      address,
    };

    if (currentIndex === '') {
      listPlace.push(place);
    } else {
      listPlace[currentIndex] = place;
    }

    // Cập nhật dữ liệu vào localStorage
    localStorage.setItem("listPlace", JSON.stringify(listPlace));

    renderPlace(listPlace);

    // Trả text cho button
    document.querySelector('#submit').innerText = 'Add place';

    // reset form
    document.getElementById("name-dl").value = '';
    document.getElementById("image-dl").files[0] = '';
    document.getElementById("image-dl").files[0].name = '';
    document.getElementById("address-dl").value = '';
    document.getElementById('index').value = '';
   }
};