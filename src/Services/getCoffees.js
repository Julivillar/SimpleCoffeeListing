import axios from 'axios'

const myAPI = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'


export const getCoffees = () => {
    const myCoffees = axios
        .get(myAPI)
        .then(response => response)
    return myCoffees
} 

    /* res.then(coffees => {
      coffees.map( coffee => {
        console.log('dentro del map',coffee);
        <Coffee key={coffee.id}
        image={coffee.image}
        price={coffee.price}
        name={coffee.name} 
        popular={coffee.popular} 
        available={coffee.available} 
        rating={coffee.rating}
        votes={coffee.votes} />
      })
    }) */