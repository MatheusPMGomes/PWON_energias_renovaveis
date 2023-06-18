const mainVideo = document.getElementById("main-video");
const playButton = document.getElementById("playButton_main_video");

playButton.classList.add("hidden_button");

playButton.addEventListener("click", () => {
  playButton.classList.add("hidden_button");
});

mainVideo.addEventListener("click", () => {
  playButton.classList.add("hidden_button");
});

$(document).ready(function () {
  var videoUrl = "https://www.youtube.com/watch?v=O2NIPNC2CQQ";
  var videoId = getYoutubeID(videoUrl);
  var videoHtml =
    '<iframe width="727" height="409" src="https://www.youtube.com/embed/' +
    videoId +
    '" title="Instalação Usina Sairé (PE)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  $("#main-video").html(videoHtml).css("background", "none");
});

function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  if (id && id.length > 1) {
    id = id[1];
  } else {
    id = "";
  }
  return id;
}
$("a.youtube").each(function () {
  var id = getYoutubeID(this.href);
  this.id = id;
  var thumb_url = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
  $('<img width="100%" src="' + thumb_url + '" />').appendTo($(this.parentNode));
});

$("#video-list1").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/ahx7k0fxRVU" title="Instalação Gravatá (PE) - 28 painéis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list2").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/wPE5QoLaX2I" title="Instalação praia do sossego (PE) - 30 painéis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list3").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/vyeG80wu2EY" title="Instalação Itamaracá (PE) - 13 painéis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list4").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/RSPXIHEwPVQ" title="Video Torreão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list5").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="744" height="409" src="https://www.youtube.com/embed/2-ZEPsQip8o" title="TOQUINHO FILMAGEM INSTALAÇÃO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list6").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/khniAYfWg_o" title="Instalação Várzea" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}

$("#video-list7").on("click", function () {
  playButton.classList.add("hidden_button");
  $("#main-video")
    .html(
      '<iframe width="727" height="409" src="https://www.youtube.com/embed/O2NIPNC2CQQ" title="Instalação Usina Sairé (PE)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
function getYoutubeID(url) {
  var id = url.match("[\\?&]v=([^&#]*)");
  id = id[1];
  return id;
}
