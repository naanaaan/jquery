$('#myId') // <div id='myId></div>
//jquery function은 null리턴안함
// 과제: class myClass DOM을 찾아라.
$('.myClass') // <div class='myClass></div>

// 과제: name attribute value 가  surname 인 input DOM들을 찾아라
$('input[name="surname"]')// <input name='surname'/>
$('#content ul.people li')
/*
<div id='content'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> --요것만담김
<a class='external'></a>
*/

$('li:odd')
/*
<ul>
    <li></li>
    <li></li>--
    <li></li>
    <li></li>--
</ul>
*/
//display 기본값 visible이라 이값에 맞는 것들 모르는거
$('div:visible')

//thiger포함된것들
$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p')
/*
<div class='foo> --자식객체 p를 갖고이쓴 걸 출력
    <p></p> 
</div>
<div class='foo></div>
*/

$('ul li').filter('.current')
/*
<ul>
    <li class='current'></li> --
    <li></li>
</ul>
*/

$('ul li').not('.current')
/*
<ul>
    <li class='current'></li> 
    <li></li>-- 아닌것
</ul>
*/

$('ul li').eq(1) //인덱스라보면됨
/*
<ul>
    <li class='current'></li> 0
    <li></li>--  1
</ul>
*/

$('form :button')
/*
<form>
    <button></button> --
    <input type='button/> -- 둘다해당
</form>
*/

$('form :radio') //<input type='radio'/> collection의 사이즈가0보다크면 참 아님 거짓
$('form :checkbox')

$('form :checked')
/* 요3개이다
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected') //<select><option></option></select>

$('form :enabled')
$('form :disabled')
/*
<button disabled></button>
*/

$('form :input')
/*
<input type='text/>
<textarea></textarea>
<select></select>
<button type='submit></button>
*/

$('form :text') // <input type='text'/>

$('from :passoword') // <input type='password'/>>

$('form input[name="gender"]:radio')
/*
<input name='gender' type='radio/>
*/

$('form :reset') // <input type='reset'/>

$('form :summit') // <input type='submit'/>