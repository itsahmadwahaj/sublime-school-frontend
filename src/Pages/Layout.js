import React from "react";
import { Layout, Row } from "antd";
import SideBar from "../Components/SideBar.js";
import "../App.css";
import { Col, Button } from "antd";
const { Header, Content, Footer } = Layout;

export default function Layouts({ Children }) {
  const currentMode = "School";
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ textAlign: "center" }}
        >
          <Row justify="center">
            <h1>{currentMode} Management System</h1>
          </Row>
        </Header>
        <Content style={{ margin: "10px 16px" }}>
          <Children />
        </Content>
        <Footer style={{ textAlign: "center" }}>Copyright - Buggcy LTD</Footer>
      </Layout>
    </Layout>
  );
}
