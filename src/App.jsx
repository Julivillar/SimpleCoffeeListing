import { useState, useEffect } from 'react'
import { Coffee } from "./components/Coffee"
/* import { getCoffees } from './Services/getCoffees' */
import axios from 'axios'
function App() {

  const [selectedAllBtn, setSelectedAllBtn] = useState('btnStyleSelected')
  const [selectedNowBtn, setSelectedNowBtn] = useState('btnStyleNotSelected')
  const [selectedBtn, setSelectedBtn] = useState('btn1')

  const [coffees, setCoffees] = useState([])


  const handleSelectedBtn = (evt) => {

    if (evt.target.id === 'btn1') {
      setSelectedAllBtn('btnStyleSelected')
      setSelectedNowBtn('btnStyleNotSelected')
      setSelectedBtn('btn1')
    } else {
      setSelectedNowBtn('btnStyleSelected')
      setSelectedAllBtn('btnStyleNotSelected')
      setSelectedBtn('btn2')
    }
  }

  const myAPI = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

  const getCoffees = () => {
    axios
      .get(myAPI)
      .then(response => {
        if (selectedBtn === 'btn2') {
          const filteredResponse = response.data.filter(coffee => 
            coffee.available !== false
          )
          console.log(filteredResponse);
          setCoffees(filteredResponse)
        }else{
          setCoffees(response.data)
        }
      })
  }

  useEffect(getCoffees, [selectedBtn])

  /*   
    useEffect(()=>{
      //ToDo: This will update the selected coffee based on the selectedBtn
        <Coffee name="House Coffee" popular={true} available={false} rating={4.2} votes={3} />
      
    },[selectedAllBtn, selectedNowBtn]) 
  */

  return (
    <>
      <div className="container">
        <div className="textContainer">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
          <div>
            <button id="btn1" onClick={handleSelectedBtn} className={selectedAllBtn}>All products</button>
            <button id="btn2" onClick={handleSelectedBtn} className={selectedNowBtn}>Available now</button>

          </div>
        </div>

        <div className="coffeesContainer">
          
          {coffees.map(coffee =>
            <Coffee key={coffee.id} name={coffee.name}
              image={coffee.image}
              price={coffee.price}
              popular={coffee.popular}
              available={coffee.available}
              rating={coffee.rating}
              votes={coffee.votes} />
          )}
          {/* <Coffee name="House Coffee" popular={true} available={false} rating={4.2} votes={3} />
          <Coffee popular={true} available={true} rating={4.2} votes={3} />
          <Coffee popular={false} available={true} rating={4.2} votes={3} />
          <Coffee popular={true} available={true} rating={4.2} votes={3} />
          <Coffee popular={true} available={false} rating={4.2} votes={3} />
          <Coffee popular={false} available={true} rating={2} votes={0} />
        */}

        </div>

      </div>


    </>
  )
}

export default App
