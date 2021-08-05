import React from 'react'
import { Card, Typography, Button } from "antd";

const ResultCard = (props) => {

    return (
      <>
      <span
        style={{ width: 700, display:'flex', margin:10, border: '1px solid'}}
      >
        <span style={{display:'block', width:'30%', backgroundColor:'blue'}}>
        <p> 토플 영단어 보카 </p>
        <img alt="ww" style={{width:150}} src="https://play-lh.googleusercontent.com/FNXV9IWrS7n2VMq1R_bRqWXQw-n69fkSxovQ-Wt6BiW7S3T8UuYfymZ4hTXanrhyaaQ=s360-rw" />

        <p>{props.number}</p>
        </span>
        <span style={{backgroundColor:'red', width:'70%'}}>
        <Button style={{marginRight:'0'}}>서비스 비교하기</Button>
        <p> 시간날 때 틈틈이 토플 단어를 외우는데 최적화 된 앱 </p>
        <p> 100명 중 87명이 유용하다고 평가 </p>
        <p> 100명 중 92명이 믿을만하다고 평가 </p>
        <p> 추천 수 : {props.number} </p>
        </span>
      </span>
      </>
    )
}

export default ResultCard;