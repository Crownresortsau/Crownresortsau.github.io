function send_statement(verb, verbId, object, objectId, uNamejs, uEmailjs) {
  //var player = GetPlayer();
  //var uNamejs = player.GetVar("uName");
  //var uEmailjs = player.GetVar("uEmail");

  //var uNamejs = "Alan";
  //var uEmailjs = "alan@test.com";

  var conf = {
    "endpoint": "https://watershedlrs.com/api/organizations/9211/lrs/",
    "auth": "Basic " + toBase64("f5b532bf537a23:89f9c02af043a2")
  };

  ADL.XAPIWrapper.changeConfig(conf); 
  var statement = {
    "actor": {
      "name": uNamejs,
      "mbox": "mailto:" + uEmailjs 
    },
    "verb": {
      "id": verbId,
      "display": { "en-US": verb }
    },
    "object": {
      "id": objectId,
      "definition": {
        "name": { "en-US": object }
      }
    }	
  };
  var result = ADL.XAPIWrapper.sendStatement(statement);
}