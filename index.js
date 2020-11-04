const dns = require('dns-sync');
const fs = require("fs");
const regex = RegExp('aws');
var urls =  fs.readFileSync('PUTFILEHERE').toString().split('\n').map(e => e.trim());



function main(){
    for(var index in urls){
        const ns = dns.resolve(urls[index],'NS');
        if(ns != null)
        {
            if(!regex.test(ns[0]))
            {
                console.log(`${urls[index]} - ${ns[0]}`)
            }
        }else{
            console.log(`${urls[index]} - could not resolve`);
        }
    }
}

main()