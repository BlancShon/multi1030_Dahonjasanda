import { Button, Card, Col, Form, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap';
import VenueCardOverlay from '../../components/VenueCardOverlay'
import { Main } from '../../layouts';
import heroImg from '../../public/images/myImages/partyHero.jpg'
import VehicleCard from '../../components/VehicleCard'
import IconBox from '../../components/IconBox';
import BlogCard from '../../components/BlogCard';
import ImageLoader from '../../components/ImageLoader';

const Party = () => {
    return (
        <>
        <Main>
        <VenueCardOverlay
            img={{
                src:heroImg,

                // ../../public/images/myImages/partyHero.jpg
                alt: 'Background image'
            }}
            title=''
            // overlay // Optional overlay prop to add contrast to the content against background image
            />
            <div className='col-9 p-4 mx-auto' style={{backgroundColor: 'dimgray', borderRadius: '10px', top: '50px',left: '20px', position: 'relative', top: '-50px' }}>
                <div>
                    <FormGroup className='d-block d-md-flex rounded-md-pill mb-5 mb-sm-4'>
                        <InputGroup size='lg' className='border-end-md'>
                        <InputGroup.Text className='text-muted ps-3'>
                            <i className='fi-search'></i>
                        </InputGroup.Text>
                        <FormControl aria-label='Search field' placeholder='What are you looking for?'/>
                        </InputGroup>
                        <hr className='d-md-none my-2' />
                        <div className='d-sm-flex'>
                        
                            <Button size='lg' className='rounded-pill w-100 w-md-auto ms-sm-3'>Search</Button>
                        </div>
                    </FormGroup>
                </div>

                <div>
                    <Row>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                        <Col>
                            <IconBox
                            href='#'
                            media='fi-house-chosen'
                            title='Shadow card'
                            type='pill-rounded-shadow'
                            className='mb-4'
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='col-10 mx-auto' style={{backgroundColor: 'rgba(250, 250, 210, 0.2)' ,border: '1px solid gold', borderRadius: '10px' }}>
                <div className='m-2'>
                        
                    <h2><i className='fi-star-filled'></i> 대충 최고 인기 모임이라는 뜻</h2>
                </div>
                <Row className='m-3'>
                    <Col>
                        <VehicleCard
                            href='#'
                            images={[
                                ['/images/car-finder/catalog/01.jpg', 400, 205, 'Image']
                                // Add more images to the array to display a carousel
                            ]}
                            title='Ford Truck Lifted'
                            year='1995'
                            price='$24,000'
                            location='Chicago'
                            checkbox={{
                                label: 'Compare',
                                props: {
                                onChange: (e) => e.target.checked ? alert('Car ADDED to comparison list!') : alert('Car REMOVED from comparison list!')
                                }
                            }}
                            badges={[
                                ['info', 'New']
                            ]}
                            wishlistButton={{
                                tooltip: 'Add to Wishlist',
                                props: {
                                onClick: () => alert('Vehicle added to your Wishlist!')
                                }
                            }}
                            footer={[
                                ['fi-dashboard', '278K mi'],
                                ['fi-gearbox', 'Manual'],
                                ['fi-petrol', 'Diesel']
                            ]}
                            // light // Optionally pass light prop so the card works well on dark backgrounds
                            className='mx-auto'
                            style={{maxWidth: '400px'}}
                        />
                    </Col>
                    <Col>
                        <VehicleCard
                            href='#'
                            images={[
                                ['/images/car-finder/catalog/01.jpg', 400, 205, 'Image']
                                // Add more images to the array to display a carousel
                            ]}
                            title='Ford Truck Lifted'
                            year='1995'
                            price='$24,000'
                            location='Chicago'
                            checkbox={{
                                label: 'Compare',
                                props: {
                                onChange: (e) => e.target.checked ? alert('Car ADDED to comparison list!') : alert('Car REMOVED from comparison list!')
                                }
                            }}
                            badges={[
                                ['info', 'New']
                            ]}
                            wishlistButton={{
                                tooltip: 'Add to Wishlist',
                                props: {
                                onClick: () => alert('Vehicle added to your Wishlist!')
                                }
                            }}
                            footer={[
                                ['fi-dashboard', '278K mi'],
                                ['fi-gearbox', 'Manual'],
                                ['fi-petrol', 'Diesel']
                            ]}
                            // light // Optionally pass light prop so the card works well on dark backgrounds
                            className='mx-auto'
                            style={{maxWidth: '400px'}}
                        />
                    </Col>
                    <Col>
                        <VehicleCard
                            href='#'
                            images={[
                                ['/images/car-finder/catalog/01.jpg', 400, 205, 'Image']
                                // Add more images to the array to display a carousel
                            ]}
                            title='Ford Truck Lifted'
                            year='1995'
                            price='$24,000'
                            location='Chicago'
                            checkbox={{
                                label: 'Compare',
                                props: {
                                onChange: (e) => e.target.checked ? alert('Car ADDED to comparison list!') : alert('Car REMOVED from comparison list!')
                                }
                            }}
                            badges={[
                                ['info', 'New']
                            ]}
                            wishlistButton={{
                                tooltip: 'Add to Wishlist',
                                props: {
                                onClick: () => alert('Vehicle added to your Wishlist!')
                                }
                            }}
                            footer={[
                                ['fi-dashboard', '278K mi'],
                                ['fi-gearbox', 'Manual'],
                                ['fi-petrol', 'Diesel']
                            ]}
                            // light // Optionally pass light prop so the card works well on dark backgrounds
                            className='mx-auto'
                            style={{maxWidth: '400px'}}
                        />
                    </Col>
                </Row>
            </div>
            <div className='col-10 mx-auto mt-4'>
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

            <div className='m-5 p-4 col-9 mx-auto'>
                    <Row>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3} className='my-3'>
                            <Card style={{maxWidth: '308px'}}>
                                <ImageLoader
                                    src='/images/real-estate/catalog/04.jpg'
                                    width={306}
                                    height={200}
                                    layout='responsive'
                                    alt='Card image'
                                    className='card-img-top'
                                />
                                <Card.Body>
                                    <Card.Title as='h5'>Card title</Card.Title>
                                    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Main>
        </>
    )
}

export default Party;