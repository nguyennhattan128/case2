let stt = 400;
let nam,thang,ngay;
// nam = Math.floor((stt/365));
// console.log(nam);
// thang = Math.floor((stt-nam*365)/30)
// console.log(thang);
// ngay = stt -nam*365 - thang*30
// console.log(ngay);
console.log('nam' + Math.floor(stt/365) );
console.log('thang' + Math.floor(stt%365/30) );