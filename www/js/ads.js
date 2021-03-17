var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
    admobid = {
        banner: 'ca-app-pub-3831380926719097/6411284588',
        interstitial: 'ca-app-pub-3831380926719097/4985672210',
    }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
    admobid = {
        banner: 'ca-app-pub-3831380926719097/6411284588',
        interstitial: 'ca-app-pub-3831380926719097/4985672210',
    }
}

document.addEventListener('deviceready', function() {
    admob.banner.config({
        id: admobid.banner,
        autoShow: true,
    })
    admob.banner.prepare()

    admob.interstitial.config({
        id: admobid.interstitial,
        autoShow: false,
    })
    admob.interstitial.prepare()

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
    console.log(event)
    admob.banner.prepare()
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
    console.log(event)
    admob.interstitial.prepare()
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
    console.log(event)

})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
    console.log(event)
    admob.interstitial.prepare()
})

function done_verify() {
    admob.interstitial.show()
}