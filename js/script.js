$(document).ready(function(){

  // CALL TO SERVER
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {

      console.log(data.response);
      var returnToServer = data.response;
      printAlbum(returnToServer);

      },
      "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
    }
  );

  // FUNZIONE LINK HANDLEBARS
  function printAlbum(returnToServer){

    var source = $("#album-template").html();
    var template = Handlebars.compile(source);

    // CICLO DI STAMPA PER I SINGOLI DATI DI RITORNO DAL SERVER E INSERITI NEL TEMPLATE
    for (var i = 0; i < returnToServer.length; i++) {
      var album = returnToServer[i];
      var html = template(album);

      // STAMPA DATI
      $(".album-list").append(html);
    }
  }





});
