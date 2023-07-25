function send_statement(verb, verbId, object, objectId, uNamejs, uEmailjs) {
  //var player = GetPlayer();
  //var uNamejs = player.GetVar("uName");
  //var uEmailjs = player.GetVar("uEmail");

  //var uNamejs = "Alan";
  //var uEmailjs = "alan@test.com";

  var conf = {
    "endpoint": "https://watershedlrs.com/api/organizations/23083/lrs/",
    "auth": "Basic " + toBase64("172cbed96f1132:eed1052969e29b")
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
