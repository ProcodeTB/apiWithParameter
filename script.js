const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const result = data.find(item => item.id == id);
    document.body.innerText = JSON.stringify(result);
  });
