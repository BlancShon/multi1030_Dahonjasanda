import { Accordion, Form} from "react-bootstrap";

const CheckBoxList = ({listName, list, indx}) => {
    return (
        <Accordion key={indx} defaultActiveKey=''>
            <Accordion.Item eventKey={indx.toString()}>
            <Accordion.Header>{listName}</Accordion.Header>
            <Accordion.Body>
            <div className='mx-5 px-3'>
                {list.map((option, optionIndex) => (
                <Form.Check
                    key={optionIndex}
                    inline
                    label={option}
                    name={`${listName}.${optionIndex}`}
                    type='checkbox'
                    id={`${listName}.${optionIndex}`}
                />
                ))}
            </div>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CheckBoxList;