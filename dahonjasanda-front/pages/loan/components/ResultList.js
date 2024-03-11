
import { Button, Card, Col, Container, Form, Pagination, Row } from "react-bootstrap"

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ImageLoader from "../../../components/ImageLoader"
import Link from "next/link"
import ResultCard from "./Result"

const ResultList = ({resultList, onChangeSearchFormHandler}) => {

    return (

        <Container>
            <Row>
                <Col>
                <Row>
                    <Container className="px-5 mx-5">
                        <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
                            <div className='d-none d-sm-flex align-items-center flex-shrink-0 text-muted'>
                                <i className='fi-check-circle me-2'></i>
                                <span className='fs-sm mt-n1'>148 개의 결과</span>
                            </div>
                        </div>
                    </Container>
                    </Row>
                    
                    <Row xxs={2} xs={2} md={3} lg={4} className='gy-4 gl-4 gl-xxl-4 py-4 px-5 mx-5'>
                        {resultList.map((result)=> {
                            return     (
                                <ResultCard key={result.id}
                                finName={result.korCoNm} prdtName={result.finPrdtNm} prdtInfo1={result.lendRateTypeNm} 
                                prdtInfo2={result.rpayTypeNm} prdtInfo3={result.lendRateMin} prdtInfo4={result.lendRateMax}>
                                </ResultCard>
                            )
                        })}
                    </Row>

                    <Container className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination>
                        <Pagination.Item>
                            <i className='fi-chevron-left me-sm-2'></i>
                            <span className='d-none d-sm-inline'>Prev</span>
                        </Pagination.Item>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item active>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>
                            <span className='d-none d-sm-inline'>Next</span>
                            <i className='fi-chevron-right ms-sm-2'></i>
                        </Pagination.Item>
                        </Pagination>
                    </Container>


                </Col>

                {/* <Col xxs={3} xs={3}>
                    <Container className="</div>">
                        <Container className="position-sticky top-0 end-0 vh-100 p-3" style={{ maxWidth: '300px' }}>   
                    
                            <Card style={{maxWidth: '25rem'}}>
                            <ImageLoader
                                src='/images/real-estate/catalog/04.jpg'
                                width={306}
                                height={500}
                                layout='responsive'
                                alt='Card image'
                                className='card-img-top'
                            />
                            <Card.Body>
                                <Card.Title as='h5'>Card title</Card.Title>
                                <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                <Button as={Link} href='#' size='sm'>Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </Col> */}
            </Row>
        </Container>

    )
}

export default ResultList;