const countryFlag=['hk','cn','kr','id','in','il','jp','kz','ph','sa','sg','tw','th','ca','mx','us','br','be','dk','fi','fr','de','it','nl','pl','ru','es','se','ch','gb','at','nz'];
const country=['Hong Kong','China','Korea','Indonesia','India','Israel','Japan','Kazakhstan','Philippines','Saudi arabia','Singapore','Taiwan','Thailand','Canada','Mexico','United States','Brazil','Belgium','Denmark','Finland','France','Germany','Italy','Netherlands','Poland','Russian Federation','Spain','Sweden','Switzerland','United Kingdom','Austria','New Zealand'];
setInterval(function() { /* setInterval 시작 */

    var boxIn = $('#boxIn .boxIn'); /* boxIn 변수에 .boxIn ul 요소 저장 */    
    var boxRow = $('#boxIn .boxIn .card:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */
    
    var ARea = function(){ /* ARea 변수에 함수 저장 */
        boxRow.appendTo(boxIn).show(300); /* boxRow 요소를 boxIn 요소 마지막에 추가합니다. show 메서드를 적용합니다. */
    };
    
    $(boxRow).hide(300, function(){
    	//https://cdn.jsdelivr.net/gh/braverokmc79/shorturl@v1.0.0/static/images/flags/gb.svg
    	const cnt=countryFlag.length;    	
		const num=Math.floor(Math.random()*cnt);
		
    	$(boxRow).find("img").attr("src","https://cdn.jsdelivr.net/gh/braverokmc79/shorturl@v1.0.0/static/images/flags/"+countryFlag[num]+".svg");
    	$(boxRow).find(".time").text(Math.floor(Math.random()*10)+1);
    	$(boxRow).find(".country").text(country[num]);    	
    	ARea();/* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행 */  
    });       
},3800);