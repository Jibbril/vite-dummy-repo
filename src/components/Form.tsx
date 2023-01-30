import { useState, ChangeEvent } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

export function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  return (
    <div>
      <h1>Test form 1</h1>
      <form className="form">
        <Input name="name" value={name} onChange={handleName} type="text" />
        <Input name="email" value={email} onChange={handleEmail} type="email" />
        <TextArea name="message" value={message} onChange={handleMessage} />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export function Form2() {
  const [entries, setEntries] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleValue = (e: { name: string; value: string }) => {
    setEntries({ ...entries, [e.name]: e.value });
  };

  const getValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => ({
    name: e.target.name,
    value: e.target.value,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleValue(getValue(e));
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleValue(getValue(e));
  };

  return (
    <div>
      <h1>Test form 2</h1>
      <form className="form">
        <Input
          name="name"
          onChange={handleInput}
          type="text"
          value={entries.name}
        />
        <Input
          name="email"
          onChange={handleInput}
          type="email"
          value={entries.email}
        />
        <TextArea
          name="message"
          onChange={handleTextArea}
          value={entries.message}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export function Form3() {
  const [entries, setEntries] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setEntries({
      ...entries,
      name: e.target.value,
    });
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEntries({
      ...entries,
      email: e.target.value,
    });
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEntries({
      ...entries,
      message: e.target.value,
    });

  return (
    <div>
      <h1>Test form 3</h1>
      <form className="form">
        <Input
          name="name"
          value={entries.name}
          onChange={handleName}
          type="text"
        />
        <Input
          name="email"
          value={entries.email}
          onChange={handleEmail}
          type="email"
        />
        <TextArea
          name="message"
          value={entries.message}
          onChange={handleMessage}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
