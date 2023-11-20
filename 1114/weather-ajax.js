$(document).ready(function () {
    var arr = [];
    var today = new Date();
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var hours_al = new Array('02', '05', '08', '11', '14', '17', '20', '23');
    var korea = [
        {'region':'서울','nx': 60, 'ny':127 },
        {'region':'인천','nx': 55, 'ny':124 },
        {'region':'경기','nx': 60, 'ny':121 },
        {'region':'강원','nx': 92, 'ny':131 },
        {'region':'천안','nx': 69, 'ny':106 },
        {'region':'청주','nx': 68, 'ny':100 },
        {'region':'전주','nx': 63, 'ny':89 },
        {'region':'광주','nx': 50, 'ny':67 },
        {'region':'부산','nx': 90, 'ny':77 },
        {'region':'대구','nx': 91, 'ny':106 },
        {'region':'제주','nx': 52, 'ny':38 }];
        
    for (var i = 0; i < hours_al.length; i++) {
        var h = hours_al[i] - hours;
        if (h == -1 || h == 0 || h == -2) {
            var now = hours_al[i];
        }
        if (hours == 0) {
            var now = hours_al[7];
        }
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    today = year + "" + month + "" + day;
    
    /* 좌표 */
    $.each(korea, function (j, k) {
        var _nx = korea[j].nx, _ny = korea[j].ny, region = korea[j].region,
            apikey = "aC1366Q9TsnFTopNEtA3XtcOSXWA%2BUfm0WRJaQMAZfZ3k0dm5olOMGNSSheNNLdX2CbuPHd%2FINCykSoMqld8DA%3D%3D",
            ForecastGribURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
            
        ForecastGribURL += "?ServiceKey=" + apikey;
        ForecastGribURL += "&base_date=" + today;
        ForecastGribURL += "&base_time=" + now + "00";
        ForecastGribURL += "&nx=" + _nx + "&ny=" + _ny;
        arr.push({'url': ForecastGribURL, 'region': region});

        $.ajax({
           url:arr[j].url,
                type : 'GET',
                success : function(data){
                    var $data = $(data).find("response>body>items>item");
                    var cate = '';
                    var temp = '';
                    var sky = '';
                    var rain = '';

                    $.each($data, function(i,o){
                        cate = $(o).find("category").text(); // 카테고리 목록

                        if(cate == 'TMP'){
                            temp = $(this).find("fcstValue").text(); //3시간 온
                        }
                        if(cate == 'SKY'){
                            sky = $(this).find("fcstValue").text(); //3시간 온
                        }
                        if(cate == 'PTY'){
                            rain = $(this).find("fcstValue").text(); //3시간 온
                        }
                    });

                    $('.weather').append('<li class="list-group-item weather_li'+j+'"></li>');
                    $('.weather_li'+j).addClass('in'+j);
                    $('.in'+j).html(temp+"℃");
                    $('.in'+j).prepend(arr[j].region + '&emsp;');

                    if(rain != 0){
                        switch(rain){
                            case '1':
                                $('.in' + j).append("/ 비");
                                $('.in' + j).prepend('<i class="fas fa-cloud-showers-heavy"></i>&emsp;')
                                break;
                            case '2':
                                $('.in' + j).append("/ 비 /눈");
                                $('.in' + j).prepend('<i class="fas fa-cloud-rain"></i>&emsp;')
                                break;
                            case '3':
                                $('.in' + j).append("/ 눈");
                                $('.in' + j).prepend('<i class="fas fa-cloud-sunflake"></i>&emsp;')
                                break;
                        }
                    }else{
                    switch(sky){
                        case '1':
                            $('.in' + j).append(" / 맑음");
                            $('.in' + j).prepend('<i class="fas fa-sun"></i>&emsp;')
                            break;
                        case '2':
                            $('.in' + j).append(" / 구름조금");
                            $('.in' + j).prepend('<i class="fas fa-cloud-sun"></i>&emsp;')
                            break;
                        case '3':
                        $('.in' + j).append(" / 구름많음");
                        $('.in' + j).prepend('<i class="fas fa-cloud-sunflake"></i>&emsp;')
                            break;
                        case '4':
                            $('.in' + j).append(" / 흐림");
                            $('.in' + j).prepend('<i class="fas fa-smog"></i>&emsp;')
                            break;
                        }
                    }
                }
        });
    });
});
