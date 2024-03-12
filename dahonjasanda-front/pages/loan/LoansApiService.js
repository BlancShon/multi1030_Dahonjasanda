import axios from "axios"

const loansApiClient = axios.create(
    {
        baseURL : "http://localhost/finance/loans"
    }
)

export const findMortgageList = (param) => loansApiClient.get('/mortgages' + param)
export const findRentHouseList = (param) => loansApiClient.get('/rent-houses'+ param)
export const findCreditList = (param) => loansApiClient.get('/credits'+ param)
