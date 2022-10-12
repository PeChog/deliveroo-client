import "./style.scss";

const Content = ({ data }) => {
  return (
    <div className="main-content container">
      {data.categories.map((category, index) => {
        return (
          <section key={index}>
            <h2>{category.name}</h2>
            {category.meals.map((meal) => {
              return (
                <article>
                  <h3>{meal.title}</h3>
                </article>
              );
            })}
          </section>
        );
      })}

      <section>le header</section>
    </div>
  );
};

export default Content;
