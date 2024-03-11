import Main from "layouts/Main";
import HeroAndSearchForm from "./components/HeroAndSearchForm";
import { Container } from "react-bootstrap";
import ResultList from "./components/ResultList";
import { useEffect, useState } from "react";
import { findMortgageList, findRentHouseList, findCreditList } from "./LoansApiService";

const LoansPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('주택담보대출')
    const [searchForm, setSearchForm] = useState({})
    const [resultList, setResultList] = useState([])

    const handleChangeCategory = (category) => {
        setSearchForm({})
        setSelectedCategory(category)
        console.log("론페이지에서 왔다 ",selectedCategory)
    }

    const handleChangeSearchForm = (updatedForm) => {
        setSearchForm((prevForm) => ({
            ...prevForm, ...updatedForm
        }))
    }

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                let response;
                if (selectedCategory === '주택담보대출') {
                    response = await findMortgageList(); // searchForm을 API 요청에 함께 전달합니다.
                } else if (selectedCategory === '전세자금대출') {
                    response = await findRentHouseList();
                } else if (selectedCategory === '신용대출') {
                    response = await findCreditList();
                }
                console.log(response.data);
                setResultList(response.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        handleFetchData();
    }, [selectedCategory, searchForm]); 

    return (
        <>
            <Main>
                <Container>
                    <HeroAndSearchForm selectedCategory={selectedCategory} onChangeCategoryHandler={handleChangeCategory} onChangeSearchFormHandler={handleChangeSearchForm} />
                </Container>
                <hr style={{ borderTop: '1px solid black' }} />
                <Container className="mt-3">
                    <ResultList resultList={resultList} onChangeSearchFormHandler={handleChangeSearchForm} />
                </Container>
            </Main>
        </>
    )
}

export default LoansPage;