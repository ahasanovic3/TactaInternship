import React from "react";
import ListItemShoppingList from "../../components/listItemShoppingList";

function PocetnaStranica() {
  return (
    <div>
      <div className="flex justify-between items center bg-primary p-5">
        <h1 className="text-2xl text-white">
          Shopping List - Preview Shopping List
        </h1>
      </div>

      <div className="p-5 text-2xl text-primary text-bold">Select items </div>

      <ListItemShoppingList />
      <ListItemShoppingList />
      <ListItemShoppingList />
      <ListItemShoppingList />
      <ListItemShoppingList />
    </div>
  );
}

export default PocetnaStranica;
