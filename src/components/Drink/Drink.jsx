import './Drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  const layerElm = layers.map(({ label, color }) => (
    <Layer key={label} color={color} label={label} />
  ));
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layerElm}
        </div>
      </div>
      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="1" />
        <button
          className={ordered ? 'order-btn .order-btn--ordered' : 'order-btn'}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
