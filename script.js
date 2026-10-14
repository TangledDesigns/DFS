/* ---------- Enquiry form (opens the visitor's email app) ---------- */
function sendMessage(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const phone=document.getElementById('phone').value;
  const message=document.getElementById('message').value;
  const subject=encodeURIComponent('Daily Funeral Services Enquiry - '+name);
  const body=encodeURIComponent('Name: '+name+'\r\nPhone: '+phone+'\r\n\r\n'+message);
  window.location.href='mailto:Dailyfuneralservice@dfs.co.za?subject='+subject+'&body='+body;
}

/* ---------- Mobile menu ---------- */
(function(){
  const btn=document.getElementById('menuBtn');
  const menu=document.getElementById('mobileMenu');
  if(!btn||!menu) return;

  function setOpen(open){
    menu.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    btn.textContent=open?'\u2715':'\u2630';
  }

  btn.addEventListener('click',function(e){
    e.stopPropagation();
    setOpen(!menu.classList.contains('open'));
  });

  // Close after choosing a link
  menu.addEventListener('click',function(e){
    if(e.target.closest('a')) setOpen(false);
  });

  // Close when tapping outside the menu
  document.addEventListener('click',function(e){
    if(!menu.contains(e.target)&&e.target!==btn) setOpen(false);
  });

  // Close with the Escape key
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') setOpen(false);
  });

  // Reset if the window is widened to desktop size
  window.addEventListener('resize',function(){
    if(window.innerWidth>900) setOpen(false);
  });
})();
