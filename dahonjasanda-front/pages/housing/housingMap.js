import { useEffect, useState } from 'react';
import Header from '../../components/header';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { useRouter } from 'next/router';
import housingView from './view';
import Main from "layouts/Main"

const MapComponent = () => {

const router = useRouter();
const [housingList, setHousingList] = useState([])
const [housingListCount, setHousingListCount] = useState([])
const [transactionType, setTransactionType] = useState('transactionType');
const [location, setLocation] = useState('Location');
const [propertyType, setPropertyType] = useState('Property type');
const [searchValue, setSearchValue] = useState();
const [geocoder, setGeocoder] = useState(null); // Added state for geocoder
const [map, setMap] = useState(null);
const [markers, setMarkers] = useState([]);
const [infoWindows, setInfoWindows] = useState([]);
const [showNestedLayout, setShowNestedLayout] = useState(false);
const [housingType, setHousingType] = useState([]);

useEffect(() => {
  const loadKakaoMapScript = () => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=bb83919493996c6c554671877067a90a&libraries=services,clusterer&autoload=false`;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  };

  loadKakaoMapScript();


}, []); // Load the Kakao Map script only once

const initializeMap = () => {
  kakao.maps.load(() => {
    const mapContainer = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 5,
    };
    const newMap = new kakao.maps.Map(mapContainer, options);
    const geocoderInstance = new kakao.maps.services.Geocoder();
    setGeocoder(geocoderInstance); // Save geocoder instance in state
    setMap(newMap);

    // ... (rest of your initializeMap logic)
  });
};

useEffect(() => {
  if (!router.isReady) {
    return;
  }

  const { searchValue, transactionType, location, propertyType, houseManageNo} = router.query;

  setSearchValue(searchValue);
  setTransactionType(transactionType);
  setLocation(location);
  setPropertyType(propertyType);
  getHousingType(houseManageNo);
  getHousingList(searchValue, transactionType, location, propertyType);

}, [router.isReady]);

const getHousingList = async (searchValue, transactionType, location, propertyType) => {
  try {
    var url = 'http://localhost/housingList';
    if (searchValue != null) {

      url = url + '?transactionType=' + transactionType;
      url = url + '&location=' + location;
      url = url + '&propertyType=' + propertyType;
      url = url + '&searchValue=' + searchValue;
    }

    // const param = {
    //   searchValue,
    //   transactionType,
    //   location,
    //   propertyType,
    // };

    const response = await axios.get(url, {
      withCredentials: true,
    });

    setHousingList(response.data.list);
    setHousingListCount(response.data.listCount);
    //console.log(response.data.list)
  } catch (error) {
    console.error('Error fetching housing list:', error);
  }
};



console.log(housingList)

 const getHousingType = async (houseManageNo) => {
        try {
            var url = 'http://localhost/housingType'
            if(houseManageNo != null) {
            url = url + '?houseManageNo=' + houseManageNo;
            const response = await axios.get(url, { withCredentials: true });
            console.log(response);
            setHousingType(response.data.list);
            //setTypeMap(response.data.listCount);
        }
           
        } catch (e) {
            console.log(e);
        }
    }





useEffect(() => {
  if (geocoder && housingList.length > 0) {
   
    clearMarkers();
    clearInfoWindow();
    const addresses = housingList.map((item) => ({hssplyAdres : item.hssplyAdres, houseNm : item.houseNm, houseManageNo: item.houseManageNo}));
    //console.log(addresses)

    addresses.forEach((address) => {
    
      //console.log(address.hssplyAdres);
      //console.log(address.houseNm);
      geocoder.addressSearch(address.hssplyAdres, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(result[0].y, result[0].x),
          });
          setMarkers((prevMarkers) => [...prevMarkers, marker]);
          marker.setMap(map); // Assuming "map" is defined in a scope accessible here
         
          const iwContent = document.createElement('div');
          iwContent.style.padding = '5px';
          iwContent.style.width = '200px';

          const innerDiv = document.createElement('div');
          const link = document.createElement('a');
          link.id = 'infoWindowLink';
          link.href = 'view?houseManageNo=' + address.houseManageNo;
          link.style.color = 'blue';
          link.style.cursor = 'pointer';
          link.textContent = address.houseNm || 'House Name Unavailable';
          link.addEventListener('click', () => toggleNestedLayout(address.houseManageNo))
          // Attach click event listener
          // link.addEventListener('click', toggleNestedLayout);

          innerDiv.appendChild(link);
          iwContent.appendChild(innerDiv);
          //console.log(iwContent);                 
          const iwPosition = new kakao.maps.LatLng(result[0].y, result[0].x); //인포윈도우 표시 위치입니다
       
              const infowindow = new kakao.maps.InfoWindow({
                position : iwPosition,
                content : iwContent
              })
              setInfoWindows((prevInfoWindows) => [...prevInfoWindows, infowindow]);
              infowindow.open(map, marker)

              const moveLatLon = new kakao.maps.LatLng(37.5665, 126.9780);
    
              // 지도 중심을 이동 시킵니다
              map.setCenter(moveLatLon);
        }
      });
    });
  }
}, [geocoder, housingList]); // Load the markers when geocoder or housingList changes





// Helper function to clear existing markers
const clearMarkers = () => {
  markers.forEach((marker) => {
    marker.setMap(null); // Remove the marker from the map
  });

  // Clear the markers from the state variable
  setMarkers([]);
};

const clearInfoWindow = () => {
  infoWindows.forEach((infowindow) => {
    infowindow.open(null, null); // Remove the marker from the map
  });

  // Clear the markers from the state variable
  setMarkers([]);
};

const onSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  data.get('')
  var url = '/housing/housingMap';

  if (searchValue !== null) {
    /* if(transactionType == transactionType || location == location || propertyType == propertyType )*/ {
       url = url + '?transactionType=' + data.get('transactionType') + '&location=' 
                + data.get('location') + '&propertyType=' + data.get('propertyType');
       url = url + '&searchValue=' + data.get('searchValue');
    } 
   

  }
    setSearchValue(data.get('searchValue'));
    setTransactionType(data.get('transactionType'));
    setLocation(data.get('location'));
    setPropertyType(data.get('propertyType'));
    router.push(url);

    

    getHousingList(data.get('searchValue'), data.get('transactionType'), data.get('location'), data.get('propertyType'));
 
};






const onChangeValue = (e) => {
  setSearchValue(e.target.value);
};


const onChangeTransactionType = (e) => {
  setTransactionType(e.target.value);
};

const onChangeLocation = (e) => {
  setLocation(e.target.value);
};


const onChangePropertyType = (e) => {
  setPropertyType(e.target.value);
};


const toggleNestedLayout = (e) => {
  setShowNestedLayout(!showNestedLayout);
  setSelectedHouseManageNo(houseManageNo);
};





const titles = [
  {
    title : '세운'
  },
  {
    title : '세운2'
  },
  {
    title : '세운'
   }
];


const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Version',
    accessor: 'version'
  },
  {
    Header: 'Launch Date',
    accessor: 'launch'
  }
];


const data = [
  {
    name: 'React',
    version: '18.2.0',
    launch: '2013-05-29'
  },
  {
    name: 'Vue',
    version: '3.2.45',
    launch: '2014-02'
  },
  {
    name: 'jQuery',
    version: '3.3',
    disabled: true,
    launch: '2006-08-26'
  },
  {
    name: 'Svelte',
    version: '3.53.1',
    launch: '2016-11-26'
  }
 ];


  return (
    <Main>
      
      

{/* Search property form group */}

<div style={{marginTop:'60px'}}>
<Col xs={{order: 3}} lg={10} xl={8} className='position-relative mt-lg-n5 zindex-2' style={{width:'60%'}}>
   <form className='d-block' name="searchForm" onSubmit={onSubmit}  >
     <Row className='g-0 ms-sm-n2'>
       <Col md={8} className='d-sm-flex align-items-center'>
      

         <div className='col-xl-4 col-md-6 mb-4' style={{marginLeft:'30px'}}>
           <select
                className="selectpicker form-control"
                data-live-search="true" data-selected-text-format="count &gt; 1"
                
                icon='fi-home'
                value={transactionType}
                id="transactionType"
                name="transactionType"
                onChange={onChangeTransactionType}
                
            >
                <option value="">Select Transaction Type</option>
                <option value="분양주택">분양주택</option>
                <option value="null">임대</option>
            </select>
            </div>

         <hr className='d-sm-none my-2' />
         <div className='col-xl-4 col-md-6 mb-4' style={{marginLeft:'30px'}}>
         
           <select
                className="selectpicker form-control"
                
                // data-live-search="true" data-selected-text-format="count &gt; 1"
                value={location}
                id="location"
                name="location"
                onChange={onChangeLocation}
                
            >
                <option value="">Select Location</option>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="강원도">강원도</option>
                <option value="인천">인천</option>
                <option value="울산">울산</option>
                <option value="광주">광주</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
            </select>
            </div>
        
         <hr className='d-sm-none my-2' />
       
          <div className='col-xl-4 col-md-6 mb-4' style={{marginLeft:'30px'}}>
           <select
                className="selectpicker form-control"
                data-live-search="true" data-selected-text-format="count &gt; 1"
                value={propertyType}
                id="propertyType"
                name="propertyType"
                onChange={onChangePropertyType}
                
            >
                <option value="">Select Property Type</option>
                <option value="APT">아파트(분양)</option>
                <option value="신혼희망타운">신혼희망타운(임대)</option>
                <option value="공공지원민간임대">공공지원민간임대(임대)</option>
                <option value="도시형">도시형/오피스텔/생활숙박시설/민간임대(임대)</option>
                <option value="계약취소주택">계약취소주택(임대)</option>
                <option value="무순위/잔여세대">무순위/잔여세대(임대)</option>
                <option value="임의공급">임의공급(임대)</option>
            </select>
            </div>
       </Col>
      
       <hr className='d-md-none mt-2' />
       <Col md={4} className='d-sm-flex align-items-center pt-4 pt-md-0'>
         
         <div className='col-xl-4 col-md-6 mb-4' style={{marginLeft:"700px"}}>        
          <span className="blue_window">
            <input type="text" id="searchValue" name="searchValue" onChange={onChangeValue}  value={searchValue || ''}  className="input_text" />
        </span>
        </div>
        <hr className='d-md-none mt-2' />     
         <Button className='col-xl-4 col-md-6 mb-4' type='submit' variant='primary btn-icon px-3 w-100 w-sm-auto flex-shrink-0' style={{marginLeft:'240px'}}>
           <i className='fi-search'></i>
           <span className='d-sm-none d-inline-block ms-2'>Search</span>
         </Button>
       </Col>
     </Row>
    </form>
 </Col>
 </div>
    
   

      <div id="map" style={{ width: '100%', height: '800px' }}>
      {showNestedLayout && 
                <div className="nested-layout left-side">
                   <housingView houseManageNo={selectedHouseManageNo} />
                </div>}   
      </div>
    </Main>
  );
};

export default MapComponent;