import axios from 'axios'
import React from 'react'

function ShowLanding() {
    const onClickShow = () => {
        axios.get('/api/services')
        .then( response => {console.log("되도디되도디ㅗ디ㅚ됟ㅆ나")})
        .catch((err) => {throw err})
    }
    return (
        <>

        <div style={{display: 'block', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontSize:'5em'}}>
            Service Curator - 서비스추천소에 오신걸 환영합니다.
        </div>
        <span style={{fontSize:'3em'}}>
            아래에서 본인에 해당하는 키워드를 선택한 후 제출을 누르시면
            필요한 서비스를 찾아 드립니다.
        </span>
        <button onClick={onClickShow}> 클릭 </button>
        </div>
        </>
    )
}

export default ShowLanding
