// JavaScript File
window.onload = function() {
    
    var submitBtn = document.getElementById("submitBtn");
    var getAllDefinitionsBtn = document.getElementById("getAllDefinitions");
    var  httpRequest;
    httpRequest = new XMLHttpRequest();
    
submitBtn.addEventListener('click', function(e) {
    
    e.preventDefault();
    var formdata = document.getElementById("search-term").value;

    //GET Request
    //var url = "searchterm.php?q=definition"; /*To get only definition*/
    var url = "searchterm.php?q=" + "" + formdata;
    httpRequest.onreadystatechange = loadDefinition;
    httpRequest.open('GET', url);
    httpRequest.send();
});

getAllDefinitionsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var url = "request.php?q=&all=true";
    httpRequest.onreadystatechange = loadAllDefinition;
    httpRequest.open('GET', url);
    httpRequest.send();
    
});

function loadDefinition()
{
    if (httpRequest.readyState === XMLHttpRequest.DONE)
    {
        if (httpRequest.status === 200)
        {
            var response = httpRequest.responseText; //Use .responseText
            //alert(response); //Response is display using alert
            document.getElementById("results").innerHTML = "" + response;
        }
        else 
        {
            alert('There was a problem with the request.');
        }
    }
}

function loadAllDefinition()
{
    if (httpRequest.readyState === XMLHttpRequest.DONE)
    {
        if (httpRequest.status === 200)
        {
            var response = httpRequest.responseXML; //With XML, use .responseXML with XML data, not .responseText
            var results = document.querySelector('#results');
            var definitions = response.getElementsByTagName("definition");
            //console.log(definitions);
            var orderedlist = document.createElement("ol");
            results.appendChild(orderedlist);
            for (var i = 0; i < definitions.length; i++) {
                var listItem = document.createElement('li');
                var dtHeading = document.createElement('h3');
                var headingText = document.createTextNode(definitions[i].getAttribute("name"));
                dtHeading.appendChild(headingText);
                listItem.appendChild(dtHeading);
                var dtText = document.createElement("p");
                var definitionText = document.createTextNode(definitions[i].childNodes[0].nodeValue);
                dtText.appendChild(definitionText);
                listItem.appendChild(dtText);
                var author = document.createElement("p");
                var authorText = definitions[i].getAttribute("author");
                var authorTxt = document.createTextNode("-" + authorText);
                author.appendChild(authorTxt);
                listItem.appendChild(author);
                orderedlist.appendChild(listItem);
            }
            
        }
        else 
        {
            alert('There was a problem with the request.');
        }
    }
}
    
};