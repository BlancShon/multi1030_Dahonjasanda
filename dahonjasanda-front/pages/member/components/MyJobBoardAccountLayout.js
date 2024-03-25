import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Avatar from '../../../components/Avatar'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'

const JobBoardAccountLayout = ({ accountPageTitle, activeAccountNav, children }) => {


  const [loginInfo, setLoginInfo] = useState(null);
  const [loginName, setLoginName] = useState(null);

  useEffect(() => {
      getLoginInfo();
  },[]);

  // async : 비동기식 키워드, 
  const getLoginInfo = async () => {
      try {
          var response = await axios.get('http://localhost/memberRest/loginInfo', 
                                                          { withCredentials: true });
          console.log(response)
          if (response.data.result === true) {
              setLoginInfo(response.data.member);
              setLoginName(response.data.member.name)
          } else {
              setLoginName();
          }
      } catch (e) {
          console.log(e);
      }
  }

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // State to control Collapse
  const [open, setOpen] = useState(false)

  return (
    <>
    <h1>{!loginInfo &&'로그인을 해주세요!'}</h1>
      {/* Page overlay */}
      <div className='position-absolute top-0 start-0 w-100 bg-dark' style={{height: '398px'}}></div>

      {/* Page content */}
      <Container as='section' className='content-overlay mt-5 mb-md-4 py-5'>
        {/* Page card like wrapper */}
        <div className='bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2'>

          {/* Account header */}
          <div className='d-flex align-items-start justify-content-between pb-4 mb-2'>
            <div className='d-flex align-items-start'>
              <div className='position-relative flex-shrink-0'>
                <Avatar
                  img={{
                    src: '/images/avatars/37.png',
                    alt: 'Avatar'
                  }}
                  size={[100, 100]}
                />
                <OverlayTrigger
                  placement='top'
                  overlay={<Tooltip>Change image</Tooltip>}
                >
                  <Button size='xs' variant='light btn-icon rounded-circle shadow-sm' className='position-absolute end-0 bottom-0'>
                    <i className='fi-pencil fs-xs'></i>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className='ps-3 ps-sm-4'>
                {console.log("유저 정보", loginInfo)}
                <h3 className='h5'>{loginName} {loginInfo && loginInfo.memberId}</h3>
                <ul className='list-unstyled fs-sm mb-0'>
                  <li className='d-flex text-nav text-break'>
                    <i className='fi-mail opacity-60 mt-1 me-2'></i>
                    <span>{loginInfo && loginInfo.email}</span>
                  </li>
                  <li className='d-flex text-nav text-break'>
                    <i className='fi-phone opacity-60 mt-1 me-2'></i>
                    <span>{loginInfo && loginInfo.phone}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button size='lg' variant='outline-primary rounded-pill'
            onClick={() => setOpen(!open)}
            aria-controls='account-menu'
            aria-expanded={open}
            className='d-md-none w-100'
          >
            <i className='fi-align-justify me-2'></i>
            Account Menu
          </Button>
         <div>
       
  {/* <Row>
    <Col><Button variant='light' value='update' onClick={(e) => setSelecetedCategory(e.target.value)}><i className='fi-settings mt-n1 me-2 fs-base'>    {selectedCategory}정보 수정</i></Button></Col>
    <Col><Button variant='light' value='joinedParties' onClick={(e) => setSelecetedCategory(e.target.value)}>  <i className='fi-file mt-n1 me-2 fs-base'> 가입한 파티</i></Button></Col>
    <Col><Button variant='light' value='interestedParties' onClick={(e) => setSelecetedCategory(e.target.value)}>   <i className='fi-heart mt-n1 me-2 fs-base'> 관심 파티</i></Button></Col>
    <Col><Button variant='light' value='mySchedule' onClick={(e) => setSelecetedCategory(e.target.value)}>   <i className='fi-file mt-n1 me-2 fs-base'> 나의 스케쥴</i></Button></Col>
  </Row> */}
</div>

          {children}

        </div>
      </Container>
    </>
  )
}

export default JobBoardAccountLayout