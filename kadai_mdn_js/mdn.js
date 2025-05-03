var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1; // JavaScriptでの月は0から11までなので+1する必要があります。
var day = today.getDate();

console.log(year + '年' + month + '月' + day + '日');