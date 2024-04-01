export const Coffee = ({ popular, available, rating, votes, name = 'Default', price, image }) => {

  const cofeeImg = image || 'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg'

  return (
    <>
      <div className="coffee">
        {popular ? <PopularLabel /> : ''}

        <img src={cofeeImg} />

        <div className="coffeeTextContainer">
          <div className="nameLabelGrp">
            <label className="coffeeNameLabel">{name}</label> <span className="priceLabel">{price}</span>
          </div>

          <div className="starRatingGrp">
            <Ratings votes={votes} rating={rating}/>            
            {!available ? <SoldOutLabel /> : ''}
          </div>
        </div>

      </div>

    </>


  )
}

const PopularLabel = () => {
  return (
    <div className="popularAndImgContainer">
      <label className="popularLabel">Popular</label>
    </div>
  )
}

const SoldOutLabel = () =>{
  return (  <span className="soldOutLabel">Sold out </span> )}

const Ratings = ({rating, votes}) => {
  if(rating === null || votes === 0){
    return (
      <div>
        <img src="src\images\Star.svg" alt="" />
        <span className="votesSpan">No ratings</span>
  
      </div>
    )
  }
  return (
    <div>
      <img src="src\images\Star_fill.svg" alt="" />
      <span> {rating} </span> <span className="votesSpan">({votes} votes)</span>

    </div>
  )
}

