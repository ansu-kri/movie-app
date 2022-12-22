const Best=[
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6443/1436443-v-d3a4e047c1f8"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7857/1397857-v-70d76d9df081"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3455/1363455-v-1ca8ce6d697d"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/375/1350375-v-108376acc65b"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3550/1373550-v-5a4379a25e99"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6929/1306929-v-9806b76b6bb7"
    },
    {
        url1:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3434/1373434-v-509c9dbd22dc"
    }
];

// localStorage.setItem("Best",JSON.stringify(best));
// let data2 = JSON.parse(localStorage.getItem("Best")) || [];
function display(Bests) {
    let container = document.getElementById("bests");
    container.innerHTML = null;
    Bests.forEach(function (el) {
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