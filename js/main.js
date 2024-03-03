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
    const x = +document.getElementById('x').value;
    const n = +document.getElementById('n').value;

    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    document.querySelector(".result__bai2").innerHTML = `tổng S(${n}) là: ${sum}`;
}
document.querySelector("#tinhTong").onclick = function(){
    tinhTong();
}