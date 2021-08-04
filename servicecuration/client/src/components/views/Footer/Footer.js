import React from 'react'
import {AppleOutlined} from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor: 'gray',
        }}>
           <p style={{ font:'white', }}> Happy Coding  <AppleOutlined /></p>
        </div>
    )
}

export default Footer
