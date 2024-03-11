import { Card, Col } from "react-bootstrap";
import classes from './Result.module.css'

const ResultCard = ({finName, prdtName, prdtInfo1, prdtInfo2, prdtInfo3, prdtInfo4}) => {
    return (
        <Col>
            {/* <Card bg='secondary' style={{width:'13rem', height : '16rem'}}> */}
            <Card bg='light' className={`${classes.card}`} elevation={3}>
                <Card.Header className='bg-warning text-white fw-bold'>{finName}</Card.Header>
                <Card.Body>
                    <Card.Title as='h5'>{prdtName}</Card.Title>
                        <ul>
                        <li>{prdtInfo1}</li><hr></hr>
                        <li>{prdtInfo2}</li><hr></hr>
                        <li>{prdtInfo3}</li><hr></hr>
                        <li>{prdtInfo4}</li>
                        </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ResultCard;