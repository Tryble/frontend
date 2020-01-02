import React from "react";
import { Icon } from "antd";
import styled from 'styled-components';


const NavCon = styled.nav`
  display: flex;
  flex-direction: row;
  background: red;
  width: 100vw;
  justify-content: space-between;

  nav {
    display: flex;

  }
`;

export const TopNavigation = () => {
  return (
    <NavCon>
      <nav className="leftNav">
        <div>
          <img src="" alt="tryble-logo" />
        </div>

        <div>
          <input type="input" placeholder="Search by project name" />
        </div>
      </nav>

      <nav>
        <img src="" alt="" />
        <p>Sheldon</p>
        <img src="" alt="" />
        <Icon type="caret-down" />
      </nav>
    </NavCon>
  );
};

export default TopNavigation;
