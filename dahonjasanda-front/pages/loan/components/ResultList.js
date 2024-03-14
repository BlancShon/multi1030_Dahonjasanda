
import { Button, Card, Col, Container, Form, Pagination, Row } from "react-bootstrap"

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ImageLoader from "../../../components/ImageLoader"
import Link from "next/link"
import ResultCard from "./Result"
import PageComponent from "./PageComponent"

const ResultList = ({resultList, onChangePageHandler, pageable}) => {

    const { pageNumber, totalPages, totalElements } = pageable;

    return (
        (resultList) ?
            (<Container>
            <Row>
                <Col>
                <Row>
                    <Container className="px-5 mx-5">
                        <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
                            <div className='d-none d-sm-flex align-items-center flex-shrink-0 text-muted'>
                                <i className='fi-check-circle me-2'></i>
                                <span className='fs-sm mt-n1'>{totalElements} 개의 결과</span>
                            </div>
                        </div>
                    </Container>
                    </Row>
                    
                    <Row xxs={2} xs={2} md={3} lg={4} className='gy-4 gl-4 gl-xxl-4 py-4 px-5 mx-5'>
                        {resultList.map((result)=> {
                            return     (
                                <ResultCard 
                                    key={result.id}
                                    finName={result.korCoNm} 
                                    prdtName={result.finPrdtNm} 
                                    prdtInfo1={result.lendRateTypeNm} 
                                    prdtInfo2={result.rpayTypeNm} 
                                    prdtInfo3={result.lendRateMin} 
                                    prdtInfo4={result.lendRateMax}>
                                </ResultCard>
                            )
                        })}
                    </Row>

                    <Container className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <PageComponent totalPages={totalPages} currentPage={pageNumber} onPageChange={onChangePageHandler} />
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
        </Container>)
    :
    <div className="text-center">
        <h1>검색결과가 없습니다</h1>
    </div>

    )
}

export default ResultList;