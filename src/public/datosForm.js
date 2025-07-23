   const form = document.getElementById('myForm');
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const data = {
       name: name,
       email: email
     };
     // ... (continuación)
   });