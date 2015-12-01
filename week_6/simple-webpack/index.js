import cool from 'cool-ascii-faces';
import foo from './foo';
import css from './style.scss';

document.querySelector('h1').addEventListener('click', function(){
	this.innerHTML = `<span>l: ${cool()}</span><br>${cool()}`;
});

console.log( css );
