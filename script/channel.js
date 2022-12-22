const chanel=[
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1137/661137-h"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8774/1308774-h-524cdf69effa"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6620/776620-h"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1121/661121-h"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h"
    },
    {
        url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1103/661103-h"
    }
];

function display(chanel){
    let container=document.getElementById("channels");
    container.innerHTML=null;
    chanel.forEach((el)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",el.url);
        div.append(image)
        document.querySelector("#channels").append(div)
    })
}
display(chanel)