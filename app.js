const open = () =>{
    img.src = 'https://media1.giphy.com/media/DnY2M6ddNFP3mslFEn/giphy.gif';
    money.src = 'https://www.pngkey.com/png/full/437-4372004_dollar-currency-money-us-dollar-franklin-seem-dollar.png'
    box.innerHTML = text;
    yellow.innerHTML = wish;
};
let cardbox = document.querySelector('.card')
let money = document.querySelector('.moneypic')
let text = "Its your day, enjoy it!";
let wish = "Its been another year and you continue to grow. Always keep being you! - Love, grandpa"
let box = document.querySelector('.top');
let yellow = document.querySelector('.wish')
let img = document.querySelector('.pic');
let btn = document.querySelector('.btn');
btn.addEventListener('click', open);