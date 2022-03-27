const typingEffect = document.getElementById('txt');
const followerBtn = document.getElementById('follower');
const amountFollo = document.getElementById('amount-follower');
const standBrick = document.getElementById('standing-brick');
// const txt = 'I\'m developer...';
const fullName = 'developer...';
const amountFollow = '1,999,999';
const fullNameW = fullName.length;
let countRemove = fullNameW;
let countFollow = 0;
let countStandBrick = 0
let valueFolow;


function addWriter() {
  if (i < fullNameW) {
    typingEffect.innerHTML += fullName.charAt(i);
    i++;
    setTimeout(addWriter, 200);
  } else if (i == fullNameW) {
    countRemove = fullNameW;
    removeWriter();
  }
}
setInterval(addWriter, 6000);

function standingBrick() {
  if (countStandBrick == 0) {
    standBrick.style.display = 'none';
    countStandBrick = 1;
  } else {
    standBrick.style.display = 'inline-block';
    countStandBrick = 0;
  }
}
setInterval(standingBrick, 500);

function removeWriter() {
  if (countRemove > 0) {
    typingEffect.innerHTML = fullName.substring(0, countRemove -1);
    countRemove--;
  } else if (countRemove == 0) {
    countRemove = 0;
    i = 0;
    return;
  }
  setTimeout(removeWriter, 200);
}

function getValue() {
  document.getElementById('amount-follower').innerHTML;
} 

function setValueFl(number) {
  return document.getElementById('amount-follower').innerHTML = number
}
function stringFormat(number) {
  return Number(number).toLocaleString("de-DE");
}

function removeStringFormat(number) {
  return Number(number.replace(/,/g, ''));
}

const unFollowBtn = document.getElementById('un-follower');


followerBtn.addEventListener('click', function () {
  countFollow += 1;
  amountFollo.innerHTML = '';
  valueFolow = removeStringFormat(amountFollow);
  valueFolow += countFollow;
  setValueFl(stringFormat(valueFolow));
  followerBtn.style.display = 'none';
  unFollowBtn.style.display = 'inline-block';
});

unFollowBtn.addEventListener('click', function () {
  countFollow -= 1;
  amountFollo.innerHTML = '';
  valueFolow = removeStringFormat(amountFollow);
  valueFolow += countFollow;
  setValueFl(stringFormat(valueFolow));
  followerBtn.style.display = 'inline-block';
  unFollowBtn.style.display = 'none';
});
