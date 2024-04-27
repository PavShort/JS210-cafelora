import { Drink } from '../Drink/Drink';
import './Menu.css';

export const Menu = ({ drinks }) => {
  console.log('Menu', drinks);
  const drinkElm = drinks.map(({ id, name, ordered, image, layers }) => (
    <Drink
      key={id}
      id={id}
      name={name}
      ordered={ordered}
      image={`http://localhost:4000${image}`}
      layers={layers}
    />
  ));
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">{drinkElm}</div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
