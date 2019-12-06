import React, { Component } from "react";
import MyIssuances from "../MyIssuances/MyIssuances";
import External from "../External/External";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "external",
      DealTabs: [
        {
          id: 1,
          tab: "External Issuances",
          type: "external"
        },
        {
          id: 2,
          tab: "Favorite Issuances",
          type: "favorite"
        },
        {
          id: 3,
          tab: "My Issuances",
          type: "myissuances"
        },
        {
          id: 4,
          tab: "MNDA Management",
          type: "mnda"
        }
      ],
      StatusChange: false,
      LocationChange: false,
      AmountChange: false,
      ValuationChange: false,
      TargetChange: false,
      TypeChange: false
    };
  }

  onSelectTab = type => {
    console.log("sel", type);
    this.setState({ selectedTab: type });
  };

  onChange = type => {
    if (type === "Status") {
      this.setState({ StatusChange: !this.state.StatusChange });
    } else if (type === "Location") {
      this.setState({ LocationChange: !this.state.LocationChange });
    } else if (type === "Amount") {
      this.setState({ AmountChange: !this.state.AmountChange });
    } else if (type === "Location") {
      this.setState({ LocationChange: !this.state.LocationChange });
    } else if (type === "Valuation") {
      this.setState({ ValuationChange: !this.state.ValuationChange });
    } else if (type === "Target") {
      this.setState({ TargetChange: !this.state.TargetChange });
    } else {
      this.setState({ TypeChange: !this.state.TypeChange });
    }
  };

  render() {
    const { selectedMenu } = this.props;
    const {
      selectedTab,
      DealTabs,
      StatusChange,
      LocationChange,
      AmountChange,
      ValuationChange,
      TargetChange,
      TypeChange
    } = this.state;
    const { onChange } = this;
    return (
      <section className="content-details">
        {selectedMenu === "room" ? (
          <section className="room-details">
            <h1 className="content-title">Deal Room</h1>
            <div className="tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {DealTabs.map(tab => (
                  <li className="nav-item" key={tab.id}>
                    <a
                      className={
                        selectedTab === tab.type
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href="#"
                      id={tab.type}
                      onClick={() => this.onSelectTab(tab.type)}
                    >
                      {tab.tab}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {selectedTab === "external" ? (
                  <External
                    StatusChange={StatusChange}
                    LocationChange={LocationChange}
                    AmountChange={AmountChange}
                    ValuationChange={ValuationChange}
                    TargetChange={TargetChange}
                    TypeChange={TypeChange}
                    onChange={onChange}
                  />
                ) : selectedTab === "favorite" ? (
                  <div
                    className="tab-pane fade show active"
                    id="favorite-details"
                  >
                    favorite Page
                  </div>
                ) : selectedTab === "myissuances" ? (
                  <MyIssuances
                    StatusChange={StatusChange}
                    LocationChange={LocationChange}
                    AmountChange={AmountChange}
                    ValuationChange={ValuationChange}
                    TargetChange={TargetChange}
                    TypeChange={TypeChange}
                    onChange={onChange}
                  />
                ) : (
                  <div className="tab-pane fade show active" id="mnda-details">
                    MNDA PAGE!!!
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : selectedMenu === "broker" ? (
          <section>
            <h1>broker goes here!</h1>
          </section>
        ) : (
          <section>
            <h1>issuance goes here!</h1>
          </section>
        )}
      </section>
    );
  }
}

export default Content;
