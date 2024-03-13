import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PollCard = () => {
    
    // 각 옵션에 대한 투표 수를 저장하기 위한 상태
    const [votes, setVotes] = useState(new Array(10).fill(0)); // 10개 옵션에 대한 투표 수 초기화
    const [totalVotes, setTotalVotes] = useState(0);
    const [lastVoted, setLastVoted] = useState(null); // 마지막으로 투표한 옵션을 추적


    // 투표 옵션 목록
    const options = [
        "이자율",
        "세금 혜택",
        "자금의 유동성",
        "보장성",
        "기간의 유연성",
        "최소 예치금",
        "보너스 혜택",
        "자동 재투자 옵션",
        "온라인 접근성 및 관리",
        "고객 서비스의 질",
    ];

    // 특정 옵션에 대해 투표하는 함수
    const handleVote = (index) => {
        const newVotes = [...votes]; // 상태 직접 변경을 피하기 위해 복사본 생성
        newVotes[index] += 1; // 특정 옵션의 투표 수 증가
        setVotes(newVotes); // 상태 업데이트
        setTotalVotes(prevTotal => prevTotal + 1); // 총 투표 수 증가
        setLastVoted(index); // 마지막으로 투표한 옵션 업데이트
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Poll
                </Typography>
                <Typography variant="body1" component="div">
                    예금, 적금, 연금에 관련된 혜택 중 가장 중요한 요소는 무엇이라고 생각하십니까?
                </Typography>
                {/* 투표 옵션 및 버튼 */}
                {options.map((option, index) => (
                    <div key={index} style={{ marginTop: '10px' }}>
                        <Button variant="contained" color="primary" onClick={() => handleVote(index)} style={{ marginLeft: '10px' }}>
                            {option}
                        </Button>
                    </div>
                ))}
                {/* 총 투표자 수 */}
                <Typography variant="body1" component="div" style={{ marginTop: '20px' }}>
                    총 투표자 수: {totalVotes}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default PollCard;