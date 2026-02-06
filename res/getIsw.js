let text = ''
$('a[href*=ISW]').each(function() {
	const innerText = $(this).text().trim();
	text += innerText + '\n';
});
