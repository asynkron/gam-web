$(function() {
	$('#toc').toc({
		'listType': '<ul class="nav nav-list mb-xlg" />',
		'selectors': 'h1,h2,h3', //elements to use as headings
		'container': '#main_content', //element to find all selectors in
		'scrollToOffset': 200,
		'headerText': function(i, heading, $heading) { //custom function building the header-item text
		return $heading.text();
	    },
		'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
		  return "toc toc-" + $heading[0].tagName.toLowerCase();
		},
		'activeClass': "active"
	});

	

	// var main = $("#main_content");

	// $.get( "/pages.html", function( data ) {
	// 	var files = JSON.parse( data ).pages;
	// 	console.info(files);
	// 	var codes = main.find("code").filter(function() {
	// 		return $.inArray($(this).text(), files) != -1;
	// 	});
	// 	codes.replaceWith(function() {
	// 	    var file = $.trim($(this).text());
	// 	    return '<code><a href="/docs/' + file + '" >^' + file + '</a></code>';
	// 	});
	// });
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59199804-1', 'auto');
ga('send', 'pageview');
