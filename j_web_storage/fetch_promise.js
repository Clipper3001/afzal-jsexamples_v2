function fetchData() {
  // TODO: fetch via promise
  fetch('https://reqres.in/api/unknown', {
    headers: { 'x-api-key': 'reqres_11d6ee0c1eb94a648fdb77390ce0b51e' }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchData();