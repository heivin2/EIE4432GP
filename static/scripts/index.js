  document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/concertlist');
    const posts = await response.json();
    const concertContainer = document.getElementById('concert-menu');
    posts.forEach(post => {
      concertContainer.innerHTML += `
        <a href="${post.image_url}" class="concert_card col">
          <img src="${post.image_url}" class="w-100 h-75 object-fit-cover border-secondary border rounded "alt="Concert2">
          <br>
          <span class="concert-name fw-bold fs-xl">${post.name}</span>
          <br>
          <span class="text-secondary fs-sm">${post.location} </span>
          <br>
          <span class="text-secondary fs-sm">${post.date}</span>
          <br>
          <span class="text-secondary fs-sm">${post.price}</span>
        </a>
      `;
    });
  });

const gender = document.getElementById('gender');
const language = document.getElementById('language');
gender.addEventListener('change', async () => {
let filter_string = `WHERE gender = '${gender.value}' AND language = '${language.value}'`;
filter_string = filter_string.replace(/= ''/g, "IS NOT NULL");
const response = await fetch('/concertlist/filter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: filter_string
    })
  });
  const posts = await response.json();
  const concertContainer = document.getElementById('concert-menu');
  concertContainer.innerHTML = ``;
    posts.forEach(post => {
        concertContainer.innerHTML += `
                        <a href="${post.image_url}" class="concert_card col">
                        <img src="${post.image_url}" class="w-100 h-75 object-fit-cover border-secondary border rounded "alt="Concert2">
                        <br>
                        <span class="concert-name fw-bold fs-xl">${post.name}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.location} </span>
                        <br>
                        <span class="text-secondary fs-sm">${post.date}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.price}</span>
                    </a>
                `;
    });
});

language.addEventListener('change', async () => {
let filter_string = `WHERE gender = '${gender.value}' AND language = '${language.value}'`;
filter_string = filter_string.replace(/= ''/g, "IS NOT NULL");
const response = await fetch('/concertlist/filter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: filter_string
    })
  });
  const posts = await response.json();
  console.log(posts);
  const concertContainer = document.getElementById('concert-menu');
  concertContainer.innerHTML = ``;
    posts.forEach(post => {
        concertContainer.innerHTML += `
                        <a href="${post.image_url}" class="concert_card col">
                        <img src="${post.image_url}" class="w-100 h-75 object-fit-cover border-secondary border rounded "alt="Concert2">
                        <br>
                        <span class="concert-name fw-bold fs-xl">${post.name}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.location} </span>
                        <br>
                        <span class="text-secondary fs-sm">${post.date}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.price}</span>
                    </a>
                `;
    });
});