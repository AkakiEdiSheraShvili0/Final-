// var postBtn = document.createElement('button')
//     postBtn.setAttribute('class', 'aaa')
//     postBtn.innerText = "User Posts";
    // postBtn.addEventListener('click', postBtnClick )

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(response => {
    for (var i = 0; i < response.length; i++) {
        let button = document.createElement('button');
      button.setAttribute('id', response[i].id);
      button.setAttribute('class', 'user');
      button.innerText = response[i].name;
      document.body.appendChild(button);
    }
    document.addEventListener('click', function(e) {
      if (e.target && e.target.className == 'user') {
        fetchUser(e.target.id);
      }
    });
  });

  var postBtn = document.createElement('button')
  postBtn.setAttribute('class', 'aaa')
  postBtn.innerText = "User Posts";
  // postBtn.addEventListener('click', postBtnClick )
function fetchUser(userId) {
  fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(data => data.json())
    .then(response => {
      document.querySelector('.user-info').appendChild(postBtn);
      document.querySelector('.user_info').innerText =
        'ID: ' +
        response.id +
        '\n' +
        'name: ' +
        response.name +
        '\n' +
        'phone: ' +
        response.phone +
        '\n' +
        'username: ' +
        response.username +
        '\n' +
        'website: ' +
        response.website +
        '\n';
      'email: ' + response.email + '\n' + 'company: ' + response.company + '\n';
    });
};




/////////////////////////////////////////////////////
///////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/users")
    .then (data => data.json())
    .then (response => {
        // console.log(response);
        
        for ( var i = 0; i < response.length; i ++) {
            let button = document.createElement('button');
            button.setAttribute('id', response[i].id);
            button.setAttribute('class', 'user');
            // davamate atributi
            button.innerText = response[i].name;
            document.querySelector(".user-list").appendChild(button);
        }
        // document.querySelector(".user").addEventListener('click', fetchUser('asdasd'))
        document.addEventListener('click', function(e){
            if(e.target && e.target.className == 'user'){
                fetchUser(e.target.id)  
            }    
            
        });
    });


var postBtn = document.createElement('button')
    postBtn.setAttribute('class', 'aaa')
    postBtn.innerText = "User Posts";
    postBtn.addEventListener('click', postBtnClick )

function fetchUser(userId){
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then (data => data.json())
    .then (response => 
    {
        document.querySelector(".user-info").appendChild(postBtn);
        document.querySelector(".user_info").innerText = "ID: " + response.id + "\n" +
        "name: " + response.name + "\n" + "phone: " + response.phone + "\n" + 
        "username: " + response.username + "\n" + "website: " + response.website + "\n"
        "email: " + response.email + "\n" + "company: " + response.company + "\n";
    }
    )
};

// function createUserElement(){
//     for ( var i = 0; i < response.length; i ++) 
//     {
//         let button = document.createElement('button');
//         button.setAttribute('id', response[i].id);
//         button.setAttribute('class', 'user');
//         // davamate atributi
//         button.innerText = response[i].name;
//         document.querySelector(".user-list").appendChild(button);
//     }
// }


//    ////////////////////////////////////////////////////////////////////////
function postBtnClick() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then (data => data.json())
    .then (resp => {
        console.log(resp.title);
        // let p = document.createElement('p');
            document.querySelector(".user_post").innerText = 'ID ' + resp.title;
            console.log(resp    );
            // document.querySelector('.user-posts').appendChild(p);
        // for (var i = 0; i < res.length; i++) {
        //     let p = document.createElement('p')
        //     p.setAttribute('id', res[i].id);
        //     p.setAttribute('class', 'post');
        //     p.innerText = res[i].title;
        //     document.querySelector('.user-posts').appendChild(p);
        

        // }
        
    })
}





// for ( var i = 0; i < response.length; i ++) {
//     let button = document.createElement('button');
//     button.setAttribute('id', response[i].id);
//     button.setAttribute('class', 'user');
//     // davamate atributi
//     button.innerText = response[i].name;
//     document.querySelector(".user-list").appendChild(button);
// }
// // document.querySelector(".user").addEventListener('click', fetchUser('asdasd'))
// document.addEventListener('click', function(e){
//     if(e.target && e.target.className == 'user'){
//         fetchUser(e.target.id)  
//     }    
    
// });



// fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json)
    
//     // {
//     //     let button = document.createElement('button');
//     //     button.setAttribute('id', response[i].id);
//     //     button.setAttribute('class', 'user');
//     //     // davamate atributi
//     //     button.innerText = response[i].name;
//     //     document.querySelector(".user-list").appendChild(button);
//     // }
//   })

// document.addEventListener('click', function(e){
//     if(e.target && e.target.className == 'user'){
//         fetchUser(e.target.id)  
//     }    
    
// });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then (data => data.json())
//     .then (res => {
//         console.log(res);
//         // document.addEventListener('click', function(e){
//         //     if(e.target && e.target.className == 'user'){
//         //         fetchUser(e.target.id)  
//         //     }    
            
//         // });

//     })

///////////////////////////////////////////////////
///////////////////////////////////////////////////