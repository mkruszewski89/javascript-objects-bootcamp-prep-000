var playlist = {
  Prince : 'When Doves Cry'
}

function updatePlaylist(object, artist, title) {
  return object.assign({}, object, { [artist]: title })
}

function removeFromPlaylist(object, artist) {
  delete object.artist
  return object
}