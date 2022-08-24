//bài 1:
function findAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//Bài 2:
function insertNumberToArray(arr, x, index) {
    if (index < 0 || index > arr.length) {
        return arr;
    } else {
        let arrNew = new Array(arr.length + 1);
        arrNew[index] = x;
        for (let i = 0; i < arrNew.length; i++) {
            if (i < index) {
                arrNew[i] = arr[i];
            }
            if (i > index) {
                arrNew[i] = arr[i - 1];
            }
        }
        return arrNew;
    }
}

//Bài 3:
//Kiểm tra SNT;
function checkSNT(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfListPrime(x) {
    let sum = 2;
    for (let i = 3; i <= x; i++) {
        if (checkSNT(i)) {
            sum += i;
        }
    }
    return sum;
}

//Bài 4:

class Rectangle {
    x;
    y;
    width;
    height;
    color;

    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = c;
    }

    render(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let canvas = document.getElementById("canvas");
let rect1 = new Rectangle(100, 100, 300, 200, "red");
let rect2 = new Rectangle(200, 200, 300, 200, "blue");
rect1.render(canvas);
rect2.render(canvas);


class NhanVien {
    name;
    age;
    gender;
    address;
    salary;

    constructor(name, age, gender, address, salary) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.salary = salary;
    }

    display() {
        return "<br>Tên của nhân viên là : " + this.name
            + "<br> Tuổi của nhân viên là : " + this.age
            + "<br> Lương của nhân viên là : " + this.salary
            + "<br> Địa chỉ của nhân viên là : " + this.address
            + "<br> Giới tính của nhân viên là : " + this.gender
    }
}

let sang = new NhanVien("Sáng", 18, "Nam", "Đồ Sơn", "1 Jack");
document.write(sang.display())

