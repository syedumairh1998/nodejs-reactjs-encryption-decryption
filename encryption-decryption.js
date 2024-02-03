import CryptoJS from "crypto-js";
var ciphertext = CryptoJS.AES.encrypt(
  JSON.stringify({ name: "Umair" }),
  "my-secret-key@123"
).toString();
// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, "my-secret-key@123");
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log("======================>", ciphertext);
console.log("======================>", decryptedData);
