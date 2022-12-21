// for slider
let slideShow=()=>{
    const arr=['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2978/1432978-h-90572dd255c9','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9476/1429476-h-fb7ceee122b4','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1259/1431259-h-248b69674bff']

    let i=0;
    let div=document.getElementById("slider");
    let img=document.createElement("img");
    img.src=arr[0];
    div.append(img);
    i=i+1;
    setInterval(()=>{
        if(i==5){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);
    },2000)
}
slideShow()

const move=[
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4789/1434789-v-1452aa371a60"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9477/1429477-v-4c6f37f48b10"
    }  ,
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5613/1425613-v-75e4bceee4f9"
    } , 
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5980/1425980-v-211ae5b2e668"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3854/1423854-v-a109668f45a7"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5678/1415678-v-e252f7b02e04"
    }
];

localStorage.setItem("movie",JSON.stringify(move));
let data = JSON.parse(localStorage.getItem("movie")) || [];
function display(move) {
    let container = document.getElementById("Latests");
    container.innerHTML = null;
    move.forEach(function (el) {
        let div = document.createElement("div");
        let image= document.createElement("img");
        image.setAttribute("src", el.url);

        div.append(image);

        document.querySelector("#Latests").append(div);
        //localStorage.setItem("movie",JSON.stringify(data));
    });
   //localStorage.setItem("movie",JSON.stringify(data));
}
display(move)

const Best=[
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6569/686569-v"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5613/1425613-v-75e4bceee4f9"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5980/1425980-v-211ae5b2e668"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5678/1415678-v-e252f7b02e04"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9477/1429477-v-4c6f37f48b10"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/103/1410103-v-86e3d98722e8"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7076/1387076-v-baa4a3a98bd0"
    }
];

// localStorage.setItem("Best",JSON.stringify(bests));
// let data2 = JSON.parse(localStorage.getItem("Best")) || [];
// function display(Best) {
//     let container = document.getElementById("bests");
//     container.innerHTML = null;
//     Best.forEach(function (el) {
//         let div = document.createElement("div");
//         let image2= document.createElement("img");
//         image2.setAttribute("src", el.url1);

//         div.append(image2);

//         document.querySelector("#bests").append(div);
//         //localStorage.setItem("movie",JSON.stringify(data));
//     });
//    //localStorage.setItem("movie",JSON.stringify(data));
// }
// display(Best)





const movies = [
    {
        name: "MS Dhoni",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        name: "Sanju",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4665/64665-v",
        IDMb: 7.9,
        role: "drama",
    },
    {
        name: "Wanted",
        url: "https://m.media-amazon.com/images/M/MV5BODQ1MGNkYzQtODY4Yy00YTdmLThjNWEtYjllNDU5NDI2YzIwXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg",
        IDMb: 6,
        role: "action",
    },
    {
        name: "Mission Mangal",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
        IDMb: 8,
        role: "action",
    },
    {
        name: "Arjun Reddy",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v",
        IDMb: 5.9,
        role: "action",
    },
    {
        name: "Neerja",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v",
        IDMb: 9,
        role: "action",
    },
    {
        name: "Super 30",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
        IDMb: 7,
        role: "action",
    },
    {
        name: "Hungama 2",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1535/1101535-v-cac451b9ee92",
        IDMb: 9.5,
        role: "action",
    },
    {
        name: "Villan",
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1662/1000051662/1000051662-v",
        IDMb: 10,
        role: "action",
    },
];