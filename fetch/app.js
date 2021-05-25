
fetch("https://jsonplaceholder.typicode.com/users")
.then (data => data.json())
.then (response => {
    
    for ( var i = 0; i < response.length; i ++) {
        let button = document.createElement('button');
        button.setAttribute('id', response[i].id);
        button.setAttribute('class', 'user-item btn btn-outline-dark');
        button.innerText = response[i].name;
        document.querySelector(".user-list").appendChild(button);;

    }
    document.addEventListener('click', function(e){
        if(e.target && e.target.className.includes('user-item')){
            document.querySelector(".user-posts").innerHTML = "";
            
            fetchUser(e.target.id) 
        }    

        
    });
});
    
    document.querySelector('.fetch-post-btn').addEventListener('click', postBtnClick )


function fetchUser(userId){
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then (data => data.json())
    .then (response => 
    {   
        document.querySelector('.user-info-title').innerText = response.name;
        document.querySelector(".user-info").classList.add("user-info--show");
        console.log();
        document.querySelector('.fetch-post-btn').setAttribute('id', userId);

        document.querySelector(".user_info").innerText = "ID: " + response.id + "\n" +
        "name: " + response.name + "\n" + "phone: " + response.phone + "\n" + 
        "username: " + response.username + "\n" + "website: " + response.website + "\n"
        "email: " + response.email + "\n" + "company: " + response.company + "\n";
    }
    )

};



function postBtnClick() {

    const userId = document.querySelector('.fetch-post-btn').getAttribute('id');
    console.log(userId);
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then (data => data.json())
    .then (resp => {
        document.querySelector(".user-info").classList.remove("user-info--show");
            for ( var i = 0; i < resp.length; i ++) {
                let div = document.createElement('div');
                div.innerHTML = `
                <div class='card w-75 user-post'>
                    <div class="card-body ">
                        <h5 class="card-title">${resp[i].title}</h5>
                        <p class="card-text">${resp[i].body}</p>
                    </div>
                </div>`;
                document.querySelector(".user-posts").appendChild(div);

            }
        
    })
}