// 1.定义数组
  var datas=[
    {"img":"1","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"2","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"3","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"4","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"5","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"6","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"7","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27},
    {"img":"8","em1":"Awesome Day","span1":"View from above","em2":"JAN","span2":"25th","heart":15,"comment":27}
    ]
  
    var articles=[
    {"digest":"Awesome Day","time":"View from above","last":"8 minutes read","h2":"A Picture Is Worth A Thousand Words",
    "img":"1","bottom":"Fight over the country - 2014","name":"Jonas Duri","p1":"Dad blizzard coffee unsave facepalm face feel like a sir tank mother aww yeah. Anonymous easter puking rainbows bear wodka simpson amnesia read cookie monster final week grey. ","p2":"Mom hammer creepy me gusta morbi eat le friend steve jobs cellphone clinton cereal guy. Good guy high school on okay a bacon homework in joke dog. Not Okay if you know what i mean nap monocle oh stop it, you pizza diablo 3 captain on weekend elephant. I Dont Get It drink ba dumm tss amet basic math female phone gentlemen strangers."},
    {"digest":"Awesome Day","time":"View from above","last":"8 minutes read","h2":"A Picture Is Worth A Thousand Words",
    "img":"1","bottom":"Fight over the country - 2014","name":"Jonas Duri","p1":"Dad blizzard coffee unsave facepalm face feel like a sir tank mother aww yeah. Anonymous easter puking rainbows bear wodka simpson amnesia read cookie monster final week grey. ","p2":"Mom hammer creepy me gusta morbi eat le friend steve jobs cellphone clinton cereal guy. Good guy high school on okay a bacon homework in joke dog. Not Okay if you know what i mean nap monocle oh stop it, you pizza diablo 3 captain on weekend elephant. I Dont Get It drink ba dumm tss amet basic math female phone gentlemen strangers."}
    ]

  
  // 2.通用函数


 function getElementsByClass(className,outid) { 
     var oBox = document.getElementById(outid);//获取ID为outid的元素
     this.d = oBox || document; //检测oBox是否存在，如果不存在则把document赋予内部变量d
     var children = this.d.getElementsByTagName('*') || document.all; //获取页面所有元素
     var elements = new Array(); //定义一个数组，用于存储所得到的元素
     //获取元素的class为className的所有元素
     for (var ii = 0; ii < children.length; ii++) { 
         var child = children[ii]; 
         var classNames = child.className.split(' '); 
         for (var j = 0; j < classNames.length; j++) { 
             if (classNames[j] == className) { 
                 elements.push(child);//如果class存在，则存入elements
                 break; 
             } 
         } 
     } 
     return elements; 
 }

  var g=function(id)
  {
    if(id.substring(0,1)==".")
    {
      return getElementsByClass(id.replace(".",""));
    }
    return document.getElementById(id);
  }

  // 3.赋值
  function addValue()
  {
    var session_wrap=g("session-wrap").innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var article=g("article").innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    
    var out_session=[];
    var out_article=[];

    //遍历所有数据，构建最终输出的html
    for(var i in datas)
    {  
       var _session_html;
       
       if((parseInt(i)+1)%4==0)
      {
          _session_html=session_wrap
          .replace(/{{index}}/g,datas[i].img)
          .replace(/em1/g,datas[i].em1)
          .replace(/span1/g,datas[i].span1)
          .replace(/em2/g,datas[i].em2)
          .replace(/span2/g,datas[i].span2)
          .replace(/heartI/g,datas[i].heart)
          .replace(/commentI/g,datas[i].comment)
          .replace(/{{css}}/g,"images-last");   
      } 

     else
      {
           _session_html=session_wrap
          .replace(/{{index}}/g,datas[i].img)
          .replace(/em1/g,datas[i].em1)
          .replace(/span1/g,datas[i].span1)
          .replace(/em2/g,datas[i].em2)
          .replace(/span2/g,datas[i].span2)
          .replace(/heartI/g,datas[i].heart)
          .replace(/commentI/g,datas[i].comment);

      }
    
       out_session.push(_session_html);
    }

    g("session-wrap").innerHTML='';
    g("session-wrap").innerHTML+=out_session.join('');

  

    //遍历所有数据，构建最终输出的html
    for(var i in articles)
    {  
       var _article_html;

        _article_html=article
          .replace(/{{index}}/g,articles[i].img)
          .replace(/{{digest}}/g,articles[i].digest)
          .replace(/{{time}}/g,articles[i].time)
          .replace(/{{last}}/g,articles[i].last)
          .replace(/{{bottom}}/g,articles[i].bottom)
          .replace(/{{h2}}/g,articles[i].h2)
          .replace(/{{name}}/g,articles[i].name)
          .replace(/{{p1}}/g,articles[i].p1)
          .replace(/{{p2}}/g,articles[i].p2);

       out_article.push(_article_html);
    }

    g("article").innerHTML='';
    g("article").innerHTML+=out_article.join(''); 

     
}

  
 function hasClass(obj, cls) 
 {
      return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
 }

 function addClass(obj, cls) 
 {
      if (!this.hasClass(obj, cls)) 
      { 
        obj.className += " " + cls;

      } 
 }

 function removeClass(obj, cls) 
 {
      if (hasClass(obj, cls)) 
      {
         var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
         obj.className = obj.className.replace(reg, ' ');
      }
}

  //4.定义何时处理幻灯片输出
  window.onload=function(){

    document.body.scrollTop=document.documentElement.scrollTop=0;

    addValue();
    
    var eles = getElementsByClass('opacity');
    removeClass(eles[0],"opacity");
  
    window.onscroll=function(){
   
    addClass(eles[0],"appear");
    var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
    var screenHeight = window.screen.height;

    for(var i=0;i<eles.length;i++)
    {
      
      if(eles[i].offsetTop+eles[i].height+screenHeight<scrollTop-400)
      {
    
        removeClass(eles[i],"appear");
  
      }else if(eles[i].offsetTop>scrollTop+400)
      {
       
        removeClass(eles[i],"appear");
    
      }else
      { 
      
        addClass(eles[i],"appear");
       
     }
   }
  }
}

