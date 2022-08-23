let products = [
    ["oto", "https://autopro8.mediacdn.vn/2020/8/30/photo-1-1598770695329180553093.jpg", 10000],
    ["moto", "https://vnn-imgs-f.vgcloud.vn/2019/11/11/19/nhung-sieu-moto-dat-nhat-the-gioi-cao-nhat-gia-1-trieu-usd.jpg", 5000]
]

let indexEdit = -1;

show();

function show() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `
              <tr>
                <td>${products[i][0]}</td>
                <td><img src="${products[i][1]}" width="200" height="150"></td>
                <td>${products[i][2]}</td>
                <td><button onclick="showEdit(${i})">Edit</button></td>
                <td><button onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    }
    document.getElementById("show").innerHTML = str;
}


function create() {
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("price").value;

    if (indexEdit === -1) {
        products.push([name, img, price]);
    } else {
        products[indexEdit] = [name, img, price];
        indexEdit = -1;
    }
    clearInput();
    show();
}

function deleteProduct(index) {
    products.splice(index, 1);
    show();
}

function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("price").value = "";
}

function showEdit(index) {
    indexEdit = index;
    document.getElementById("name").value = products[index][0];
    document.getElementById("img").value = products[index][1];
    document.getElementById("price").value = products[index][2];
}
