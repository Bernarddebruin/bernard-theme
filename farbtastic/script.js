$(document).ready(function() {
  $('#demo').hide();
  var f = $.farbtastic('#picker');
  var p = $('#picker').css('opacity', 0.25);
  var selected;
  $('.colorwell')
    .each(function () { f.linkTo(this); $(this).css('opacity', 0.75); })
    .focus(function() {
      if (selected) {
        $(selected).css('opacity', 0.75).removeClass('colorwell-selected');
      }
      f.linkTo(this);
      p.css('opacity', 1);
      $(selected = this).css('opacity', 1).addClass('colorwell-selected');
    });
});

function myFunction(){
  var vCol            = document.getElementById("chooseCol").value
  var color           = $.xcolor.tetrad(vCol);;
  var colorDarkStep1  = [] ;
  var colorDarkStep2  = [] ;
  var colorLightStep2 = [] ;
  var colorLightStep1 = [] ;
  var primColEx       = document.getElementById('primCol1');
  var dark1Ex         = document.getElementById('colorDarkStep1_1');
  var dark2Ex         = document.getElementById('colorDarkStep2_1');
  var light1Ex        = document.getElementById('colorLightStep1_1');
  var light2Ex        = document.getElementById('colorLightStep2_1');
  color.push($.xcolor.splitcomplement(vCol)[2]);

  if (primColEx===null) {
    for (var i = 1; i-1 < color.length; i++) {
      primCol= String("primCol" + i);
      document.getElementById("primaryColors").innerHTML += "<div class='pallet' id="+primCol+"></div>";
      document.getElementById(primCol).style.backgroundColor = color[i-1];
    }
  }else{
    for (var i = 1; i-1 < color.length; i++) {
      primCol= String("primCol" + i);
      document.getElementById(primCol).style.backgroundColor = color[i-1];
    }
  }

  if (dark1Ex===null) {
    for (var i = 1; i-1 < color.length; i++) {
      colorDarkStep1.push($.xcolor.darken(color[i-1],1,18));
      darkCol= String("colorDarkStep1_" + i);
      document.getElementById("darkerStep1").innerHTML += "<div class='pallet' id="+darkCol+"></div>";
      document.getElementById(darkCol).style.backgroundColor = colorDarkStep1[i-1];
    }
  }else {
    for (var i = 1; i-1 < color.length; i++) {
      colorDarkStep1.push($.xcolor.darken(color[i-1],1,18));
      darkCol= String("colorDarkStep1_" + i);
      document.getElementById(darkCol).style.backgroundColor = colorDarkStep1[i-1];
    }
  }


  if (dark2Ex===null) {
    for (var i = 1; i-1 < color.length; i++) {
      colorDarkStep2.push($.xcolor.darken(color[i-1],2,18));
      darkCol= String("colorDarkStep2_" + i);
      document.getElementById("darkerStep2").innerHTML += "<div class='pallet' id="+darkCol+"></div>";
      document.getElementById(darkCol).style.backgroundColor = colorDarkStep2[i-1];
    }
  }else{
    for (var i = 1; i-1 < color.length; i++) {
      colorDarkStep2.push($.xcolor.darken(color[i-1],2,18));
      darkCol= String("colorDarkStep2_" + i);
      document.getElementById(darkCol).style.backgroundColor = colorDarkStep2[i-1];
    }
  }

  if (light1Ex===null) {
    for (var i = 1; i-1 < color.length; i++) {
      colorLightStep1.push($.xcolor.lighten(color[i-1],1,18));
      lightCol= String("colorLightStep1_" + i);
      document.getElementById("lighterStep1").innerHTML += "<div class='pallet' id="+lightCol+"></div>";
      document.getElementById(lightCol).style.backgroundColor = colorLightStep1[i-1];
    }
  }else{
    for (var i = 1; i-1 < color.length; i++) {
      colorLightStep1.push($.xcolor.lighten(color[i-1],1,18));
      lightCol= String("colorLightStep1_" + i);
      document.getElementById(lightCol).style.backgroundColor = colorLightStep1[i-1];
    }
  }

  if (light2Ex===null) {
    for (var i = 1; i-1 < color.length; i++) {
      colorLightStep2.push($.xcolor.lighten(color[i-1],2,18));
      lightCol= String("colorLightStep2_" + i);
      document.getElementById("lighterStep2").innerHTML += "<div class='pallet' id="+lightCol+"></div>";
      document.getElementById(lightCol).style.backgroundColor = colorLightStep2[i-1];
    }
  }else {
    for (var i = 1; i-1 < color.length; i++) {
      colorLightStep2.push($.xcolor.lighten(color[i-1],2,18));
      lightCol= String("colorLightStep2_" + i);
      document.getElementById(lightCol).style.backgroundColor = colorLightStep2[i-1];
    }
  }
}
