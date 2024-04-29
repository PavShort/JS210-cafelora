import { OrderItem } from '../OrderItem/OrderItem';

export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="order__content container">
        <h1>Vaše objednávka</h1>
        <p className="empty-order">
          Zatím nemáte nic objednáno
        </p>
        <div className="order__items">
          {items.map((item) => {
            return (
              <OrderItem key={item.id} name={item.name} image={item.image} />
            );
          })}
        </div>
      </div>
    </main>
  );
};
