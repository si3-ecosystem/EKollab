import React from 'react';


import "../assets/css/pages/Collabs.css"
function Collabs() {
    // const [tab, setTab] = useState(true);

    const handleTab = (id) => {

        // Get the element by ID
        const element1 = document.getElementById('collab-creator-div');
        const element2 = document.getElementById('collab-community-div');
        const element3 = document.getElementById('collab-company-div');

        // Remove a class from the element
        element1.classList.remove('community-div-active');
        element2.classList.remove('community-div-active');
        element3.classList.remove('community-div-active');

        const element4 = document.getElementById(id);

        // Add a class to the element
        element4.classList.add('community-div-active');

        var tag1 = document.getElementById("collab-creator-page");
        var tag2 = document.getElementById("collab-community-page");
        var tag3 = document.getElementById("collab-company-page");
        if (id === "collab-creator-div") {
            tag1.style.display = 'block';
            tag2.style.display = 'none';
            tag3.style.display = 'none';
        } else if (id === "collab-community-div") {
            tag1.style.display = 'none';
            tag2.style.display = 'block';
            tag3.style.display = 'none';
        } else {
            tag1.style.display = 'none';
            tag2.style.display = 'none';
            tag3.style.display = 'block';
        }

    }
    return (
        <div className="dashboard-content">
            <div className="community-header">
                <div className="community-header-first">
                    <span className="title">Collabs</span>
                </div>
            </div>
            <div className="collab-main-table">
                <div className="community-table-tab">
                    <div id="collab-creator-div" className="community-table-tab-button-container community-div-active" onClick={() => handleTab("collab-creator-div")}>
                        <span className="community-table-tab-button">Creator</span>
                    </div>
                    <div className="community-table-tab-button-spacer">

                    </div>
                    <div id="collab-community-div" className="community-table-tab-button-container" onClick={() => handleTab("collab-community-div")}>
                        <span className="community-table-tab-button">Community</span>
                    </div>
                    <div className="community-table-tab-button-spacer">

                    </div>
                    <div id="collab-company-div" className="community-table-tab-button-container" onClick={() => handleTab("collab-company-div")}>
                        <span className="community-table-tab-button">Company</span>
                    </div>
                </div>
                <div className='collab-main-pages'>
                    <div id='collab-creator-page'>
                        <div>
                            <span className='middle-title'>Collab Type</span>
                            <br />
                            <select className='collab-select'>
                                <option>Wallet Messaging</option>
                                <option>Yeeter</option>
                                <option>Grant Ship</option>
                                <option>In-Person Event</option>
                                <option>LiveStream</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <span className='middle-title'>Collab Details</span>
                            <br />
                            <textarea className='collab-textarea' placeholder='Add collab details here...' />
                        </div>
                        <button className='btn-text general-btn' style={{ color: "white", marginTop: "15px" }}>Request Collaboration</button>
                    </div>
                    <div id='collab-community-page' style={{ display: "none" }}>
                        community
                    </div>
                    <div id='collab-company-page' style={{ display: "none" }}>
                        company
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collabs;
