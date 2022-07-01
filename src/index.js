module.exports = function reverse (n) {
    let str = String(n);
    let arr = str.split("");
    arr.map((num) => {if(Math.sign(num) == -1){num = +num}});
    let arrev = arr.reverse();
    let revstr = arrev.join("");
    let del = revstr.replace(/-/g, "");
    return Number(del);
}

