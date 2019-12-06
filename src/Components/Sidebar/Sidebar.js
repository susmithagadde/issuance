import React, { Component } from "react";
import Content from "../Content/Content";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: "room",
      sidebarTabs: [
        {
          id: 1,
          tab: "Deal Room",
          type: "room"
        },
        {
          id: 2,
          tab: "Broker-Dealer Registry",
          type: "broker"
        },
        {
          id: 3,
          tab: "Issuance Statistics",
          type: "issuance"
        }
      ]
    };
  }

  onSelectMenu = type => {
    console.log("type", type);

    this.setState({ selectedMenu: type });
  };

  render() {
    const { selectedMenu, sidebarTabs } = this.state;
    return (
      <article className="example-grid">
        <section className="example-item1 item">
          <img
            src={require("../../Images/logo.jpg")}
            alt="Logo"
            width="64"
            height="64"
          />

          <ul>
            {sidebarTabs.map(tab => (
              <li
                key={tab.id}
                id={tab.type}
                className={selectedMenu === tab.type ? "active" : ""}
                onClick={() => this.onSelectMenu(tab.type)}
              >
                <span
                  className={selectedMenu === tab.type ? "inside" : ""}
                ></span>
                <a href="#">{tab.tab}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="content">
          <div className="example-item2 item">
            <Content selectedMenu={selectedMenu} />
          </div>
        </section>
      </article>
    );
  }
}

export default Sidebar;
