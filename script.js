$(function() {
    var redditPosts = [



        $.get("https://www.reddit.com/r/aww/.json").done(function(responseBody) {
            console.log(responseBody.data.children[0].data.title);

            responseBody.data.children.forEach(function(redditPost) {

                var img = post.data.preview.images.source

                 $("body").append("<h3>")



            });

        });

    ];









});
