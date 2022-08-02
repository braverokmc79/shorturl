window.addEventListener('DOMContentLoaded', function(){
	
     if(document.getElementById('boxIn')){
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

	 }


	  const backToTop = document.getElementById('topBtn');
	  const checkScroll=()=>{
	      // 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 변환) pageOffset
	      let pageOffset = window.pageYOffset;

	      // 이 값이 0이 아니면, 클래스를 show를 선언하고, 그렇지 않다면 show를 삭제한다. 디폴트 css는 hidden상태
	      // 0이면 스크롤이 안된상태 이고, 0이 아니면 스크롤이 일어난상태 
	      if(pageYOffset !== 0){
	          // id= backtotop  class="show"를 추가한다.
	          backToTop.classList.add('show');  
	      }else{
	          backToTop.classList.remove('show'); 
	      }
	  }

	  const moveBackToTop=()=>{
	      if(window.pageYOffset > 0 ){
	          //스무스하게 스크롤 하기 //어디까지 올라갈지 위치를 정한다. behavior 자연스럽게 이동.
	          //window.scrollTo({top:0, behavior:"smooth"});
	          $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
	      }
	  }

	  // 스크롤할때마다, checkScroll을 호출해라.
	  window.addEventListener('scroll', checkScroll);
	  // 클릭하면 oveBackToTop를 호출해라
	  backToTop.addEventListener('click',moveBackToTop);
});