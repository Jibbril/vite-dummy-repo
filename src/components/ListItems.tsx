import { Product, Todo } from "./Interfaces";

export default function ListItems({itemType, items}: any) {
  return (
    <ul>
      {itemType === "todos" &&
        items &&
        items.map(({ todo, id }: Todo) => <li key={id}>{todo}</li>)}
      {itemType === "products" &&
        items &&
        items.map(({ title, id }: Product) => <li key={id}>{title}</li>)}
    </ul>
  );
}
