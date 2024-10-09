
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// import needed image files
import dashboard from "../assets/img/sidebar/ant-design_home-filled.png";
import creators from "../assets/img/sidebar/gridicons_create.png";
import communities from "../assets/img/sidebar/heroicons_users-solid.png";
import companies from "../assets/img/sidebar/mdi_company.png";
import campaigns from "../assets/img/sidebar/streamline_politics-compaign-solid.png";
import colas from "../assets/img/sidebar/pepicons-pencil_handshake-circle-filled.png";
import dynamicList from "../assets/img/sidebar/uit_list-ul.png";
import Visualizers from "../assets/img/sidebar/oui_app-visualize.png";
import settings from "../assets/img/sidebar/ant-design_setting-filled.png";
import arrow from "../assets/img/arrow.png";

import '../assets/css/include/Navbar.css';

function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();
  const goPage = (url) => {
    navigate(url)
  }

  const handleslide = () => {
    var element = document.getElementById("sidebar");
    if (window.getComputedStyle(element).display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  return (
    <div className="navbar-content">
      <div>
        <img className='navbar-arrow-img' src={arrow} alt='' onClick={handleslide} />
      </div>
      <div id='sidebar' className='navbar-inner'>
        <div>
          <span className='middle-title'>SI&lt;3&gt; EKollab</span>
        </div>
        <div className='sidebar-main-container'>
          <div className={location.pathname === "/" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/')}>
            <img src={dashboard} alt='' />
            <span className='middle-title sidebar-sub-link'>Dashboard</span>
          </div>
          <div className={location.pathname === "/creators" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/creators')}>
            <img src={creators} alt='' />
            <span className='middle-title sidebar-sub-link'>Creators</span>
          </div>
          <div className={location.pathname === "/communities" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/communities')}>
            <img src={communities} alt='' />
            <span className='middle-title sidebar-sub-link'>Communities</span>
          </div>
          <div className={location.pathname === "/companies" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/companies')}>
            <img src={companies} alt='' />
            <span className='middle-title sidebar-sub-link'>Companies</span>
          </div>
          <div className={location.pathname === "/campaigns" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/campaigns')}>
            <img src={campaigns} alt='' />
            <span className='middle-title sidebar-sub-link'>Campaigns</span>
          </div>
          <div className={location.pathname === "/collabs" ? 'sidebar-active' : 'sidebar-link-container'} onClick={() => goPage('/collabs')}>
            <img src={colas} alt='' />
            <span className='middle-title sidebar-sub-link'>Collabs</span>
          </div>
          <div className='sidebar-divide-container'>
            <div className='sidebar-divide-line'></div>
          </div>
        </div>
        <div className='sidebar-main-container'>
          <div>
            <div className='sidebar-link-container'>
              <img src={dynamicList} alt='' />
              <span className='middle-title sidebar-sub-link'>Game Fields (4)</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Infield</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Outfield</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Crowd</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Umpires</span>
            </div>
          </div>
          <div>
            <div className='sidebar-link-container'>
              <img src={Visualizers} alt='' />
              <span className='middle-title sidebar-sub-link'>Onboarding Funnel (5)</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Awareness</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Activation</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Engagement</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Retention</span>
            </div>
            <div className='sidebar-additional-sub-link'>
              <span className='middle-title sidebar-sub-link' style={{ color: "#746868" }}>Revenue</span>
            </div>
          </div>
        </div>
        <div className='sidebar-main-container'>
          <div className='sidebar-link-container'>
            <img src={settings} alt='' />
            <span className='middle-title sidebar-sub-link'>Settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;