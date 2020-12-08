(function () {
    var tag = document.createElement('script');
    tag.src = "https://www.googletagmanager.com/gtag/js?id=UA-29985375-7";
    tag.async = 'async';
  
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-29985375-7');
  }());