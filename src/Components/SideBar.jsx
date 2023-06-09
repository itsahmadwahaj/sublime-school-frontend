import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { UserOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
function SideBar() {
  const [collapsed, setcollapsed] = useState(true);

  const onCollapse = () => {
    setcollapsed(!collapsed);
  };
  const { Sider } = Layout;
  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={() => onCollapse()}
    >
      <div className="logo">
        <span style={{ color: "#f2f239" }}>
          {collapsed === true ? "Sublime" : "Sublime School"}
        </span>
      </div>

      <Menu theme="dark" defaultSelectedKeys={["5"]} mode="inline">
        {/* <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link to="/bookAppointment">Book Appointment</Link>
        </Menu.Item> */}
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/">Students</Link>
        </Menu.Item>
        {/* <Menu.Item key="8" icon={<TeamOutlined />}>
          <Link to="/Patients">Patients</Link>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
}

export default SideBar;
