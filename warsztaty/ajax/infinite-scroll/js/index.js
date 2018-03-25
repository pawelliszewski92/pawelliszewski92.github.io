function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == 4) {
            if(httpRequest.status == 200) {
                var returnData = httpRequest.responseText;
                var jsonObj = JSON.parse(returnData);
                callback(jsonObj);
                httpRequest = null;
            }
        }
    }
    
    httpRequest.send();
}




window.onscroll = function(e) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      ajax("GET", "https://jsonplaceholder.typicode.com/users", infitinteUsers);  
    }
};

var body = document.getElementsByTagName("body")[0];

function infitinteUsers(data) {
    for(var i = 0;i<data.length;i++) {
        var userId = document.createElement("p");
        userId.innerHTML = ("Id :" + data[i].id);
        body.appendChild(userId);
        
        var userName = document.createElement("p");
        userName.innerHTML = ("Name: " + data[i].name)
        body.appendChild(userName);
        
        var userWebsite = document.createElement("p");
        userWebsite.innerHTML = ("Website: " + data[i].website);
    };
};

