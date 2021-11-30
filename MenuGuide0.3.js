var QuestionResult = new Array(); //질문들의 결과를 저장할 배열, 배열의 크기=질문수
const MenuArr = [ //메뉴데이터, 맨 마지막 원소는 메뉴사진, 맨 마지막에서 두번째는 메뉴이름
['K', 2.1, 3.1, 4.2, '순대국밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%88%9C%EB%8C%80%EA%B5%AD%EB%B0%A5.jpg)"],
['K', 2.1, 3.1, 4.1, '육개장', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%9C%A1%EA%B0%9C%EC%9E%A5.jpg)"],
['K', 2.1, 3.1, 4.2, '비빔밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%B9%84%EB%B9%94%EB%B0%A5.jpg))"],
['K', 2.1, 3.1, 4.2, '김밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EA%B9%80%EB%B0%A5.jpg)"],
['K', 2.1, 3.2, 4.1, '떡볶이', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%96%A1%EB%B3%B6%EC%9D%B4.jpg)"],
['K', 2.1, 3.2, 4.2, '떡만두국', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%96%A1%EB%A7%8C%EB%91%90%EA%B5%AD.jpg)"],
['K', 2.1, 3.3, 4.1, '골뱅이소면', "url(https://github.com/SeoultechWebteam/images/blob/main/%EA%B3%A8%EB%B1%85%EC%9D%B4%EC%86%8C%EB%A9%B4.jpg?raw=true)"],
['K', 2.1, 3.3, 4.1, '육개장칼국수', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%9C%A1%EC%B9%BC.jpg?raw=true)"],
['K', 2.1, 3.3, 4.2, '냉면', "url(https://github.com/SeoultechWebteam/images/blob/main/%EB%83%89%EB%A9%B4.jpg?raw=true)"],
['K', 2.1, 3.3, 4.2, '칼국수', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%B9%BC%EA%B5%AD%EC%88%98.jpg?raw=true)"],
['K', 2.1, 3.4, 4.1, '제육볶음', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C.jpg?raw=true)"],
['K', 2.1, 3.4, 4.2, '소불고기', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%86%8C%EB%B6%88%EA%B3%A0%EA%B8%B0.jpg?raw=true)"],
['K', 2.1, 3.4, 4.2, '동그랑땡', "url(https://github.com/SeoultechWebteam/images/blob/main/%EB%8F%99%EA%B7%B8%EB%9E%91%EB%95%A1.jpg?raw=true)"],
['K', 2.2, 3.4, 4.1, '쭈꾸미', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%AD%88%EA%BE%B8%EB%AF%B8%EB%B3%B6%EC%9D%8C.png?raw=true)"],
['K', 2.2, 3.4, 4.2, '삼겹살', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%82%BC%EA%B2%B9%EC%82%B4.jpg?raw=true)"],
['K', 2.2, 3.4, 4.2, '족발', "url(https://github.com/SeoultechWebteam/images/blob/main/%EC%A1%B1%EB%B0%9C.jpg?raw=true)"],
['K', 2.2, 3.4, 4.2, '곱창', "url(https://github.com/SeoultechWebteam/images/blob/main/%EA%B3%B1%EC%B0%BD.jpg?raw=true)"],
['K', 2.2, 3.4, 4.2, '회', "url(https://github.com/SeoultechWebteam/images/blob/main/%ED%9A%8C.jpg?raw=true)"],
['C', 2.1, 3.1, 4.1, '짬뽕밥'],
['C', 2.1, 3.1, 4.2, '중식볶음밥'],
['C', 2.1, 3.3, 4.1, '짬뽕', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%A7%AC%EB%BD%95.jpg)"],
['C', 2.1, 3.3, 4.2, '짜장면'],
['C', 2.2, 3.1, 4.1, '마파두부'],
['C', 2.2, 3.2, 4.2, '멘보샤'],
['C', 2.2, 3.3, 4.2, '쟁반짜장'],
['C', 2.2, 3.4, 4.2, '탕수육'],
['C', 2.2, 3.4, 4.2, '양꼬치'],
['C', 2.2, 3.4, 4.1, '깐풍기'],
['C', 2.2, 3.4, 4.1, '라조기'],
['C', 2.2, 3.5, 4.1, '마라탕'],
['C', 2.2, 3.5, 4.1, '마라샹궈'],
['C', 2.2, 3.5, 4.2, '팔보채'],
['C', 2.2, 3.5, 4.2, '어향가지'],
['J', 2.1, 3.1, 4.2, '초밥'],
['J', 2.1, 3.1, 4.2, '텐동'],
['J', 2.1, 3.1, 4.2, '사케동'],
['J', 2.1, 3.2, 4.2, '카츠산도'],
['J', 2.1, 3.2, 4.2, '고로케'],
['J', 2.1, 3.3, 4.2, '야끼우동'],
['J', 2.1, 3.3, 4.2, '라멘'],
['J', 2.1, 3.3, 4.2, '우동'],
['J', 2.1, 3.3, 4.2, '명란파스타'],
];
//데이터 추가 필요
//이미지는 깃허브 저장후 다운로드에서 이미지주소 , "url()" 에 복붙
const QueSize = MenuArr[0].length - 2; //질문의 개수

//질문 결과값 저장 함수
function getQnumVal(event, number) { //number=문제번호
	var result = event.target.value; //value값 저장
	QuestionResult[number - 1] = result; //문제번호에 맞게 결과배열에 결과값저장
	document.getElementById('Result').innerHTML = null; //결과창 초기화
	for(var i=0;i<QueSize;i++) { //모든 결과를 출력
		document.getElementById('Result').innerHTML += QuestionResult[i] + '<br>';
	}
}

//메뉴추천 함수
function getMenu() {
	var menucheck = new Array();
	for(var i=0;i<QueSize;i++) { //배열의 크기:질문의 개수
		menucheck[i] = -1; //-1로 초기화
	}
	var issame = false;
	var theMENU = ''; //추천메뉴
	var theMENUimg = null;
	document.getElementById('MENU').innerHTML = theMENU; //메뉴출력 초기화
	document.getElementById('menuIMG').style.backgroundImage = theMENUimg;

	for(var i=0;i<MenuArr.length;i++) { //저장된 메뉴의 수
		for(var q=0;q<menucheck.length;q++) {
			if(QuestionResult[q] == MenuArr[i][q] || QuestionResult[q] == q + 1 ) { //선택한 지문과 메뉴의 데이터와 일치하거나 상관없음 일때
				menucheck[q] = i; //메뉴 번호를 저장
				if(q>0 && menucheck[q]==menucheck[q-1]) issame = true; //메뉴체크가 동일한 번호이면
				else issame = false;
			}
			else { issame = false; break; }
		}
		if(issame) {
			theMENU += MenuArr[i][4] + '<br>'; //메뉴의 맨 마지막 두번째 원소는 메뉴이름
			theMENUimg = MenuArr[i][5]; //맨 마지막은 사진
		}
	}

	if(theMENU == '') alert("메뉴 없음"); //추천메뉴가 없으면 추천을 안함
	else {
		document.getElementById('MENU').innerHTML = theMENU; //추천메뉴 모두 출력
		document.getElementById('menuIMG').style.backgroundImage = theMENUimg;
	}
}

//리셋함수
function resetAll() {
	var qForm = document.getElementById('question');
	var qEm = qForm.elements;
	qForm.reset;
	//버튼초기화
	for(var i=0;i<qEm.length;i++) {
		if(qEm[i].type == "radio") qEm[i].checked = false;
	}	
	//출력초기화
	document.getElementById('MENU').innerHTML = '';
	document.getElementById('menuIMG').style.backgroundImage = null;
	document.getElementById('Result').innerHTML = null;
	//데이터초기화
	QuestionResult = new Array();
}
