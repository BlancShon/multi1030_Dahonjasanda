import Main from "layouts/Main";
import HeroAndSearchForm from "./components/HeroAndSearchForm";
import ResultAndBox from "./components/ResultAndBox";
import { Container } from "react-bootstrap";

const LoansPage = () => {
    const onSearchHandler = (searchData) => {
        console.log('SearchData is ', searchData);
    }

    return (
        <>
            <Main>
                <Container>
                    <HeroAndSearchForm />
                </Container>
                <hr />
                <Container className="mt-3">
                    <ResultAndBox />
                </Container>
            </Main>
        </>
    )
}

export default LoansPage;