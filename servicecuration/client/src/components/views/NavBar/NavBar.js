import React, { useState, useContext } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import {AppleOutlined} from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/userContext'

function NavBar() {
  const {users} = useContext(UserContext)
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <Link to="/">Logo</Link>
      </div>
      { users==={} ? <Link to='/logout'>로그아웃</Link> : <Link to='/login'>로그인</Link> }
      { users==={} ?  <p></p>  : <Link to='/register'>회원가입</Link>}
  
      <div className="menu__container">
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar