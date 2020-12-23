const CURRENT_RESULT = document.querySelector('#current-result');
const NUMBER_ZERO = document.querySelector('#number-zero');
const NUMBER_ONE = document.querySelector('#number-one');
const NUMBER_TWO = document.querySelector('#number-two');
const NUMBER_THREE = document.querySelector('#number-three');
const NUMBER_FOUR = document.querySelector('#number-four');
const NUMBER_FIVE = document.querySelector('#number-five');
const NUMBER_SIX = document.querySelector('#number-six');
const NUMBER_SEVEN = document.querySelector('#number-seven');
const NUMBER_EIGHT = document.querySelector('#number-eight');
const NUMBER_NINE = document.querySelector('#number-nine');


function numberOne() {
    CURRENT_RESULT.value = 1;
}

NUMBER_ONE.onclick = numberOne;
