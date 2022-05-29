import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const onFinish = (values) => {
    let requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch("https://northwind.vercel.app/api/products", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(values);

    navigate("/list");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const SendData = () => {};
  return (
    <>
      <div style={{ display: "flex" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            id: state.id,
            name: state.name,
            unitPrice: state.unitPrice,
            categoryId: state.categoryId,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="id" name="id">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Ürün Adı"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Fiyatı"
            name="unitPrice"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Kategori Id"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Update;
