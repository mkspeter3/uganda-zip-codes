let interstitial;
let banner;

document.addEventListener('deviceready', async () =>{
    await admob.start();


    banner = new admob.BannerAd({adUnitId: 'ca-app-pub-3831380926719097/6411284588',})
    // banner = new admob.BannerAd({adUnitId: 'ca-app-pub-3940256099942544/6300978111',})

    interstitial = new admob.InterstitialAd({adUnitId: 'ca-app-pub-3831380926719097/4985672210',})
    // interstitial = new admob.InterstitialAd({adUnitId: 'ca-app-pub-3940256099942544/1033173712',})

    await interstitial.load();
    await banner.show();

}, false);


document.addEventListener('admob.interstitial.dismiss', async () => {
    await interstitial.load();
});


document.addEventListener('admob.interstitial.loadfail', async () => {
    await interstitial.load();
});


document.addEventListener('admob.interstitial.showfail', async () => {
    await interstitial.load();
});


function done_verify() {
    return interstitial.show();
}



//
//
//
//
//
//
//
//
//
//
//
// var admobid = {}
// if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
//     admobid = {
//         banner: 'ca-app-pub-3831380926719097/6411284588',
//         interstitial: 'ca-app-pub-3831380926719097/4985672210',
//     }
// } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
//     admobid = {
//         banner: 'ca-app-pub-3831380926719097/6411284588',
//         interstitial: 'ca-app-pub-3831380926719097/4985672210',
//     }
// }
//
// document.addEventListener('deviceready', function() {
//     admob.banner.config({
//         id: admobid.banner,
//         autoShow: true,
//     })
//     admob.banner.prepare()
//
//     admob.interstitial.config({
//         id: admobid.interstitial,
//         autoShow: false,
//     })
//     admob.interstitial.prepare()
//
// }, false)
//
// document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
//     console.log(event)
//     admob.banner.prepare()
// })
//
// document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
//     console.log(event)
//     admob.interstitial.prepare()
// })
//
// document.addEventListener('admob.interstitial.events.LOAD', function(event) {
//     console.log(event)
//
// })
//
// document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
//     console.log(event)
//     admob.interstitial.prepare()
// })
//
// function done_verify() {
//     admob.interstitial.show()
// }