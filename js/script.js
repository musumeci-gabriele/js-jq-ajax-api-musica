$(document).ready(function(){
  alert("ciao");

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
      console.log(data.response);
      },
      "error": function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
    }
  );



});
