
// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6" fill="#ff80ab" width="24" height="24">
      <path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,10.2,13.2,15.1,18.7c0.6,0.7,1.7,0.7,2.3,0
        C21.8,23.6,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z"/>
    </svg>`;
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 500);
