const first = document.getElementById('first');

async function profile(){
    try {
    const response = await fetch("https://api.github.com/users");
    
     if(!response.ok){
        throw new Error('data is not present');
     }

    const data = await response.json();

    for(let i of data){
        const element  = document.createElement("div");
        element.classList.add('user');

        const image = document.createElement("img");
        image.src = i.avatar_url;

        let user_name = document.createElement('h2');
        user_name.textContent = i.login;

        const vist = document.createElement('a')
        vist.href = i.html_url;
        vist.textContent = 'vist profile';

        element.append(image,user_name,vist);
        first.append(element);
    }

}
catch(error){
    console.log(error);
}
   
}

const response = profile();
console.log(response);