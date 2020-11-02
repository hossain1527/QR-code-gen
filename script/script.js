// let qrcd = document.querySelector("img")
// let qrtxt = document.querySelector("textarea")
// let qrbtn = document.querySelector("button")
// Or we can use a function to avoid writing queryselector again and again

let qrcd = selector("img");
let qrtxt = selector("textarea");
let qrbtn = selector("button");

qrbtn.addEventListener("click", generateCode);

function generateCode() {
  let size = "1000x1000";
  let data = qrtxt.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";
  let setUrl = `${baseURL}?data=${data}&size=${size}`;

  qrcd.src = setUrl;
}

function selector(item) {
  return document.querySelector(item);
}
