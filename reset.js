javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".axSpan, .openSpan, .closeSpan, .inputSpan, .altSpan");
		$('#success').remove();
		$("*").each(function() {
				$(this).css('outline','');
	    	});
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()