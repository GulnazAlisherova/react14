import { useState } from "react";
function Example() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  function Add(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }
  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));
  return (
    <>
      <form onSubmit={Add}>
        <button onClick={Add}>Add</button>.
        <input
          name="item"
          type="text"
          value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
      <ol>
        {items.map((it, index) => {
          return (
            <div key={it.id}>
              <ul>
                <li>{it.name} <button onClick={deleteItem(index)}>-</button></li>
              </ul>
            </div>
          );
        })}
      </ol>
    </>
  );
}
export default Example;