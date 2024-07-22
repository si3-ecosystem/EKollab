import React from 'react';


import "../assets/css/pages/Campaigns.css"
function Campaigns() {
    // const [tab, setTab] = useState(true);

    // const handleTab = (id) => {

    //     // Get the element by ID
    //     const element1 = document.getElementById('community-communities-div');
    //     const element2 = document.getElementById('community-creators-div');

    //     // Remove a class from the element
    //     element1.classList.remove('community-div-active');
    //     element2.classList.remove('community-div-active');

    //     const element3 = document.getElementById(id);

    //     // Add a class to the element
    //     element3.classList.add('community-div-active');
    //     if (id === "community-communities-div") {
    //         setTab(true);
    //     } else {
    //         setTab(false);
    //     }
    // }
    return (
        <div className="dashboard-content">
            <div className="community-header">
                <div className="community-header-first">
                    <span className="title">Campaigns</span>
                </div>
                <div className="community-header-second">
                    <button className="btn-text general-btn" style={{ color: "white" }}>Add Company &nbsp;&nbsp;&nbsp;+</button>
                </div>
            </div>
            <div className="community-main-table">
                <div className="community-table-tab">
                    <div id="community-communities-div" className="community-table-tab-button-container community-div-active">
                        <span className="community-table-tab-button">Campaigns</span>
                    </div>
                    {/* <div className="community-table-tab-button-spacer">

                    </div>
                    <div id="community-creators-div" className="community-table-tab-button-container" onClick={() => handleTab("community-creators-div")}>
                        <span className="community-table-tab-button">Creators</span>
                    </div> */}

                </div>
                <div className='community-table-container'>
                    <span className="middle-title" style={{ color: "#746868" }}>
                        Showing 8 results
                    </span>
                    <div className="creators-main-table" style={{ marginTop: "20px" }}>
                        <table className="Campaign-table">
                            <tr className="creator-table-header">
                                <th>Company Name</th>
                                <th>Creator Contact</th>
                                <th>Company Type</th>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>chain</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>wallet</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>defi</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>agency</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>dao</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>wallet</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>wallet</td>
                            </tr>
                            <tr>
                                <td>Name DesignAgency</td>
                                <td>Focus@gmail.com</td>
                                <td>wallet</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>&lt;&nbsp;&nbsp;Back</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button>Next&nbsp;&nbsp;&gt;</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>8 - 8 of 8</span>

                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campaigns;
