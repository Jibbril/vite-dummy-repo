import { useEffect, useState } from "react";
import { useItems, useSwrItems } from "./hooks";
import { Todo, Product } from "./Interfaces";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

// Standard fetch implementation with useEffect
export function List1() {
  const [itemType, setItemType] = useState("todos");
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleItems(itemType);
  }, [itemType]);

  const handleItems = (type: string) => {
    fetch(`https://dummyjson.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        if (type === "todos") setItems(data.todos.slice(0, 5));
        else if (type === "products") setItems(data.products.slice(0, 5));
      });
  };

  return (
    <div>
      <button onClick={() => setItemType("todos")}>Todos</button>
      <button onClick={() => setItemType("products")}>Products</button>
      <ul>
        {itemType === "todos" &&
          items &&
          items.map(({ todo, id }: Todo) => <li key={id}>{todo}</li>)}
        {itemType === "products" &&
          items &&
          items.map(({ title, id }: Product) => <li key={id}>{title}</li>)}
      </ul>
    </div>
  );
}

// Break out the fetch into a custom hook
export function List2() {
  const [itemType, setItemType] = useState("todos");
  const items = useItems(itemType);

  return (
    <div>
      <button onClick={() => setItemType("todos")}>Todos</button>
      <button onClick={() => setItemType("products")}>Products</button>
      <ul>
        {itemType === "todos" &&
          items &&
          items.map(({ todo, id }: Todo) => <li key={id}>{todo}</li>)}
        {itemType === "products" &&
          items &&
          items.map(({ title, id }: Product) => <li key={id}>{title}</li>)}
      </ul>
    </div>
  );
}

// Use swr to handle the fetch
export function List3() {
  const [itemType, setItemType] = useState("todos");
  const { items, isLoading } = useSwrItems(itemType);
  console.log(items);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <button onClick={() => setItemType("todos")}>Todos</button>
      <button onClick={() => setItemType("products")}>Products</button>
      <ul>
        {itemType === "todos" &&
          items &&
          items.todos.map(({ todo, id }: Todo) => <li key={id}>{todo}</li>)}
        {itemType === "products" &&
          items &&
          items.products.map(({ title, id }: Product) => (
            <li key={id}>{title}</li>
          ))}
      </ul>
    </div>
  );
}

// Use react query to handle the fetch
export function List4() {
  const [itemType, setItemType] = useState("todos");
  const { isLoading, error, data, isFetching } = useQuery(itemType, () =>
    fetch(`https://dummyjson.com/${itemType}?limit=5`).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <button onClick={() => setItemType("todos")}>Todos</button>
      <button onClick={() => setItemType("products")}>Products</button>
      <ul>
        {itemType === "todos" &&
          data.todos.map(({ todo, id }: Todo) => (
            <li key={id}>{todo}</li>
          ))}
        {itemType === "products" &&
          data.products.map(({ title, id }: Product) => (
            <li key={id}>{title}</li>
          ))}
      </ul>
    </>
  );
}
