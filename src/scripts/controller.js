var app = angular.module('TXTXApp', []);

app.controller('Base64Controller', function ($scope) {
  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

  // initiate vars and default model values
  var baseString; // default properties
  var blendString; // blend properties for base64 encoding
  var markString; // mark properties for base64 encoding
  var encodedString;

  // default values
  $scope.imgUrl = 'https://assets.imgix.net/unsplash/nightsky.jpg';
  $scope.imgW = 600;
  $scope.imgH = 400;
  $scope.imgDensity = 1;

  $scope.headline_txt64 = 'Far far away';
  $scope.headline_txtclr = '#ffffff';
  $scope.headline_txtfont = 'Futura-Medium';
  $scope.headline_txtsize = 40;
  $scope.headline_txtw = $scope.imgW;
  $scope.headline_txtpad = 20;
  $scope.headline_x = 10;
  $scope.headline_y = 170;

  $scope.body_txt64 = 'behind the word mountains, far from the countries Vokalia and Consonantia, there live the blindtexts. Separated they live in Bookmarksgrove right at the coast of the Semantics.';
  $scope.body_txtclr = '#ffffff';
  $scope.body_txtfont = 'Futura-Medium';
  $scope.body_txtsize = 17;
  $scope.body_txtpad = 20;
  $scope.body_x = 10;
  $scope.body_y = 230;

  $scope.encoded = function() {
    baseString = $scope.imgUrl + '?'
               + 'w=' + $scope.imgW + '&'
               + 'crop=focalpoint';

    blendString = 'https://assets.imgix.net/~text?txt64=' + encodeURIComponent(Base64.encode($scope.headline_txt64)).replace('%3D', '') + '&'
                  + 'txtclr=' + $scope.headline_txtclr.replace('#', '') + '&'
                  + 'txtfont=' + $scope.headline_txtfont + '&'
                  + 'txtsize=' + $scope.headline_txtsize + '&'
                  + 'w=' + $scope.imgW + '&'
                  + 'txtpad=' + $scope.headline_txtpad + '&';

    markString = 'https://assets.imgix.net/~text?txt64=' + encodeURIComponent(Base64.encode($scope.body_txt64)).replace('%3D', '') + '&'
                  + 'txtclr=' + $scope.body_txtclr.replace('#', '') + '&'
                  + 'txtfont=' + $scope.body_txtfont + '&'
                  + 'txtsize=' + $scope.body_txtsize + '&'
                  + 'w=' + $scope.imgW + '&'
                  + 'txtpad=' + $scope.body_txtpad + '&';

    encodedString = baseString + '&'
                     + 'blend64='
                     + encodeURIComponent(Base64.encode(blendString)).replace('%3D', '') + '&'
                     + 'bx=' + $scope.headline_x + '&by=' + $scope.headline_y + '&bm=normal&'
                     + 'mark64='
                     + encodeURIComponent(Base64.encode(markString)).replace('%3D', '') + '&'
                     + 'markx=' + $scope.body_x + '&marky=' + $scope.body_y;

    // show decoded string
    decodedString = baseString + '&'
                    + 'blend64='
                    + $scope.headline_txt64 + '&'
                    + 'txtclr=' + $scope.headline_txtclr.replace('#', '') + '&'
                    + 'txtfont=' + $scope.headline_txtfont + '&'
                    + 'txtsize=' + $scope.headline_txtsize + '&'
                    + 'w=' + $scope.headline_txtw + '&'
                    + 'txtpad=' + $scope.headline_txtpad + '&'
                    + 'bx=0&by=180&bm=normal' + '&'
                    + 'mark64='
                    + $scope.body_txt64 + '&'
                    + 'txtclr=' + $scope.body_txtclr.replace('#', '') + '&'
                    + 'txtfont=' + $scope.body_txtfont + '&'
                    + 'txtsize=' + $scope.body_txtsize + '&'
                    + 'w=' + $scope.body_txtw + '&'
                    + 'txtpad=' + $scope.body_txtpad + '&'
                    + 'markx=0&marky=210';

    return encodedString;
  }

  $scope.decoded = function() {
    return decodedString;
  }
});
