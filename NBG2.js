function getComputerNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length !== 3) {
        const randomNumber = getRandomInt(1, 10)
        if (!computerNumbers.includes(randomNumber)) computerNumbers.push(randomNumber)
    }
    return computerNumbers;
}

const getRandomInt = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber+1)) + minNumber;

function findStrike(computerNum, userNum) {
    let strikeCount = 0;
    for (i = 0; i < computerNum.length; i++) if (computerNum[i] === userNum[i]) strikeCount++;
    return strikeCount;
}

function findball(computerNum, userNum) {
    let ballCount = 0
    for (i = 0; i < computerNum.length; i++) {
        if (computerNum[i] === userNum[i]) continue;
        if (computerNum.includes(userNum[i])) ballCount++;
    }
    return ballCount;
}

alert('Game Start!')
const computerRandomNumbers = getComputerNumbers();

for (let count = 0; count < 10; count++) {
    const userStrNumbers = prompt('세 개의 숫자를 입력해.(단, 띄워쓰기로 구분)').split(' ')
    let userNumbers = userStrNumbers.map((arr) => parseInt(arr));
    let strikeCountNumber = findStrike(computerRandomNumbers, userNumbers)
    let ballCountNumber = findball(computerRandomNumbers, userNumbers)
    if (count === 8) alert(`마지막 기회다!\n 스트라이크 : ${strikeCountNumber}, 볼: ${ballCountNumber}`)
    else if (count === 9) alert(`머리쓰는 도박은 절대하지 말도록!`)
    else if (count === 3) {
        alert(`Good job!`)
        count = 9
        break;
    } else {
        alert(`스트라이크 : ${strikeCountNumber}, 볼: ${ballCountNumber}, 남은 횟수: ${9 - count}\n 화이팅!!`)
    }
}