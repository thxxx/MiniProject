import React from 'react'
import { Card, Typography } from "antd"
import { Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import './ResultCard.scss'
import InputIcon from '@material-ui/icons/Input';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ResultCard = (props) => {
  const classes = useStyles();

    return (
      <>
      <div className="container">
        <div className="d_top">
          <span className="d_left">
            <div>
              <img alt="ww" style={{width:150}} src="https://play-lh.googleusercontent.com/FNXV9IWrS7n2VMq1R_bRqWXQw-n69fkSxovQ-Wt6BiW7S3T8UuYfymZ4hTXanrhyaaQ=s360-rw" />
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>앱으로 이동</Button>
            </div>
            <div>
              <Button variant="outlined" endIcon={<InputIcon />}>웹으로 이동</Button>
            </div>
            <p>{props.number}</p>
          </span>
          <span className="d_right">
            <div className="title">
              <p> 토플 영단어 보카 </p>
            </div>
            <div className="oneline">
              <p> 한 줄 설명 </p>
            </div>
            <div className="description">
              <p> 자세한 설명 ( 기능 ) </p>
            </div>
            <div className="infos">
              <span> 
                <p>
                  NPS
                </p>
                </span>
              <span>  
                <p>
                  유용함
                </p>
              </span>
              <span>
                <p>
                  어떤사람들에게 추천?
                </p>
              </span>
            </div>
          </span>
        </div>
        <div className="reviews">
          <Accordion style={{width:'100%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>사람들이 남긴 TOP3 리뷰 보기</Typography>
            </AccordionSummary>
            <AccordionDetails style={{width:'100%'}}>
              <span className="rv"> 
                <div>
                  <p>
                    리뷰 1 사용자 이름
                  </p>
                  <p>
                    리뷰 1 별점
                  </p>
                </div>
                <p>
                  리뷰 1 내용
                </p>
                </span>
              <span className="rv">  
                <p>
                  리뷰 2 사용자 이름
                </p>
                <p>
                  리뷰 2 내용
                </p>
              </span>
              <span className="rv">
                <p>
                  리뷰 3 사용자 이름
                </p>
                <p>
                  리뷰 3 내용
                </p>
              </span>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="d_foot">
          <p>
            무료, 인앱결제
          </p>
          <p>
            플랫폼 : 앱, 웹
          </p>
        </div>
      </div>
      </>
    )
}

export default ResultCard;