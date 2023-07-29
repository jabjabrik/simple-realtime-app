const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get('username')
const room = urlParams.get('room')

console.log({ username, room }); 