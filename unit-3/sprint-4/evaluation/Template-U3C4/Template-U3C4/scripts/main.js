async function apiCall(url) {


    //add api call logic here
    try{
        let res=await fetch(url)
        let data=await res.json()
        return data.articles;
    }catch(err){
        console.log("err",err);
    }


}


function appendArticles(articles, main) {
 let cart=JSON.parse(localStorage.getItem("search_term"))||[];
    //add append logic here
    main.innerHTML="";
    articles.forEach(({title,description,content,url,image,publishedAt}) => {
      let div=document.createElement('div');

      let titleC=document.createElement('h3');
      titleC.innerText="TITLE - "+title;

      let img=document.createElement('img');
      img.src=image;

      let desc=document.createElement('p');
      desc.innerText=description;

      let link=document.createElement('p');
      link.innerText=url;

      div.append(titleC,img,desc,link);
      div.addEventListener("click",function(){
        let list={
            title:titleC.innerText,
            image:img.src,
            desc:desc.innerText,
            content:content,
            link:link.innerText,
            published:publishedAt
        }
        cart.push(list);
        localStorage.setItem("search_term",JSON.stringify(cart));
        window.location.href="./news.html";
      })
      main.append(div);
    })

}

export { apiCall, appendArticles };