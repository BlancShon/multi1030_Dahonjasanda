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
    const [pageable, setPageable] = useState({})
    const [page, setPage] = useState()

    const handleChangeCategory = (category) => {
        setSearchForm({})
        setPage()
        setSelectedCategory(category)
        console.log("론페이지에서 왔다 ",selectedCategory)
    }

    const handleChangeSearchForm = (updatedForm) => {
        setSearchForm((prevForm) => ({
            ...prevForm, ...updatedForm
        }))
    }
    
    const searchParamResolver = () => {
        return (page? '?page=' + page : '?page=0');
    }

    useEffect(() => {
        const handleFetchData = async () => {
            const param = searchParamResolver()
            try {
                let response;
                if (selectedCategory === '주택담보대출') {
                    response = await findMortgageList(param); // searchForm을 API 요청에 함께 전달합니다.
                } else if (selectedCategory === '전세자금대출') {
                    response = await findRentHouseList(param);
                } else if (selectedCategory === '신용대출') {
                    response = await findCreditList(param);
                }
                console.log(response.data);
                const { content, pageable} = response.data;
                setResultList(content);
                setPageable({
                    ...pageable,
                    totalPages : response.data.totalPages,
                    totalElements : response.data.totalElements
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log("페이지를 보라!!!!", page)
        handleFetchData();
    }, [selectedCategory, searchForm, page]); 

    return (
        <>
            <Main>
                <Container>
                    <HeroAndSearchForm selectedCategory={selectedCategory} onChangeCategoryHandler={handleChangeCategory} onChangeSearchFormHandler={handleChangeSearchForm} />
                </Container>
                <hr style={{ borderTop: '1px solid black' }} />
                <Container className="mt-3">
                    <ResultList resultList={resultList} onChangePageHandler={setPage} pageable={pageable} />
                </Container>
            </Main>
        </>
    )
}

export default LoansPage;