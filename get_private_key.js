var keythereum = require("keythereum");
var datadir = "D:/geth-private-blockchains/node1"; // Update to the correct path to your keystore
var address = "0xc39afd01fad36e14ed7b4507b0d31d7c72aba55f";
const password = "1234";

var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString("hex"));

