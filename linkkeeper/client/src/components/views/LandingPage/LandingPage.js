import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button, Row, Col } from "antd";
import axios from 'axios';
import ResultCard from './ResultCard'

function LandingPage() {

    const [showType, setShowType] = useState("none");
    const [options, setOptions] = useState({
        a:false,
        b:false,
        c:false
    });
    const [results, setResults] = useState([1,2,3]);

    const example = {
        a:"aaa",
        b:"bbb",
        c:"ccc"
    }
    const [Categories, setCategories] = useState(["a", "b", "c"]);

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
            case "a":
                setOptions({...options, a:!options["a"]});
                break;
            case "b":
                setOptions({...options, b:!options["b"]});
                break;
            case "c":
                setOptions({...options, c:!options["c"]});
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
                <div style={style}>col-6
                    <span></span>
                </div>
            </Col>
        )
    });

    const getRecommendedResult = (e) => {
        e.preventDefault();

        const body = {
            option:options
        }
        axios.get(`/api/users/getresult`).then(response => {
            if (response.status === 200) {
                // 결과 출력. 고른걸 바탕으로!

            } else {
                alert('Log Out Failed')
            }
            });
    }

    const showResults = results.map((result, index) => {

        return (
            <Col key={index} lg={6} md={8} xs={24} style={resultCardOne}>
                <ResultCard number={result} />
            </Col>
        )
    })

    return (
        <>
        <Row gutter={32, 16}>
            {categoryTable}
        </Row>
            <div class="app">
                <span style={{ fontSize: '2rem' }}>
                    Let's Start Coding!'
                </span>
            <h1 style={{fontSize:'5em'}}>옵션을 선택해 주세요</h1>
            <hr />
            
            <Button onClick={getRecommendedResult}>추천받기.</Button>

            <span style={{display:"flex", justifycontent:"center"}}>
                <Row gutter={32, 16} style={{width:'80%'}}>
                    {showResults}
                </Row>
            </span>

            <Button onClick={showTypeform}>버튼입니다.</Button>

            <span style={{display: showType, width:'80%' }} >
                <div class="typeform-widget" 
                    data-url="https://form.typeform.com/to/Hw25d5Gh?typeform-medium=embed-snippet" 
                    style={{width: '100%', height: '500px' }}>
                </div>
            </span>

            </div>
        </>
    )
}

export default LandingPage