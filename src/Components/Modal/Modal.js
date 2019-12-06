import React, { Component } from "react";

import "./Modal.css";
class Modal extends Component {
  state = {
    InfoTabs: [
      {
        id: 1,
        tab: "Deal Info",
        type: "deal"
      },
      {
        id: 2,
        tab: "Additional Info",
        type: "additional"
      }
    ],
    selectedInfoTab: "deal",
    RequiredTable: [
      {
        id: 1,
        tab: "Date of creation",
        type: "May 24,2019"
      },
      {
        id: 2,
        tab: "Country of Issuance",
        type: "US"
      },
      {
        id: 3,
        tab: "Industry",
        type: "Renewable Energy"
      },
      {
        id: 4,
        tab: "Total Issued Shares",
        type: "100,000,000"
      },
      {
        id: 5,
        tab: "Free Float",
        type: "1,000,000"
      },
      {
        id: 6,
        tab: "Price per Share",
        type: "$100"
      }
    ]
  };

  onSelectInfoTab = type => {
    console.log("sel", type);
    this.setState({ selectedInfoTab: type });
  };

  render() {
    const display = {
      display: "block"
    };
    const hide = {
      display: "none"
    };
    const { toggle, toggleModal, dataFilter } = this.props;
    const { InfoTabs, selectedInfoTab, RequiredTable } = this.state;
    return (
      <div className="modal" style={toggle ? display : hide}>
        <div className="modal-content">
          {/* <a className="btn-flat" onClick={toggleModal}>
            Close
          </a> */}
          <button
            type="button"
            className="close"
            id="closeModal"
            onClick={toggleModal}
          >
            &times;<span className="sr-only">Close</span>
          </button>
          <section className="room-details">
            <div className="modal-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {InfoTabs.map(tab => (
                  <li className="nav-item modal-item" key={tab.id}>
                    <a
                      className={
                        selectedInfoTab === tab.type
                          ? "nav-link modal-link active"
                          : "nav-link modal-link"
                      }
                      href="#"
                      onClick={() => this.onSelectInfoTab(tab.type)}
                    >
                      {tab.tab}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="modal-col" scope="col">
                        Target Raise
                      </th>
                      <th className="modal-col" scope="col">
                        Amount Raised
                      </th>
                      <th className="modal-col" scope="col">
                        Valuation
                      </th>
                      <th className="modal-col" scope="col">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFilter.map(data => (
                      <tr key={data.id} id={data.id} className="items">
                        <td>{data.issuance_target}</td>
                        <td>{data.issuance_amount}</td>
                        <td>{data.issuance_valuation}</td>
                        <td className="font-size-12">
                          {data.issuance_status === "In Progress" ? (
                            <span className="circle modal-circle blue"></span>
                          ) : (
                            <span className="circle modal-green-circle green"></span>
                          )}

                          {data.issuance_status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="form-group">
                  <div className="description text-name">
                    <span id="desc-label">Description</span>
                    <p className="desc-para text-para">
                      As such, Energy Infrastructure naturally includes the
                      trsditional utilities associated with energy transport and
                      management (coal transport trains,natural gas
                      pipelines,electric transmission lines etc.)
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="required text-name">
                    <span id="required-label">Required</span>
                    <div className="required-para text-para">
                      <table className="table required-table">
                        <thead></thead>
                        <tbody>
                          {RequiredTable.map(tab => (
                            <tr key={tab.id}>
                              <th className="required-col" scope="col">
                                {tab.tab}
                              </th>
                              <th className="required-col" scope="col">
                                {tab.type}
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="form-group common">
                  <table className="table required-table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th className="common-col bold" scope="col">
                          Common Documents
                        </th>
                        <th className="common-col" scope="col"></th>
                      </tr>
                      <tr>
                        <th className="common-col" scope="col">
                          Marketing Deck.docx
                        </th>
                        <th className="common-col download" scope="col">
                          <i className="fa fa-download"></i>&nbsp; Download
                        </th>
                      </tr>
                      <tr>
                        <th className="common-col" scope="col">
                          Presentation.pptx
                        </th>
                        <th className="common-col download" scope="col">
                          <i className="fa fa-download"></i>&nbsp; Download
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="form-group confidential">
                  <table className="table required-table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th className="confidential-col bold" scope="col">
                          Confidential Documents
                        </th>
                        <th className="confidential-col" scope="col"></th>
                      </tr>
                      <tr>
                        <th className="confidential-col" scope="col">
                          Executive Summary.docx
                        </th>
                        <th className="confidential-col download" scope="col">
                          <i className="fa fa-download"></i>&nbsp; Download
                        </th>
                      </tr>
                      <tr>
                        <th className="confidential-col" scope="col">
                          Issuance Summary.xls
                        </th>
                        <th className="confidential-col download" scope="col">
                          <i className="fa fa-download"></i>&nbsp; Download
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="form-group sourcing">
                  <table className="table required-table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th className="sourcing-col bold party" scope="col">
                          Sourcing Party
                        </th>
                        <th className="sourcing-col" scope="col"></th>
                      </tr>
                      <tr>
                        <th className="sourcing-col source-name" scope="col">
                          John Murphy
                        </th>
                        <th className="sourcing-col" scope="col"></th>
                      </tr>
                      <tr>
                        <th
                          className="sourcing-col source-name gray"
                          scope="col"
                        >
                          j.murphy@lead.com
                        </th>
                        <th className="sourcing-col" scope="col"></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="issuer">
                  <h5>Issuer</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
