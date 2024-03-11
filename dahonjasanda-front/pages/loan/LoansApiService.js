import axios from "axios"

const loansApiClient = axios.create(
    {
        baseURL : "http://localhost/finance/loans"
    }
)

export const findMortgageList = () => loansApiClient.get('/mortgages')
export const findRentHouseList = () => loansApiClient.get('/rent-houses')
export const findCreditList = () => loansApiClient.get('/credits')
