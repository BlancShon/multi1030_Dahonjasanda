import { useEffect, useState } from 'react';
import Header from '../../components/header';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownSelect from './DropdownSelect';
import Row from 'react-bootstrap/Row'
import ReactSlider from 'react-slider'
import { useRouter } from 'next/router';



const MapComponent = () => {

const router = useRouter();
const [housingList, setHousingList] = useState([])
const [transactionType, setTransactionType] = useState('transactionType');
const [location, setLocation] = useState('Location');
const [propertyType, setPropertyType] = useState('Property type');
const [searchValue, setSearchValue] = useState('');




// useEffect(() => {

//   console.log('router.query');
//     console.log(router.query);
    
   
  
//     const { searchValue } = router.query;
//     const { transactionType } = router.query;
//     const { location } = router.query;
//     const { propertyType } = router.query;
   
    
//     setSearchValue(searchValue);
//     setTransactionType(transactionType);
//     setLocation(location);
//     setPropertyType(propertyType);
//     // getHousingList(searchValue, transactionType, location, propertyType);

//   const getHousingList = async (transactionType, location, propertyType, searchValue) => {
//     try {

//       var url = 'http://localhost/housingList';
      
//       if (searchValue != null) {
//         url = url + '&searchValue=' + searchValue;
//         url = url + '&transactionType=' + transactionType;
//         url = url + '&location=' + location;
//         url = url + '&propertyType=' + propertyType;
        
//       }

//       const response = await axios.get('url', {
//         withCredentials: true,
//       });
//       setHousingList(response.data.list);

      
//     } catch (error) {
//       console.error('Error fetching housing list:', error);
//     }
//   };

//   getHousingList();
// }, []);

useEffect(() => {
  if (!router.isReady) {
      return;
  }

  console.log('router.query');
  console.log(router.query);
  
 

  const { searchValue } = router.query;
  const { transactionType } = router.query;
  const { location } = router.query;
  const { propertyType } = router.query;
 
  
  setSearchValue(searchValue);
  setTransactionType(transactionType);
  setLocation(location);
  setPropertyType(propertyType);
 
  
  getHousingList(searchValue, transactionType, location, propertyType);
}, [router.isReady]);


    const getHousingList = async (transactionType, location, propertyType, searchValue) => {
      try {

        var url = 'http://localhost/housingList';
        
        if (searchValue != null) {
          url = url + '&searchValue=' + searchValue;
          url = url + '&transactionType=' + transactionType;
          url = url + '&location=' + location;
          url = url + '&propertyType=' + propertyType;
          
        }

        const response = await axios.get('url', {
          withCredentials: true,
        });
        setHousingList(response.data.list);

        
      } catch (error) {
        console.error('Error fetching housing list:', error);
      }
    };









  useEffect(() => {
    if (housingList.length === 0) {
      return; // Data not yet fetched
    }

    const loadKakaoMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=bb83919493996c6c554671877067a90a&libraries=services,clusterer&autoload=false`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 5,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const geocoder = new kakao.maps.services.Geocoder();

        // Extract addresses from housing objects
        const addresses = housingList.map((item) => item.hssply_adres);
            //console.log(addresses)
        addresses.forEach((address) => {
          geocoder.addressSearch(address, (result, status) => {
            console.log(result)
            if (status === kakao.maps.services.Status.OK) {
              const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(result[0].y, result[0].x),
              });
              marker.setMap(map);

              const iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                  iwPosition = new kakao.maps.LatLng(result[0].y, result[0].x); //인포윈도우 표시 위치입니다

              const infowindow = new kakao.maps.InfoWindow({
                position : iwPosition,
                content : iwContent
              })
              infowindow.open(map, marker)

              const moveLatLon = new kakao.maps.LatLng(37.5665, 126.9780);
    
              // 지도 중심을 이동 시킵니다
              map.setCenter(moveLatLon);
            }
          });
        });
      });
    };

    // Load the Kakao Map script dynamically
    loadKakaoMapScript();
  }, [housingList]);


  
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    var url = '/housing/housingMap'
   
    if (searchValue != null) {
        if (transactionType == null || location == null || propertyType == null) {
            url = url + '&transactionType=null' + '&location=null' + '&propertyType=null';
        } else {
            url = url + '&transactionType=' + data.get('transactionType') + '&location=' + data.get('location') + '&propertyType=' + data.get('propertyType');
        }
        url = url + '&searchValue=' + data.get('searchValue');
    }
    
    
    setSearchValue(data.get('searchValue'));
    setTransactionType(data.get('transactionType'))
    setLocation(data.get('location'))
    setPropertyType(data.get('propertyType'))
    router.push(url);
    getHousingList(data.get('searchValue'), data.get('transactionType'), 
                        data.get('location'), data.get('propertyType'));
}


const onChangeValue = (e) => {
  setSearchValue(e.target.value);
}
  return (
    <>
      <Header/>
      

{/* Search property form group */}

<div style={{marginTop:'60px'}}>
<Col xs={{order: 3}} lg={10} xl={8} className='position-relative mt-lg-n5 zindex-2' style={{width:'60%'}}>
   <form className='d-block' name="searchForm" onSubmit={onSubmit}  >
     <Row className='g-0 ms-sm-n2'>
       <Col md={8} className='d-sm-flex align-items-center'>
        {/* <label>
          <select icon='fi-home' name='transactionType' onChange={onChangeTransactionType} >
            <option value={"sale"}>매매</option>
            <option value={"rent"}></option>
            
          </select> 
        
        </label> */}
         <DropdownSelect
           defaultValue={transactionType}
           icon='fi-home'
           options={[
             ['sale', '매매'],
             ['rent', '임대']
           ]}
           variant='link ps-2 ps-sm-3'
           className='w-sm-50 border-end-sm'
           onSelect={(value) => setTransactionType(value)}
         />
         <hr className='d-sm-none my-2' />
         <DropdownSelect
           defaultValue={location}
           icon='fi-map-pin'
           options={[
             ['seoul', '서울'],
             ['gyeonggi', '경기'],
             ['chungnam', '충청북도'],
             ['chungbuk', '충청남도'],
             ['gyeongbuk', '경상북도'],
             ['gyeongnam', '경상남도'],
             ['gangwon', '강원도'],
             ['incheon', '인천'],
             ['ulsan', '울산'],
             ['gwangju', '광주'],
             ['busan', '부산'],
             ['daegu', '대구'],
           ]}
           variant='link ps-2 ps-sm-3'
           className='w-sm-50 border-end-sm'
           onSelect={(value) => setLocation(value)}
         />
         <hr className='d-sm-none my-2' />
         <DropdownSelect
           defaultValue={propertyType}
           icon='fi-list'
           options={[
             ['apt', '아파트'],
             ['off', '오피스텔']
       
           ]}
           variant='link ps-2 ps-sm-3'
           className='w-sm-50 border-end-md'
           onSelect={(value) => setPropertyType(value)}
         />
       </Col>
       <hr className='d-md-none mt-2' />
       <Col md={4} className='d-sm-flex align-items-center pt-4 pt-md-0'>
         {/* <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3'>
           <i className='fi-cash fs-lg text-muted me-2'></i>
           <span className='text-muted'>Price</span>
           <ReactSlider
             className='range-slider range-slider-single me-0 me-sm-3'
             thumbClassName='range-slider-handle'
             trackClassName='range-slider-track'
             min={0}
             max={1000}
             defaultValue={450}
             ariaLabel={['Handle']}
             ariaValuetext={state => `Handle value ${state.valueNow}`}
             step={1}
             renderThumb={(props, state) => (<div {...props}>
               <div className='range-slider-tooltip'>$ {state.valueNow}</div>
             </div>)}
           />
         </div>
         <hr className='d-md-none mt-2' /> */}
         <div style={{marginLeft:"50px"}}>        
          <span className="blue_window">
            <input type="text" id="searchValue" name="searchValue" onChange={onChangeValue}  value={searchValue || ""}  className="input_text" />
        </span>
        </div>
        <hr className='d-md-none mt-2' />     
         <Button type='submit' variant='primary btn-icon px-3 w-100 w-sm-auto flex-shrink-0'>
           <i className='fi-search'></i>
           <span className='d-sm-none d-inline-block ms-2'>Search</span>
         </Button>
       </Col>
     </Row>
   </form>
 </Col>
 </div>

      <div id="map" style={{ width: '100%', height: '800px' }}></div>
         
    </>
  );
};

export default MapComponent;