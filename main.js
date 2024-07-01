// 1. 랜덤번호 지정 [화면에 보이게 한다]
// 2. 유저가 번호를 입력하고 Go 버튼 누른다.
// 3. (if) 유저가 랜덤번호를 맞추면, "맞췄다!"
// 3. (else if) 랜덤번호 < 유저번호 : "Down"
// 3. (else if) 랜덤번호 > 유저번호 : "Up"
// 4. Reset 버튼
// 5. 3번의 기회를 다쓰면 Fail (버튼 비활성화)
// 6. 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회는 깎지 않는다.
// 7. 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회는 깎지 않는다.


let computerNum = 0
let play_button = document.getElementById("play_button") // html에서 설정한 id를 가져오는 함수 활용!
let user_input = document.getElementById("user_input") 
let answer_area = document.getElementById("answer_area")
let result_area = document.getElementById("result_area")
let reset_button = document.getElementById("reset_button")
let chances = 3 // 3번의 기회
let gameOver = false 
let chances_area = document.getElementById("chances_area")
let history = [] // 배열의 형태

play_button.addEventListener("click",play) // 플러이 버튼에 Click 이벤트 생성, 이벤트 생성 시 play 함수 실행 [함수를 매배변수로 넘긴 것] 만약 play() 라고 입력을 하면, 이건 함수를 실행해버리는 것임. 우리는 Click 이라는 이벤트가 있을 때만 play 함수를 실행시키고 싶은거니까 괄호 넣지 마셈요 
// 결론 : 함수도 변수처럼 넘길 수 있다!
reset_button.addEventListener("click",reset)
user_input.addEventListener("focus",function(){user_input.value=""}) // user_input 창에 추가한 기능 (클릭하면 초기화) 
// 익명의 함수 (잠깐 여기서'만' 쓰고 끝날꺼니까요,, 선언하면 메모리만 차지한대요)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100) + 1
    answer_area.textContent = `정답 : ${computerNum}`
}

function play(){
 let userValue = user_input.value; // userInput이라는 태그의 값(value)를 가져와

    if(userValue<1 || userValue >100){ // 유효성 검사(1)
       result_area.textContent="1과 100사이 숫자를 입력해 주세요!" 
       return; // 아래것들은 실행하지 않아요
    }
    if(userValue.includes(userValue)){ // 배열에 이전값이 포함되어 있다면~ // 유효성 검사(2)
        result_area.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요!"
        return;
    }
    chances = chances-1; 
    chances_area.textContent = `남은 기회 : ${chances}번` // 동적인 값을 넣을 때 쓰는 문법

 if(userValue < computerNum){
    result_area.textContent = "UP!!!" // 결과값에 반영
    // console.log("UP!!!")
 }else if (userValue > computerNum){
    result_area.textContent = "DOWN!!!"
    // console.log("DOWN!!!")
 }else {
    result_area.textContent = "정답!!!"
    gameOver = true ; // 이 순간 gameover == true 되면서 아래로 내려감
    //console.log("맞추셨습니다!")
 }

 history.push(userValue) // history라는 배열에 userValue 값을 집어넣자 (배열에 저장)


 if(chances < 1){
    gameOver = true;
 }
 if(gameOver == true) {
    play_button.disabled = true ;
 }
}
pickRandomNum()

function reset(){ 
    user_input ="" //user input 창 깨끗하게 정리,
    pickRandomNum() // 새로운 번호 생성 
    result_area.textContent = "결과가 나온다"
}

