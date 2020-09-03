const getGithub = async() => {
    try {
        const response = await fetch('https://api.github.com/users/mohamilin');
        const data = await response.json();
        const {avatar_url, login, id, public_repos, following, followers, blog, bio} = data
        document.getElementById('avatar').src = avatar_url;
        document.getElementById('name').textContent = login;
        document.getElementById('id').textContent = `No ID: ${id}`;
        document.getElementById('type2').textContent = `Total Repository : ${public_repos}`;
        document.getElementById('type4').textContent = `Followers : ${following}`;
        document.getElementById('type5').textContent = `Followers : ${followers}`;
        document.getElementById('type6').textContent = `My Blog : ${blog}`;
        document.getElementById('type7').textContent = `Bio : ${bio}`;


        

    } catch  { 
        console.log('eror')
    }
}

getGithub();