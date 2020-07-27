axios.get("https://api.hnpwa.com/v0/newest/1.json").then(function (response) {
  createListItem(response);
}).catch(function (error) {
  console.log(error);
});

function createListItem(response) {

  response.data.forEach(function (listitem) {

    //creating a list
    let li = document.createElement("li");
    li.setAttribute("class","collection-item");
    
    // creating badges
    let span = document.createElement("span");
    span.setAttribute("class","new badge");
    
    span.innerHTML = listitem.points;
    

    // creating anchor 
    let anchor = document.createElement("a");
    anchor.setAttribute("href",listitem.url);
    anchor.setAttribute("target","_blank");
    anchor.innerHTML = listitem.title;
    anchor.prepend(span);
    li.appendChild(anchor)
   document.querySelector(".collection").appendChild(li);
    // console.log(listitem);

  });
}