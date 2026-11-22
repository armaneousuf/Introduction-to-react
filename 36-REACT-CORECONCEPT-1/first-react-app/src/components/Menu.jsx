const menuItems = [
  { id: 1, name: "Burger", price: 8 },
  { id: 2, name: "Pizza", price: 12 },
  { id: 3, name: "Salad", price: 6 },
];

export default function Menu() {
  return (
    <div>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name} - ${menu.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
