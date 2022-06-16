
$("#tsparticles")
      .particles()
      .init(
            {
                  fpsLimit: 300,
                  interactivity: {
                        modes: {
                              bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                              },
                              push: {
                                    quantity: 4,
                              },
                              repulse: {
                                    distance: 200,
                                    duration: 0.4,
                              },
                        },
                  },
                  particles: {
                        color: {
                              value: "#ffffff",
                        },
                        collisions: {
                              enable: true,
                        },
                        move: {
                              direction: "none",
                              enable: true,
                              outMode: "bounce",
                              random: false,
                              speed: 3,
                              straight: false,
                        },
                        number: {
                              density: {
                                    enable: true,
                                    value_area: 800,
                              },
                              value: 80,
                        },
                        opacity: {
                              value: 0.05,
                        },
                        shape: {
                              type: "circle",
                        },
                        size: {
                              random: true,
                              value: 6,
                        },
                  },
                  detectRetina: true,
            },
            function (container) {
                  // container is the particles container where you can play/pause or stop/start.
                  // the container is already started, you don't need to start it manually.
            }
      );
(function () {

      const link = document.querySelectorAll('.hover');
      const cursorHtml = document.createElement("span");
      cursorHtml.classList = "cursor";
      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
                  { offsetWidth: width, offsetHeight: height } = this,

                  move = 25,
                  xMove = x / width * (move * 2) - move,
                  yMove = y / height * (move * 2) - move;

            // span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            // if (e.type === 'mouseleave') span.style.transform = '';
      };

      const appendSpan = function (e) {
            this.append(cursorHtml)
      }
      const removeSpan = function (e) {
            this.removeChild(cursorHtml)
      }

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursorHtml.style.left = x + 'px';
            cursorHtml.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mouseenter', appendSpan));
      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit, removeSpan));
      window.addEventListener('mousemove', editCursor);

})();

$(".work_filters button").click(function (e) {
      $(".work_slider .item").removeClass("show")
      if (e.target.value === 'all') {
            $(".work_slider .item").addClass("show")
      } else {
            $(".work_slider .item").each(function (_val, key) {
                  if (key.dataset.type === e.target.value) {
                        $(this).addClass("show")
                  }
            })
      }
})

$(function () {
      $(document).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                  $("body").addClass("fixed");
            } else {
                  $("body").removeClass("fixed");
            }
      });
});

