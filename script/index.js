// for slider
let slideShow=()=>{
    const arr=['https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-12-03/cf_desk-5fb329e7-cf91-4884-8afc-073851786bdc.jpg','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2978/1432978-h-90572dd255c9','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9476/1429476-h-fb7ceee122b4','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1259/1431259-h-248b69674bff']

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

// localStorage.setItem("movie",JSON.stringify(move));
// let data = JSON.parse(localStorage.getItem("movie")) || [];
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
