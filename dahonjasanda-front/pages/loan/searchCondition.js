
export const searchCondition = {
    mortgages: {
      lendrateType: {
        "": "금리유형",
        F: "고정금리F",
        C: "변동금리C",
      },
      rpayType: {
        "": "상환유형",
        S: "만기일시상환방식S",
        D: "분활상환방식D",
      },
      sort: {
        "": "정렬조건",
        asc: "금리낮은순",
        desc: "금리높은순",
      },
    },
    credits: {
      crdtprdtType: {
        "": "상품유형",
        "1": "일반신용대출1",
        "2": "마이너스한도대출2",
        "3": "장기카드대출(카드론)3",
      },
      crdtlendrateType: {
        "": "금리타입",
        A: "대출금리A",
        B: "기준금리B",
        C: "가산금리C",
        D: "가감조정금리D",
      },
      sort: {
        "": "정렬조건",
        asc: "금리낮은순",
        desc: "금리높은순",
      },
    },
    'rent-houses': {
      lendrateType: {
        "": "금리유형",
        F: "고정금리F",
        C: "변동금리C",
      },
      rpayType: {
        "": "상환유형",
        S: "만기일시상환방식S",
        D: "분활상환방식D",
      },
      sort: {
        "": "정렬조건",
        asc: "금리낮은순",
        desc: "금리높은순",
      },
    },
  };
  
  export const categories = [
        {
          media: 'fi-museum',
          color: 'success',
          value: 'mortgages',
          title: '주택담보대출'
        },
        {
          media: 'fi-credit-card',
          color: 'accent',
          value: 'credits',
          title: '개인신용대출'
        },
        {
          media: 'fi-building',
          color: 'danger',
          value: 'rent-houses',
          title: '전세자금대출'
        },
    ]  