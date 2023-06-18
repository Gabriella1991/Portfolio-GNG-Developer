/* function change() {
    const elements = document.querySelectorAll("div.box");
    for (const element of elements) {
      element.classList.toggle("transformed-state");
    }
  }
  
  const changeButton = document.querySelector("#change");
  changeButton.addEventListener("click", change);
 */



const form = document.getElementById('contact-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const data = { name, email, message };

  fetch('https://mail.google.com/mail/u/0/#inbox', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === 'success') {
      alert('Message sent!');
    } else {
      alert('Error sending message');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending message');
  });
});