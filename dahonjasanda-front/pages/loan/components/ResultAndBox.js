
import { Button, Card, Col, Container, Form, Pagination, Row } from "react-bootstrap"

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ImageLoader from "../../../components/ImageLoader"
import Link from "next/link"

const ResultAndBox = () => {

    return (

        <Container>
                   <Row>
                    <Col>
                        <div className="px-5 mx-5">
                            <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
                                <Form.Group controlId='sortby' className='d-flex align-items-center flex-shrink-0'>
                                    <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                                    <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                                    Sort by:
                                    </Form.Label>
                                    <Form.Select size='sm'>
                                    <option value='Newest'>Newest</option>
                                    <option value='Popularity'>Popularity</option>
                                    <option value='Low - Hight Price'>Low - Hight Price</option>
                                    <option value='High - Low Price'>High - Low Price</option>
                                    <option value='High Rating'>High Rating</option>
                                    <option value='Average Rating'>Average Rating</option>
                                    </Form.Select>
                                </Form.Group>
                                <hr className='d-none d-sm-block w-100 mx-4' />
                                <div className='d-none d-sm-flex align-items-center flex-shrink-0 text-muted'>
                                    <i className='fi-check-circle me-2'></i>
                                    <span className='fs-sm mt-n1'>148 results</span>
                                </div>
                                </div>
                            </div>
                        <Row xxs={1} lg={3} md={3}  className='gy-4 gx-3 gx-xxl-4 py-4 px-5 mx-5'>
                            
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card bg='secondary'>
                                    <Card.Header>대충 은행 정보</Card.Header>
                                    <Card.Body>
                                        <Card.Title as='h5'>대충 제품 정보</Card.Title>
                                        <Card.Text className='fs-sm'>
                                            대충 어떤 정보

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>

                        <div className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
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
                        </div>


                        </Col>

                        <Col xs={3} className="bg-light">
                             <div className="position-sticky top-0 end-0 vh-100 p-3" style={{ maxWidth: '300px' }}>   
                       
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
                            </div>
                        </Col>
                    </Row>
                </Container>

    )
}

export default ResultAndBox;