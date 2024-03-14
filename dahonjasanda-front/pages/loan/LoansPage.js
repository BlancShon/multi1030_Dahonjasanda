import Main from "layouts/Main";
import HeroAndSearchForm from "./components/HeroAndSearchForm";
import { Container } from "react-bootstrap";
import ResultList from "./components/ResultList";
import { useEffect, useState } from "react";
import {findLoanList, findCompanyList} from "./LoansApiService";

const LoansPage = () => {
    const [companies, setCompanies] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('mortgages')
    const [searchForm, setSearchForm] = useState({})
    const [resultList, setResultList] = useState([])
    const [pageable, setPageable] = useState({})
    const [page, setPage] = useState('')

    const handleChangeCategory = (category) => {
        setSearchForm({})
        setPage('')
        setSelectedCategory(category)
        console.log("론페이지에서 왔다 ",selectedCategory)
    }

    const handleChangeSearchForm = (updatedForm) => {
        setSearchForm((prevForm) => ({
            ...prevForm, ...updatedForm
        }))
    }
    
    const searchParamResolver = () => {
        let searchParam = '/' + selectedCategory
        searchParam += (page? '?page=' + page : '?page=0');
        return searchParam
    }

    useEffect(() => {
        const handleGetCompany = async () => {
            try {
                const response = await findCompanyList();
                
                console.log("여기 회사 정보봐라!!!", response);
                const {data}  = response;
                setCompanies(data)

            } catch (error) {
                console.error("컴파니 못받아왔다 큰일났다.", error)
            }
        }
        console.log("한번에 안찍히겠지만 ",companies)
        handleGetCompany();
    }, [selectedCategory])

    useEffect(() => {
        const param = searchParamResolver()
        console.log("파람을 보거라ㅇㅁㄴㅇㅁㄴㅇㄹㄴ",param);
        
        const handleFetchData = async () => {
            try {
                const response = await findLoanList(param);

                console.log("여기가 응답이다!!!",response.data);
                const { content, pageable} = response.data;
                setResultList(content);
                setPageable({
                    ...pageable,
                    totalPages : response.data.totalPages,
                    totalElements : response.data.totalElements
                });
            } catch (error) {
                setResultList();
                console.error('오류떴다 Error fetching data:', error);
            }
        };
        console.log("페이지를 보라!!!!", page)
        console.log("셀렉트카테고리를 보라!!!!", selectedCategory)
        console.log("서치폼을 보라!!!!", searchForm)
        handleFetchData();

        // router.push('loan'+param); // 나중에 url 처리할때 이용하기 에휴 모르겠다.

    }, [selectedCategory, searchForm, page]); 

    return (
        <>
            <Main>
                <Container>
                    <HeroAndSearchForm 
                    selectedCategory={selectedCategory} 
                    onChangeCategoryHandler={handleChangeCategory} 
                    onChangeSearchFormHandler={handleChangeSearchForm} 
                    bankFin={companies}/>
                </Container>
                <hr style={{ borderTop: '1px solid black' }} />
                <Container className="mt-3">
                    <ResultList resultList={resultList} onChangePageHandler={setPage} pageable={pageable} category={selectedCategory} />
                </Container>
            </Main>
        </>
    )
}

export default LoansPage;