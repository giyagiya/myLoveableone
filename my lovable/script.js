let hideTimeout;
function showNo(btn) {
  const reaction = document.getElementById('reaction');
  reaction.innerHTML = 'Why Julfa, why? 😜';
  reaction.classList.remove('hidden');
  document.getElementById('confetti').classList.add('hidden');

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    reaction.classList.add('hidden');
    reaction.innerHTML = '';
  }, 2000);

  let b = btn;
  const rect = b.getBoundingClientRect();
  const original = {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };
  b.classList.add('animating');
  b.style.left = `${original.left}px`;
  b.style.top = `${original.top}px`;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const margin = 40;
  const maxLeft = vw - original.width - margin;
  const maxTop = vh - original.height - margin;
  const randLeft = Math.floor(Math.random() * (maxLeft - margin) + margin);
  const randTop = Math.floor(Math.random() * (maxTop - margin) + margin);
  const randRot = Math.floor(Math.random() * 720 - 360);
  setTimeout(() => {
    b.style.transform = `rotate(${randRot}deg)`;
    b.style.left = `${randLeft}px`;
    b.style.top = `${randTop}px`;
  }, 20);

  setTimeout(() => {
    b.style.transform = 'rotate(0deg)';
    b.style.left = `${original.left}px`;
    b.style.top = `${original.top}px`;
  }, 2020);

  setTimeout(() => {
    b.classList.remove('animating');
    b.style.left = '';
    b.style.top = '';
    b.style.transform = '';
  }, 2720);
}

function showYes() {
  const reaction = document.getElementById('reaction');
  reaction.innerHTML = `
    <img class="happy-gif" src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Happy Love GIF" />
    <div class="love-message">I love you 💖</div>
    
  `;
  reaction.classList.remove('hidden');
  clearTimeout(hideTimeout);

  const confetti = document.getElementById('confetti');
  confetti.classList.remove('hidden');
  confetti.style.top = '-30px';
  confetti.style.opacity = '1';
  confetti.animate([
    { top: '-30px', opacity: 1 },
    { top: '90vh', opacity: 0 }
  ], {
    duration: 2000,
    fill: 'forwards'
  });
  setTimeout(() => confetti.classList.add('hidden'), 2000);
}