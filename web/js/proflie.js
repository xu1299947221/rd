var tab_bars =document.querySelectorAll('.tab_bar_row')
var sections = document.querySelectorAll('.section')
// tab切换栏
for(var i =0;i<tab_bars.length;i++){
    tab_bars[i].setAttribute('index',i)
    
    tab_bars[i].addEventListener('click',function(){
        var a = this.getAttribute('index')
        for(var k = 0;k<tab_bars.length;k++){
            tab_bars[k].classList.remove("bder")
        }
        for(var j = 0; j< sections.length;j++){
            sections[j].style.display = 'none'
        }
        sections[a].style.display = 'block'
        
        this.classList.add("bder")
    })
}
