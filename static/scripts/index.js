document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/concerts');
  const posts = await response.json();
  const concertContainer = document.getElementById('concert-menu');
  const gender = document.getElementById('gender');
  const language = document.getElementById('language');
  gender.addEventListener('change', fetchConcerts);
  language.addEventListener('change', fetchConcerts);
  posts.forEach(post => {
      concertContainer.innerHTML += `
        <a href="/concerts/${post._id.toString()}" class="concert_card col">
          <img src="${post.image}" class="w-100 h-75 object-fit-cover border-secondary border rounded "alt="Concert2">
          <br>
          <span class="concert-name fw-bold fs-xl">${post.name}</span>
          <br>
          <span class="text-secondary fs-sm">${post.venue} </span>
          <br>
          <span class="text-secondary fs-sm">${post.date}</span>
          <br>
          <span class="text-secondary fs-sm">${post.price}</span>
        </a>
      `;
    });
  });


async function fetchConcerts() {
const response = await fetch('/concerts/filter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      gender: gender.value,
      language: language.value
    })
  });
  const posts = await response.json();
  (posts);
  const concertContainer = document.getElementById('concert-menu');
  concertContainer.innerHTML = ``;
    posts.forEach(post => {
        concertContainer.innerHTML += `
                        <a href="/concerts/${post._id.toString()}" class="concert_card col">
                        <img src="${post.image}" class="w-100 h-75 object-fit-cover border-secondary border rounded "alt="Concert2">
                        <br>
                        <span class="concert-name fw-bold fs-xl">${post.name}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.venue} </span>
                        <br>
                        <span class="text-secondary fs-sm">${post.date}</span>
                        <br>
                        <span class="text-secondary fs-sm">${post.price}</span>
                    </a>
                `;
    });
}