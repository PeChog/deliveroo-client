import "./style.scss";

const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="content container">
        <section className="left-restaurant-section">
          <h1 className="restaurant-name">{data.restaurant.name}</h1>
          <p className="restaurant-description">
            {data.restaurant.description}
          </p>
        </section>
        <section className="right-restaurant-section">
          <img alt="restaurantPic" src={data.restaurant.picture} />
        </section>
      </div>
    </div>
  );
};

export default Restaurant;
