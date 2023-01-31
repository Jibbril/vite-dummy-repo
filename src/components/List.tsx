import { useEffect, useState } from "react";
import { useItems, useSwrItems } from "./hooks";
import { Todo, Product } from "./Interfaces";
import { useQuery } from "react-query";
import Buttons from "./Buttons";
import ListItems from "./ListItems";

// Standard fetch implementation with useEffect
export function List1() {
  const [itemType, setItemType] = useState("todos");
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleItems(itemType);
  }, []);

  const handleItems = (type: string) => {
    fetch(`https://dummyjson.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        if (type === "todos") {
            setItems(data.todos.slice(0, 5));
            setItemType("todos");
        }
        else if (type === "products") {
            setItems(data.products.slice(0, 5))
            setItemType("products");
        };
      });
  };

  return (
    <div>
      <h2>Standard fetch</h2>
      <Buttons handleClick={handleItems} />
      <ListItems items={items} itemType={itemType} />
    </div>
  );
}

// Break out the fetch into a custom hook
export function List2() {
  const [itemType, setItemType] = useState("todos");
  const items = useItems(itemType);

  return (
    <div>
      <h2>Custom Hook</h2>
      <Buttons handleClick={setItemType} />
      <ListItems items={items} itemType={itemType} />
    </div>
  );
}

// Use swr to handle the fetch
export function List3() {
  const [itemType, setItemType] = useState("todos");
  const { items, isLoading } = useSwrItems(itemType);

  if (isLoading) return <div>Loading...</div>;

  const specifiedItems = itemType === "todos" ? items.todos : items.products;

  return (
    <div>
      <h2>SWR</h2>
      <Buttons handleClick={setItemType} />
      <ListItems items={specifiedItems} itemType={itemType} />
    </div>
  );
}

// Use react query to handle the fetch
export function List4() {
  const [itemType, setItemType] = useState("todos");
  const { isLoading, data } = useQuery(itemType, () =>
    fetch(`https://dummyjson.com/${itemType}?limit=5`).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  const specifiedItems = itemType === "todos" ? data.todos : data.products;

  return (
    <>
      <h2>React Query</h2>
      <Buttons handleClick={setItemType} />
      <ListItems items={specifiedItems} itemType={itemType} />
    </>
  );
}
