import React from "react";
import { Input, Icon } from "antd";
import styled from "styled-components";

import brandLogo from "../../images/logomark.png";
import sheldon from "../../images/sheldon.png";

const NavCon = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;

  nav.leftNav {
    display: flex;
    margin: 1.5em;

    .brandLogo {
      padding-right: 2em;
      border-right: 1px solid #c4c4c4;

      img {
        width: 20px;
        height: auto;
      }
    }

    #search {
      margin-left: 3em;
      padding-left: 3em;
      border-radius: 0.3em;
      border: none;
      background: #f9f7ff;
      width: 300px;
      color: #6d6d6d;
    }
  }

  nav.rightNav {
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }

    img {
      width: 30px;
      height: auto;
      border-radius: 50%;
    }
  }
`;

export const TopNavigation = () => {
  return (
    <NavCon>
      <nav className="leftNav">
        <div className="brandLogo">
          <img src={brandLogo} alt="tryble-logo" />
        </div>

        <div>
          <Input
            id="search"
            placeholder="Search by project name"
            prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)", marginLeft: "3em"}} />}
          />
        </div>
      </nav>

      <nav className="rightNav">
        <Icon type="inbox" />
        <p>Sheldon</p>
        <img src={sheldon} alt="" />
        <Icon type="caret-down" />
      </nav>
    </NavCon>
  );
};

export default TopNavigation;
