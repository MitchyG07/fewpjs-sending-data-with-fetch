// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configurationObject = {
//     method: "POST",
//     headers: { 
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)        
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad things! Ragnarők!")
//         console.log(error.message)
//     })

let body = document.querySelector('body')
let div = document.createElement('div')

function submitData() {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(formData)
    }

   return fetch("http://localhost:3000/users",configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            div.textContent = object.id
            body.appendChild(div)
        })
        .catch(function(error){
            alert("come one brotha don't break it")
            console.log(error.message)
            div.textContent = error.message
            body.appendChild(div)
        })
}