const vue = new Vue({
 el:'#app',
 data:{
  listaDatos : []
 },
 created(){
  this.getLista()
 },
 methods:{
  recargar(){
   console.log("recargando");
   this.getLista()
  },
getLista(){
 // id de la hoja de calculo
 idSheets = '1sbZtJvR5q_1rdDF34sWNaylH-1j_41gSCgEYYZRRIU8';
 //// nuestra      APIKey
 apiKey = 'AIzaSyDL9yj6t6e5P0d-YVmbx9ms4VmoOE_l2E4'; 
 // rango de la hoja de calculo que queremos leer
 values = 'A2:AZ100';
// fetch es un método nativo para hacer peticiones http
// en el navegador 
 fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/A2:AZ100?access_token="+ apiKey +"&key="+  apiKey)
.then((lista)=>{
  return lista.json()
}).then((valores)=>{
  this.listaDatos = valores.values
}).catch(err=>{
  console.log(err);
})
} // fin funcion getLista()
} // fin methods
}) // fin instancia
