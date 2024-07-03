const titles = ["RemedyC2 on top", "skid me >_<", "hit my site!", "running yo shit", "10 gigs?", "scars.wtf", "skidiot", "RemedyC2", "updates soon"];

    function changeTitle() {
        let index = 0;
        return function() {
            document.title = titles[index];
            index = (index + 1) % titles.length;
        };
    }

    setInterval(changeTitle(), 150);

document.addEventListener('DOMContentLoaded', function(){
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = function(){
        particlesJS("snow", {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 900
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "opacity": {
              "value": 1,
              "random": false,
              "anim": {
                "enable": false
              }
            },
            "size": {
              "value": 2.3,
              "random": true,
              "anim": {
                "enable": false
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "bottom",
              "random": true,
              "straight": true,
              "out_mode": "out",
              "bounce": true,
              "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 2000
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": false
                },
                "onclick": {
                  "enable": false
                },
                "resize": false
              }
            },
            "retina_detect": true
          }
        });
      }
      document.head.append(script);
    });

document.getElementById("button").addEventListener("click", function () {
            var button = this;
            button.style.animation = "fadeout 1s forwards";

            var bgAudio = document.getElementById("video-background"); 
            document.getElementById("blur-box1").style.display = "block";
            bgAudio.play();
        });

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
  };

