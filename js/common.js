$(function(){
     $(".account").click(function(){
          $(this).toggleClass("active");
          $(".account-dropdown").slideToggle();
     });
     $(".account").blur(function(){
           $(this).removeClass("active");
          $(".account-dropdown").slideUp();
     })

     $("aside a.drop").click(function(e){
          e.preventDefault();

          if($(this).next().is(":visible")){
               $(".cat-dropdown").fadeOut();
          }
          else{
               $(".cat-dropdown").fadeOut(0);
               $(this).next().fadeIn()
          }
     });
     $("aside a").blur(function(){
           $(".cat-dropdown").fadeOut();
     });



     if($('.slides').length){
          $(".slides").slick({
          autoplay:true,
          arrows:false,
          dots:true
     });

     }

     if($('.ticker').length){
          $(".ticker").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows:true
     });
     }



function saleTimer(date1, date2) {
  // Get total difference in milliseconds and take the absolute value
  let difference_ms = Math.abs(date2.getTime() - date1.getTime());

  // Convert milliseconds to seconds
  let delta = difference_ms / 1000;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(delta / 86400); // Number of seconds in a day (24 * 60 * 60)
  delta -= days * 86400; // Subtract the days in seconds

  const hours = Math.floor(delta / 3600) % 24; // Number of seconds in an hour (60 * 60)
  delta -= hours * 3600; // Subtract the hours in seconds

  const minutes = Math.floor(delta / 60) % 60; // Number of seconds in a minute
  delta -= minutes * 60; // Subtract the minutes in seconds

  const seconds = Math.floor(delta % 60); // Remaining seconds

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function saleTime(){
     const startDate = new Date();
     const endDate = new Date(1766639337832+(1000*60*60*24*4));
     const difference = saleTimer(startDate, endDate);

      
     if(difference.days<10){$(".days span").html('0'+difference.days)}else{$(".days span").html(difference.days);}
     if(difference.hours<10){$(".hours span").html('0'+difference.hours)}else{$(".hours span").html(difference.hours);}
     if(difference.minutes<10){$(".mins span").html('0'+difference.minutes)}else{$(".mins span").html(difference.minutes);}
     if(difference.seconds<10){$(".secs span").html('0'+difference.seconds)}else{$(".secs span").html(difference.seconds);}

}

// --- Example Usage ---
saleTime();
setInterval(saleTime,1000);




});