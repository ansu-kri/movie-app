const movies=[
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2978/1432978-h-90572dd255c9",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6474/1436474-h-f7dd170ff868",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4294/754294-h",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4855/1414855-h-d3c144f8834a",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/370/1420370-h-cb1860fdfc2c",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5040/1405040-h-745f9aa52bbc",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5600/1425600-h-135c54b9c793",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1193/1431193-h-01e6c1350629",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5594/1355594-h-c71aa114a5e4",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6237/1296237-h-5662015305e4",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/530/530530-h",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3913/1073913-h-db43b82e4b2e",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4469/674469-h",
        IDMb: 9.5,
        role: "romantic",
    },
    {
        
        url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6",
        IDMb: 9.5,
        role: "romantic",
    },

];


function display(movies) {
    let container = document.getElementById("movie");
    // container.innerHTML = null;
    movies.forEach(function (el) {
        let div = document.createElement("div");
        let img= document.createElement("img");
        img.setAttribute("src", el.url);

        div.append(img);

        document.querySelector("#movie").append(div);
        
    });
   
}
display(movies)
