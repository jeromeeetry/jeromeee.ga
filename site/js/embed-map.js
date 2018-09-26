
    jQuery(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(13.733953, 121.113622);
            var mapOptions = {
                center: myLocation,
                zoom: 13
            };
            var marker = new google.maps.Marker({
                position: myLocation,
                title: "My Location"
            });
            var map = new google.maps.Map(document.getElementById("map1"),
                mapOptions);
            marker.setMap(map);
        }
        init_map1();
    });
