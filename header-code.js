  /** CSS media queries run on min-width/max-width ${maxMobile}px **/
  const maxMobile = 640;
  let isMobile = window.matchMedia(`(max-width: ${maxMobile}px)`);
  const medImgBtnFlipTextWidth = 250;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.has("category") ? urlParams.get("category") : "";
  const categories =
    "about us|procedures|treatments|face|skin|body|facial fillers";
  const imageButtons = [
    {
      url: "/contact",
      title: "Contact Us",
      subtitle: "Make an Appointment",
      caption: "Contact Us - Make an Appointment",
    },
    {
      url: "/contact",
      title: "Contact Us Today",
      subtitle: "For your Consultation",
      caption: "Book your Consultation Today",
      exclusive: "/coolsculpting",
      occurrence: 1,
    },
    {
      url: "/contact",
      title: "New York",
      subtitle: "75 Central Park West",
      exclusive: "/about-cpw",
      occurrence: 1,
    },
    {
      url: "/contact",
      title: "Chappaqua",
      subtitle: "91 Bedford Road",
      exclusive: "/about-cpw",
      occurrence: 2,
    },
    {
      url: "/contact",
      title: "Chappaqua",
      subtitle: "91 Bedford Road",
      exclusive: "/promotions",
      occurrence: 1,
    },
    {
      url: "/contact",
      title: "New York",
      subtitle: "75 Central Park West",
      exclusive: "/promotions",
      occurrence: 2,
    },
    {
      url: "/procedures",
      title: "Procedures",
      subtitle: "CPW Vein & Aesthetic Center",
    },
    {
      url: "/treatments",
      title: "Treatments",
      subtitle: "CPW Vein & Aesthetic Center",
    },
    {
      url: "/about-cpw",
      title: "About Us",
      subtitle: "CPW Vein & Aesthetic Center",
    },
    {
      url: "/about-jessica",
      title: "About Jessica",
      subtitle: "Owner & Director",
      exceptions: ["/promotions"],
    },
    {
      url: "/about-jessica",
      title: "Jessica Plotnick",
      subtitle: "PA-C, MMSc & Owner",
      exclusive: ["/promotions"],
    },
    {
      url: "/about-kelita",
      title: "About Kelita",
      subtitle: "Director of Operations",
    },
    {
      url: "/promotions",
      title: "Promotions",
      subtitle: "For you",
    },
    {
      url: "/tetrapro",
      title: "Tetra PRO CoolPeel",
      subtitle: "Skin Resurfacing",
    },
    {
      url: "/sclerotherapy-like-leg-and-facial-veins",
      title: "Leg & Facial Veins",
      subtitle: "Sclerotherapy",
      exceptions: ["/procedures", "/"],
    },
    {
      url: "/sclerotherapy-like-leg-and-facial-veins",
      title: "Sclerotherapy",
      subtitle: "Leg & Facial Veins",
      exclusive: ["/procedures"],
    },
    {
      url: "/sclerotherapy-like-leg-and-facial-veins",
      title: "Veins",
      exclusive: ["/"],
    },
    { url: "/acne-and-acne-scars", title: "Acne<br>Acne Scars" },
    {
      url: "/facial-fillers",
      title: "Facial Fillers",
      exceptions: ["/body-aging-hands"],
    },
    {
      url: "/chemical-peels",
      title: "Chemical Peels",
      subtitle: "VI Peels & PCA Peel",
    },
    {
      url: "/face-about-facial-volume-loss",
      title: "Facial Volume Loss",
      subtitle: "Learn more about it",
    },
    {
      url: "/face-about-facial-lines",
      title: "Facial Lines",
      subtitle: "Learn more about them",
    },
    {
      url: "/m22-ipl-like-veins-and-acne-and-cherry-hemangiomas",
      title: "M22 IPL",
      subtitle: "Veins, Acne &amp; Cherry Hemangiomas",
      exceptions: ["/body-aging-hands", "/face-about-facial-lines"],
    },
    {
      url: "/m22-ipl-like-veins-and-acne-and-cherry-hemangiomas",
      title: "M22 Photofacials",
      subtitle: "IPL Skin Treatments",
      exclusive: ["/body-aging-hands", "/face-about-facial-lines"],
    },
    {
      url: "/masseter-muscle-treatment",
      title: "Masseter Muscle Enlargement",
      subtitle: "TMJ",
      exceptions: [
        "/wrinkle-treatments-like-botox-and-neurotoxins",
        "/procedures",
      ],
    },
    {
      url: "/masseter-muscle-treatment",
      title: "Masseter Muscle Treatment",
      subtitle: "TMJ",
      exclusive: [
        "/wrinkle-treatments-like-botox-and-neurotoxins",
        "/procedures",
      ],
    },
    {
      url: "/facial-fillers",
      title: "Facial Fillers",
      subtitle: "Juvéderm",
      caption: "Facial Fillers",
      exclude: ["/before-after-botox", "/body-aging-hands"],
    },
    {
      url: "/facial-fillers",
      title: "Fillers",
      subtitle: "Juvéderm",
      caption: "Fillers",
      exclusive: ["/before-after-botox", "/body-aging-hands"],
    },
    {
      url: "/face-lip-lines-and-thinning-lips",
      title: "Thinning Lips",
      subtitle: "Lip Lines",
    },
    {
      url: "/chemical-peels",
      title: "Chemical Peels",
      subtitle: "VI Peels & PCA Peel",
      caption: "Chemical Peels",
    },
    {
      url: "/face-about-facial-volume-losse",
      title: "Facial Volume Losse",
      subtitle: "Learn more about it",
    },
    {
      url: "/face-gummy-smile",
      title: "Gummy Smile",
      subtitle: "Lip Flip",
    },
    {
      url: "/face-dark-circles-tear-troughs",
      title: "Under Eye Dark Circles",
      subtitle: "Tear Troughs & Hollowing",
    },
    {
      url: "/face-marionette-lines-and-doll-lines-and-downturned-mouth",
      title: "Downturned Mouth",
      subtitle: "Marionette & Doll Lines",
    },
    {
      url: "/face-about-facial-lines",
      title: "Facial Lines",
      subtitle: "Learn more about them",
    },
    {
      url: "/skin-age-spots",
      title: "Uneven Skin Tone",
      subtitle: "Age Spots & Sun Damage",
      exceptions: ["/tetrapro"],
    },
    {
      url: "/skin-age-spots",
      title: "Uneven Skin Tone",
      subtitle: "Pigments Age Spots & Sun Damage",
      exclusive: ["/tetrapro"],
    },
    {
      url: "/facial-fillers-juvederm-volbella-xc-restylane-silk",
      title: "Volbella XC",
      subtitle: "Juvéderm",
      caption: "Juvéderm Volbella",
    },
    {
      url: "/facial-fillers-juvederm-volux-xc-radiesse",
      title: "Volux XC",
      subtitle: "Juvéderm",
      caption: "Juvéderm Volux",
    },
    {
      url: "/acne-and-acne-scars",
      title: "Acne",
      subtitle: "Acne Scars",
    },
    {
      url: "/skin-neck-and-skin-laxity",
      title: "Skin Laxity",
      subtitle: "Neck Laxity",
    },
  ];

  $(document).ready(function () {
    setRenderStatus("ready");
    //console.log("jquery ready")
    $("a[href='#']")
      .filter(function () {
        return $(this).text() === "Procedures";
      })
      .on("click", function () {
        window.location.href = "/procedures";
      });
    $("a[href='#']")
      .filter(function () {
        return $(this).text() === "Treatments";
      })
      .on("click", function () {
        window.location.href = "/treatments";
      });
    $("a[href='#']")
      .filter(function () {
        return $(this).text() === "About Us";
      })
      .on("click", function () {
        window.location.href = "/about-cpw";
      });
    $("a[href='#']")
      .filter(function () {
        return $(this).text() === "Before & After";
      })
      .on("click", function () {
        window.location.href = "/before-after-galleries";
      });

    $(document).on("click", ".yui-popup-container-node", function () {
      $(this).css("display", "none");
    });
    if (document.URL.includes("/search?")) {
      var target = document.querySelector("div.search-results");
      var observer = new MutationObserver(function (mutations) {
        cleanUpSearchPageTitles("div.search-results div.sqs-title");
      });
      observer.observe(target, {
        attributes: false,
        childList: true,
        characterData: false,
      });
    }
    $(window).resize(function () {
      if (window.innerWidth > 1800) {
        let imgHalf = $("div#page-thumb>img").height() / 2;
        let fromTop = parseFloat($("div#page-thumb>img").css("top"), 10);
        let result = fromTop * -1 + 250;
        //$("div#page-thumb>img").css("mask-image","radial-gradient(circle at 50% " + result + "px, #000 875px, transparent 900px)");
        if (window.location.pathname == "/search") {
          $("div#page-thumb>img").css("mask-image", "unset");
          $("div#banner-area-wrapper").css("background", "unset !important");
        }
      }
    });
    // Move Medium Image Button title to the bottom of the image if button size exceeds ${medImgBtnFlipTextWidth} px
    // Inserting the @container logic into CSS directly causes a crass of “less" - hence jQuery to the rescue
    $(
      `<style>div:has(>div.sqs-block-button > div.sqs-block-content>div[data-button-size='medium']) > div > div > figure:has(>figcaption) {container-type:inline-size;};</style>`
    ).appendTo("head");
    $(
      `<style>div:has(>div.sqs-block-button > div.sqs-block-content >div[data-button-size='medium']) > div > div > figure>figcaption { @container (min-width:${medImgBtnFlipTextWidth}px) { align-items: flex-end !important; margin-bottom: 15px; }}</style>`
    ).appendTo("head");
    // Accordingly, when button are wider than ${medImgBtnFlipTextWidth} px, flip title and subtitle so title is on the bottom of the button
    $(window).on("resize", function () {
      if (
        window.innerWidth > +3 * medImgBtnFlipTextWidth + 116 ||
        window.innerWidth < maxMobile
      ) {
        $(
          "div" +
            ":has(>div>div>figure>div>a)" +
            ":has(>div.sqs-block-button>div>div[data-button-size='medium'])" +
            ">div>div>figure>figcaption>div" +
            ":has(>.image-title-wrapper)"
        ).each(function () {
          $(this).find(">.image-title-wrapper").appendTo($(this));
        });
      } else {
        $(
          "div" +
            ":has(>div>div>figure>div>a)" +
            ":has(>div.sqs-block-button>div>div[data-button-size='medium'])" +
            ">div>div>figure>figcaption>div" +
            ":has(>.image-subtitle-wrapper)"
        ).each(function () {
          $(this).find(">.image-subtitle-wrapper").appendTo($(this));
        });
      }
    });
    $(window).trigger("resize");

    // END OF JQUERY HACKERY
    let pageTitle = document.getElementById("page-title");
    if (pageTitle != null) {
      let path = pageTitle.innerHTML.split("--");
      let breadcrumb,
        title = "";
      switch (path.length) {
        case 1:
          title = path[0];
          break;
        case 2:
          title = path[1];
          breadcrumb = category.toLowerCase().match(categories)
            ? category
            : path[0];
          let link =
            breadcrumb.toLowerCase().match(categories) == null
              ? breadcrumb
              : "<a id='title-breadcrumb-link' href='/" +
                breadcrumb.toLowerCase().replace(/ /gi, "-") +
                "' target='_self'>" +
                breadcrumb +
                "</a>";
          document.title = breadcrumb + ": " + title;
          pageTitle.innerHTML = title;
          $("<div id='title-breadcrumb'>" + link + "</div>").insertBefore(
            $("#page-title")
          );
          break;
        default:
          console.error(
            "Page Title can't contain more than one '--' breadcrumb.",
            pageTitle.innerHTML
          );
      }
      if (title.match("-:-")) {
        let titles = title.split("-:-");
        document.title = titles[0] + " " + titles[1];
        $("#page-title").html(titles[0]);
        $(
          "<div class='title-breadcrumb title-subtitle'>" + titles[1] + "</div>"
        ).insertAfter($("#page-title"));
      }
      document.title = document.title
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">"); //unescape special characters in the document title
    } else {
      // Special pages like "Search" and other default pages don't have a title
      // Handle Search Result page
      if (window.location.href.includes("/search?")) {
        //$("div#sidebar-one-wrapper").hide();
        //$("div#content-wrapper").css("border-right", "0px");
        writeBannerTitle("Are these the", "Search Results", "you looked for?");
      }
    }
    $($("#page-body-wrapper hr")[$("hr").length - 1]).addClass(
      "#page-body-wrapper hr-prior-footer"
    );
    if ($("div[div-prior-footer]").length == 0) {
      $(
        $(".main-content .col.sqs-col-12.span-12 > div.row.sqs-row")[
          $(".main-content .col.sqs-col-12.span-12 > div.row.sqs-row").length -
            1
        ]
      ).addClass("div-prior-footer");
    } else {
      $("div:has(>div>div[div-prior-footer])+div").addClass("div-prior-footer");
    }

    //createImageButtonCaptions();
    setRenderStatus("completed");
  });

  // Facebook Tracking
  window.Squarespace.onInitialize(Y, function () {
    //console.log("window.Squarespace.onInitialize")
    var btns = document.getElementsByClassName(
      "sqs-block-button-element--medium sqs-block-button-element"
    );

    btns[btns.length - 1].addEventListener("click", function () {
      fbq("track", "ViewContent");
      //console.log("fbviewcontent");
    });

    var btnss = document.getElementsByClassName(
      "button sqs-system-button sqs-editable-button"
    );
    if (btnss.length > 1) {
      console.error(
        "Can't assign contact submit event - more than one submit button ",
        btnss.length
      );
    } else {
      if (btnss.length == 1) {
        //fix - else breaks on every page that doesn't have a form
        btnss[0].addEventListener("click", function () {
          fbq("track", "Lead");
          //console.log("fblead");
        });
      }
    }
  });
  // Facebook Tracking End
  function setRenderStatus(state) {
    let m = $("meta[name='render']")[0];
    if (m == undefined) {
      m = document.createElement("meta");
      m.setAttribute("name", "render");
      document.head.appendChild(m);
    }
    m.setAttribute("content", state);
  }
  function writeBannerTitle(breadcrumb, title, subtitle) {
    $("div#banner-area").append(
      "<div id='page-title-wrapper' class='js-text-shrink' data-collection-id='search-page-title' data-edit-main-image='Page Banner'><div id='title-breadcrumb'>" +
        breadcrumb +
        "</div><h1 id='page-title' class='page-title' data-shrink-original-size='60' style='letter-spacing: 0.0333333em;'>" +
        title +
        "</h1><div class='title-breadcrumb'>" +
        subtitle +
        "</div></div>"
    );
  }
  /** For search pages only: go through search results and remove special
   * formatting characters like "--" and "-:-" from the search results
   **/
  function cleanUpSearchPageTitles(selector) {
    $(selector).each(function () {
      var text = $(this).text();
      text = text.replace("--", ": ");
      text = text.replace("-:-", " ");
      $(this).text(text);
    });
  }
  function createImageButtonCaptions() {
    for (button of imageButtons) {
      if (
        button.exceptions &&
        button.exceptions.indexOf(window.location.pathname) > -1
      )
        continue;
      if (
        button.exclusive &&
        button.exclusive.indexOf(window.location.pathname) == -1
      )
        continue;
      let eles = $(
        "div.intrinsic:has(>a[href='" +
          button.url +
          "'],>a[href^='" +
          button.url +
          "?']) + figcaption > div > div.image-title-wrapper > div > p"
      );
      if (eles.length == 0) continue;
      if (button.occurrence == undefined) {
        eles.html(button.title);
      } else {
        $(eles[button.occurrence - 1]).html(button.title);
      }
      writeImageButtonSubtitle(button);
      writeImageButtonCaption(button);
    }
    function writeImageButtonCaption(button) {
      button.caption =
        button.caption == undefined ? button.title : button.caption;
      if (button.occurrence == undefined) {
        $(
          "div:has(>div>figure>div.intrinsic>a[href='" +
            button.url +
            "'],> a[href^='" +
            button.url +
            "?'])  + div>div>div>a"
        ).html(button.caption);
      } else {
        $(
          $(
            "div:has(>div>figure>div.intrinsic>a[href='" +
              button.url +
              "'],> a[href^='" +
              button.url +
              "?'])  + div>div>div>a"
          )[button.occurrence - 1]
        ).html(button.caption);
      }
    }
    function writeImageButtonSubtitle(button) {
      let ele =
        button.occurrence == undefined
          ? $(
              "div.intrinsic:has(>a[href='" +
                button.url +
                "'],>a[href^='" +
                button.url +
                "?']) + figcaption > div > div.image-subtitle-wrapper"
            )
          : $(
              $(
                "div.intrinsic:has(>a[href='" +
                  button.url +
                  "'],>a[href^='" +
                  button.url +
                  "?']) + figcaption > div > div.image-subtitle-wrapper"
              )[button.occurrence - 1]
            );
      if (button.subtitle == undefined) {
        button.occurrence == undefined
          ? $(
              "div.intrinsic:has(>a[href='" +
                button.url +
                "'], >a[href^='" +
                button.url +
                "?']) + figcaption > div > div.image-subtitle-wrapper"
            ).remove()
          : $(
              $(
                "div.intrinsic:has(>a[href='" +
                  button.url +
                  "'], >a[href^='" +
                  button.url +
                  "?']) + figcaption > div > div.image-subtitle-wrapper"
              )[button.occurrence - 1]
            ).remove();
        return;
      }
      if (ele.length == 0) {
        button.occurrence == undefined
          ? $(
              "div.intrinsic:has(>a[href='" +
                button.url +
                "'], >a[href^='" +
                button.url +
                "?']) + figcaption > div"
            ).append(
              "<div class='image-subtitle-wrapper'><div class='image-subtitle sqs-dynamic-text' data-animation-override='' data-width-percentage='25.3' style='font-size: max(0.75rem, 25.3%);'><p class='min-font-set' style='white-space:pre-wrap;'>" +
                button.subtitle +
                "</p></div></div>"
            )
          : $(
              $(
                "div.intrinsic:has(>a[href='" +
                  button.url +
                  "'], >a[href^='" +
                  button.url +
                  "?']) + figcaption > div"
              )[button.occurrence - 1]
            ).append(
              "<div class='image-subtitle-wrapper'><div class='image-subtitle sqs-dynamic-text' data-animation-override='' data-width-percentage='25.3' style='font-size: max(0.75rem, 25.3%);'><p class='min-font-set' style='white-space:pre-wrap;'>" +
                button.subtitle +
                "</p></div></div>"
            );
      } else {
        button.occurrence == undefined
          ? $(
              "div.intrinsic:has(>a[href='" +
                button.url +
                "'],>a[href^='" +
                button.url +
                "?']) + figcaption > div > div.image-subtitle-wrapper > div > p"
            ).html(button.subtitle)
          : $(
              $(
                "div.intrinsic:has(>a[href='" +
                  button.url +
                  "'],>a[href^='" +
                  button.url +
                  "?']) + figcaption > div > div.image-subtitle-wrapper > div > p"
              )[button.occurrence - 1]
            ).html(button.subtitle);
      }
    }
  }
