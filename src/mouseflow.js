
window._mfq = window._mfq || [];
(function() {
  if(import.meta.env.VITE_URL_MOUSEFLOW === 'dev'){

    return
  }else{
   
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/a9571a7d-53ca-4ede-9020-23621b2bef11.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  }
})();