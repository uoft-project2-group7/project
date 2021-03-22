async function commentFormHandler(event) {
  event.preventDefault();

  const playerName = document.querySelector('textarea[name="player-body"]').value.trim();

  // const post_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  if (playerName) {
      const response = await fetch('/api/player', {
        method: 'POST',
        body: JSON.stringify({
          nhl_id,
          full_name,
          position
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);