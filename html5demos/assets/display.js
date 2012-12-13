/* For loop with setting html as elements of the array and adding the array with join at the end */
function fillIn() {
	var out = [], o = -1;
	out[++o] = '<ul>';
	for (var i = 0; i < 10000; i++) {
		out[++o] = '<li class="elem">';
		out[++o] = i;
		out[++o] = '</li>';
	}
	out[++o] = '</ul>';
	$('#main').html( out.join('') );
}
fillIn();
$().ready(function(){
	$('#show-all').click(function(){
		console.time('show-all')
		$('.elem').removeClass('display visibility');
		document.body.scrollHeight // Blocks until reflow is finished.
		console.timeEnd('show-all')
		return false;
	});
	$('#display-first-10').click(function(){
		console.time('display-first-10')
		$('.elem:gt(10)').addClass('display');
		document.body.scrollHeight
		console.timeEnd('display-first-10')
		return false;
	});
	$('#visibility-first-10').click(function(){
		console.time('visibility-first-10')
		$('.elem:gt(10)').addClass('visibility');
		document.body.scrollHeight
		console.timeEnd('visibility-first-10')
		return false;
	});
});