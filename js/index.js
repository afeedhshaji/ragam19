$(document).ready(function() {
  $(".btn-all").click(function() {
    if (window.innerWidth > 800) {
      $("html, body").animate(
        {
          scrollTop: $(".header").offset().top
        },
        700
      );

    } else {
      $("html, body").animate(
        {
          scrollTop: $("#scrollTo").offset().top
        },
        700
      );
    }
  });
});


$.getJSON("./json_data.json", function(json) {
  var y = json["bt1"];
  console.log(y);
  var inject = "";
  for (var card in y) {
    inject =
      inject +
      '<li><div style="background:#547369 url('+ y[card].photo +') no-repeat center;background-size: cover;height: 80px; width: 80px; border-radius: 40px;"></div><div class="details">' +
      '<span class="title4">' +
      y[card].name +
      '</span><a class="phone" href="tel:123-456-789">' +
      y[card].phone +
      '</a><a class="email" href="mailto:emilia.jacobs@email.com">' +
      y[card].email +
      "</a></div></li>";
    //console.log(inject);
  }
  // /console.log(inject);
  $(".cards").html(inject);
  //var z = y['contact1'].name;
  //console.log(y);
});

$(".btn").click(function() {
  console.log("OK");

  if (!$(this).hasClass("active")) {
    $(".btn").removeClass("active");
    $(".btn")
      .find(".btn-p1")
      .removeClass("activep1");
    $(".btn")
      .find(".btn-p2")
      .removeClass("activep2");

    $(this).toggleClass("active");
    $(this)
      .find(".btn-p1")
      .toggleClass("activep1");
    $(this)
      .find(".btn-p2")
      .toggleClass("activep2");

    /*Displaying card*/

    // $("div[class^='containerbt']").attr('style','display : none');
    // var x = $(this).attr('id');
    // x = '.container' + x;
    // console.log(x);
    // $(x).attr('style','display : flex');
    var x = $(this).attr("id");
    //var c = x[2]-1;
    console.log(x);
    $.getJSON("json_data.json", function(json) {
      var y = json[x];
      var inject = "";
      for (var card in y) {
        inject =
          inject +
          '<li><div style="background:#547369 url('+ y[card].photo +') no-repeat center;background-size: cover;height: 80px; width: 80px; border-radius: 40px;"></div><div class="details">' +
          '<span class="title4">' +
          y[card].name +
          '</span><a class="phone" href="tel:123-456-789">' +
          y[card].phone +
          '</a><a class="email" href="mailto:emilia.jacobs@email.com">' +
          y[card].email +
          "</a></div></li>";
        //console.log(inject);
      }
      // /console.log(inject);
      $(".cards").html(inject);
      //var z = y['contact1'].name;
      //console.log(y);
    });
  }
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 150) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
