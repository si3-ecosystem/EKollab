import '../assets/css/include/header.css';

import message from "../assets/img/ant-design_message-filled.png";
import help from "../assets/img/iconoir-help-circle-solid.png";
import eye from "../assets/img/eye-image.png";
import searchIcon from "../assets/img/ion_search-outline.png";

function Header(props) {
  return (
    <div className="header-content">
      <div className='header-inner'>
        {/* <div>
          <span className='general-text'>SI3 ECOSYSTEM</span>
        </div> */}
        <div className='header-searchbar-container'>
          <form class="search-form">
            <input type="text" id="search-input" placeholder="Search" />
            <button type="submit" class="search-button">
              <img src={searchIcon} alt="search" />
            </button>
          </form>
        </div>
        <div className='header-left-sub-container'>
          <img className='header-icon-image' src={message} alt='' />
          <img className='header-icon-image' src={help} alt='' />
          <div className='header-user-container'>
            <span className='small-text'>Naveed12</span>
            <img className='user-icon-image' src={eye } alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;