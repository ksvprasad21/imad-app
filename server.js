var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one':{
        title:'Article',
        content:`
            <div>
      <a href="/">Home</a>
    </div>
    <hr>
    <h3>Article</h3>
    <div>
      sep 2018
    </div>
    <hr>
    <p>
    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablets, desktops/laptops, or other devices. Text messages may be sent over a cellular network, or may also be sent via an Internet
    </p>
    <p>
    Words, sentences, paragraphs. A book, for example, consists of text. Text processing refers to the ability to manipulate words, lines, and pages.
    </p>
    <p>
    Unlike the .html() method, .text() can be used in both XML and HTML documents. The result of the .text() method is a string containing the combined text of all matched elements. (Due to variations in the HTML parsers in different browsers, the text returned may vary in newlines and other white space.) Consider the following ..
    </p>
        `
    },
    'article-two':{
        title:'Article-2',
        content:`
            <div>
      <a href="/">Home</a>
    </div>
    <hr>
    <h3>Article</h3>
    <div>
      Aug 2018
    </div>
    <hr>
    <p>
    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablets, desktops/laptops, or other devices. Text messages may be sent over a cellular network, or may also be sent via an Internet
    </p>
    <p>
    Words, sentences, paragraphs. A book, for example, consists of text. Text processing refers to the ability to manipulate words, lines, and pages.
    </p>
    <p>
    Unlike the .html() method, .text() can be used in both XML and HTML documents. The result of the .text() method is a string containing the combined text of all matched elements. (Due to variations in the HTML parsers in different browsers, the text returned may vary in newlines and other white space.) Consider the following ..
    </p>
        `
    },
    'article-three':{
        title:'Article-3',
        content:`
            <div>
      <a href="/">Home</a>
    </div>
    <hr>
    <h3>Article</h3>
    <div>
      sep 2018
    </div>
    <hr>
    <p>
    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablets, desktops/laptops, or other devices. Text messages may be sent over a cellular network, or may also be sent via an Internet
    </p>
    <p>
    Words, sentences, paragraphs. A book, for example, consists of text. Text processing refers to the ability to manipulate words, lines, and pages.
    </p>
    <p>
    Unlike the .html() method, .text() can be used in both XML and HTML documents. The result of the .text() method is a string containing the combined text of all matched elements. (Due to variations in the HTML parsers in different browsers, the text returned may vary in newlines and other white space.) Consider the following ..
    </p>
        `
    }
};

function createTemplate(data){
 
 var title = data.title;
 var content = data.content;
 var html_template=`
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet"   href="/ui/style.css">
  </head>
  <body class="container">
      ${content};
  </body>
</html>`;

return html_template;

}

function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000,64,'sha512');
    return hashed.toString();
}

app.get('/hash/:input',function(req, res){
    var encrypt = hash(req.params.input,'this-is-a-salt');
    res.send(encrypt);
});







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function (req, res){
    counter =counter + 1;
    res.send(counter.toString());
});
app.get('/:articlename',function(req,res){
    var name=req.params.articlename;
    res.send(createTemplate(articles[name]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article.html', function (req,res) {
    res.sendFile(path.join(__dirname,'ui','article.html'));
});

app.get('/ui/main.js',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names=[];
app.get('/submit-name/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
