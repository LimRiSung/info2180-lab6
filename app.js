// JavaScript File
window.onload = function() {
    
    var submitBtn = document.getElementById("submitBtn");
    var  httpRequest;

submitBtn.addEventListener('click', function(e) {
    
    e.preventDefault();
    var formdata = document.getElementById("search-term").value;
    httpRequest = new XMLHttpRequest();
    
    //GET Request
    var url = "request.php?q=" + "" + formdata;
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
            document.getElementById("result").innerHTML = "" + response;
        }
        else 
        {
            alert('There was a problem with the request.');
        }
    }
}
    
};