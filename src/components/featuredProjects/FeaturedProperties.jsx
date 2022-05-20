
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1574197634840-1ab768e4c8f9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Felix StarHotel Miasto</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1505692433770-36f19f51681d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Souline Inn</span>
        <span className="fpCity">New York</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Exceptional</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1642391326183-7a7cbe030b42?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Theory of Life Stay</span>
        <span className="fpCity">Phuket</span>
        <span className="fpPrice">Starting from $90</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1613965229190-52a35d09c60b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Team Kim Seok Jin </span>
        <span className="fpCity">Ilsan</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
