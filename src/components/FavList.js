import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFav } from "../slices/FavSlice";

function FavList() {
  const fav = useSelector((state) => state.fav.data);
  const dispatch = useDispatch();
  let body = {
    id: 4,
    name: "deneme",
  };
  console.log(fav);
  return (
    <>
      <div>
        {fav.map((item) => (
          <a onClick={() => dispatch(updateFav(body))}>{item.name}</a>
        ))}
      </div>
    </>
  );
}

export default FavList;
