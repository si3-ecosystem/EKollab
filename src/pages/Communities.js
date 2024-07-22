import React, { useState } from 'react';


import "../assets/css/pages/Communities.css"
function Communities() {
    const [tab, setTab] = useState(true);

    const handleTab = (id) => {

        // Get the element by ID
        const element1 = document.getElementById('community-communities-div');
        const element2 = document.getElementById('community-creators-div');

        // Remove a class from the element
        element1.classList.remove('community-div-active');
        element2.classList.remove('community-div-active');

        const element3 = document.getElementById(id);

        // Add a class to the element
        element3.classList.add('community-div-active');
        if (id === "community-communities-div") {
            setTab(true);
        } else {
            setTab(false);
        }
    }
    return (
        <div className="dashboard-content">
            <div className="community-header">
                <div className="community-header-first">
                    <span className="title">Communities</span>
                </div>
                <div className="community-header-second">
                    <button className="btn-text general-btn" style={{ color: "white" }}>Add Community &nbsp;&nbsp;&nbsp;+</button>
                </div>
            </div>
            <div className="community-main-table">
                <div className="community-table-tab">
                    <div id="community-communities-div" className="community-table-tab-button-container community-div-active" onClick={() => handleTab("community-communities-div")}>
                        <span className="community-table-tab-button">Communities</span>
                    </div>
                    <div className="community-table-tab-button-spacer">

                    </div>
                    <div id="community-creators-div" className="community-table-tab-button-container" onClick={() => handleTab("community-creators-div")}>
                        <span className="community-table-tab-button">Creators</span>
                    </div>

                </div>
                {tab ?
                    <div className='community-table-container'>
                        <span className="middle-title" style={{ color: "#746868" }}>
                            Showing 0 results
                        </span>
                        <div className="creators-main-table" style={{ marginTop: "20px" }}>
                            <table className="community-table">
                                <tr className="creator-table-header">
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Focus</th>
                                    <th>Website</th>
                                    <th>Twitter</th>
                                    <th>Community channel</th>
                                    <th>Contact Email</th>
                                    <th>Yes/No</th>
                                    <th>Supporter</th>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Focus</td>
                                    <td>Website</td>
                                    <td>Twitter</td>
                                    <td>Community channel</td>
                                    <td>Contact Email</td>
                                    <td>Email List</td>
                                    <td>Supporter</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td colSpan="2">
                                        <button>&lt;&nbsp;Back</button>
                                        &nbsp;&nbsp;
                                        <button>Next&nbsp;&gt;</button>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>0 - 0 of 0</span>

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='community-table-container'>
                        creators
                    </div>
                }
            </div>
        </div>
    );
}

export default Communities;
