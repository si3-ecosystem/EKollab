import Analyze from "../components/Analyze";

import "../assets/css/pages/Dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard-content">
            <span className="title">Dashboard</span>
            <p className="sub-title" style={{ color: "#746868", marginTop: "10px" }}>Welcome Back, KARA</p>
            <p className="title" style={{ marginTop: "70px" }}>ECOSYSTEM ANALYTICS</p>
            <div className="dashboard-main-container">
                <div className="dashboard-column-container">
                    <div className="dashboard-analyzing">
                        <Analyze title="ACTIVE CAMPAIGNS" />
                    </div>
                    <div className="dashboard-analyzing">
                        <Analyze title="ACTIVE COLLABS" />
                    </div>
                </div>
                <div className="dashboard-column-container">
                    <div className="dashboard-analyzing">
                        <Analyze title="ACTIVE COMMUNITIES" />
                    </div>
                    <div className="dashboard-analyzing">
                        <Analyze title="ACTIVE COMPANIES" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
