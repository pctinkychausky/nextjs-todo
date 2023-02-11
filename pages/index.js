import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import cx from "classnames";
import styles from "../styles/Item.module.css";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    { id: "1234", message: "Buy Mlik", done: false },
  ]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (todoItem) {
      setItems([...items, { id: uuid(), message: todoItem, done: false }]);
      setTodoItem("");
    }
  };

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) return { ...item, done: !item.done };
      return item;
    });

    setItems(_items);
  };

  return (
    <>
      <div className="w-3/4 mx-auto text-center">
        <div className="pt-12">
          <h6 className="text-s uppercase font-bold pb-4">Next.js</h6>
          <h1 className="text-5xl">Todo App</h1>
        </div>

        <div className="pt-12">
          <div>click enter to add items</div>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            className="w-full text-gray-900 px-4 py-2 text-center rounded-full"
            onKeyDown={handleEnter}
          ></input>
        </div>

        <div className="border mt-12">
          <h1 className="pt-4">ToDo</h1>
          <ul>
            {items
              .filter((item) => !item.done)
              .map(({ id, message, done }) => (
                <li
                  key={id}
                  onClick={() => handleToggle(id)}
                  className={cx("py-2", styles.item)}
                  // className={done && "done"}
                >
                  {message}
                </li>
              ))}
          </ul>
        </div>
        <div className="border mt-12">
          <h1 className="pt-4">Done</h1>

          <ul>
            {items
              .filter((item) => item.done)
              .map(({ id, message, done }) => (
                <li
                  key={id}
                  onClick={() => handleToggle(id)}
                  className={cx(styles.item, styles.done)}
                  // className={done && "done"}
                >
                  {message}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
