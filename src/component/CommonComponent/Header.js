import React, { Component } from "react";
import { Menu } from "antd";
import Logo from "./Logo";
import "antd/dist/antd.css";
import * as style from "../../assets/css/index.module.less";
import { Link } from "gatsby";

const { SubMenu } = Menu;

class HeaderComponent extends Component {
  render() {
    return (
      <nav className={style.navbar}>
        <div className={style.content}>
          <div className={style.logo}>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <Menu
            className={style.menuList}
            mode="horizontal"
            defaultSelectedKeys={["Home"]}
          >
            <Menu.Item key="Intro">Intro</Menu.Item>
            <Menu.Item key="Home">Home</Menu.Item>
            <Menu.Item key="Portfolio">Portfolio</Menu.Item>
            <Menu.Item key="Services">Services</Menu.Item>
            <Menu.Item key="Blog">Blog</Menu.Item>
            <Menu.Item key="Pages">Pages</Menu.Item>
          </Menu>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
