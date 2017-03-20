
var spotifyAPI = "https://api.spotify.com/v1/search"; // URL, spotify search endpoint

$('button').click(function (evt) {
  evt.preventDefault();

  var  $search= $('#search');
  var album = $search.val();  //retreive the value the user typed
  $('#albums').html('');

//JSON option as type and search album
  var spotifyOptions = {
    type: "album",
    q: album
  };

  function displayAlbumList(data) {
    var albumHTML ='';
    if(data.albums.items.length > 0){
      $.each(data.albums.items, function(i, album) {
        albumHTML += '<li><div class="album-wrap"><a href="' + album.external_urls.spotify +'">'; //<a> tag that links an album to its spotify.com listing
        albumHTML += '<img class="album-art" src="' + album.images[0].url +'"></a></div>';  // render album image
        albumHTML += '<span class="album-title">' + album.name + '</span>'; // redner album name
        albumHTML += '<span class="album-artist">' + album.artists[0].name + '</span></li>'; // render album artist
      }); // end each
      //if invalid search value, display 'No albums found'
    } else {
      albumHTML += '<li class="no-albums"><i class="material-icons icon-help">';
      albumHTML += 'help_outline</i>No albums found that match: ' + album + "</li>"
    }
      $('#albums').html(albumHTML);
  }

  $.getJSON(spotifyAPI, spotifyOptions, displayAlbumList);  // URL, DATA to send along with the URL and callback function

}); // end click
