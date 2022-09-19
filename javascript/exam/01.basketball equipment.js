function a(n){
    let priceshoes=n-n*.4;
    let pricesuit=priceshoes-priceshoes*.2;
    let priceball=.25*pricesuit;
    let priceaccessories=.2*priceball;
    console.log((n+priceshoes+pricesuit+priceball+ priceaccessories).toFixed(2))
}