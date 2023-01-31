export default function Buttons({handleClick}: any) {
  return (
    <>
      <button onClick={() => handleClick("todos")}>Todos</button>
      <button onClick={() => handleClick("products")}>Products</button>
    </>
  );
}
