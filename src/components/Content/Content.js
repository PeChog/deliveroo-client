import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = ({ data, addToCart, cart, removeFromCart, total }) => {
  return (
    <div className="container">
      <div className="main">
        <div className="main-left">
          {data.categories.map((category, index) => {
            return (
              category.meals.length > 0 && (
                <section key={index}>
                  <h2 className="category">{category.name}</h2>
                  <div className="meals-container">
                    {category.meals.map((meal, num) => {
                      total = total + meal.price;
                      return (
                        <article
                          key={num}
                          className={"meal"}
                          onClick={() => {
                            addToCart(meal);
                          }}
                        >
                          <div className="card">
                            <div className="cardInfos">
                              <h3>{meal.title}</h3>
                              <p
                                style={{ color: "#868a8a", fontWeight: "300" }}
                              >
                                {meal.description}
                              </p>
                              <div className="pricePopular">
                                <div>{meal.price} €</div>
                                {meal.popular && (
                                  <>
                                    <FontAwesomeIcon
                                      icon="fa-solid fa-star"
                                      style={{ color: "#FF8001" }}
                                    />
                                    <div
                                      style={{
                                        color: "#FF8001",
                                        height: "10px",
                                        width: "10px",
                                        fontSize: "15px",
                                        marginTop: "1px",
                                      }}
                                    >
                                      Populaire
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            {!meal.picture ? null : (
                              <img alt="pic" src={meal.picture} />
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              )
            );
          })}
        </div>

        <section className="main-right">
          {cart.map((meal, index) => {
            return (
              <div key={meal.id}>
                <div>
                  <button
                    onClick={() => {
                      removeFromCart(meal);
                    }}
                  >
                    -
                  </button>
                  <span>{meal.quantity}</span>
                  <button
                    onClick={() => {
                      addToCart(meal);
                    }}
                  >
                    +
                  </button>
                </div>

                <span>{meal.title}</span>
                <span>{meal.price * meal.quantity} €</span>
                <div>{total}</div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Content;
