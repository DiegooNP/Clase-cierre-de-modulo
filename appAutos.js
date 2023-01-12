const autos = require("./concesionaria/autos");
let autosImportados = require ("./concesionaria/autos");

// const concesionaria = {

//    autos: autosImportados,
// },

//Encontrar patentes
let concesionaria = {
   autos: autosImportados,
   buscarAuto: function (patenteAuto) {
      let autoEncontrado = this.autos.find(function(auto){
         //auto.patente == patenteAuto ? auto : null
         return auto.patente == patenteAuto
      })
      return autoEncontrado ? autoEncontrado : null
   },
   venderAuto: function (patente) {
      let autoEncontrado = this.buscarAuto(patente) 
      autoEncontrado ? autoEncontrado.vendido = true : "" 
   },
   autosParaLaVenta: function () {
      let autosParaLaVenta = this.autos.filter(function (auto) {
                return !(auto.vendido)
             })
             return autosParaLaVenta
   },
   autosNuevos:function () {
      let autoNuevo = this.autosParaLaVenta.filter(function(auto) {
         
      })
   }
};

console.log(concesionaria);

//Otro ejemplo de autosParaLaVenta
// autosParaLaVenta: function () {
//    let autosParaLaVenta = this.autos.filter(function (auto) {
//       return !(auto.vendido)
//    })

// if (autos.vendido == false){
//    return auto
// }
// return autosParaLaVenta
// })