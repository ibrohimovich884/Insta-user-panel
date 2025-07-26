import { createElement } from 'react';
import './header.css'
export async function userInfo() {
  const res = await fetch('http://localhost:3000/users/')
  const user = await res.json()

  const logo = document.getElementById('user-logo');
  const userName = document.getElementById('userName');
  const buttons = document.getElementById('buttons');
  const subice = document.getElementById('subice')
  const name = document.getElementById('name');
  const bio = document.getElementById('bio');

  logo.src = user.img;
  userName.textContent = user.userName;

  const followButton = document.createElement('button');
  followButton.innerHTML = 'Follow';
  buttons.appendChild(followButton);
  followButton.style = 'background-color: blue'
  followButton.addEventListener('click', () => {
    followButton.style.removeProperty('background-color');
  });

  const msgButton = document.createElement('button');
  msgButton.textContent = 'Messenge';
  buttons.appendChild(msgButton);

  const data = user.sub[0];
  subice.innerHTML = `<p><span>${user.posts.length}</span> Post</p>  <p><span>${data.subscrip}</span> Following</p>  <p><span>${data.subscriber}</span> Followers</p>`;

  user.bio.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    bio.appendChild(p);
  });

    const themeButton = document.getElementById('theme');
  const body = document.body;

  // 1. Yoqilgan rejimni yuklab olish
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  // 2. Tugma bosilganda almashsin
  themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}
