export const sectionsData = [
    {
      title: "예금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "전체", value: "All"},
            { name: "KDB산업은행", value: "KDB" },
            { name: "NH농협은행", value: "NH"},
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
            { name: "SC제일은행", value: "SC"},
            { name: "하나은행", value: "HN" },
            { name: "IBK기업은행", value: "IBK" },
            { name: "KB국민은행", value: "KB" },
            { name: "한국시티은행", value: "Citi" },
            { name: "Sh수협은행", value: "Sh" },
            { name: "DGB대구은행", value: "DGB" },
            { name: "BNK부산은행", value: "BNKBusan" },
            { name: "광주은행", value: "GB" },
            { name: "제주은행", value: "JejuB" },
            { name: "전북은행", value: "JeonbukB"},
            { name: "BNK경남은행", value: "BNKGyeongnam" },
            { name: "케이뱅크", value: "KBank"},
            { name: "카카오뱅크", value: "Kakao"},
            { name: "토스뱅크", value: "Toss"},
          ],
        },
        {
          name: "단복리",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "만기",
          options: [
            { name: "1개월", value: "1 Month" },
            { name: "3개월", value: "3 Months" },
            { name: "6개월", value: "4 Months" },
            { name: "12개월", value: "12 Months" },
            { name: "24개월", value: "24 Months" },
            { name: "36개월", value: "36 Months" },
          ],
        },
        {
          name: "가입방식",
          options: [
            { name: "전체", value: "1" },
            { name: "영업점", value: "2" },
            { name: "인터넷뱅킹", value: "3" },
            { name: "스마트뱅킹", value: "5" },
            { name: "전화", value: "10" },
            { name: "기타", value: "21" },
          ],
        },
        // Add other groups here
      ],
    },
    // Add other sections here for "Saving", etc.
    {
      title: "적금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "전체", value: "All"},
            { name: "KDB산업은행", value: "KDB" },
            { name: "NH농협은행", value: "NH"},
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
            { name: "SC제일은행", value: "SC"},
            { name: "하나은행", value: "HN" },
            { name: "IBK기업은행", value: "IBK" },
            { name: "KB국민은행", value: "KB" },
            { name: "한국시티은행", value: "Citi" },
            { name: "Sh수협은행", value: "ShSh" },
            { name: "DGB대구은행", value: "DGB" },
            { name: "BNK부산은행", value: "BNKBusan" },
            { name: "광주은행", value: "GB" },
            { name: "제주은행", value: "JejuB" },
            { name: "전북은행", value: "JeonbukB"},
            { name: "BNK경남은행", value: "BNKGyeongnam" },
            { name: "케이뱅크", value: "KBank"},
            { name: "카카오뱅크", value: "Kakao"},
            { name: "토스뱅크", value: "Toss"},
          ],
        },
        {
          name: "적립방식",
          options: [
            { name: "정액적립식", value: "Fixed" },
            { name: "자유적립식", value: "Flexible" },
          ],
        },
        {
          name: "단복리",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "기간",
          options: [
            { name: "1년", value: "1" },
            { name: "2년", value: "2" },
            { name: "3년", value: "3" },
            { name: "5년", value: "5" },
            { name: "10년", value: "10" },
            // Add other options here
          ],
        },
        // Add other groups here
      ],
    },
    // Add other sections here for "Annuity ", etc.
    {
      title: "연금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "전체", value: "All"},
            { name: "KDB산업은행", value: "KDB" },
            { name: "NH농협은행", value: "NH"},
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
            { name: "SC제일은행", value: "SC"},
            { name: "하나은행", value: "HN" },
            { name: "IBK기업은행", value: "IBK" },
            { name: "KB국민은행", value: "KB" },
            { name: "한국시티은행", value: "Citi" },
            { name: "Sh수협은행", value: "Sh" },
            { name: "DGB대구은행", value: "DGB" },
            { name: "BNK부산은행", value: "BNKBusan" },
            { name: "광주은행", value: "GB" },
            { name: "제주은행", value: "JejuB" },
            { name: "전북은행", value: "JeonbukB"},
            { name: "BNK경남은행", value: "BNKGyeongnam" },
            { name: "케이뱅크", value: "KBank"},
            { name: "카카오뱅크", value: "Kakao"},
            { name: "토스뱅크", value: "Toss"},
          ],
        },
        {
          name: "단복리",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "기간",
          options: [
            { name: "1년", value: "1" },
            { name: "2년", value: "2" },
            { name: "3년", value: "3" },
            { name: "5년", value: "5" },
            { name: "10년", value: "10" },
            // Add other options here
          ],
        },
        // Add other groups here
      ],
    }
  ];
