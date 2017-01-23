$(document).ready(function () {
    var contentBody = $('#content');
    $.getJSON('static/res/content.json', function (json) {
        for (var i = 0; i < json.length; i++) {
            contentBody.append('<p>' + json[i] + '</p>');
        }
    });
});