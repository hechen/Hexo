$(function(){var e=!1;$("a.social-icon.search").on("click",function(){var t;$("body").css("width","100%"),$("body").css("overflow","hidden"),$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$("#local-search-input input").focus()}}),$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300}),e||(t=GLOBAL_CONFIG.localSearch.path,$.ajax({url:"/"+t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=$("#local-search-input input")[0],i=$("#local-hits")[0];a.addEventListener("input",function(){var s='<div class="search-result-list">',r=this.value.trim().toLowerCase().split(/[\s]+/);if(i.innerHTML="",this.value.trim().length<=0)$(".local-search-stats__hr").hide();else{var l=0;e.forEach(function(t){var a=!0,i=t.title.trim().toLowerCase(),o=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),e=t.url,n=-1,c=-1;""!==i&&""!==o&&r.forEach(function(t,e){n=i.indexOf(t),c=o.indexOf(t),n<0&&c<0?a=!1:c<0&&(c=0)}),a&&(s+='<div class="local-search__hit-item"><a href="'+e+'" class="search-result-title" target="_blank">'+i+"</a></div>",l+=1,$(".local-search-stats__hr").show())}),0===l&&(s+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),i.innerHTML=s}})}}),e=!0),document.addEventListener("keydown",function t(e){"Escape"==e.code&&(a(),document.removeEventListener("keydown",t))})});var a=function(){$("body").css("overflow","auto"),$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300}),$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})};$(".search-mask, .search-close-button").on("click",a)});