const APIURL="https://api.github.com/users/"
const main=document.querySelector("#main")


const getVal=()=>{
    const inputStr=document.getElementById('search').value;
    console.log(inputStr)
    getUser(inputStr)
}
const getUser=async(username)=>{
    
    const response=await fetch(APIURL +username);
    const data=await response.json();
    if(!(data.message =='Not Found')){
    const card =` <div class="card">
    <div>
        <img src="${data.avatar_url}" alt="">
    </div>
    <div class="user-info">
        <h2>${data.login}</h2>
        <p>${data.bio}</p>

        <ul class="info">
            <li>${data.followers} Followers</li>
            <li>${data.following} Following</li>
            <li>${data.public_repos} Repos</li>
           
        </ul>
    </div>
</div>`
main.innerHTML=card;
    }
}


// Theme Changing 
const theme=document.getElementById('theme');
localStorage.setItem("theme", "light");
theme.addEventListener('click',function(){
    if(localStorage.getItem('theme') =='dark'){
         main.classList.remove('dark-theme');
        main.classList.add('light-theme');
        localStorage.setItem("theme",'light')
        console.log("in light")
    }
   
    else{
        main.classList.remove('light-theme');
        main.classList.add('dark-theme');
        localStorage.setItem("theme",'dark')
    }
})