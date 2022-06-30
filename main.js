const string = `
#bingdundun {
/*    border: 1px solid black; */
    width: 700px;
    height: 400px;
    
    position: relative;
}
#body {
    background-color: #fff;
    border:5px solid #000;
    width: 210px;
    height: 236px;
    border-radius: 47% 47%  38% 38%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-105px,-118px);
    z-index: 1;
}

#earLeft {
    background-color: #000;
    width: 60px;
    height: 75px;
    position: absolute;
    left: 242px;
    top: 67px;
    border-radius: 50% 38% 0 0;
    transform: rotate(-25deg) translate(5px,10px);
}
#earRight {
    background-color: #000;
    width: 60px;
    height: 75px;
    position: absolute;
    right: 242px;
    top: 67px;
    border-radius: 38% 50% 0 0;
    transform: rotate(25deg) translate(-5px,10px);
}
#armLeft {
    background-color: #000;
    width: 40px;
    height: 70px;
    transform: rotate(30deg);
    position: absolute;
    left: 230px;
    top: 200px;
}
#handLeft {
    background-color: #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 244px;
    left: 213px;
}
#handRight {
    width: 40px;
    height: 70px;
    background-color: #000;
    transform: rotate(45deg);
    border-radius: 35%;
    position: absolute;
    top: 178px;
    right: 213px;
}
#handRight::after {
    display: block;
    content: '❤';
    width: 35px;
    height: 35px;
    color: red;
    font-size: 30px;
    text-align: center;
    background-color: #000;
    border-radius: 40% 40% 50% 50%;
    position: relative;
    letter-spacing: -2px;
    left: -6px;
    top: -14px;
    transform: rotate(-55deg);
}
#footLeft {
    background-color: #000;
    width: 40px;
    height: 50px;
    position: absolute;
    top: 305px;
    left: 290px;
    border-radius: 0% 60% 0 0;
    z-index: 2;
}
#footLeft::after {
    content: "";
    display: block;
    width: 43px;
    height: 20px;
    background-color: #000;
    border-radius: 0% 70% 0% 60%; 
    position: relative;
    top: 40px;
}
#footRight {
    background-color: #000;
    width: 40px;
    height: 50px;
    position: absolute;
    top: 305px;
    right: 290px;
    border-radius: 0% 60% 0 0;
    z-index: 2;
    transform: rotateY(180deg);
}
#footRight::after {
    content: "";
    display: block;
    width: 43px;
    height: 20px;
    background-color: #000;
    border-radius: 0% 70% 0% 60%; 
    position: relative;
    top: 40px;
}
#face {
    width: 165px;
    height: 130px;
    box-shadow: rgb(102, 201, 253) 0 0 0 3px, rgb(173, 35, 96) 0 0 0 5px, rgb(81, 122, 183) 0 0 0 7px, rgb(250, 198, 70) 0 0 0 9px, rgb(128, 201, 111) 0 0 0 12px;
    /* background-color: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 85%, rgba(157,220,254,1) 85%, rgba(157,220,254,1) 88%, rgba(173,35,96,1) 88%, rgba(173,35,96,1) 91%, rgba(81,122,183,1) 91%, rgba(81,122,183,1) 94%, rgba(250,198,70,1) 94%, rgba(250,198,70,1) 97%, rgba(128,201,111,1) 97%); */
    border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;
    position: absolute;
    left: 50%;
    top: 105px;
    transform: translatex(-50%);
    z-index: 2;
}
#nose {
    width: 28px;
    border: 10px solid red;
    border-color: black white white white;
    border-bottom: none;
    position: absolute;
    left: 50%;
    top: 175px;
    transform: translatex(-50%); 
    z-index: 5;
}
#nose::before {
    content: '';
    display: block;
    width: 28px;
    height: 2px;
    background-color: #000;
    transform: translate(-10px,-12px);
}
#eyeLeft {
    background-color: rgb(57,51, 63);
    width: 47px;
    height: 65px;
    transform: rotate(50deg) translate(-50%);
    border-radius: 45%;
    position: absolute;
    right: 50%;
    top: 130px;
    z-index: 3;
}
#eyeLeft::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 3px solid white;
    border-radius: 50%;
    position: relative;
    top: 14px;
    left: 12px;
}
#eyeLeft::after {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: -5px;
    left: 22px;
    /* z-index: 3; */
}
#eyeRight {
    background-color: rgb(57,51, 63);
    width: 47px;
    height: 65px;
    transform: rotate(-50deg) translate(50%);
    border-radius: 45%;
    position: absolute;
    left: 50%;
    top: 130px;
    z-index: 3;
}
#eyeRight::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 3px solid white;
    border-radius: 50%;
    position: relative;
    top: 14px;
    left: 9px;
}
#eyeRight::after {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: -6px;
    left: 17px;
    /* z-index: 4; */
}

#mouth {
    width: 50px;
    height: 35px;
    background-color: rgb(57, 57, 57);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-10px);
    border-radius: 42%;
    z-index: 4;
}
#mouth::before {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translate(-50%);
}
#mouth::after {
    content: '';
    display: block;
    width: 40px;
    height: 15px;
    background-color: rgb(163,51,51);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 50%;
    border-radius: 40%;
}
`;  
let time = 50;
let n = 0;
let text= '';
function play(speed) {
        let statue = setInterval(() => {
        text += string[n];
        output.innerHTML = text;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        n++;
        if(n > string.length - 1){
            window.clearInterval(id);
        }
        else if(string[n] === '\n'){
            text += '<br>'; 
        }
        else if(string[n] === ' '){
            text += '&nbsp;';
        }
    }, speed);
    return statue;
}

let id = play(time);

b1.onclick = () => {
    window.clearInterval(id);
    time = 100;
    id = play(100);
}
b2.onclick = () => {
    window.clearInterval(id);
    time = 50;
    id = play(50);
}
b3.onclick = () => {
    window.clearInterval(id);
    time = 5
    id = play(5);
}
b4.onclick = () => {
    console.log('dianji');
    window.clearInterval(id);
}
b5.onclick = () => {
   id = play(time);
}
