$(function(){
  $('.benefits-slider-container').slick({
    dots:false,
   // speed:600,
    autoplay:false,
    autoplaySpeed:800,
    draggable:true,//чтобы переключать слайд только стрелками
    touchMove:false,// чтобы в моб версии нельзя пальцем двигать туда-сюда слайды
    centerMode:true,
    variableWidth:true,//для адаптивности лучше 
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>'
    });

    const createPh = (greeting) => {
      return (name) => `${greeting} ${name}`
      };
      
      const sayHi = createPh('ss');
      console.log(sayHi('sasha'))
      console.log(func(str))
      
    
})
//$(function(){
  //$('.tours-inner').slick({
    //arrows:false,
    //dots:true,
   // speed:600,
    //autoplay:false,
    //autoplaySpeed:3000,
   // draggable:true,//чтобы переключать слайд только стрелками
   // touchMove:false,// чтобы в моб версии нельзя пальцем двигать туда-сюда слайды
   // centerMode:true,
    //variableWidth:true,//для адаптивности лучше 
   // nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
   // prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>'
   //})
//})