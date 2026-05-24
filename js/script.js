function verSenha() {

  const input = document.getElementById("isenha");

  if (input.type === "password") {
    input.type = "text"
    eye.innerHTML = 'clock_loader_10'
    lock.innerHTML = 'lock_open_right';

setTimeout(() => { eye.innerHTML = 'clock_loader_20'; }, 200)  // 1s
setTimeout(() => { eye.innerHTML = 'clock_loader_40'; }, 600)  // 2s
setTimeout(() => { eye.innerHTML = 'clock_loader_60'; }, 1000)  // 3s
setTimeout(() => { eye.innerHTML = 'clock_loader_80'; }, 1400)  // 4s
setTimeout(() => { eye.innerHTML = 'clock_loader_90'; }, 1600)  // 5s
setTimeout(() => {
    input.type = "password";
    eye.innerHTML = 'vpn_key'
    lock.innerHTML = 'lock';
}, 2000) // 6s
    } 
}