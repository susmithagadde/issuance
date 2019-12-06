import React, { Component } from "react";
import PostData from "../../data/post";
import Modal from "../Modal/Modal";
import "./External.css";
class External extends Component {
  state = {
    StarChange: false,
    toggle: false,
    dataFilter: [],
    datas: []
  };

  onStarChange = (e, index) => {
    console.log("onStarChange");

    const datas = [...this.state.datas];
    const i = datas.findIndex(todo => todo.id === index);
    datas[i].star_status = !datas[i].star_status;
    this.setState({
      StarChange: { [index]: !this.state.StarChange[index] },
      datas
    });
    e.stopPropagation();
  };

  onElementHover = id => {
    const td = document.getElementById(id);
    const child = td.children;
    for (let i = 0; i < child.length; i++) {
      child[i].classList.add("hoverColor");
    }
  };
  onElementLeave = id => {
    const td = document.getElementById(id);
    const child = td.children;
    for (let i = 0; i < child.length; i++) {
      child[i].classList.remove("hoverColor");
    }
  };

  toggleModal = (e, id) => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    if (id) {
      const dataFilter = this.state.datas.filter(data => {
        return data.id === id;
      });
      this.setState({ dataFilter: dataFilter });
    }
  };

  componentDidMount() {
    const datas = Object.keys(PostData.data).map(data => {
      return PostData.data[data];
    });
    this.setState({ datas: datas });
  }

  render() {
    // console.log("StarChange", this.state.datas);
    const { toggle, dataFilter, datas } = this.state;

    var modal = [];
    modal.push(
      <Modal
        toggle={toggle}
        toggleModal={this.toggleModal}
        dataFilter={dataFilter}
      />
    );

    const {
      StatusChange,
      LocationChange,
      AmountChange,
      ValuationChange,
      TargetChange,
      TypeChange,
      onChange
    } = this.props;
    const { StarChange } = this.state;

    return (
      <div className="tab-pane fade show active" id="external-details">
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
                    <th scope="col"></th>
                    <th scope="col" className="industry">
                      Name & Industry Type
                    </th>

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
                    <tr
                      key={data.id}
                      id={data.id}
                      className="items"
                      onMouseOver={() => this.onElementHover(data.id)}
                      onMouseOut={() => this.onElementLeave(data.id)}
                      // onClick={() => this.onSelectIssuance(data.id)}
                      onClick={e => this.toggleModal(e, data.id)}
                    >
                      <td>
                        <i
                          className={
                            // StarChange[data.id]
                            data.star_status
                              ? "fa fa-star star"
                              : "fa fa-star-o star"
                          }
                          onClick={e => this.onStarChange(e, data.id)}
                        ></i>
                      </td>
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
        {modal}
      </div>
    );
  }
}

export default External;
