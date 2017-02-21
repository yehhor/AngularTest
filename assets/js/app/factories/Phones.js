app
    .factory('PhonesStore', function () {
        var phones = [
            {
                "id": 0,
                "name": "ATC Iphone 5S 16GB (Space Gray)",
                "stock": 9,
                "imgUrl": "assets/images/iphone-6GREY.png",
                "price": 1024.99,
                "currency": "$",
                "shipping": 12.99,
                "properties": [
                    "4-inch Retina display",
                    "A7 chip with M7 motion coprocessor",
                    "Tou ID fingerprint sensor",
                    "New 8MP iSight camera with True Tone flash and 1080p HD video recording"
                ],
                "category": "'desktop'"
            },
            {
                "id": 1,
                "name": "BTC Iphone 5S 16GB (Space Gray)",
                "stock": 9,
                "imgUrl": "assets/images/iphone-6GREY.png",
                "price": 1024.99,
                "currency": "$",
                "shipping": 12.99,
                "properties": [
                    "4-inch Retina display",
                    "A7 chip with M7 motion coprocessor",
                    "Tou ID fingerprint sensor",
                    "New 8MP iSight camera with True Tone flash and 1080p HD video recording"
                ],
                "category": "library"
            },
            {
                "id": 2,
                "name": "Notebook YOGA PRO",
                "stock": 9,
                "imgUrl": "assets/images/yoga.jpg",
                "price": 1024.99,
                "currency": "$",
                "shipping": 12.99,
                "properties": [
                    "4-inch Retina display",
                    "A7 chip with M7 motion coprocessor",
                    "Tou ID fingerprint sensor",
                    "New 8MP iSight camera with True Tone flash and 1080p HD video recording"
                ],
                "category": "library"
            },
            {
                "id": 3,
                "name": "CTC Iphone 5S 16GB (Space Gray)",
                "stock": 9,
                "imgUrl": "assets/images/iphone-6GREY.png",
                "price": 1024.99,
                "currency": "$",
                "shipping": 12.99,
                "properties": [
                    "4-inch Retina display",
                    "A7 chip with M7 motion coprocessor",
                    "Tou ID fingerprint sensor",
                    "New 8MP iSight camera with True Tone flash and 1080p HD video recording"
                ],
                "category": "category2"
            },
            {
                "id": 4,
                "name": "HTC Iphone 5S 16GB (Space Gray)",
                "stock": 9,
                "imgUrl": "assets/images/iphone-6GREY.png",
                "price": 1024.99,
                "currency": "$",
                "shipping": 12.99,
                "properties": [
                    "4-inch Retina display",
                    "A7 chip with M7 motion coprocessor",
                    "Tou ID fingerprint sensor",
                    "New 8MP iSight camera with True Tone flash and 1080p HD video recording"
                ],
                "category": "category6"
            }
        ]

        function removePhone(phone){
            var index = phones.indexOf(phone);
            phones.splice(index, 1);
        }

        return {
            phones: phones,
            removePhone: removePhone
        }
    });