import { Button, Col, Container, Form, FormControl, FormGroup, InputGroup, Row } from "react-bootstrap";
import MyIconBox from "./MyIconBox";
import dynamic from 'next/dynamic'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {useEffect, useState } from "react";
import CheckBoxList from "./CheckBoxList";

const BgParallax = dynamic(() => import('../../../components/BgParallax'), { ssr: false })

const searchCondition = {
  주택담보대출: {
    lendrateType: {
      "": "금리유형",
      F: "고정금리F",
      C: "변동금리C",
    },
    rpayType: {
      "": "상환유형",
      S: "만기일시상환방식S",
      D: "분활상환방식D",
    },
    sort: {
      "": "정렬조건",
      asc: "금리낮은순",
      desc: "금리높은순",
    },
  },
  개인신용대출: {
    crdtprdtType: {
      "": "crdtprdtType상품유형",
      "1": "일반신용대출1",
      "2": "마이너스한도대출2",
      "3": "장기카드대출(카드론)3",
    },
    crdtlendrateType금리타입: {
      "": "crdtlendrateType금리타입",
      A: "대출금리A",
      B: "기준금리B",
      C: "가산금리C",
      D: "가감조정금리D",
    },
    sort: {
      "": "정렬조건",
      asc: "금리낮은순",
      desc: "금리높은순",
    },
  },
  전세대출: {
    lendrateType금리유형: {
      "": "lendrateType금리유형",
      F: "고정금리F",
      C: "변동금리C",
    },
    rpayType상환유형: {
      "": "rpayType상환유형",
      S: "만기일시상환방식S",
      D: "분활상환방식D",
    },
    sort: {
      "": "정렬조건",
      asc: "금리낮은순",
      desc: "금리높은순",
    },
  },
};

const bankFin = {
    은행 : ['우린은행', '국민은행', '신한은행', '하나은행', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네', '넘흐옙흐네'],
    여신전문 : ['여신전문1', '여신전문2', '여신전문2', '여신전문2', '여신전문2', '여신전문2', '여신전문2', '여신전문2'],
    저축은행 : ['저축은행', '저축은행', '저축은행', '저축은행', '저축은행', '저축은행', '저축은행', '저축은행'],
    보험 : ['보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구', '보험어쩌구'],
    금융투자 : ['금융투자', '금융투자', '금융투자', '금융투자', '금융투자', '금융투자', '금융투자', '금융투자']
}

const categories = [
    //   {
    //     href: '/city-guide/catalog',
    //     media: 'fi-bed',
    //     color: 'accent',
    //     title: '예금'
    //   },
    //   {
    //     href: '/city-guide/catalog',
    //     media: 'fi-cafe',
    //     color: 'warning',
    //     title: '적금'
    //   },
    //   {
    //     href: '/city-guide/catalog',
    //     media: 'fi-shopping-bag',
    //     color: 'primary',
    //     title: '연금'
    //   },
      {
        media: 'fi-museum',
        color: 'success',
        title: '주택담보대출'
      },
      {
        media: 'fi-credit-card',
        color: 'accent',
        title: '개인신용대출'
      },
      {
        media: 'fi-building',
        color: 'danger',
        title: '전세대출'
      },
  ]  
const HeroAndSearchForm = ({selectedCategory, onChangeCategoryHandler, onChangeSearchFormHandler}) => {
    const [selectOptions, setSelectOptions] = useState(searchCondition['주택담보대출'])
    const [selectedValues, setSelectedValues] = useState({});

    
    useEffect(() => {
        // selectCategory가 변경될 때마다 선택된 옵션을 초기화
        setSelectOptions(searchCondition[selectedCategory]);
        setSelectedValues({}); // 선택된 값 초기화
    }, [selectedCategory]);

    const onCategoryHandler = (selectedCategory) => {
        onChangeCategoryHandler(selectedCategory)
    }

    const onChangeOptionHandler = (condition, value) => {
        setSelectedValues((prevSelectedValues) => ({
            ...prevSelectedValues,
            [condition]: value,
        }));

        console.log("컨디션 뭐 넘어왔지",condition)
        console.log("벨류는 뭐 넘어왔지",value)
        console.log("셀렉티드벨류는 뭐있지",selectedValues)
    };

    return (
        <div>
            <BgParallax
                    imgSrc='/images/MyImages/financeBGImg.jpg'
                    type='scroll' // scale, opacity, scroll-opacity, scale-opacity
                    speed={0.5} // from -1.0 to 2.0
                    overlay='gradient' // or overlay={50} from 0 to 100
                    className='position-relative bg-dark zindex-1 py-xxl-5'
                >

                    <Container className='content-overlay mt-n2 mb-lg-3'>

                        <Container as='section' className='pt-xxl-4 mt-md-2 mb-md-4'>
                            <Row className='g-3 g-xl-4'>
                            {categories.map((category, indx) => (
                                <Col key={indx} className="text-center">
                                    <div onClick={()=>onCategoryHandler(category.title)}>
                                        <MyIconBox
                                            type='card-shadow'
                                            media={category.media}
                                            mediaColor={category.color}
                                            mediaShape='circle'
                                            title={category.title}
                                            align='center'
                                            isSelected={selectedCategory === category.title}
                                        />
                                    </div>
                                </Col>
                            ))}
                            </Row>
                        </Container>

                        <Col xl={8} lg={9} md={10} className='mx-auto px-0 m-5'>
                            {/* Search form */}
                            <FormGroup className='d-block d-md-flex rounded-md-pill mb-5 mb-sm-4'>
                                <InputGroup size='lg' className='border-end-md'>
                                <InputGroup.Text className='text-muted ps-3'>
                                    <i className='fi-search'></i>
                                </InputGroup.Text>
                                <FormControl aria-label='Search field' placeholder='What are you looking for?' />
                                </InputGroup>
                                <hr className='d-md-none my-2' />
                                <div className='d-sm-flex'>
                                
                                    <Button size='lg' className='rounded-pill w-100 w-md-auto ms-sm-3'>Search</Button>
                                </div>
                            </FormGroup>
                        </Col>
                        
                        <div className="px-5 mt-3">
                            <Container className='pb-3 d-flex justify-content-center'>

                           
                            {/* {
                                lendrateType: {
                                "": "lendrateType금리유형",
                                F: "고정금리F",
                                C: "변동금리C",
                                },

                                rpayType: {
                                "": "rpayType상환유형",
                                S: "만기일시상환방식S",
                                D: "분활상환방식D",
                                },
                                정렬: { 
                                "": "정렬조건", 
                                asc: "금리낮은순", 
                                desc: "금리높은순" },  */}
                                 {Object.keys(selectOptions).map((condition, index) => {
                                    return (
                                        <Form.Select
                                            key={index}
                                            aria-label="Default select example"
                                            className="mx-5"
                                            value={selectedValues[condition] || ""}
                                            name={condition}
                                            onChange={(e) =>
                                                onChangeOptionHandler(
                                                    condition,
                                                    e.target.value
                                                )
                                            }
                                        >
                                        {Object.keys(selectOptions[condition]).map((innerCond) => {
                                             const finValue =  selectOptions[condition][innerCond];
                                            return (
                                                <option
                                                key={innerCond}
                                                value={`${innerCond}`}
                                            >
                                                {finValue}
                                            </option>
                                            )
                                            
                                        })}
                                        </Form.Select>
                                    )
                                })}

                                {/* {Object.keys(selectOptions).map((condition, index) => {
                                    return (
                                        Object.keys(selectOptions[condition]).map((innerCond, innerIndex) => {
                                            return (
                                                <Form.Select
                                                    key={innerCond + innerIndex}
                                                    aria-label="Default select example"
                                                    className="mx-5"
                                                    value={selectedValues[innerCond] || ""}
                                                    name={innerCond}
                                                    onChange={(e) =>
                                                        onChangeOptionHandler(
                                                            innerCond,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                               {Object.keys(selectOptions[condition][innerCond]).map((finKey) => {
                                                    const finValue =  selectOptions[condition][innerCond][finKey];
                                                        return (
                                                            <option
                                                                key={finKey}
                                                                value={`${finKey}`}
                                                            >
                                                                {finValue}
                                                            </option>
                                                        );
                                                })}
                                                </Form.Select>
                                            )

                                        })
                                    )
                                })} */}

                            </Container>
                        </div>

                    </Container>
                        {/* <div className='position-absolute d-none d-xxl-block bottom-0 start-0 w-100 bg-white zindex-1' style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px', height: '30px', marginBottom: '-65px'}}></div> */}
                </BgParallax>

                <div className='px-5 pb-5'>
                    <div className="mt-3">
                        <Row>
                            <Col xs={1} className='text-center'>은행별</Col>
                            <Col xs={10}>
                                {
                                    Object.keys(bankFin).map((type, index) => {
                                        const list = bankFin[type];
                                        return (
                                        <CheckBoxList key={type+index} listName={type} list={list} indx={index} />
                                    )})
                                }
                            </Col>
                        </Row>
                    </div> 
                </div>
        </div>
    )
}

export default HeroAndSearchForm;