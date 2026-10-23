(function(){
var d=document;
function ready(f){if(d.readyState!=='loading')f();else d.addEventListener('DOMContentLoaded',f);}
ready(function(){
 var t=d.getElementById('mob-toggle'),dr=d.getElementById('mob-drawer'),o=d.getElementById('mob-overlay'),c=d.getElementById('drawer-close');
 function openM(){dr.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');d.documentElement.style.overflow='hidden';}
 function closeM(){dr.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');d.documentElement.style.overflow='';}
 if(t&&dr&&o){
  t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?closeM():openM();});
  if(c)c.addEventListener('click',closeM);
  o.addEventListener('click',closeM);
  dr.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeM);});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
  window.addEventListener('resize',function(){if(window.innerWidth>768)closeM();});
 }
 d.querySelectorAll('.faq-item').forEach(function(it){
  var b=it.querySelector('.faq-q');
  if(!b)return;
  b.addEventListener('click',function(){
   var open=it.classList.toggle('open');
   b.setAttribute('aria-expanded',open?'true':'false');
  });
 });
 d.querySelectorAll('[data-tabs]').forEach(function(box){
  var btns=box.querySelectorAll('.tabbtn'),panels=box.querySelectorAll('.tabpanel');
  function show(i){
   btns.forEach(function(b,j){b.setAttribute('aria-selected',j===i?'true':'false');b.setAttribute('tabindex',j===i?'0':'-1');});
   panels.forEach(function(p,j){if(j===i)p.removeAttribute('hidden');else p.setAttribute('hidden','');});
  }
  btns.forEach(function(b,i){
   b.addEventListener('click',function(){show(i);});
   b.addEventListener('keydown',function(e){
    var n=i;
    if(e.key==='ArrowRight')n=(i+1)%btns.length;else if(e.key==='ArrowLeft')n=(i-1+btns.length)%btns.length;else return;
    e.preventDefault();show(n);btns[n].focus();
   });
  });
  show(0);
 });
 var fc=d.querySelector('.float-call'),ft=d.querySelector('footer.site-footer');
 if(fc&&ft&&'IntersectionObserver' in window){
  new IntersectionObserver(function(es){es.forEach(function(e){fc.classList.toggle('hide',e.isIntersecting);});},{threshold:0}).observe(ft);
 }
});
})();
