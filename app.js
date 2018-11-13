// JavaScript File
window.onload = function() {
    
    var loadBtn = document.getElementById("loadBtn");
    var  httpRequest;

loadBtn.addEventListener('click', function(e) {
    
    e.preventDefault();
    httpRequest = new XMLHttpRequest();
    
    //GET Request
    var url = "request.php?q=definition";
    httpRequest.onreadystatechange = loadDefinition;
    httpRequest.open('GET', url);
    httpRequest.send();
});

function loadDefinition()
{
    if (httpRequest.readyState === XMLHttpRequest.DONE)
    {
        if (httpRequest.status === 200)
        {
            var response = httpRequest.responseText;
            alert(response);
            //alert(response.definition);
        }
        else 
        {
            alert('There was a problem with the request.');
        }
    }
}
    
};