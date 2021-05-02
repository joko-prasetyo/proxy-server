const fetch = require("./fetch");

let options = {
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)",
    Accept: "*/*",
    "Content-Type": "application/json",
  }
};

(async () => {
    let timeout = 30000;
    let merchant_url = "https://www.blibli.com/backend/search/merchant/BLI-60048?page=1&start=0&pickupPointCode=&cnc=&multiCategory=true&excludeProductList=true"
    let product_url = "https://www.blibli.com/backend/product-detail/products/ps--AAT-70000-02836/_summary?defaultItemSku="
    let merchant_fav = "https://www.blibli.com/backend/official/merchant-favorites/BLI-60048"
    let proxy = `https://scrapper-proxy-${Math.floor(Math.random() * 15)}.herokuapp.com`;
    console.log(new Date());
    let [response1, response2, response3] = await Promise.all([
        fetch(proxy, { ...options, method: "POST", body: JSON.stringify({ url:merchant_url  }) }, timeout), 
        fetch(proxy, { ...options, method: "POST", body: JSON.stringify({ url:product_url  }) }, timeout), 
        fetch(proxy, { ...options, method: "POST", body: JSON.stringify({ url:merchant_fav  }) }, timeout)
    ]);

    let [res1, res2, res3] = await Promise.all([response1.json(), response2.json(), response3.json()]);
    console.log(new Date());
})();
