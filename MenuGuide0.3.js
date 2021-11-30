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
['C', 2.1, 3.1, 4.1, '짬뽕밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%A7%AC%EB%BD%95%EB%B0%A5.jpg)"], //중식시작
['C', 2.1, 3.1, 4.2, '중식볶음밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%A4%91%EC%8B%9D%EB%B3%B6%EC%9D%8C%EB%B0%A5.jpg)"],
['C', 2.1, 3.3, 4.1, '짬뽕', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%A7%AC%EB%BD%95.jpg)"],
['C', 2.1, 3.3, 4.2, '짜장면', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%A7%9C%EC%9E%A5%EB%A9%B4.jpg)"],
['C', 2.2, 3.1, 4.1, '마파두부', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%88%ED%8C%8C%EB%91%90%EB%B6%80.jpg)"],
['C', 2.2, 3.2, 4.2, '멘보샤', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A9%98%EB%B3%B4%EC%83%A4.jpg)"],
['C', 2.2, 3.3, 4.2, '쟁반짜장', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%9F%81%EB%B0%98%EC%A7%9C%EC%9E%A5.jpg)"],
['C', 2.2, 3.4, 4.2, '탕수육', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%ED%83%95%EC%88%98%EC%9C%A1.jpg)"],
['C', 2.2, 3.4, 4.2, '양꼬치', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%96%91%EA%BC%AC%EC%B9%98.jpg)"],
['C', 2.2, 3.4, 4.1, '깐풍기', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EA%B9%90%ED%92%8D%EA%B8%B0.jpg)"],
['C', 2.2, 3.4, 4.1, '라조기', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%9D%BC%EC%A1%B0%EA%B8%B0.jpg)"],
['C', 2.2, 3.5, 4.1, '마라탕', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%88%EB%9D%BC%ED%83%95.jpg)"],
['C', 2.2, 3.5, 4.1, '마라샹궈', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%88%EB%9D%BC%EC%83%B9%EA%B6%88.jpg)"],
['C', 2.2, 3.5, 4.2, '팔보채', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%ED%8C%94%EB%B3%B4%EC%B1%84.jpg)"],
['C', 2.2, 3.5, 4.2, '어향가지', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%96%B4%ED%96%A5%EA%B0%80%EC%A7%80.jpg)"],
['J', 2.1, 3.1, 4.1, '매운일식덮밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EC%9D%BC%EC%8B%9D%EB%8D%AE%EB%B0%A5.jpg)"], //일식시작
['J', 2.1, 3.1, 4.1, '매운카레라이스', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EC%B9%B4%EB%A0%88%EB%9D%BC%EC%9D%B4%EC%8A%A4.jpg)"],
['J', 2.1, 3.1, 4.2, '텐동', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%ED%85%90%EB%8F%99.jpg)"],
['J', 2.1, 3.1, 4.2, '사케동', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%82%AC%EC%BC%80%EB%8F%99.jpg)"],
['J', 2.1, 3.1, 4.2, '오므라이스', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%98%A4%EB%AF%80%EB%9D%BC%EC%9D%B4%EC%8A%A4.jpg)"],
['J', 2.1, 3.2, 4.1, '매운고로케', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EA%B3%A0%EB%A1%9C%EC%BC%80.jpg)"],
['J', 2.1, 3.2, 4.2, '고로케', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EA%B3%A0%EB%A1%9C%EC%BC%80.jpg)"],
['J', 2.1, 3.2, 4.2, '야끼소바빵', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%95%BC%EB%81%BC%EC%86%8C%EB%B0%94%EB%B9%B5_1.jpg)"],
['J', 2.1, 3.3, 4.1, '매운라멘', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EB%9D%BC%EB%A9%98.jpg)"],
['J', 2.1, 3.3, 4.1, '매운나가사키짬뽕', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EB%82%98%EA%B0%80%EC%82%AC%ED%82%A4%EC%A7%AC%EB%BD%95.jpg)"],
['J', 2.1, 3.3, 4.2, '야끼우동', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%95%BC%EB%81%BC%EC%9A%B0%EB%8F%99.jpg)"],
['J', 2.1, 3.3, 4.2, '라멘', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%9D%BC%EB%A9%98.jpg)"],
['J', 2.1, 3.3, 4.2, '우동', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%9A%B0%EB%8F%99.jpg)"],
['J', 2.1, 3.4, 4.1, '매운돈카츠나베', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EB%8F%88%EC%B9%B4%EC%B8%A0%EB%82%98%EB%B2%A0.jpg)"],
['J', 2.1, 3.4, 4.2, '가라아게', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EA%B0%80%EB%9D%BC%EC%95%84%EA%B2%8C.jpg)"],
['J', 2.1, 3.4, 4.2, '일식화로구이', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%9D%BC%EC%8B%9D%ED%99%94%EB%A1%9C%EA%B5%AC%EC%9D%B4.jpg)"],
['J', 2.2, 3.1, 4.2, '초밥', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%B4%88%EB%B0%A5.jpg)"],
['J', 2.2, 3.2, 4.2, '카츠산도', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%B9%B4%EC%B8%A0%EC%82%B0%EB%8F%84.jpg)"],
['J', 2.2, 3.2, 4.2, '타코야끼', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%ED%83%80%EC%BD%94%EC%95%BC%EB%81%BC.jpg)"],
['J', 2.2, 3.3, 4.2, '명란파스타', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%AA%85%EB%9E%80%ED%8C%8C%EC%8A%A4%ED%83%80.jpg)"],
['J', 2.2, 3.4, 4.1, '매운모츠나베', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%A7%A4%EC%9A%B4%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0.jpg)"],
['J', 2.2, 3.4, 4.2, '모츠나베', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0.jpg)"],
['J', 2.2, 3.4, 4.2, '스키야키', "url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EC%8A%A4%ED%82%A4%EC%95%BC%ED%82%A4.jpg)"],
['W', 2.1, 3.1, 4.1, '카레',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/1e10ba7093d4b88f7371742fdc3ed2ccb19d1054/%EC%B9%B4%EB%A0%88.jpg)"],//양식 
['W', 2.1, 3.1, 4.2, '리조또',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/e87d18de81de0e46e1ef8d9d92b941722fb8bd4a/%EB%A6%AC%EC%A1%B0%EB%98%90.jpg)"],
['W', 2.1, 3.2, 4.1, '타코',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/6d14fad2ff52e839c9e0d835dc4820e5711c83b6/%ED%83%80%EC%BD%94.jpg)"],
['W', 2.1, 3.2, 4.2, '햄버거',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/6d14fad2ff52e839c9e0d835dc4820e5711c83b6/%ED%96%84%EB%B2%84%EA%B1%B0.jpg)"],
['W', 2.1, 3.2, 4.2, '토스트',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/ef869416053e37a36d8ce70eab5795a1940c6d35/%ED%86%A0%EC%8A%A4%ED%8A%B8.jpg)"],
['W', 2.1, 3.2, 4.2, '멘보샤',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/49b648ecadd96117e37cf2b52ea835d292792aea/%EB%A9%98%EB%B3%B4%EC%83%A4.jpg)"],
['W', 2.1, 3.3, 4.1, '분',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/4af03332f1f3519920a35f1f1a9ed7b1a5d3e8ac/%EB%B6%84.jpeg)"],
['W', 2.1, 3.3, 4.2, '파스타',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/db46d1c2806cac8b8c6117d9d36d672ecc724ebc/%ED%8C%8C%EC%8A%A4%ED%83%80.jpg)"],
['W', 2.1, 3.4, 4.2, '비프 부르기뇽',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EB%B9%84%ED%94%84%20%EB%B6%80%EB%A5%B4%EA%B8%B0%EB%87%BD.jpg)"],
['W', 2.2, 3.1, 4.2, '연어 스테이크',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/7819ccab6ec723a284e60c0dd3b95f6eddb8f33a/%EC%97%B0%EC%96%B4%20%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC.jpg)"],
['W', 2.2, 3.1, 4.2, '월남쌈',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/ac9cc95dcec1a5649e0c30f887fe5a163f2962a2/%EC%9B%94%EB%82%A8%EC%8C%88.jpg)"],
['W', 2.2, 3.2, 4.2, '피자',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/fa66660cecaf22ab0b89db624cd44105a9685666/%ED%94%BC%EC%9E%90.jpg)"],
['W', 2.2, 3.2, 4.2, '감바스',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%EA%B0%90%EB%B0%94%EC%8A%A4.jpg)"],
['W', 2.2, 3.2, 4.2, '에그인헬',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/0666839f4298f4e083e0586fa9a5c3ddd12f40c0/%EC%97%90%EA%B7%B8%EC%9D%B8%ED%97%AC.jpg)"],
['W', 2.2, 3.3, 4.2, '파스타',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/db46d1c2806cac8b8c6117d9d36d672ecc724ebc/%ED%8C%8C%EC%8A%A4%ED%83%80.jpg)"],
['W', 2.2, 3.3, 4.2, '쌀국수',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/5687996ebe01d13c3bc327aa5ffd96739bf7f67c/%EC%8C%80%EA%B5%AD%EC%88%98.jpg)"],
['W', 2.2, 3.3, 4.2, '라자냐',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/16c09f5469b6e0389f9eff426a3d682328874204/%EB%A6%AC%EC%9E%90%EB%83%90.jpg)"],
['W', 2.2, 3.4, 4.2, '텍사스 바베큐',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/main/%ED%85%8D%EC%82%AC%EC%8A%A4%20%EB%B0%94%EB%B2%A0%ED%81%90.jpg)"],
['W', 2.2, 3.4, 4.2, '카르파쵸',"url(https://raw.githubusercontent.com/SeoultechWebteam/images/cf13a5f2dd0b0fa0f8505b62ad1eceb7237abc9d/%EC%B9%B4%ED%94%84%ED%8C%8C%EC%B5%B8.jpg)"]
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

/*메인페이지 관련 JS*/
function mainstart() {
	//
}
