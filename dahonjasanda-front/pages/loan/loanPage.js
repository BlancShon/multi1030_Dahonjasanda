import Main from "layouts/Main";
import HeroAndSearchForm from "./components/HeroAndSearchForm";
import { Container } from "react-bootstrap";
import ResultList from "./components/ResultList";

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
                    <ResultList />
                </Container>
            </Main>
        </>
    )
}

export default LoansPage;