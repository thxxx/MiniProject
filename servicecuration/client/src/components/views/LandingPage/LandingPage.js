import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import ResultCard from '../../tools/ResultCard'
import ShowLanding from './ShowLanding'
import { Card, Button, Row, Col } from "antd";
import { UserContext } from '../../../context/userContext'

function LandingPage() {
    const {users, setUsers} = useContext(UserContext)
    const [showType, setShowType] = useState("none")
    const [options, setOptions] = useState({
        disease:false,
        workout:false,
        tool:false,
        schoolStudy:false,
        saveMoney:false,
        scheduleMoney:false,
        selfImprovement:false,
        healing:false,
        hobby:false,
        lifestyle:false,
        funny:false
    })
    const [results, setResults] = useState([1,2,3]);
    const [ResultLoad, setResultLoad] = useState(false);
    const [Categories, setCategories] = useState(["disease","workout","tool","schoolStudy","saveMoney","scheduleMoney","selfImprovement","healing","hobby","lifestyle","funny"]);

    console.log("유저 정보 입니다.", users)

    useEffect(() => {
        axios.get('/', (err, res) => {
            if(err) console.log("에러", err)
            console.log(res);
        })
        console.log('Hello welcome!');
    }, [])
    

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
            case "saveMoney":
                setOptions({...options, saveMoney:!options["saveMoney"]});
                break;
            case "scheduleMoney":
                setOptions({...options, scheduleMoney:!options["scheduleMoney"]});
                break;
            case "selfImprovement":
                setOptions({...options, selfImprovement:!options["selfImprovement"]});
                break;
            case "healing":
                setOptions({...options, healing:!options["healing"]});
                break;
            case "hobby":
                setOptions({...options, hobby:!options["hobby"]});
                break;
            case "lifestyle":
                setOptions({...options, lifestyle:!options["lifestyle"]});
                break;
            case "funny":
                setOptions({...options, funny:!options["funny"]});
                break;
            default:
                break;
        }
        console.log(`체크 했음 ${category}`);
    }


    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();

    
    const categoryTable = Categories.map((category, index) => {
        let bcolor;

        options[category.toString()] ?  bcolor = "blue" : bcolor = "yellow"

        return (
            <Col key={index} lg={6} md={8} xs={24}>
                <Button key={index} onClick={e => checkOptions(category)} style={{width: '100%', height: '100px', backgroundColor: `${bcolor}`}}>
                    {category}
                </Button>
            </Col>
        )
    });

    const showTypeform = () => {
        if(showType === "none"){
            setShowType("")
            console.log(Categories)
        }else{
            setShowType("none")
        }
    };

    return (
        <>
        <div className="app">
        <ShowLanding />
            <Row gutter={32, 16}>
                    {categoryTable}
            </Row>
        <ResultCard />
        
        </div>
                    
        <Button onClick={showTypeform}>{ showType==='none' ? "설문 조사 창 열기" : "설문조사 창 닫기"}</Button>
        <span style={{display: showType, width:'80%' }} >
            <div className="typeform-widget" 
                data-url="https://form.typeform.com/to/Hw25d5Gh?typeform-medium=embed-snippet" 
                style={{width: '100%', height: '500px' }}>
            </div>
        </span>

        </>
    )
}

export default LandingPage