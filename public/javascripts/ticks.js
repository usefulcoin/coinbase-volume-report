document.addEventListener('DOMContentLoaded', function (event) {
  async function getticks(event) {
  
    // define consts.
    const selectedrestapiserver = document.getElementById('rest-api-server').value;
    const productid = 'BTC-USD';
    // defined key static (const) variables.
  
    function filter (array, filters) { // filter an array of objects.
      let itemstoinclude = Object.keys(filters);
      return array.filter((item) => itemstoinclude.every((key) => (filters[key].indexOf(item[key]) !== -1)));
    } // filtered array.
  
  
  
  
    async function unsignedrestapirequest ( method, requestpath, body ) { // make rest api request.
     
      // define coinbase required headers.
      let headers = {
        'ACCEPT': 'application/json',
        'CONTENT-TYPE': 'application/json'
      };
      // defined coinbase required headers. yes... content-type is required.
      // see https://docs.prime.coinbase.com/#requests for more information.
    
      // define request options for http request.
      let requestoptions = { 'method': method, headers };
      if ( body !== undefined ) { requestoptions['body'] = body; }
      // defined request options for http request.
    
      // define url and send request.
      let url = selectedrestapiserver + requestpath;
      let response = await fetch(url,requestoptions);
      let json = await response.json();
      // defined url and sent request.
    
      return json;
    
    } // made rest api request.
  
    let ticker = await unsignedrestapirequest ( 'GET', '/products/' + productid + '/ticker' );
    document.getElementById('productid').textContent = productid;
    document.getElementById('productvolume').textContent = Number(ticker.volume) * Number(ticker.ask);
    document.getElementById('productaskprice').textContent = ticker.ask;
  
  };
  
  getticks();
  document.querySelector('input[type="submit"].primary').addEventListener('click', getticks);
});
