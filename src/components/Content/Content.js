import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = ({
  data,
  addToCart,
  cart,
  removeFromCart,
  total,
  shippingCost,
  subTotal,
}) => {
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
          <div className="cart">
            <div className="valider cart-container">Valider le panier</div>
            {cart.map((meal, index) => {
              subTotal += meal.price * meal.quantity;
              total = subTotal + shippingCost;

              return (
                <div>
                  <div key={meal.id} className="selectedMeal cart-container">
                    <div className="mealClass">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <FontAwesomeIcon
                            icon="fa-solid fa-square-minus"
                            onClick={() => {
                              removeFromCart(meal);
                            }}
                            style={{
                              color: "#00cebd",
                            }}
                          />

                          <span>{meal.quantity}</span>
                          <FontAwesomeIcon
                            icon="fa-solid fa-square-plus"
                            onClick={() => {
                              addToCart(meal);
                            }}
                            style={{ color: "#00cebd" }}
                          />
                        </div>

                        <span style={{ maxWidth: "190px", marginLeft: "10px" }}>
                          {meal.title}
                        </span>
                      </div>
                      <span>{(meal.price * meal.quantity).toFixed(2)} €</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <div className="subTotal cart-container">
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Sous-total</span>
                  <span>{subTotal.toFixed(2)} €</span>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Frais de livraison</span>
                  <span>{shippingCost}0 €</span>
                </div>
              </div>

              <div className="total">
                <div>Total</div>
                <div>{total.toFixed(2)} €</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
