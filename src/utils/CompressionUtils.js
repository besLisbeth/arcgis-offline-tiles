/*jslint bitwise: false */
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// This lib is part of the lz-string project.
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/index.html
//
// Base64 compression / decompression for already compressed content (gif, png, jpg, mp3, ...)
// version 1.4.1

const Base64String = {

    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', // jshint ignore:line

    decompress(input) {
        let output = [];
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 1;
        let odd = input.charCodeAt(0) >> 8;

        while (i < input.length * 2 && (i < input.length * 2 - 1 || odd === 0)) {

            if (i % 2 === 0) {
                chr1 = input.charCodeAt(i / 2) >> 8;
                chr2 = input.charCodeAt(i / 2) & 255;
                if (i / 2 + 1 < input.length) {
                    chr3 = input.charCodeAt(i / 2 + 1) >> 8;
                } else {
                    chr3 = NaN;
                }
            } else {
                chr1 = input.charCodeAt((i - 1) / 2) & 255;
                if ((i + 1) / 2 < input.length) {
                    chr2 = input.charCodeAt((i + 1) / 2) >> 8;
                    chr3 = input.charCodeAt((i + 1) / 2) & 255;
                } else {
                    chr2 = chr3 = NaN;
                }
            }
            i += 3;

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2) || (i === input.length * 2 + 1 && odd)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3) || (i === input.length * 2 && odd)) {
                enc4 = 64;
            }

            output.push(Base64String._keyStr.charAt(enc1));
            output.push(Base64String._keyStr.charAt(enc2));
            output.push(Base64String._keyStr.charAt(enc3));
            output.push(Base64String._keyStr.charAt(enc4));
        }

        return output.join('');
    },

    compress(input) {
        let output = [],
            ol = 1,
            output_,
            chr1, chr2, chr3,
            enc1, enc2, enc3, enc4,
            i = 0, flush = false;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ''); // jshint ignore:line

        while (i < input.length) {

            enc1 = Base64String._keyStr.indexOf(input.charAt(i++));
            enc2 = Base64String._keyStr.indexOf(input.charAt(i++));
            enc3 = Base64String._keyStr.indexOf(input.charAt(i++));
            enc4 = Base64String._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            if (ol % 2 === 0) {
                output_ = chr1 << 8;
                flush = true;

                if (enc3 !== 64) {
                    output.push(String.fromCharCode(output_ | chr2));
                    flush = false;
                }
                if (enc4 !== 64) {
                    output_ = chr3 << 8;
                    flush = true;
                }
            } else {
                output.push(String.fromCharCode(output_ | chr1));
                flush = false;

                if (enc3 !== 64) {
                    output_ = chr2 << 8;
                    flush = true;
                }
                if (enc4 !== 64) {
                    output.push(String.fromCharCode(output_ | chr3));
                    flush = false;
                }
            }
            ol += 3;
        }

        if (flush) {
            output.push(String.fromCharCode(output_));
            output = output.join('');
            output = String.fromCharCode(output.charCodeAt(0) | 256) + output.substring(1);
        } else {
            output = output.join('');
        }

        return output;
    },

    stringToWord(s) {
        //	summary:
        //		convert a string to a word array

        //	word-based conversion method, for efficiency sake;
        //	most digests operate on words, and this should be faster
        //	than the encoding version (which works on bytes).
        let chrsz = 8;	//	16 for Unicode
        let mask = (1 << chrsz) - 1;

        let wa = [];
        for (let i = 0, l = s.length * chrsz; i < l; i += chrsz) {
            wa[i >> 5] |= (s.charCodeAt(i / chrsz) & mask) << (i % 32);
        }
        return wa;	//	word[]
    },

    wordToBase64(wa) {
        //	summary:
        //		convert an array of words to base64 encoding, should be more efficient
        //		than using dojox.encoding.base64
        let p = '=', tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = [];
        for (let i = 0, l = wa.length * 4; i < l; i += 3) {
            let t = (((wa[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((wa[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((wa[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
            for (let j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > wa.length * 32) {
                    s.push(p);
                } else {
                    s.push(tab.charAt((t >> 6 * (3 - j)) & 0x3F));
                }
            }
        }
        return s.join('');	//	string
    }

};

export { Base64String };