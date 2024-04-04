const form = document.querySelector('form');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch('http://localhost:4000/upload', {
    method: 'POST',
    body: formData
  });

  // response is a image file
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  
  const img = document.querySelector('#imagen');
  img.src = url;
});