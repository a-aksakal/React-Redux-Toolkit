import { Button, Form, Input, Modal, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../slices/CartSlice";
import { addFav } from "../slices/FavSlice";
function List() {
  const cart = useSelector((state) => state.cart.data),
    fav = useSelector((state) => state.fav.data),
    dispatch = useDispatch(),
    navigate = useNavigate();
  console.log(fav);
  const Details = (id) => {
    fetch(`https://northwind.now.sh/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => navigate("/update", { state: data }));
  };

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getCart(data));
      });
  }, [dispatch]);

  const DeleteItem = (id) => {
    let requestOptions = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };
    fetch(`https://northwind.now.sh/api/products/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text, data) => <a onClick={() => Details(data.id)}>{text}</a>,
    },
    {
      title: "Ürün Adı",
      dataIndex: "name",
    },
    {
      title: "Fiyat",
      dataIndex: "unitPrice",
    },
    {
      title: "Kategori",
      dataIndex: "categoryId",
    },
    {
      title: "İşlemler",
      render: (_, data) => (
        <Space size="middle">
          <a onClick={() => dispatch(addFav(data))}>Fava Ekle </a>
          <a onClick={() => DeleteItem(data.id)}>Sil</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={cart} columns={columns}></Table>
      <Button onClick={() => navigate("/favlist")}>FavList</Button>
    </div>
  );
}

export default List;
