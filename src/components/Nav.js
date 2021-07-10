import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const Nav = () => {
  return(
    <StyledNav>
      <h2 id='logo'><span>O</span>rigins</h2>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/conatct'>About</NavLink></li>
      </ul>
    </StyledNav>
  )
}

export default Nav;

const StyledNav = styled.nav `
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 100;
`