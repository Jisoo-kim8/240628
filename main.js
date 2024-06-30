// 1. 랜덤번호 지정
// 2. 유저가 번호를 입력하고 Go 버튼 누른다.
// 3. (if) 유저가 랜덤번호를 맞추면, "맞췄다!"
// 3. (else if) 랜덤번호 < 유저번호 : "Down"
// 3. (else if) 랜덤번호 > 유저번호 : "Up"
// 4. Reset 버튼
// 5. 5번의 기회를 다쓰면 Fail (버튼 비활성화)
// 6. 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회는 깎지 않는다.
// 7. 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회는 깎지 않는다.


let computerNum = 0
let play_button = document.getElementById("play_button") // html에서 설정한 id를 가져오는 함수 활용!
let user_input = document.getElementById("user_input") 
let result_area = document.getElementById("result_area")
play_button.addEventListener("click",play) // 플러이 버튼에 Click 이벤트 생성, 이벤트 생성 시 play 함수 실행 [함수를 매배변수로 넘긴 것] 만약 play() 라고 입력을 하면, 이건 함수를 실행해버리는 것임. 우리는 Click 이라는 이벤트가 있을 때만 play 함수를 실행시키고 싶은거니까 괄호 넣지 마셈요 
// 결론 : 함수도 변수처럼 넘길 수 있다!

function pickRandomNum(){ // 랜덤번호부터 설정하고 들어가자
    computerNum = Math.floor(Math.random()*100) + 1 ; // 0~1 숫자를 반환...! 그러니 100 곱하고 버리고 1증가 > 1~100 변환 완료
    console.log("정답",computerNum)
}

function play(){
 let userValue = user_input.value; // userInput이라는 태그의 값(value)를 가져와
 if(userValue < computerNum){
    result_area.textContent = "UP!!!" // 결과값에 반영
    // console.log("UP!!!")
 }else if (userValue > computerNum){
    result_area.textContent = "DOWN!!!"
    // console.log("DOWN!!!")
 }else {
    result_area.textContent = "정답!!!"
    //console.log("맞추셨습니다!")
 }
}

pickRandomNum()