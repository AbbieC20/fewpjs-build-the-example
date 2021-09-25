// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.getElementsByClassName('like-glyph')

for (const element of likeButtons) {
  element.addEventListener('click', (event) => {
    mimicServerCall()
      // Run the below if mSC provides resolved / positive reponse
      // the below () is empty as we are simply stating that the below function doesn't need to take any parameters in
      .then(() => {
        if (event.target.innerText === EMPTY_HEART) {
          event.target.innerText = FULL_HEART
          event.target.classList.toggle("activated-heart", true)
        } else {
          event.target.innerText = EMPTY_HEART
          event.target.classList.toggle("activated-heart", false)
        }
      })
      .catch(error => {
        const modalElement = document.getElementById('modal')
        const modalMessage = document.getElementById('modal-message')
        modalElement.classList.toggle('hidden', false)
        modalMessage.innerText = error
        setTimeout(() => {
          modalElement.classList.toggle('hidden', true)
          modalMessage.innerText = ""
        }, 3000)
      })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
