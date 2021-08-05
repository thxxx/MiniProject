import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button } from 'antd'
import axios from 'axios'

function RegisterPage() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [gender, setGender] = useState(0);
    const [job, setJob] = useState("");

    const submitLogin = () => {
        const body = {
            userId : userId,
            userPassword : userPassword,
            gender : gender,
            job:job
        }

        axios.post('/api/users/register', body)
        .then( response => {
            console.log("회원가입으로 받음", response)
            if(response.data.registerSuccess){
                alert("회원가입 성공!")
            }else{
                alert("회원가입 실패!")
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
                <input type="email" value={userId} onChange={(e) => {setUserId(e.currentTarget.value)}}></input>
                <p> 비밀번호 </p>
                <input type="password" value={userPassword} onChange={(e) => {setUserPassword(e.currentTarget.value)}}></input>
                <p> 성별이 어떻게 되시나요? </p>
                <input type="select" value={gender} onChange={(e) => {setGender(e.currentTarget.value)}}></input>
                <p> 직업 혹은 전공이 어떻게 되시나요? </p>
                <input type="text" value={job} onChange={(e) => {setJob(e.currentTarget.value)}}></input>
                <Button onClick={submitLogin}>회원가입</Button>
            </Form>
        </div>
    )
}

export default RegisterPage
