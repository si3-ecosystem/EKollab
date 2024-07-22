
import CreatorAnalyze from "../components/CreatorAnalyze";

import "../assets/css/pages/Creators.css";
import creatorAnalyzing1 from "../assets/img/creator-analyze/gridicons_create.png";
import creatorAnalyzing2 from "../assets/img/creator-analyze/mdi_company.png";
import creatorAnalyzing3 from "../assets/img/creator-analyze/heroicons_users-solid.png";
import creatorAnalyzing4 from "../assets/img/creator-analyze/streamline_politics-compaign-solid.png";
import searchIcon from "../assets/img/ion_search-outline.png";
import filterIcon from "../assets/img/mage_filter.png";
import settingIcon from "../assets/img/ant-design_setting-filled.png";
import alertIcon from "../assets/img/Vector.png";


function Creators() {
    const showCreate = () => {
        var hiddenDiv = document.querySelector('.creators-create');
        hiddenDiv.style.display = 'block';
    }
    const hideCreate = () => {
        var visibleDiv = document.querySelector('.creators-create');
        visibleDiv.style.display = 'none';
    }
    return (
        <div className="dashboard-content">
            <div className="creators-header">
                <div className="creators-header-first">
                    <span className="title">Creators</span>
                    <p className="sub-title" style={{ color: "#746868", marginTop: "10px" }}>Welcome Back, KARA</p>
                </div>

                <div className="creators-header-second">
                    <button className="btn-text general-btn" style={{ color: "white" }} onClick={showCreate}>ADD A CREATOR</button>
                    <br className="creators-button-break" />
                    <button className="btn-text general-btn creators-header-second-btn" style={{ color: "white" }} >CREATE LIST &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <polygon fill="white" points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="creators-main-analyzing">
                <div className="dashboard-column-container">
                    <div className="dashboard-analyzing">
                        <CreatorAnalyze img={creatorAnalyzing1} content="Total  Creators" />
                    </div>
                    <div className="dashboard-analyzing">
                        <CreatorAnalyze img={creatorAnalyzing2} content="Invited" />
                    </div>
                </div>
                <div className="dashboard-column-container">
                    <div className="dashboard-analyzing">
                        <CreatorAnalyze img={creatorAnalyzing3} content="Total Community Leaders" />
                    </div>
                    <div className="dashboard-analyzing">
                        <CreatorAnalyze img={creatorAnalyzing4} content="% Community Leaders to Total Creators" />
                    </div>
                </div>
            </div>
            <div className="creator-table-handler">
                <div style={{ flex: "1", textAlign: "left" }}>
                    <span className="middle-title" style={{ color: "#746868" }}>Showing 1 results</span>
                </div>
                <div className="creator-table-search-container">
                    <div className="creator-table-main-search">
                        <div className='header-searchbar-container creator-margin'>
                            <form class="table-search-form" style={{ borderRadius: "10px", backgroundColor: "white" }}>
                                <input type="text" id="table-search-input" placeholder="Search by Wallet, email or discord" />
                                <button type="submit" class="search-button" style={{ backgroundColor: "white" }}>
                                    <img src={searchIcon} alt="search" />
                                </button>
                            </form>
                        </div>
                        <div className='header-searchbar-container creator-margin'>
                            <form class="filter-form" style={{ borderRadius: "10px", backgroundColor: "white" }}>
                                <input type="text" id="table-search-input" placeholder="Filter" />
                                <button type="submit" class="search-button" style={{ backgroundColor: "white" }}>
                                    <img src={filterIcon} alt="search" />
                                </button>
                            </form>
                        </div>
                        <div className='header-searchbar-container creator-margin'>
                            <form class="setting-form" style={{ borderRadius: "10px", backgroundColor: "white" }}>
                                <input type="text" id="table-search-input" placeholder="Settings" />
                                <button type="submit" class="search-button" style={{ backgroundColor: "white" }}>
                                    <img src={settingIcon} alt="search" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="creators-main-table">
                <table className="creators-table">
                    <tr className="creator-table-header">
                        <th>ENS</th>
                        <th>Email</th>
                        <th>Wallet Value</th>
                    </tr>
                    <tr>
                        <td>SiHer.eth</td>
                        <td>Siher@gmail.com</td>
                        <td>0...0989</td>
                    </tr>
                    <tr>
                        <td>SiHer.eth</td>
                        <td>Siher@gmail.com</td>
                        <td>0...0989</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button>&lt;&nbsp;&nbsp;Back</button>
                            &nbsp;&nbsp;&nbsp;
                            <button>Next&nbsp;&nbsp;&gt;</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>2 - 2 of 2</span>

                        </td>
                    </tr>
                </table>
            </div>
            <div className="creators-create">
                <div className="creators-main-create">
                    <span className="title">Add A Creator</span>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">First Name</span>
                        <br />
                        <input placeholder="Enter First Name" />
                        <br />
                        <span className="middle-title " style={{ color: "#746868", fontSize: '14px' }}> <img src={alertIcon} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;Use only letters and numbers. e.g. Favorite team</span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">Last Name</span>
                        <br />
                        <input placeholder="Enter Last Name" />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">Date</span>
                        <br />
                        <input placeholder="DD/MM/YYYY" />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">Email</span>
                        <br />
                        <input placeholder="Enter Email" />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">ENS</span>
                        <br />
                        <input placeholder="Enter ENS" />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <span className="middle-title ">Paid/Scholarship</span>
                        <br />
                        <input placeholder="Enter..." />
                    </div>
                    <div className="creators-create-button-container">
                        <button className="btn-text general-btn creators-create-btn creators-create-cancel-btn" onClick={hideCreate}>CANCEL</button>
                        <button className="btn-text general-btn creators-create-btn creators-create-create-btn">CREATE</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Creators;
