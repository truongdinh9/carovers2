let a = [];
let b;

function inkq() {
    inketqua.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        inketqua.innerHTML += a[i].join(" ") + "<br/>";
    }
}

function kiemtra() {
    let kt = false;
    for (let i = 0; i < 5; i++)
        for (let j = 0; j < 5; j++) {
            if (j <= 2) {
                if (a[i][j] === a[i][j + 1] && a[i][j] === a[i][j + 2] && a[i][j] === b) {
                    kt = true;
                    break;
                }
            }
            if (i <= 2) {
                if (a[i][j] === a[i + 1][j] && a[i][j] === a[i + 2][j] && a[i][j] === b) {
                    kt = true;
                    break;
                }
            }
        }
    if (kt) {
        alert("Người Đánh " + b + " Thắng")
    }
}

for (let i = 0; i < 5; i++) {
    a[i] = [];
    for (let j = 0; j < 5; j++) {
        a[i][j] = "."
    }
}
inkq();

function danhx() {
    let i = parseInt(toadoi1.value) - 1;
    let j = parseInt(toadoj1.value) - 1;
    if (a[i][j] === ".") {
        a[i][j] = "x";
        inkq();
        b = "x";
        kiemtra();
    } else alert("Vui lòng đánh điểm khác")

}

function danh0() {
    let i = parseInt(toadoi2.value) - 1;
    let j = parseInt(toadoj2.value) - 1;
    if (a[i][j] === ".") {
        a[i][j] = 0;
        inkq();
        b = 0;
        kiemtra();
    } else alert("Vui lòng đánh điểm khác")

}