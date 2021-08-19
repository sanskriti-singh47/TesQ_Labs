import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import styled from 'styled-components'

const Nav = styled.div`
background:  #ffffff;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const sidebar = styled.nav`
background: #ffffff;
width: 250px;
height: 100vh;
display: flex; 
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%
`;

    const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
   
    return (
    <>
    <Nav>
        <NavIcon to="#">
        </NavIcon>
    </Nav>
    <SidebarNav>
        <SidebarWrap>
        <NavIcon to="#">


        </NavIcon>
        {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
        })}
        </SidebarWrap>
    </SidebarNav>
    </>
    );
};

export default Sidebar;