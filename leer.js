const vue = new Vue({
  el: '#app',
  data: {
    listaDatos: []
  },
  created() {
    this.getLista()
  },
  methods: {
    recargar() {
      console.log("recargando");
      this.getLista()
    },
    getLista() {
      // id de la hoja de calculo
      idSheets = '1CNZhgEz1aEzoRA32rtS87iArFlomyl6noKIQPH0HTec';
      //// nuestra      APIKey
      apiKey = 'AIzaSyBqN-fDN62EuWBTww5EXdx1nNA9EsqHgSo';
      // rango de la hoja de calculo que queremos leer
      values = 'A3:N32';
      // fetch es un método nativo para hacer peticiones http
      // en el navegador 
      fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" + idSheets + "/values/A2:AZ100?access_token=" + apiKey + "&key=" + apiKey)
        .then((lista) => {
          return lista.json()
        }).then((valores) => {
          this.listaDatos = valores.values
          console.log(this.listaDatos,'datos')
        }).catch(err => {
          console.log(err);
        })
    } // fin funcion getLista()
  } // fin methods
}) // fin instancia
