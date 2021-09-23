export default class MobileHandler {

    mobileCheck() {
        var hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                hasTouchScreen = true; // deprecated, but good fallback
            } else {
                // Only as a last resort, fall back to user agent sniffing
                var UA = navigator.userAgent;
                hasTouchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                );
            }
        }
        return hasTouchScreen;
    }
    mobileFocus() {
        const mobileInput = document.getElementById('mobileInput');
        mobileInput.blur();
        mobileInput.focus();
        console.log('found input');
    }
    onMobileRefocus(callback) {
        const wordcontainer = document.getElementById('typing-area');
        wordcontainer.addEventListener('click', callback);
    }
    mobileScroll(ogh, nh) {
        var premh = nh - ogh;
        var mh = premh / 2;
        // const active = document.querySelector('div.word.active.incomplete');
        window.scrollTo(0, mh);
    }    
}