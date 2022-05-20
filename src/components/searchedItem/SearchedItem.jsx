import "./searchedItem.css"

const SearchedItem = () => {
  return (
    <div className="searchedItem">
      <img src="https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580" className="siImg" alt="" />

      <div className="siDesc">
        <h1 className="siTitles">
          White Bear Villas
        </h1>
        <span className="siDistance">
          500m from center
        </span>
        <span className="siTaxiDis">Free Airport Taxi</span>
        <span className="siSubDetails">2 bhk with Air Conditioning</span>
        <span className="siFeatures">
        Entire Backyard • 1 bathroom • 21m² 2 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

  
        <div className="siDetailTexts">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
    </div>
  )
}

export default SearchedItem