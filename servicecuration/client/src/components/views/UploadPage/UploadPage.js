// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import { Form, Button } from 'antd';
// import { useSelector } from 'react-redux';

// function UploadPage() {
//     const user = useSelector(state => state.user) 
//     const [link, setLink] = useState('')
//     const [name, setName] = useState('')
//     const [image, setImage] = useState('')
//     const [ratio, setRatio] = useState('')
//     const [description, setDescription] = useState('')
//     const [feature, setFeature] = useState('')
//     const [category, setCategory] = useState('')

//     const [loadingResult,]

//     const onNameChange = (e) => {
//         setName(e.currentTarget.value)
//     }

//     const onLinkChange = (e) => {
//         setLink(e.currentTarget.value)
//     }

//     const onCategoryChange = (e) => {
//         setCategory(e.currentTarget.value)
//     }

//     const onSubmitLink = () => {

//         const body = {
//             link:link
//         }

//         axios.post('/api/services/uploadLink', body)
//             .then(response => {
//                 if(response.data.success){
//                     console.log(response.data.message)
//                     setName(response.data.message[0])
//                     setCategory(response.data.message[1])
//                     setDescription("설명")
//                     setRatio(93)
//                     setFeature("특징")
//                     setImage("https://play-lh.googleusercontent.com/3Wn9P0lK2sLk8fQehm--7PLqYXPto7sDLWmslsmkg5k-6YfFCUMK5nVzppJidTpTFE0=s360-rw")
//                 }
//             })
//             .catch(err => {
//                 console.log("업로드 에러", err)
//             })
//     }

//     const onSubmitService = (e) => {
//         e.preventDefault()


//         const body = {
//             writer: user.userData._id,
//             name: name,
//             link: link,
//             category: category,
//             description: description,
//             ratio: parseInt(ratio),
//             feature: feature,
//             image: image
//         }

//         axios.post('/api/services/saveService', body)
//             .then(response => {
//                 if(response.data.success){
//                     console.log("response.data")
//                 }
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     return (
//         <>
//         <Form onSubmit={onSubmitService}>
//         <Form onSubmit={onSubmitLink}>
//             <div style={{display: 'block', alignItems: 'center', backgroundColor: 'red'}}>
                
//                 <label> 링크 입니다. </label>
//                 <input onChange={onLinkChange} value={link}>
//                 </input>
//                 <Button type='primary' size='large' onClick={onSubmitLink}>링크 제출</Button>
//             </div>
//         </Form>
//         <p>이름</p>
//         <input onChange={onNameChange} value={name}>
//         </input>

//         <p>카테고리</p>
//         <input onChange={onCategoryChange} value={category}>
//         </input>

//         <p>사진</p>
//         <input value={category}>
//         </input>

//         <p>핵심 기능 설명</p>
//         <input value={description}>
//         </input>

//         <p>5점을 준 유저 비율</p>
//         <input value={ratio}>
//         </input>

//         <p>특징</p>
//         <input value={feature}>
//         </input>

//         <Button onClick={onSubmitService}>서비스 등록하기</Button>
//         </Form>
//         </>
//     )
// }

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'antd';
import { useSelector } from 'react-redux';

function UploadPage() {
    return (
        <div>
            Login Page
        </div>
    )
}

export default UploadPage;
