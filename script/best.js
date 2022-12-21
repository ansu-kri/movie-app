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

localStorage.setItem("Best",JSON.stringify(bests));
let data2 = JSON.parse(localStorage.getItem("Best")) || [];
function display(Best) {
    let container = document.getElementById("bests");
    container.innerHTML = null;
    Best.forEach(function (el) {
        let div = document.createElement("div");
        let image2= document.createElement("img");
        image2.setAttribute("src", el.url1);

        div.append(image2);

        document.querySelector("#bests").append(div);
        //localStorage.setItem("movie",JSON.stringify(data));
    });
   //localStorage.setItem("movie",JSON.stringify(data));
}
display(Best)