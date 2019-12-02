import axios from "axios";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const demoData = [
    {
        "id": "XRBRYD_9XzearlQWBOB-EQ",
        "alias": "red-iguana-salt-lake-city",
        "name": "Red Iguana",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/daUe23wpPS3JF95-aUYfNg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/red-iguana-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 3584,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7719136,
            "longitude": -111.9124903
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "736 W N Temple",
            "address2": null,
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84116",
            "country": "US",
            "state": "UT",
            "display_address": [
                "736 W N Temple",
                "Salt Lake City, UT 84116"
            ]
        },
        "phone": "+18013221489",
        "display_phone": "(801) 322-1489",
        "distance": 1080.0832317101606
    },
    {
        "id": "b8VJtijPFIrpF3XOPZ7Xww",
        "alias": "the-copper-onion-salt-lake-city-3",
        "name": "The Copper Onion",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-eTRQeScmo87v5rPNBaVww/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-copper-onion-salt-lake-city-3?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 2406,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.7632532402984,
            "longitude": -111.887315621426
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "111 E Broadway",
            "address2": "Ste 170",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84111",
            "country": "US",
            "state": "UT",
            "display_address": [
                "111 E Broadway",
                "Ste 170",
                "Salt Lake City, UT 84111"
            ]
        },
        "phone": "+18013553282",
        "display_phone": "(801) 355-3282",
        "distance": 3399.8744928013602
    },
    {
        "id": "lHmW-0drUqt6C-Hb6J5G_A",
        "alias": "takashi-salt-lake-city",
        "name": "Takashi",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VwGBbq-g5HjNBV2lvyg5Sg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/takashi-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1427,
        "categories": [
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7618167251348,
            "longitude": -111.891778931022
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$$",
        "location": {
            "address1": "18 W Market St",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84139",
            "country": "US",
            "state": "UT",
            "display_address": [
                "18 W Market St",
                "Salt Lake City, UT 84139"
            ]
        },
        "phone": "+18015199595",
        "display_phone": "(801) 519-9595",
        "distance": 3145.8151728921785
    },
    {
        "id": "vpFWpF_850qRnSBjjkEnlA",
        "alias": "the-park-café-salt-lake-city-2",
        "name": "The Park Café",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/YJPxf3IK3J9OLnEcTBPgyw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-park-caf%C3%A9-salt-lake-city-2?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1321,
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74149,
            "longitude": -111.87369
        },
        "transactions": [
            "delivery"
        ],
        "price": "$",
        "location": {
            "address1": "604 E 1300 S",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84105",
            "country": "US",
            "state": "UT",
            "display_address": [
                "604 E 1300 S",
                "Salt Lake City, UT 84105"
            ]
        },
        "phone": "+18014871670",
        "display_phone": "(801) 487-1670",
        "distance": 5772.997935507551
    },
    {
        "id": "QmjRn1wINcPWni0Ko40xUA",
        "alias": "sweet-lake-biscuits-and-limeade-salt-lake-city",
        "name": "Sweet Lake Biscuits & Limeade",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/0XJ2cWq5HkMuCs9RCfMrsQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sweet-lake-biscuits-and-limeade-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1323,
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7335015,
            "longitude": -111.8928334
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "54 W 1700 S",
            "address2": null,
            "address3": null,
            "city": "Salt Lake City",
            "zip_code": "84115",
            "country": "US",
            "state": "UT",
            "display_address": [
                "54 W 1700 S",
                "Salt Lake City, UT 84115"
            ]
        },
        "phone": "+18019531978",
        "display_phone": "(801) 953-1978",
        "distance": 5495.634863051957
    },
    {
        "id": "EfIV2OPEPKk4y1e89Rbeeg",
        "alias": "rubysnap-salt-lake-city-3",
        "name": "RubySnap",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/XYX8IIQNGM9K0f-K34KoXg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/rubysnap-salt-lake-city-3?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 446,
        "categories": [
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 5.0,
        "coordinates": {
            "latitude": 40.75241,
            "longitude": -111.899972
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "770 S 300th W",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "770 S 300th W",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18018346111",
        "display_phone": "(801) 834-6111",
        "distance": 3384.4866897433067
    },
    {
        "id": "xsZJ_zPtqQm3nJHunwO_Wg",
        "alias": "r-and-r-bbq-salt-lake-city",
        "name": "R&R BBQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/tzlD_yoa1-wYNr4-E8W2Zg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/r-and-r-bbq-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1245,
        "categories": [
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "smokehouse",
                "title": "Smokehouse"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.7555792620958,
            "longitude": -111.900448958336
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "307 W 600th S",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "307 W 600th S",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18013640443",
        "display_phone": "(801) 364-0443",
        "distance": 3078.5144307541855
    },
    {
        "id": "aQhim6-uwM1FNdswm13Dkg",
        "alias": "pretty-bird-salt-lake-city",
        "name": "Pretty Bird",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/r4ZwGb2OpGuvjXlbWwOVcQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pretty-bird-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 908,
        "categories": [
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "chickenshop",
                "title": "Chicken Shop"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.766006,
            "longitude": -111.889811
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "146 Regent St",
            "address2": "",
            "address3": null,
            "city": "Salt Lake City",
            "zip_code": "84111",
            "country": "US",
            "state": "UT",
            "display_address": [
                "146 Regent St",
                "Salt Lake City, UT 84111"
            ]
        },
        "phone": "+18019999999",
        "display_phone": "(801) 999-9999",
        "distance": 3077.985998810672
    },
    {
        "id": "jzLEZvfN3DIjCMDBX3xd9Q",
        "alias": "bombay-house-salt-lake-city",
        "name": "Bombay House",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/AUxTrXO5aX4lbrCDCMqJUw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bombay-house-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 890,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7186067,
            "longitude": -111.813548
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "2731 E Parleys Way",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84109",
            "country": "US",
            "state": "UT",
            "display_address": [
                "2731 E Parleys Way",
                "Salt Lake City, UT 84109"
            ]
        },
        "phone": "+18015810222",
        "display_phone": "(801) 581-0222",
        "distance": 11434.401841178038
    },
    {
        "id": "f2TkM9bmBuSSo6N76E1Zog",
        "alias": "lucky-13-salt-lake-city",
        "name": "Lucky 13",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Ua_d_GYcG_2qSXIlHHT6Qg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/lucky-13-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1588,
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.741437,
            "longitude": -111.895197
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "135 W 1300th S",
            "address2": null,
            "address3": null,
            "city": "Salt Lake City",
            "zip_code": "84115",
            "country": "US",
            "state": "UT",
            "display_address": [
                "135 W 1300th S",
                "Salt Lake City, UT 84115"
            ]
        },
        "phone": "+18014874418",
        "display_phone": "(801) 487-4418",
        "distance": 4627.942650544472
    },
    {
        "id": "0pQ83oRo4zD08WXdZl832Q",
        "alias": "red-iguana-2-salt-lake-city",
        "name": "Red Iguana 2",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/_c-W6_-pUptRElOivLUn8A/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/red-iguana-2-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 869,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.769748,
            "longitude": -111.91604
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "866 W S Temple",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84116",
            "country": "US",
            "state": "UT",
            "display_address": [
                "866 W S Temple",
                "Salt Lake City, UT 84116"
            ]
        },
        "phone": "+18012146050",
        "display_phone": "(801) 214-6050",
        "distance": 1029.1119004215602
    },
    {
        "id": "U2Pt8UhToUqjy0BdPslUZA",
        "alias": "chile-tepin-salt-lake-city",
        "name": "Chile-Tepin",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Dfp5B0HLC4_bhR7n5CyPPQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/chile-tepin-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 749,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.76476,
            "longitude": -111.90008
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "307 W 200th S",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "307 W 200th S",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18018839255",
        "display_phone": "(801) 883-9255",
        "distance": 2390.6745897789124
    },
    {
        "id": "crrC5BuvlQrSSaslXJ2NSw",
        "alias": "pig-and-a-jelly-jar-salt-lake-city",
        "name": "Pig & a Jelly Jar",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/HHgiDIDXG4hAVckQSYcQRA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pig-and-a-jelly-jar-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1735,
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "comfortfood",
                "title": "Comfort Food"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.750232,
            "longitude": -111.879221
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "401 E 900 S",
            "address2": "Ste A",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84111",
            "country": "US",
            "state": "UT",
            "display_address": [
                "401 E 900 S",
                "Ste A",
                "Salt Lake City, UT 84111"
            ]
        },
        "phone": "+13852027366",
        "display_phone": "(385) 202-7366",
        "distance": 4769.483037103203
    },
    {
        "id": "kGmmnZHZjI5hj58QPT9VNQ",
        "alias": "bruges-waffles-and-frites-salt-lake-city",
        "name": "Bruges Waffles & Frites",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/cgL4EHNCD2ksVz9HducDAA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bruges-waffles-and-frites-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 759,
        "categories": [
            {
                "alias": "belgian",
                "title": "Belgian"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "waffles",
                "title": "Waffles"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7632872,
            "longitude": -111.9009296
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "336 W 300th S",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "336 W 300th S",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18013634444",
        "display_phone": "(801) 363-4444",
        "distance": 2435.043397731474
    },
    {
        "id": "HUNR2AUSPRQK__Jx9XA_dw",
        "alias": "fillings-and-emulsions-salt-lake-city",
        "name": "Fillings & Emulsions",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iRhWCNF6Tg4IJ1t6LJ4z_Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/fillings-and-emulsions-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 318,
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "macarons",
                "title": "Macarons"
            }
        ],
        "rating": 5.0,
        "coordinates": {
            "latitude": 40.73753,
            "longitude": -111.8908
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "1475 S Main St",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84115",
            "country": "US",
            "state": "UT",
            "display_address": [
                "1475 S Main St",
                "Salt Lake City, UT 84115"
            ]
        },
        "phone": "+13852294228",
        "display_phone": "(385) 229-4228",
        "distance": 5205.504331232182
    },
    {
        "id": "6-znbff1B5LxRpAaCgRf3Q",
        "alias": "penny-anns-cafe-salt-lake-city",
        "name": "Penny Ann's Cafe",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/saaHi0RINXlxGQeTvfqebw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/penny-anns-cafe-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1063,
        "categories": [
            {
                "alias": "cafes",
                "title": "Cafes"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.730936,
            "longitude": -111.891403
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "1810 S Main St",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84115",
            "country": "US",
            "state": "UT",
            "display_address": [
                "1810 S Main St",
                "Salt Lake City, UT 84115"
            ]
        },
        "phone": "+18019354760",
        "display_phone": "(801) 935-4760",
        "distance": 5804.275017526279
    },
    {
        "id": "wkvsBjv6S-hcAHgXb7XstA",
        "alias": "valters-osteria-salt-lake-city",
        "name": "Valter's Osteria",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sA65X5cIBlnX7Ip9egNJjg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/valters-osteria-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 599,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.762516,
            "longitude": -111.896202
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "173 W Broadway",
            "address2": null,
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "173 W Broadway",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18015214563",
        "display_phone": "(801) 521-4563",
        "distance": 2801.1597163553015
    },
    {
        "id": "pfyNG7R2Dcc0iSf5R1RaCg",
        "alias": "whiskey-street-salt-lake-city",
        "name": "Whiskey Street",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/E2uJObIUWVbNv985YaAZbQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/whiskey-street-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 1038,
        "categories": [
            {
                "alias": "lounges",
                "title": "Lounges"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 40.7621595157823,
            "longitude": -111.890698559486
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "323 S Main St",
            "address2": "",
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84111",
            "country": "US",
            "state": "UT",
            "display_address": [
                "323 S Main St",
                "Salt Lake City, UT 84111"
            ]
        },
        "phone": "+18014331371",
        "display_phone": "(801) 433-1371",
        "distance": 3211.0516374001795
    },
    {
        "id": "98i7iJ00xIm0qDytcrQGMA",
        "alias": "zest-kitchen-and-bar-salt-lake-city",
        "name": "Zest Kitchen & Bar",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/PVvZhdJwGYSJCY9KvYEc1w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/zest-kitchen-and-bar-salt-lake-city?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 756,
        "categories": [
            {
                "alias": "gluten_free",
                "title": "Gluten-Free"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7632679,
            "longitude": -111.8964458
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "275 S 200th W",
            "address2": null,
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84101",
            "country": "US",
            "state": "UT",
            "display_address": [
                "275 S 200th W",
                "Salt Lake City, UT 84101"
            ]
        },
        "phone": "+18014330589",
        "display_phone": "(801) 433-0589",
        "distance": 2737.897179996189
    },
    {
        "id": "QhsQdIN-aLyJ9L9BhG7qrA",
        "alias": "even-stevens-sandwiches-salt-lake-city-5",
        "name": "Even Stevens Sandwiches",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/yo2GQSa94SRpPArryWUryw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/even-stevens-sandwiches-salt-lake-city-5?adjust_creative=pGKeMMIXWVnhUv6UqTE--A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pGKeMMIXWVnhUv6UqTE--A",
        "review_count": 637,
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "salad",
                "title": "Salad"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7645972,
            "longitude": -111.8790997
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "414 E 200th S",
            "address2": null,
            "address3": "",
            "city": "Salt Lake City",
            "zip_code": "84111",
            "country": "US",
            "state": "UT",
            "display_address": [
                "414 E 200th S",
                "Salt Lake City, UT 84111"
            ]
        },
        "phone": "+13853559105",
        "display_phone": "(385) 355-9105",
        "distance": 3972.2422954371164
    }
]
const state = {
  businesses: demoData
};

const getters = {
  allBusinesses: state => state.businesses
};

const actions = {
  getBusinesses({ commit }, {queryBus, queryLoc}) {
    axios.defaults.headers.common["Authorization"] =
    // for distance meters to miles divide the length value by 1609.344 
      process.env.VUE_APP_YELP_KEY;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${queryBus}&location=${queryLoc}`
      )
      .then(res => {
        commit("setBusinesses", res.data.businesses); 
      })
      .catch(err => {
        console.log(err.response);
      });
  }
};

const mutations = {
  setBusinesses(state, businesses) {
    state.businesses = businesses;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
