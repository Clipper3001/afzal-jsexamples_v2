async function fetchData() {
  // TODO: fetch via async/await
  try {
    // 
    const response = await fetch("https://reqres.in/api/unknown", {
        headers: { "x-api-key": "reqres_11d6ee0c1eb94a648fdb77390ce0b51e" }
    });

    // handles errors gracefully
    if (response.status === 403)
      throw new Error("Permision Denied. Please confirm authentication.");
    else if (!response.ok)
      throw new Error("Network response is NOT ok.");
      
      
// takes note of the prepended keyword await
    const result = await response.json();
    console.log(result.data);

    // manages error. including custom error mesaages
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();

