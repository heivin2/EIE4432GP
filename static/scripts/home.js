/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

  document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/auth/me').then(
    res =>{
      console.log(res);
      if (res.status == 401){
        alert("Please login!");
        return;
      }
      else if (res.status == 200){
        return res.json();
      }
      else {
        return;
      }
    }).then(data => {
      console.log(data);
      userProfile(data.user);
      const logout = document.getElementById("logout");

      logout.addEventListener('click', async () => {
      console.log("clickee");
      if (confirm("Confirm to logout?")) {
        await fetch('/auth/logout').then(res => {
        console.log('Status:', res.status);
        window.location.href = '/login.html'
});
  } else {
    return;
  }
  });

  });

  });
  function userProfile(data){
  const userData = data; 
  console.log(data);
  
  let username = userData.username;
  let role = userData.role;
  let userProfile = document.getElementById("user");
  userProfile.innerHTML = `<h1>Welcome, ${username} ${role}</h1><button id="logout" class="btn btn-danger">logout</button>`;
}
