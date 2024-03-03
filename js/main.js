//bài1
function timSoNguyenNhoNhat() {
    var sum = 0;
    var n = 1;

    while (sum <= 10000) {
        sum += n;
        n++;
    }

    return n - 1;

}

function inSoNguyenNhoNhat(){
    var resultBai1 = timSoNguyenNhoNhat();
    document.querySelector(".result__bai1").innerHTML = `Số nguyên n nhỏ nhất là: ${resultBai1}`;
}

document.querySelector("#inSoNguyenNhoNhat").onclick = function(){
    inSoNguyenNhoNhat();
}

//bài2
function tinhTong() {
    var x = +document.getElementById('x').value;
    var n = +document.getElementById('n').value;

    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    document.querySelector(".result__bai2").innerHTML = `tổng S(${n}) là: ${sum}`;
}
document.querySelector("#tinhTong").onclick = function(){
    tinhTong();
}

//bài3
function tinhGiaiThua() {
    var n = parseInt(document.getElementById('numberGiaiThua').value);

    if ( n < 0) {
        alert("Vui lòng nhập n là số nguyên không âm");
        return;
    }

    var giaiThua = 1;

    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    document.querySelector(".result__bai3").innerHTML = `Giai thừa của ${n} là: ${giaiThua}`;
}
document.querySelector("#tinhGiaiThua").onclick = function(){
    tinhGiaiThua();
}