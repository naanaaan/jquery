$('#myId') //<div id='myId'></div>

('.myClass') // <div class='myClass'></div>

$('input[name="surname"]') //<input name="surname"/>
$('#content ul.people li')
/*
<div id='content'>
    <ul class='people'>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external></a>--
<a class='external></a>
*/

$('li:odd')
/*
<li></li>
<li></li>--
<li></li>
*/

$('div:visible')

$('a[rel$="thinger"]')
/*
<a rel="do-nothinger"></a>
<a rel="so-thinger"></a>
*/

$('div.foo').has('p')
/*
<div class='foo>
    <p></p>
</div>
*/

$('ul li').filter('.current')
/*
<ul>
    <li class="current"></li> --
    <li></li>
</ul>
*/

$('ul li').not('.current')
/*
<ul>
    <li class="current"></li> 
    <li></li> --
</ul>
*/

$('ul li').eq(1)
/*
<ul>
    <li></li>
    <li></li> --
</ul>
*/

$('from:button')
/*
<form>
    <button></button>--
    <input type="button"/>--
</form>
*/

$('form:radio') // <input type="radio"/>
$('from :checkbox')

$('form :checked')
/*
<form>
    <input type="checkbox"/>
    <input type="radio"/>
    <select><option></option></select>
</form>
*/

$('form: selected') //<select><option></option></select>

$('form :enabled')
$('form :disabled')
//<form><button disabled></button></form>

$('form :input')
/*
<form>
    <input/>
    <textarea></textarea>
    <select></select>
    <button type="submit"></button>
</form>
*/

$('form :text') // <input type='text/>

$('form :password') // <input type='passwory'/>

$('form input[name="gender"]:radio')
/*
>
*/


