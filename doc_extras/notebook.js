function addScript( src,callback) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.onload=callback;
  document.body.appendChild( s );
}

window.addEventListener('load', function() {
	addScript( "https://embed.runkit.com", function () {
		var codeBlock = document.querySelector("code.javascript");
		var source = codeBlock.innerText;
		var runBlock = document.createElement( "div");
		codeBlock.parentNode.insertAdjacentElement( 'afterend', runBlock );
		var notebook = RunKit.createNotebook({
			// the parent element for the new notebook
			element: runBlock,
			source:  source
		});
		codeBlock.parentNode.remove();
	} );
}, false);
