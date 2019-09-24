var serverUrl = "/hello/";

function getXMLHttp()
{
  var xmlHttp

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

function printResponse(response)
{
  document.getElementById('ResponseDiv').innerHTML = response;
}

function MakeRequestSync()
{
	var xmlHttp = getXMLHttp();
	  
	userKeyin = document.getElementById('txtTest').value;

	xmlHttp.open("GET", serverUrl + userKeyin, false);
	xmlHttp.send(null);

	// printResponse(userKeyin);
	printResponse(xmlHttp.responseText);
}

function MakeRequestAsync()
{
  var xmlHttp = getXMLHttp();
 
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      printResponse(xmlHttp.responseText);
    }
  }
  
  userKeyin = document.getElementById('txtTest').value;

  xmlHttp.open("GET", serverUrl + userKeyin, true);
  xmlHttp.send(null);
}
