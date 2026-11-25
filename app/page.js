
"use client";

import { useState } from "react";

const products = [
  {
    id: "NH001",
    name: "มาม่าต้มยำกุ้ง",
    price: 7,
    image: "/images/mama-tomyum.jpg",
    description: "รสต้มยำกุ้ง เข้มข้น อร่อยจัดจ้าน",
  },
  {
    id: "NH002",
    name: "ไวไวหมูสับ",
    price: 7,
    image: "/images/waiwai-pork.jpg",
    description: "รสหมูสับ หอมกลมกล่อม",
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((old) => {
      const found = old.find((item) => item.id === product.id);
      if (found) {
        return old.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...old, { ...product, qty: 1 }];
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main>
      <header className="header">
        <h1>🍜 Noodle House</h1>
        <a href="#products">เลือกซื้อสินค้า</a>
      </header>

      <section className="hero">
        <p>WELCOME TO NOODLE HOUSE</p>
        <h2>ความอร่อยที่คุณเลือกได้</h2>
        <p>บะหมี่กึ่งสำเร็จรูป อร่อยง่าย ส่งตรงถึงบ้าน</p>
        <a className="shop-button" href="#products">
          เลือกซื้อเลย
        </a>
      </section>

      <section id="products" className="products">
        <h2>สินค้าของเรา</h2>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.id}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{product.price} บาท / ซอง</strong>
              <button onClick={() => addToCart(product)}>
                เพิ่มลงตะกร้า
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>🛒 ตะกร้าสินค้า</h2>
        {cart.length === 0 ? (
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        ) : (
          cart.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty} = {item.price * item.qty} บาท
            </p>
          ))
        )}
        <h3>ยอดรวม {total} บาท</h3>
      </section>

      <footer>
        © 2026 Noodle House | อร่อยง่าย ส่งตรงถึงบ้าน
      </footer>
    </main>
  );
}
