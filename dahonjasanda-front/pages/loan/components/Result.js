import { Card } from "react-bootstrap";
import classes from './Result.module.css'

const ResultCard = ({finName, prdtName, prdtInfo1, prdtInfo2, prdtInfo3}) => {
    return (
        <>
            {/* <Card bg='secondary' style={{width:'13rem', height : '16rem'}}> */}
            <Card bg='secondary' className={`${classes.card}`}>
                <Card.Header>{finName}</Card.Header>
                <Card.Body>
                    <Card.Title as='h5'>{prdtName}</Card.Title>
                        <b>{prdtInfo1}</b><hr></hr>
                        <b>{prdtInfo2}</b><hr></hr><br></br>
                        <b>{prdtInfo3}</b>
                </Card.Body>
            </Card>
        </>
    )
}

export default ResultCard;