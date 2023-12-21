const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const presents = [
    "https://sp.yimg.com/ib/th?id=OPHS.tpXQk%2bQMZ%2fnozQ474C474&o=5&pid=21.1&w=160&h=105",
    "https://tse1.mm.bing.net/th?id=OIP.t9tWJyf7Dk5WrADh0cOMpgHaHa&pid=Api&P=0&h=180",
    "https://i5.walmartimages.com/asr/209dba65-b614-40c3-9f18-fa8b44360248_1.15715439d36bc1e12259aa387b8dfb71.jpeg",
    "https://tse3.mm.bing.net/th?id=OIP.C9S6so28hfcylnYA2QsbKgHaJf&pid=Api&P=0&h=180",
    "https://m.media-amazon.com/images/I/41ZYy6D9iTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://sp.yimg.com/ib/th?id=OPHS.BzM4lge0OmjjSw474C474&o=5&pid=21.1&w=160&h=105"
]

function present(num){
    if(num == 0){
        pic1.src = presents[0];
    }


else if(num == 1){
    pic2.src = presents[1];
}

else if(num == 2){
    pic3.src = presents[2];
}

else if(num == 3){
    pic4.src = presents[3];
}

else if(num == 4){
    pic5.src = presents[4];
}

else if(num == 5){
    pic6.src = presents[5];
}
}