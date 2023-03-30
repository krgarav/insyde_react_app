import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [sortOrder, setSortOrder] = useState("ascending");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const changeOrderHandler = () => {
    setSortOrder((prev) => {
      if (prev === "ascending") {
        return "decending";
      } else {
        return "ascending";
      }
    });
  };
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList sortState={sortOrder} title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        {" "}
        {sortOrder === "ascending"
          ? "Change to decending Order"
          : "Change to ascending Order"}
      </Button>
    </div>
  );
}

export default App;
