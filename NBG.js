// main
alert('지금부터 게임을 시작하지')
const shuffledNumbers = shuffleArrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const computerNumbers = [shuffledNumbers[0], shuffledNumbers[1], shuffledNumbers[2]]

for (let count = 0; count < 10; count++) {
    const inputNumbers = prompt("숫자를 입력해 주세요").split("");
    const userNumbers = parseNumbers(inputNumbers)
    const strikeNumber = findStrike(computerNumbers, userNumbers)
    const ballNumber = findBall(computerNumbers, userNumbers)
    if (count === 8) {
        alert('한번밖에 안남았어여 \n ㅠㅠㅠㅠㅠㅠㅠㅠ ', strikeNumber, ballNumber)
    } else if (count === 9) {
        alert('딱밤 맞자')
    } else if (strikeNumber === 3) {
        alert('축하한다 짜식아')
        count = 9
        break
    } else {
        alert(`Strike: ${strikeNumber}, Ball: ${ballNumber}\n 남은 횟수: ${9-count}`)
    }

}

// function
function shuffleArrayElement(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function parseNumbers(stringNumbers) {
    const parsedNumbers = [];
    for (let i = 0; stringNumbers.length > i; i++) {
        parsedNumbers.push(parseInt(stringNumbers[i]))
    }
    return parsedNumbers;
}

function findStrike(computerNumbers, userNumbers) {
    strikeCount = 0;
    for (i = 0; i < computerNumbers.length; i++) {
        if (computerNumbers[i] === userNumbers[i]) {
            strikeCount++;
        }
    }
    return strikeCount;
}

function findBall(computerNumbers, userNumbers) {
    ballCount = 0;
    for (i = 0; i < computerNumbers.length; i++) {
        if (computerNumbers[i] === userNumbers[i]) {
            ballCount = ballCount;
        } else if (computerNumbers.includes(userNumbers[i])) {
            ballCount++;
        }
    }
    return ballCount;
}
