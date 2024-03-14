import { Button, Card, Col, Form, Row} from "react-bootstrap";
import { useRouter } from 'next/router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from "react";
import dynamic from "next/dynamic";


const ResultCard = dynamic(() => import("../components/Result"), { ssr: false });

const LoansDetail = ({rendRateMin = 4.56, rendRateMax = 5.76}) =>{
    // const router = useRouter();

    const [loanAmount, setLoanAmount] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [minTotalInterest, setMinTotalInterest] = useState(0);
    const [maxTotalInterest, setMaxTotalInterest] = useState(0);
    const [minMonthlyInterest, setMinMonthlyInterest] = useState(0);
    const [maxMonthlyInterest, setMaxMonthlyInterest] = useState(0);


    const samePrdtList = [
        {id:1,
        korCoNm: '우리은행',
        finPrdtNm: 2,
        lendRateTypeNm: 't',
        rpayTypeNm: 'd',
        lendRateMin: 4.77,
        lendRateMax: 7.65},
        {id:2,
        korCoNm: '우리은행',
        finPrdtNm: 2,
        lendRateTypeNm: 't',
        rpayTypeNm: 'd',
        lendRateMin: 4.77,
        lendRateMax: 7.65}
    ]


    const handleLoanAmountChange = (e) => {
        const value = e.target.value.replace(/\D/, ''); // 숫자 이외의 문자 제거
        setLoanAmount(value);

        console.log(value)
      };
    
      const handleLoanTermChange = (e) => {
        const value = e.target.value.replace(/\D/, ''); // 숫자 이외의 문자 제거
        setLoanTerm(value);

        console.log(value)
      };

      const handleCalculate = () => {
        // 여기에 예상 총 이자액과 예상 월별 이자액을 계산하는 로직을 작성하세요
        // 예상 총 이자액 및 예상 월별 이자액을 상태에 설정하세요
        const realAmount = loanAmount * 10000;
        const {monthlyInterestAmount : minMoonthlyInterest, totalInterestAmount : minTotalInterest}=calculateInterest(realAmount, rendRateMin, loanTerm)
        setMinMonthlyInterest(Math.ceil(minMoonthlyInterest));
        setMinTotalInterest(Math.ceil(minTotalInterest));
        
        const {monthlyInterestAmount : maxMonthlyInterest, totalInterestAmount : maxTotalInterest}=calculateInterest(realAmount, rendRateMax, loanTerm)
        setMaxMonthlyInterest(Math.ceil(maxMonthlyInterest));
        setMaxTotalInterest(Math.ceil(maxTotalInterest));

      };

        const calculateInterest = (loanAmount, annualInterestRate, loanPeriodYears) => {

            if(rpayType === 'S') {

            }
            // 연 이자율 계산
            const monthlyInterestRate = annualInterestRate / 100 / 12;

            // 대출 기간 계산
            const loanPeriodMonths = loanPeriodYears * 12;

            // 월별 이자액 계산
            const monthlyInterestAmount = (loanAmount * monthlyInterestRate) /
                (1 - (1 + monthlyInterestRate) ** -loanPeriodMonths);

            // 총 이자액 계산
            const totalInterestAmount = (monthlyInterestAmount * loanPeriodMonths) - loanAmount;

            // 결과 반환
            return {
                monthlyInterestAmount,
                totalInterestAmount
            };
        };



    return (
        <div className="m-5 p-3">
                <div className="px-5">
                <Card className="p-5 m-5" style={{border: '3px solid #000'}}>
                <Card.Header><h1>우리은행</h1></Card.Header>
                <Card.Body>
                    <Row className="mt-4">
                        
                        <Col>
                            <h3>우리아파트론</h3>
                            <b>'분할상환방식'</b><br></br>
                            <b>변동금리</b><br></br>
                            <b> {rendRateMin}  ~ {rendRateMax}  %</b>
                            <br></br>
                            <b>평균금리</b>
                            <b>5.15 %</b>
                            <br></br>
                            <br></br>
                        </Col>
                        <Col>
                        <ul>
                            <li>예상 총 이자액 : {minTotalInterest.toLocaleString()} ~ {maxTotalInterest.toLocaleString()} 원</li>
                            <li>예상 월별 이자액 : {minMonthlyInterest.toLocaleString()} ~ {maxMonthlyInterest.toLocaleString()} 원</li>
                        </ul>
                        <Form>
                            <Form.Group controlId="loanAmount">
                                <Form.Label>대출금(만원)</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="대출금을 입력하세요."
                                value={loanAmount}
                                onChange={handleLoanAmountChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="loanTerm">
                                <Form.Label>대출기간(단위 년)</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="대출기간을 입력하세요."
                                value={loanTerm}
                                onChange={handleLoanTermChange}
                                />
                            </Form.Group>
                            <Button className="mt-2" variant="primary" onClick={handleCalculate}>계산하기</Button>
                        </Form>
                            
                        </Col>
                    </Row>
                   
                    <div className='mb-3'>
                        <span>개인고객부, 1588-5000 부동산금융부,  1588-5000</span>
                    </div>

                    <a href="https://spot.wooribank.com/pot/Dream?withyou=po"><Button variant='success' className='w-100 my-3'>공식홈에서 더 알아보기</Button></a>


                    <div className="m-5">
                        <h5>상세정보</h5>
                        <hr></hr>
                        <br></br>
                       
                        <ul>
                            <b>대 상</b>
                            <li>- 적용금리+ 3%(최고연체이자율 : 12%)</li>
                        </ul>
                        <ul>
                            <b>대 상</b>
                            <li>- 고정금리 : 주택상환금액×1.4%×(대출잔액일수÷3년) - 변동금리 : 주택상환금액×1.2%×(대출잔액일수÷3년)</li>
                        </ul>
                        <ul>
                            <b>대 상</b>
                            <li>영업점,모집인</li>
                        </ul>
                        <ul>
                            <b>대 상</b>
                            <li>- 인지세 : 해당세액의 50%(대출금액 5천만원 이하시 없음) - 국민주택채권 매입 : 대출금액 x 120% × 1% × 채권할인율 - 주택신보출연료(신규 주택구입시에 한함) : 0.01~0.26%</li>
                        </ul>
                        <ul>
                            <b>대 상</b>
                            <li>LTV 30% ~70%</li>
                        </ul>
                       
                    </div>
                </Card.Body>
                </Card>
                   
                </div>

                {/* <div className="text-center">
                    <h2>같은 상품 다른 옵션 보기</h2>

                    {samePrdtList.map((result)=> {
                            return     (
                                <ResultCard
                                    key={result.id}
                                    finName={result.korCoNm} 
                                    prdtName={result.finPrdtNm} 
                                    prdtInfo1={result.lendRateTypeNm} 
                                    prdtInfo2={result.rpayTypeNm} 
                                    prdtInfo3={result.lendRateMin} 
                                    prdtInfo4={result.lendRateMax}>
                                </ResultCard>
                            )
                        })}
                    
                </div> */}
                <Row xxs={2} xs={2} md={3} lg={4} className='gy-4 gl-4 gl-xxl-4 py-4 px-5 mx-5'>
                    {samePrdtList.map((result)=> {
                        return     (
                            <ResultCard 
                                key={result.id}
                                finName={result.korCoNm} 
                                prdtName={result.finPrdtNm} 
                                prdtInfo1={result.lendRateTypeNm} 
                                prdtInfo2={result.rpayTypeNm} 
                                prdtInfo3={result.lendRateMin} 
                                prdtInfo4={result.lendRateMax}>
                            </ResultCard>
                        )
                    })}
                </Row>

            </div>
    )
}

export default LoansDetail