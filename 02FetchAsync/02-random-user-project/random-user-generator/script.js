// Our solution

// document.addEventListener('DOMContentLoaded', () => {
//     const generateButton = document.getElementById('generate');
//     const userContainer = document.getElementById('user');
    

//     generateButton.addEventListener('click', () => {
//     generateButton.querySelector('.spinner').classList.remove('hidden'); //For showing the spinner, and removing it's class 'hidden'
    
//     fetch('https://randomuser.me/api/')
//         .then(response => response.json())
//         .then(data => {
//         const user = data.results[0];
//         const maleUser = user.gender === "male";
//         const femaleUser = user.gender === "female"
//         const body = document.body;

//         if (maleUser) {
//             body.style.backgroundColor = 'steelblue';
//         } else if (femaleUser) {
//             body.style.backgroundColor = 'rebeccapurple';
//         } else { //In case the randomuser.api updated gender list
//             body.style.backgroundColor = 'white';
//         }
        
//         userContainer.innerHTML = `
//             <div class="flex justify-between">
//             <div class="flex">
//                 <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" />
//                 <div class="space-y-3">
//                 <p class="text-xl"><span class="font-bold">Name: </span>${user.name.first} ${user.name.last}</p>
//                 <p class="text-xl"><span class="font-bold">Email: </span>${user.email}</p>
//                 <p class="text-xl"><span class="font-bold">Phone: </span>${user.phone}</p>
//                 <p class="text-xl"><span class="font-bold">Location: </span>${user.location.city}, ${user.location.country}</p>
//                 <p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>
//                 <p class="text-xl"><span class="font-bold">Registered: </span> ${user.registered.date}</p>
//                 </div>
//             </div>
//             </div>
//         `;
        
//         generateButton.querySelector('.spinner').classList.add('hidden'); //For hiding the spinner, and adding it's class 'hidden'
//         })
//         .catch(error => {
//         console.error('Error fetching random user data:', error);
//         generateButton.querySelector('.spinner').classList.add('hidden'); //For hiding the spinner, and adding it's class 'hidden'
//         });
//     });
// });

// ###################################################################################################

// Sir Solution

function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    })
  }
  
  function displayUser(user) {
    const userDisplay = document.querySelector('#user')
  
    if (user.gender === 'female') {
      document.body.style.backgroundColor = 'rebeccapurple';
    } else {
      document.body.style.backgroundColor = 'steelblue';    
    }
  
    userDisplay.innerHTML = `
    <div class="flex justify-between">
            <div class="flex">
              <img
                class="w-48 h-48 rounded-full mr-8"
                src="${user.picture.large}"
              />
              <div class="space-y-3">
                <p class="text-xl">
                  <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Email: </span> ${user.email}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Phone: </span> ${user.phone}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
                </p>
                <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
              </div>
            </div>
          </div>
    `;
  }
  
  function showSpinner() {
    document.querySelector('.spinner').style.display = 'block'  
  }
  
  function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none'  
  }
  
  document.querySelector('#generate').addEventListener('click', fetchUser)
  
  fetchUser();