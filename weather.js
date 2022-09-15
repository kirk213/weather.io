function getWeatherReport(city) {
    // WeatherAPIのURL
    const url = "https://api.openweathermap.org/data/2.5/weather";
    // APIキー
    const appId = "8fdd3416b75fb74cd7d6d692d523c821";
    // 天気アイコン表示用URL
    const imgUrl = "https://openweathermap.org/img/wn/";

    $.ajax({
        url: url,
        data: {
            appid: appId,
            q: city,
            lang: "ja"
        }
    })
    .done(function(response) {
        // 都市名の表示
        $("#city").text(response.name);
        // 天気アイコンの表示
        $("#weatherIcon").attr("src", imgUrl + response.weather[0].icon + "@2x.png");
        // 天気情報詳細の表示
        $("#description").text(response.weather[0].description);
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
        alert("エラー");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
    })
}

getWeatherReport($("#cities").val());

$("#search").click(function() {
    getWeatherReport($("#cities").val());
});

console.log(!null);