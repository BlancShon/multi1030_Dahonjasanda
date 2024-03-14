import { Accordion, Button, Form} from "react-bootstrap";

const CheckBoxList = ({listName, list, indx, selectedCompanies, setSelectedCompanies}) => {

  const handleCheckboxChange = (event, itemId) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedCompanies(prev => [...prev, itemId]);
    } else {
      setSelectedCompanies(prev => prev.filter(id => id !== itemId));
    }

    console.log("체크박스속 컴퍼니즈",selectedCompanies)
  }

  const handleSelectAll = () => {
    const allCompanyIds = list.map(item => item.id);
    const uniqueSelectedCompanies = Array.from(new Set([...selectedCompanies , ...allCompanyIds]))
    setSelectedCompanies(uniqueSelectedCompanies);
    console.log("체크박스속 컴퍼니즈",selectedCompanies)
  }

  const handleClearSelection = () => {
    const companyIdsToRemove = list.map(item => item.id);
    const filteredCompanyIds = selectedCompanies.filter(item => !companyIdsToRemove.includes(item))
    setSelectedCompanies(filteredCompanyIds);
    console.log("체크박스속 컴퍼니즈",selectedCompanies)
  }
    return (
        <Accordion key={indx} defaultActiveKey=''>
            <Accordion.Item eventKey={indx.toString()}>
            <Accordion.Header>{listName}</Accordion.Header>
            <Accordion.Body>
            <div className='mx-5 px-3'>
            {Array.isArray(list) && list.length > 0 ? (
              list.map((item, index) => (
                  <Form.Check
                     key={item.id}
                     inline
                     label={item.korCoNm}
                     name={item.id}
                     type='checkbox'
                     id={item.id}
                     checked={selectedCompanies.includes(item.id)}
                     onChange={(event) => handleCheckboxChange(event, item.id)}
                 />
                // </div>
              ))
            ) : (
              <p>데이터가 없습니다.</p>
            )}
            </div>
            <div className="d-flex justify-content-end">
              <Button className="mx-3" variant="primary" onClick={handleSelectAll}>전부 선택</Button>{' '}
              <Button className="mx-3" variant="secondary" onClick={handleClearSelection}>모두 해제</Button>
            </div>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CheckBoxList;