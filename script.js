$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("color", "#4a6cf7");            // tag selector
  $("#title").css("text-align", "center");    // id selector
  $(".intro").css("font-style", "italic");    // class selector

  var headlines = [
    "Zharkyn - Beginner Web Developer",
    "<b>Zharkyn</b> - Future Freelancer",
    "Zharkyn - jQuery Learner"
  ];
  var h = 0;
  $("#changeHeadline").click(function () {
    h = (h + 1) % headlines.length;
    $(".headline").html(headlines[h]);        // .html()
    $("#title").text("Welcome to My Portfolio!"); // .text()
  });

  $("#darkBtn").click(function () {
    $("body").addClass("dark");
    $("header, section").css("border-color", "#555");
    $(".heading").css("background", "#333");
  });
  $("#lightBtn").click(function () {
    $("body").removeClass("dark");
    $("header, section").css("border-color", "#ccc");
    $(".heading").css("background", "#e8e8f5");
  });

  $("#hideBtn").click(function () {
    $("#status, #facts").hide();
  });
  $("#showBtn").click(function () {
    $("#status, #facts").show();
  });
  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $(".pic").fadeIn();
  });
  $("#fadeOutBtn").click(function () {
    $(".pic").fadeOut();
  });
  $("#fadeToggleBtn").click(function () {
    $(".pic").fadeToggle(600);
  });

  $(".panel").hide(); // closed at the start
  $(".heading").click(function () {
    $(this).next(".panel").slideToggle();
  });
  $("#slideUpBtn").click(function () {
    $(".panel").slideUp();
  });
  $("#slideDownBtn").click(function () {
    $(".panel").slideDown();
  });

  $("#addSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillMsg").text("Please write a skill first!");
      return;
    }
    $("#skillList").append("<li>" + $("<div>").text(skill).html() + "</li>");
    $("#skillInput").val("");
    $("#skillMsg").text("");
  });

  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillMsg").text("Please write a skill first!");
      return;
    }
    $("#skillList").prepend("<li>" + $("<div>").text(skill).html() + "</li>");
    $("#skillInput").val("");
    $("#skillMsg").text("");
  });

  $("#removeSkill").click(function () {
    $("#skillList li:last").remove();
  });

  var isGithub = true;
  $("#changeLink").click(function () {
    if (isGithub) {
      $("#myLink").attr("href", "https://i.pinimg.com/736x/50/d6/c2/50d6c298aa55c715819e8d1bf0fd8e94.jpg").text("Best player oat");
    } else {
      $("#myLink").attr("href", "https://github.com/zeeplayn").text("My GitHub");
    }
    isGithub = !isGithub;
  });

  $("#nameInput").on("input", function () {
    $("#liveName").text($(this).val());
  });
  $("#emailInput").on("input", function () {
    $("#liveEmail").text($(this).val());
  });

  var barsOpen = false;
  $("#animateBtn").click(function () {
    if (!barsOpen) {
      $(".bar").each(function () {
        $(this).animate({ width: $(this).data("width") }, 1000);
      });
    } else {
      $(".bar").animate({ width: 0 }, 1000);
    }
    barsOpen = !barsOpen;
  });
});
