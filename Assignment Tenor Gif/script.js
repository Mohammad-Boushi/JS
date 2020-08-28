var div = $('#test')
var input_search = $('#input');
var btn = $('#button')
var input_number = $('#number')

btn.click(function(){
    div.empty()
    var input_search_word = input_search.val()
    var input_search_number = input_number.val()
    if(input_search_word !== '' && input_search_number !== ''){
        make_api_call(input_search_word,input_search_number)
    } else {
        console.error('write something to search')
        $('#test').append('<h4>Write somthing to search</h4>');
    }
})

//top_10_gifs[0]["media"][0]["nanogif"]["url"];

function get_pics(top_10_gifs){
    console.log(top_10_gifs)
    for (let i in top_10_gifs) {
        var img = $('<img class="images">');
        img.attr('src',top_10_gifs[i]["media"][0]["nanogif"]["url"]);
        $('#test').append(img);
    }  
}

function make_api_call(word,number){
    var xml = new XMLHttpRequest();
    xml.open('GET','https://api.tenor.com/v1/search?q='+word+'&key=AOXABTGQACZV&limit='+number,true)
    xml.send();
    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status == 200) {
            var response_objects = JSON.parse(this.response);
            top_10_gifs = response_objects["results"];
            if(top_10_gifs.length >= 1){
                get_pics(top_10_gifs)
            }else {
                console.error('ooops')
                $('#test').append('<h4>ooops</h4>');
            }
        }
    }
}

