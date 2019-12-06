import React, { Component } from "react";
import PostData from "../../data/post";
import "./MyIssuances.css";

class MyIssuances extends Component {
  state = {
    headers: [
      {
        id: 1,
        tab: "Issuance Type",
        type: "issuance_type",
        state: "Type"
      },
      {
        id: 2,
        tab: "Target Raise",
        type: "issuance_target",
        state: "Target"
      },
      {
        id: 3,
        tab: "Pre-Money Valuation",
        type: "issuance_valuation",
        state: "Valuation"
      },
      {
        id: 4,
        tab: "Amount Raised",
        type: "issuance_amount",
        state: "Amount"
      },
      {
        id: 5,
        tab: "Location",
        type: "issuance_location",
        state: "Location"
      },
      {
        id: 6,
        tab: "Status",
        type: "issuance_status",
        state: "Status"
      }
    ]
  };

  render() {
    console.log("headers", typeof this.state.headers);
    const datas = Object.keys(PostData.data).map(data => {
      return PostData.data[data];
    });
    const headers11 = Object.keys(this.state.headers).map(header => {
      return this.state.headers[header];
    });
    console.log("oko", headers11);
    const {
      StatusChange,
      LocationChange,
      AmountChange,
      ValuationChange,
      TargetChange,
      TypeChange,
      onChange
    } = this.props;

    return (
      <div className="tab-pane fade show active" id="myissuances-details">
        <div className="myissuances-block">
          <div className="row btn-block">
            <button type="button" className="add-issuance">
              <i className="fa fa-plus"></i> Add issuance
            </button>
            <button type="button" className="filters-issuance">
              <i className="fa fa-align-left"></i> Filters
            </button>
          </div>
          <div>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col" className="industry">
                      Name & Industry Type
                    </th>
                    {/* {headers11.map(header => (
                      <th scope="col" key={header.id}>
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle"
                            id="dropdownLocationButton"
                            onClick={() => this.onChange(header.state)}
                          >
                            {header.tab}
                          </a>

                          <div
                            className={
                              header.state + "Change"
                                ? "dropdown-menu show"
                                : "dropdown-menu"
                            }
                          >
                            <a className="dropdown-item" href="#">
                              Europe {header.state + "Change"}
                              {datas[0]["issuance_" + header.type]}
                            </a>
                            <a className="dropdown-item" href="#">
                              U.S
                              {datas[1]["issuance_" + header.type]}
                            </a>
                          </div>
                        </div>
                      </th>
                    ))} */}
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownTypeButton"
                          onClick={() => onChange("Type")}
                        >
                          Issuance Type
                        </a>

                        <div
                          className={
                            TypeChange ? "dropdown-menu show" : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            Equity
                          </a>
                          <a className="dropdown-item" href="#">
                            Investment Fund
                          </a>
                          <a className="dropdown-item" href="#">
                            Debt
                          </a>
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownTargetButton"
                          onClick={() => onChange("Target")}
                        >
                          Target Raise
                        </a>

                        <div
                          className={
                            TargetChange
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            $23M
                          </a>
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownValuationButton"
                          onClick={() => onChange("Valuation")}
                        >
                          Pre-Money Valuation
                        </a>

                        <div
                          className={
                            ValuationChange
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            $1M
                          </a>
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownAmountButton"
                          onClick={() => onChange("Amount")}
                        >
                          Amount Raised
                        </a>

                        <div
                          className={
                            AmountChange
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            $1M
                          </a>
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownLocationButton"
                          onClick={() => onChange("Location")}
                        >
                          Location
                        </a>

                        <div
                          className={
                            LocationChange
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            Europe
                          </a>
                          <a className="dropdown-item" href="#">
                            U.S
                          </a>
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle"
                          id="dropdownMenuButton"
                          onClick={() => onChange("Status")}
                        >
                          Status
                        </a>

                        <div
                          className={
                            StatusChange
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <a className="dropdown-item" href="#">
                            In Progress
                          </a>
                          <a className="dropdown-item" href="#">
                            Closed
                          </a>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map(data => (
                    <tr key={data.id}>
                      <td>
                        {data.issuance_name}
                        <p>{data.services}</p>
                      </td>
                      <td>{data.issuance_type}</td>
                      <td>{data.issuance_target}</td>
                      <td>{data.issuance_valuation}</td>
                      <td>{data.issuance_amount}</td>
                      <td>{data.issuance_location}</td>
                      <td className="font-size-12">
                        {data.issuance_status === "In Progress" ? (
                          <span className="circle blue"></span>
                        ) : (
                          <span className="circle green"></span>
                        )}

                        {data.issuance_status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyIssuances;
