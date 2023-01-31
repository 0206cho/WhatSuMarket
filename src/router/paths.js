/**
 * 객체 구조
 * {
 * path: url path,
 * view: *.vue 파일 이름
 * auth: true | false
 * }
 */
export default [{
    path: '',
    view: 'MainPage'
},{
    path: '/test',
    view: 'Test'
},{ 
    // 상품상세페이지
    path: '/detail',
    view: 'Detail'
},{
    // 상품등록페이지
    path: '/insert',
    view: 'Insert'
}, {
    // 로그인페이지
    path: '/login',
    view: 'Login'
},{
    // 마이페이지 - 설정
    path: '/setting',
    view: 'Setting'
},{
    // 마이페이지 - 충전내역
    path: '/point',
    view: 'Point'
},{
    // 결제페이지
    path: '/pay',
    view: 'Pay'
},{
    // 회원가입
    path: '/signup',
    view: 'Signup'
},{
    // 내역
    path: '/history',
    view: 'History'
}

]