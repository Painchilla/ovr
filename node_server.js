var http = require('http');
var url = require('url');
var streamkey='THIS IS NOT A VALID STREAMKEY';

http.createServer(function(req,res) {
    
    console.log('New Request Incoming')
    var requrl= url.parse(req.url,true);

    if(requrl.pathname==='/streamkey'){

        if(req.method==='POST'){

            var params = requrl.query;

            if(params.streamkey !== undefined) {
                console.log('\t' + 'New Streamkey:' + params.streamkey);
                streamkey=params.streamkey;
                res.write(streamkey + '\n');
            } else {
                res.write('\t' +'Please provide a streamkey with a post request.' + "\n");
            }
            
        } else{
            console.log('\t' +"Streamkey was accessed by" + req._connectionKey);
            res.write(streamkey);
        }
    } else {
        res.write(req.method + "\n");
    }
    res.end();
}).listen(8080);
