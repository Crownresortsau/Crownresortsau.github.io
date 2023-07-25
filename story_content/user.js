function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gFb7lK8qIP":
        Script1();
        break;
      case "6Y7m37DO5qL":
        Script2();
        break;
      case "5wmsmt0KxyR":
        Script3();
        break;
      case "6irprMim5Ru":
        Script4();
        break;
      case "64QuLyxbEde":
        Script5();
        break;
      case "6nvqBFYOiyt":
        Script6();
        break;
      case "60aqKPFjNwK":
        Script7();
        break;
      case "64plgHCGGo8":
        Script8();
        break;
      case "5kl3CpzOIro":
        Script9();
        break;
      case "5o52xPPPceD":
        Script10();
        break;
      case "5hhibAeqtxO":
        Script11();
        break;
      case "6FGH4tN10Pi":
        Script12();
        break;
      case "6rU2ykuPGfR":
        Script13();
        break;
      case "5wlKiEQy9kS":
        Script14();
        break;
      case "5t2URZogNmk":
        Script15();
        break;
      case "5jV9XvA2AmZ":
        Script16();
        break;
      case "640FPMDFRhI":
        Script17();
        break;
  }
}

function Script1()
{
  sendStatement("read", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://www.page1info.html");
}

function Script2()
{
  sendStatement("Checked In", "http://adlnet.gov/expapi/verbs/initialized", "xAPI Overview","https://www.page1info.html");
}

function Script3()
{
  var player = GetPlayer();

function findLMSAPI(win) {
// look in this window
if (win.hasOwnProperty("GetStudentID")) return win;

// all done if no parent
else if (win.parent == win) return null;

// climb up to parent window & look there
else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("newName", newName);


}

function Script4()
{
  sendStatement("English", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://www.www.info.com");
}

function Script5()
{
  sendStatement("Chinese", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://www.info.com");
}

function Script6()
{
  sendStatement("Subtitles On", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://www.subtitlesinfo");
}

function Script7()
{
  var player = GetPlayer();

function findLMSAPI(win) {
// look in this window
if (win.hasOwnProperty("GetStudentID")) return win;

// all done if no parent
else if (win.parent == win) return null;

// climb up to parent window & look there
else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("newName", newName);


}

function Script8()
{
  sendStatement("Loaded acknowledgement", "http://adlnet.gov/expapi/verbs/initialized", "Acknowledgement Page","https://www.info.com");
}

function Script9()
{
  sendStatement("agreed", "http://adlnet.gov/expapi/verbs/initialized", "Code of Conduct","https://crownresortsltd.sharepoint.com/sites/compass/Policies/Forms/AllItems.aspx?id=%2Fsites%2Fcompass%2FPolicies%2FCrown%2DResorts%2DCode%2Dof%2DConduct%2DBook%2Epdf&parent=%2Fsites%2Fcompass%2FPolicies");
}

function Script10()
{
  sendStatement("Do not agree", "http://adlnet.gov/expapi/verbs/initialized", "Code of Conduct","https://crownresortsltd.sharepoint.com/sites/compass/Policies/Forms/AllItems.aspx?id=%2Fsites%2Fcompass%2FPolicies%2FCrown%2DResorts%2DCode%2Dof%2DConduct%2DBook%2Epdf&parent=%2Fsites%2Fcompass%2FPolicies");
}

function Script11()
{
  sendStatement("Request information", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://crownresortsltd.sharepoint.com/sites/compass/Policies/Forms/AllItems.aspx?id=%2Fsites%2Fcompass%2FPolicies%2FCrown%2DResorts%2DCode%2Dof%2DConduct%2DBook%2Epdf&parent=%2Fsites%2Fcompass%2FPolicies");
}

function Script12()
{
  sendStatement("Do not Understand", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://crownresortsltd.sharepoint.com/sites/compass/Policies/Forms/AllItems.aspx?id=%2Fsites%2Fcompass%2FPolicies%2FCrown%2DResorts%2DCode%2Dof%2DConduct%2DBook%2Epdf&parent=%2Fsites%2Fcompass%2FPolicies");
}

function Script13()
{
  sendStatement("Understand", "http://adlnet.gov/expapi/verbs/initialized", "Page1","https://crownresortsltd.sharepoint.com/sites/compass/Policies/Forms/AllItems.aspx?id=%2Fsites%2Fcompass%2FPolicies%2FCrown%2DResorts%2DCode%2Dof%2DConduct%2DBook%2Epdf&parent=%2Fsites%2Fcompass%2FPolicies");
}

function Script14()
{
  sendStatement("In Correctly answered", "http://adlnet.gov/expapi/verbs/initialized", "Q1 False","https://www.info.com");
}

function Script15()
{
  sendStatement("In Correctly answered", "http://adlnet.gov/expapi/verbs/initialized", "Q1","https://www.info.com");
}

function Script16()
{
  sendStatement("Correctly answered", "http://adlnet.gov/expapi/verbs/initialized", "Q1","https://www.info.com");
}

function Script17()
{
  sendStatement("Completed", "http://adlnet.gov/expapi/verbs/initialized", "Code of Conduct","https://www.infoV201.com");
}

