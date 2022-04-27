let tags = [
    {
        bg:"https://i.imgur.com/1eQyuB1_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Robot",
        post:"4,900",
        color:"#276860",
    },
    {
        bg:"https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Funny",
        post:"2,699,524",
        color:"#ab96b7",
    },
    {
        bg:"https://i.imgur.com/59NSmVP_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Dog",
        post:"211,825",
        color:"#168b72",
    },
    {
        bg:"https://i.imgur.com/avRBRpN_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Aww",
        post:"765,199",
        color:"#60aebb",
    },

    {
        bg:"https://i.imgur.com/4LBx79U_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Oc",
        post:"40,013",
        color:"#ab80b8",
    },
    {
        bg:"https://i.imgur.com/1z4dgZT_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Memes",
        post:"574,272",
        color:"#ba519f",
    },
    {
        bg:"https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Gaming",
        post:"298,780",
        color:"#2b1a5a",
    },
    {
        bg:"https://i.imgur.com/DbQMO3A_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Staff Picks",
        post:"6,552",
        color:"#132d31",
    },

    {
        bg:"https://i.imgur.com/4kmYoey_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Awesome",
        post:"753,331",
        color:"#8472bd",
    },
    {
        bg:"https://i.imgur.com/bdRjrrI_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Science And Tech",
        post:"45,102",
        color:"#e47d57",
    },
    {
        bg:"https://i.imgur.com/AqOtMAc_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Otters",
        post:"534",
        color:"#328d67",
    },

    {
        bg:"https://i.imgur.com/tUX1dpv_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Unmuted",
        post:"14,543",
        color:"#263ba7",
    },
    {
        bg:"https://i.imgur.com/TYs43eJ_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Coffee",
        post:"9,231",
        color:"#383c64",
    },

    {
        bg:"https://i.imgur.com/4zY00kM_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Artcrawl",
        post:"7,089",
        color:"#ff51ba",
    },
    {
        bg:"https://i.imgur.com/htHbdhi_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Upliftng",
        post:"15,378",
        color:"#50207b",
    },
    {
        bg:"https://i.imgur.com/yRSxL07_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Dress Up Your Pet",
        post:"1,426",
        color:"#328d67",
    },

    {
        bg:"https://i.imgur.com/JdeWoaA_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Movies And Tv",
        post:"62,867",
        color:"#2084b0",
    },
    {
        bg:"https://i.imgur.com/4bOlFT2_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Crab",
        post:"1,976",
        color:"#4d549a",
    },

    {
        bg:"https://i.imgur.com/W5yeBvr_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Wholesome",
        post:"25,633",
        color:"#5d85c3",
    },
    {
        bg:"https://i.imgur.com/GEpMqov_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Parkour",
        post:"770",
        color:"#1e5f43",
    },
    {
        bg:"https://i.imgur.com/kQFyoG7_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Current Events",
        post:"62,867",
        color:"#699aaf",
    },
    {
        bg:"https://i.imgur.com/oB1KOoT_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Sci Fi",
        post:"62,867",
        color:"#56a2aa",
    },
    {
        bg:"https://i.imgur.com/mx3BWVq_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Hippo",
        post:"698",
        color:"#328d67",
    },
]


tags.forEach((el,i)=>{
    let tag  = document.getElementById('tagsDiv');
    const mainDiv = document.createElement('div');
    mainDiv.style.backgroundImage = `url(${el.bg})`;
    const Div = document.createElement('div');
    Div.style.backgroundColor=el.color;
    const div1 = document.createElement('div');
    div1.innerText=el.title;
    const div2 = document.createElement('div');
    div2.innerText = el.post+' Posts';
    Div.append(div1,div2);
    mainDiv.append(Div);
    tag.append(mainDiv);
});
const result_div=document.getElementById('mid-content');
async function searchVideo(){
    try{
         let res= await fetch("https://api.imgur.com/3/gallery/hot/-viral/window/1?client_id=546c25a59c58ad7&showViral=true&mature=true&album_previews=true")
        let data= await res.json();
       
          let videos=data.data;
          console.log(videos)
        display(videos);
    }
    catch(e){
        console.log("err:",e);
    }
    }
    searchVideo();

    function display(data){
        
        data.map(function(ele){
            
            // console.log(ele.images[0].gifv)
        var div1= document.createElement("div");
        var name=document.createElement("h2")
        name.textContent=ele.datetime;
        var vid=document.createElement('img');
        if(ele.images&&ele.images[0]&&ele.images[0].type=="image/jpeg"){
            vid.setAttribute("src",ele.images[0].link)
        }
         div1.append(vid);
        result_div.append(div1);
    });
}

