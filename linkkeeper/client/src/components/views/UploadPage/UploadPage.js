import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'antd';

function UploadPage() {
    const [link, setLink] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [ratio, setRatio] = useState('')
    const [description, setDescription] = useState('')
    const [feature, setFeature] = useState('')
    const [category, setCategory] = useState('')

    const onNameChange = (e) => {
        setName(e.currentTarget.value)
    }

    const onLinkChange = (e) => {
        setLink(e.currentTarget.value)
    }

    const onSubmitLink = () => {

        const body = {
            link:link
        }

        axios.post('/api/services/uploadLink', body)
            .then(response => {
                if(response.data.success){
                    console.log(response.data.message)
                }
            })
            .catch(err => {
                console.log("업로드 에러", err)
            })
    }

    return (
        <>
        <Form onSubmit={onSubmitLink}>
            <div style={{display: 'block', alignItems: 'center', backgroundColor: 'red'}}>
                
                <label> 링크 입니다. </label>
                <input onChange={onLinkChange} value={link}>
                </input>
                <Button type='primary' size='large' onClick={onSubmitLink} >링크 제출</Button>
            </div>
        </Form>

        <input onChange={onNameChange} value={name}>
                </input>
        </>
    )
}

export default UploadPage
