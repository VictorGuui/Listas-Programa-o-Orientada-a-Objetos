"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var valor = readlineSync.question(mensagem);
        var numero = parseFloat(valor); // ou parseInt(valor, 10) se desejar um número inteiro
        return numero;
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        return readlineSync.question(mensagem);
    };
    return Entrada;
}());
exports.default = Entrada;
