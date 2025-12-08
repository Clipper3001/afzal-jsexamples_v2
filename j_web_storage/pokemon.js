function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1328&limit=5')              /* ? is a query parameter.if offset is present = offset skips the number https://pokeapi.co/api/v2/pokemon?offset=5&limit=5   */
        .then(response => {                                         /*  obtain response and return the json format */
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return response.json();
        })

        .then(data => {                                             /* work on the json format  */
            // console.log(data);
            const returnedCharacters = data.results;
            // 
            if (!returnedCharacters.length) 
                throw new Error('Network response was not ok');
            console.log(data)
        })
        
        .catch(error => {                                           /* error handling */
            console.error('Error:', error);
        });
}

fetchData();