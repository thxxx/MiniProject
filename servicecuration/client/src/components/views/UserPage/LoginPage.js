import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'antd'
import axios from 'axios'
import {UserContext} from '../../../context/userContext';

function LoginPage(props) {
    const {users, setUsers} = useContext(UserContext)
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    console.log("user", users)

    const submitLogin = () => {
        const body = {
            userId : userId,
            userPassword : userPassword
        }

        axios.post('/api/users/login', body)
        .then( response => {
          // context API 안에 저장해야한다.
            console.log(response, " 왔습니다.")
            if(response.data.loginSuccess){
              setUsers(response.data.user)
              props.history.push('/');
            }
        })
        .catch(err => {
            throw err;
        })
    }

    return (
        <div style={{display:'block'}}>
            <Form onSubmit={submitLogin}>
                <p> 아이디 </p>
                <input type="email" id="email" value={userId} onChange={(e) => {setUserId(e.currentTarget.value)}}></input>
                <p> 비밀번호 </p>
                <input type="password" id="password" value={userPassword} onChange={(e) => {setUserPassword(e.currentTarget.value)}}></input>
                <Button onClick={submitLogin}>로그인</Button>
            </Form>
        </div>
    )
}

export default LoginPage


  // axios는 서버의 응답 정보를 response의 data에 담는다. 이외에도
  // `status`는 서버 응답의 HTTP 상태 코드입니다.
//   status: 200,
  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지입니다.
//   statusText: 'OK',
  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공됩니다.
//   headers: {},
  // `config`는 요청에 대해 `axios`에 설정된 구성(config)입니다.
//   config: {},
  // `request`는 응답을 생성한 요청입니다.
  // 브라우저: XMLHttpRequest 인스턴스
  // Node.js: ClientRequest 인스턴스(리디렉션)
    // request: {}
    // 등이 있음.