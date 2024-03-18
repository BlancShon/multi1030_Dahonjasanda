
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { useRouter } from 'next/router';
import Table from './react-table'; 

 const housingView = ({ houseManageNo }) => {
    const router = useRouter();
    const [housingType, setHousingType] = useState([]);
    const [showNestedLayout, setShowNestedLayout] = useState(false);
    

   

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const { houseManageNo } = router.query;
        getHousingType(houseManageNo);
       
    }, [router.isReady]);

    useEffect(() => {
        if (houseManageNo) {
            getHousingType(houseManageNo);
        }
    }, [houseManageNo]);

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

    console.log(housingType);

    const removeNestedLayout = () => {
        router.back();
       
        // setShowNestedLayout(false); // Set showNestedLayout state to false to hide the nested layout
      };


      const handleHouseNmClick = () => {
        // Assuming 'address.houseNm' is a clickable element
        // When clicked, toggle the visibility of the nested layout in MapComponent
        // You can pass any necessary parameters if needed
        router.push('/housingMap?showNestedLayout=true');
    }; 
 
 return (


     <>
                <div className="main-content">
            <h1>View Housing Details</h1>
            {housingType && (
                <ul>
                    {housingType.map((type) => (
                        <li key={type.id}>{type.name}</li>
                    ))}
                </ul>
            )}
        </div>
        </>


//     <>
//     <div className="nested-layout left-side" style={{position: 'absolute', top: 0, left: 0, width: '350px', height: '100%', overflow: 'auto', zIndex:'1000', backgroundColor:'#fff', border:"1px solid #ccc", borderColor:"black"}}>
          

         
// <div style={{marginLeft: '272px'}}><button onClick={removeNestedLayout}>Remove</button></div>
          
// <Row>
//   {/* <Table titles={titles} columns={columns} data={data} /> */}
// </Row>
// </div>  
// </>
)

}
export default housingView