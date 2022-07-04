var btc = document.getElementById("bitcoin");
var settings = {
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20ethereum%2C%20dogecoin&vs_currencies=inr",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML= response.bitcoin.inr;
})