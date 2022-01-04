fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach((results) => {
            document.querySelector('#results').innerHTML += `
                <div class = "results">
<img src= "${results.image}">
<h4>${results.title}</h4>
<h6>${results.price}</h6>
<p>${results.description}</p>
</div>
`;
        });
    });