let a=[];
function inkq() {
    inketqua.innerHTML="";
    for (let i=0;i<5;i++){
        inketqua.innerHTML+=a[i].join(" ")+"<br/>";
    }
}
for (let i=0; i<5;i++){
    a[i]=[];
    for (let j=0;j<5;j++){
        a[i][j]="."
    }
}
inkq();
function danhx() {
    let i=parseInt(toadoi1.value)-1;
    let j=parseInt(toadoj1.value)-1;
    a[i][j]="x";
    inkq();

}
function danh0() {
    let i=parseInt(toadoi2.value)-1;
    let j=parseInt(toadoj2.value)-1;
    a[i][j]=0;
    inkq();

}