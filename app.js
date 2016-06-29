var restify = require('restify');
var builder = require('botbuilder');


var bot = new builder.BotConnectorBot({appId: 'dvdfirstbot',appSecret: '40fed20b34004681878870232a7114bf'});
bot.add('/',function (session) {
    session.send('Hello World');
});

var server = restify.createServer();
server.post('/api/messages',bot.verifyBotFramework(),bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.util);
});
