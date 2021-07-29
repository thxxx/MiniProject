import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button, Row, Col } from "antd";
import axios from 'axios';
import ResultCard from './ResultCard'
import ShowLanding from './ShowLanding'


function LandingPage() {

    const [showType, setShowType] = useState("none");
    const [options, setOptions] = useState({
        disease:false,
        workout:false,
        tool:false,
        schoolStudy:false,
        saveMoney:false,
        scheduleMoney:false,
        selfImprovement:false,
        headling:false,
        hobby:false,
        lifestyle:false,
        funny:false
    })
    const [results, setResults] = useState([1,2,3]);
    const [ResultLoad, setResultLoad] = useState(false);
    const [Categories, setCategories] = useState(["disease","workout","tool","schoolStudy","saveMoney","scheduleMoney","selfImprovement","headling","hobby","lifestyle","funny"]);

    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();

    useEffect(() => {
        console.log("effect")
    }, []);

    const showTypeform = () => {
        if(showType === "none"){
            setShowType("")
            console.log(Categories)
        }else{
            setShowType("none")
        }
    };

    // Style

    const gridStyle = {
        width: "25%",
        textAlign: "center"
    };

    const checkOptions = (category) => {
        switch(category){
            case "disease":
                setOptions({...options, disease:!options["disease"]});
                break;
            case "workout":
                setOptions({...options, workout:!options["workout"]});
                break;
            case "tool":
                setOptions({...options, tool:!options["tool"]});
                break;
            case "schoolStudy":
                setOptions({...options, schoolStudy:!options["schoolStudy"]});
                break;
            default:
                break;
        }
        console.log(`체크 했음 ${category}`);
    }

    const style = { background: '#0092ff', padding: '4px 4px' };
    const resultCardOne = { };


    const categoryTable = Categories.map((category, index) => {

        const ca = category

        return (
            <Col key={index} lg={6} md={8} xs={24}>
                <Button onClick={e => checkOptions(category)} style={{width: '100%', height: '100px' }}>
                    {options[category.toString()] ? "true":"false"}
                </Button>
                <div style={style}>
                    {category}
                </div>
            </Col>
        )
    });

    const delay = (time) => {
        return new Promise((resolve)=> setTimeout(resolve, time))
    }

    async function loadingResult(time) {
        await delay(time);
        console.log("시간이 지났습니다.");
        return "done";
    }

    async function getRecommendedResult(e){
        e.preventDefault();
        setResultLoad(false)

        const body = {
            option:options
        }

        axios.post('/api/services/getresult', body)
            .then(response => {
                if(response.data.success){
                    console.log(response.data.message)
                }else{
                    console.log("실패")
                }
            })
            .catch(err => {
                console.log("에러메시지", err)
            })

        axios.get('/api/services/getservice')
            .then(response => {
                if(response.data.success){
                    console.log(response.data.message)
                }else{
                    console.log("실패")
                }
            })
            .catch(err => {
                console.log("에러메시지", err)
            })

        const delayTime = parseInt(Math.random()*1500 + 2000)
        await loadingResult(delayTime)
        console.log("시간이 지났습니다.")
        setResultLoad(true)

    }

    const showResults = results.map((result, index) => {

        return (
            <Col key={index} lg={6} md={8} xs={24} style={resultCardOne}>
                <ResultCard number={result} />
            </Col>
        )
    })

    const showLoading = () => {
        return (
            <div>로딩중입니다.</div>
        )
    }

    return (
        <>
        <ShowLanding />
        <Row gutter={32, 16}>
            {categoryTable}
        </Row>
            <div className="app">
                <span style={{ fontSize: '2rem' }}>
                    Let's Start Coding!'
                </span>
            <h1 style={{fontSize:'5em'}}>옵션을 선택해 주세요</h1>
            <hr />
            
            <Button onClick={getRecommendedResult}>추천받기.</Button>

            {
            ResultLoad ? <span style={{display:"flex", justifycontent:"center"}}>
                            <Row gutter={32, 16} style={{width:'80%'}}>
                                {showResults}
                            </Row> 
                        </span> 
            : <div> {showLoading} 로딩 중</div>
            } 
            
            <Button onClick={showTypeform}>버튼입니다.</Button>

            <span style={{display: showType, width:'80%' }} >
                <div className="typeform-widget" 
                    data-url="https://form.typeform.com/to/Hw25d5Gh?typeform-medium=embed-snippet" 
                    style={{width: '100%', height: '500px' }}>
                </div>
            </span>

            </div>
        </>
    )
}

export default LandingPage