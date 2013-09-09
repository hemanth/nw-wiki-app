global.$ = $;
$(document).ready(function(){
    var wikipedia = require("wikipedia-js");
    $('#submit').click(function(){
        var query = $('#search').val();
        var options = {
            query: query,
            format: "html",
            summaryOnly: true
        };
        wikipedia.searchArticle(options, function (err, htmlWikiText){
            if (err){
                console.log("An error occurred[query=%s, error=%s]", query, err);
                return;
            }else{
                $('div#wiki').html(htmlWikiText);
            }
        });
    });
});
