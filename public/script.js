console.log("Hello from the Web App Dev lab!");

$('.ui.rating')
  .rating()
;

// App Statistics
const playlistSections = document.querySelectorAll('.playlist-item');

let totalPlaylists = playlistSections.length;
let totalSongs = 0;
let emptyPlaylists = 0;

playlistSections.forEach((playlist) => {
  const songCount = parseInt(playlist.getAttribute('data-song-count'));
  totalSongs += songCount;
  if (songCount === 0) {
    emptyPlaylists++;
  }
});

const statsDiv = document.getElementById('app-stats');
if (statsDiv) {
  statsDiv.innerHTML = `
    <p><i class="list icon"></i> Total Playlists: <strong>${totalPlaylists}</strong></p>
    <p><i class="music icon"></i> Total Songs: <strong>${totalSongs}</strong></p>
    <p><i class="folder open outline icon"></i> Empty Playlists: <strong>${emptyPlaylists}</strong></p>
  `;
}