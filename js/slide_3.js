var ban3_icon = function(id, _web, _tab, _mobile, spacing){
    var containerWidth = 0;
    var ban3_iconItemWidth = 0;
    var totalCount = 0;
    var spacing = spacing || 10;
    var display = _web;
    var left = 0;
    var interval;
  
    var DOM = {
      container: function(id){
        var dom = document.querySelector('#'+id);
        dom.className = 's-container';
        dom.style.position = 'relative';
        dom.style.overflow = 'hidden';
        return dom;
      },
      ban3_icon: function(container){
        totalCount = container.children.length;
  
        var dom = document.createElement('div');
        dom.className = 'ban3_icon'
        dom.style.position = 'relative';
        dom.style.overflow = 'hidden';
        dom.style.height = '100%';
        dom.style.left = 0;
        dom.style.transition = 'left .5s';
        return dom;
      }
    }
  
    // DOM 만들기
    var container = DOM.container(id);
    var ban3_icon = DOM.ban3_icon(container);
    var temp = container.innerHTML;
    container.innerHTML = '';
    ban3_icon.innerHTML = temp;
    container.appendChild(ban3_icon);
    var items = document.querySelector('#'+ id + ' .ban3_icon').children;
    for(var i=0; i<items.length; i++){
      items[i].style.float = 'left';
      items[i].style.height = '100%';
      items[i].style.width = (ban3_iconItemWidth-spacing)+ 'px';
      items[i].style['margin-right'] = spacing+'px'; // 간격
    }
  
    // 화면 사이즈 수정시 발생하는 이벤트
    function resize(){
      left = 0;
      document.querySelector('#'+ id + ' .ban3_icon').style.left = left + 'px';
  
      var innerWidth = window.innerWidth;
      if(innerWidth >= 1000){
        setDisplayCount(_web);
      }else if(innerWidth < 1670 && innerWidth >= 768) {
        setDisplayCount(_tab);
      }else if (innerWidth < 1670) {
        setDisplayCount(_mobile);
      }
      
      if(display === 1){
        spacing = 0;
        var items = document.querySelector('#'+ id + ' .ban3_icon').children;
        for(var i=0; i<items.length; i++){
          items[i].style.width = ban3_iconItemWidth + 'px';
          items[i].style['margin-right'] = 0 + 'px'; // 간격
        }
      }
    }
  
    // 디스플레이 갯수 설정 함수
    function setDisplayCount(count) {
      display = count;
  
      containerWidth = container.offsetWidth + spacing;
      ban3_iconItemWidth = containerWidth / display;
  
      document.querySelector('#'+ id + ' .ban3_icon').style.width = totalCount * ban3_iconItemWidth + spacing * totalCount + 'px';
      var items = document.querySelector('#'+ id + ' .ban3_icon').children;
      for(var i=0; i<items.length; i++){
        items[i].style.width = (ban3_iconItemWidth-spacing)+ 'px';
      }
    }
  
    // 반응형 디스플레이 갯수 조절
    var isResponsive = _tab != undefined && _mobile != undefined;
    if(isResponsive){
      window.onresize = resize;
    }
    resize();
  
  
    return {
      setDisplayCount: setDisplayCount,
      move: function(index){
        left = (-1) * ban3_iconItemWidth * index;
        document.querySelector('#'+ id + ' .ban3_icon').style.left = left + 'px';
      },
      prev: function(){
        left += ban3_iconItemWidth;
        var limit = 0;
        if(left > limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .ban3_icon').style.left = left + 'px';
      },
      next: function(){
        left -= ban3_iconItemWidth;
        var limit = (-1) * ban3_iconItemWidth * (totalCount - display);
        if(left < limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .ban3_icon').style.left = left + 'px';
      },
      auto: function(){
        clearInterval(interval);
        interval = setInterval(function(){
          left -= ban3_iconItemWidth;
          var limit = (-1) * ban3_iconItemWidth * (totalCount - display);
          if(left < limit){
            left = 0;
          }
          document.querySelector('#'+ id + ' .ban3_icon').style.left = left + 'px';
        }, 2000)
      },
      stop: function(){
        clearInterval(interval);
      }
    }
  }
  
  var ban3_icon = new ban3_icon('ban3_icon', 4, 3, 1, 20);
  ban3_icon.auto();