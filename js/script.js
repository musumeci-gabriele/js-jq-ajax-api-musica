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

  function printAlbum(returnToServer){
    var source = document.getElementById("album-template").innerHTML;
    var template = Handlebars.compile(source);

    for (var i = 0; i < returnToServer.length; i++) {
      var album = returnToServer[i];
      var html = template(album);

      $(".album-list").append(html);
    }
  }





});
