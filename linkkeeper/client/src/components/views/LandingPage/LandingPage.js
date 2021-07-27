import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from "antd";

function LandingPage() {

    const [showType, setShowType] = useState("none");
    const [options, setOptions] = useState([]);
    const [Categories, setCategories] = useState(["포그바", "린가드", "래시포드", "산초", "카바니"]);
    
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
    const onClick = () => {
      console.log("클릭");
    };

    // Style

    const gridStyle = {
        width: "25%",
        textAlign: "center"
    };

    const checkOptions = (category="없음") => {
        console.log("체크하셨습니다", category);
    }

    const categoryTable = Categories.map((category, index) => {
        return (
            <Card.Grid style={gridStyle} onClick={checkOptions}>{category}</Card.Grid>
        )
    });

    return (
        <>
            <div className="app">
                <span style={{ fontSize: '2rem' }}>
                    Let's Start Coding!'
                </span>
            <Card title="Card Title" style={{width:"75%"}}>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                Content
                </Card.Grid>
                <Card.Grid style={gridStyle} onClick={onClick}>
                Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle} >{"Content"}</Card.Grid>
                {categoryTable}
            </Card>

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