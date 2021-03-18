import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUpOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import logo from './C_icon_without_white.png';

import './nav.scss';

const NavLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <Link to={`/${page}`} className="link-item">
      {title}
    </Link>
  );
};

const SideNav = () => {
  const { page } = useParams();
  return (
    <div className="side-nav">
      <div className="link-list">
        <ul>
          <li>
            <NavLink page="dashboard" />
          </li>
          <li>
            <NavLink page="market" />
          </li>
          <li>
            <NavLink page="exchange" />
          </li>
          <li>
            <NavLink page="news" />
          </li>
        </ul>
      </div>
    </div>

    // <div className="side-nav">
    //   <h1 className="nav-title">Cryptofolio</h1>

    //   <div className="nav-links">
    //     <div className="hover-to-show-link">
    //       <a href="#section" className="nav-header"> <AccountBalanceWalletOutlinedIcon /> Dashboard</a>
    //       <span className="nav-subtitle hover-to-show">View your wallet</span>
    //     </div>

    //     <div className="hover-to-show-link">
    //       <a href="#section" className="nav-header"><TrendingUpIcon /> Market</a>
    //       <span className="nav-subtitle hover-to-show">View market charts</span>
    //     </div>

    //     <div className="hover-to-show-link">
    //       <a href="#section" className="nav-header"><ImportContactsOutlinedIcon /> News</a>
    //       <span className="nav-subtitle hover-to-show">The latest crypto news</span>
    //     </div>

    //     <div className="hover-to-show-link">
    //       <a href="#section" className="nav-header"><AttachMoneyOutlinedIcon />  Exchange</a>
    //       <span className="nav-subtitle hover-to-show">Crypto exchange</span>
    //     </div>

    //     <div className="hover-to-show-link">
    //       <a href="#section" className="nav-header"><SettingsOutlinedIcon /> Settings</a>
    //       <span className="nav-subtitle hover-to-show">User settings</span>
    //     </div>
    //   </div>

    //   <span className="nav-logo">
    //     <img src={logo} style={{width: 200, height: 200 }} alt={""}/>
    //   </span>
    // </div>
  );
};

export default SideNav;
