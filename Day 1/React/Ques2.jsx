import { useState } from "react";

const UNIT_PRICE = 29.99;
const DISCOUNT_THRESHOLD = 5;
const DISCOUNT_RATE = 0.1;

export default function ShoppingCartCounter() {
  const [quantity, setQuantity] = useState(0);

  const totalPrice = quantity * UNIT_PRICE;
  const hasDiscount = quantity >= DISCOUNT_THRESHOLD;
  const discountAmount = hasDiscount ? totalPrice * DISCOUNT_RATE : 0;
  const finalPrice = totalPrice - discountAmount;

  const increment = () => setQuantity(q => q + 1);
  const decrement = () =>
    setQuantity(q => (q > 0 ? q - 1 : 0));

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h3>Product</h3>
      <p>Unit Price: ${UNIT_PRICE.toFixed(2)}</p>

      <div>
        <button onClick={decrement}>−</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      {hasDiscount && (
        <p style={{ color: "green" }}>
           Bulk Discount Applied (10% OFF)
        </p>
      )}

      <p>Total: ${finalPrice.toFixed(2)}</p>
    </div>
  );
}
