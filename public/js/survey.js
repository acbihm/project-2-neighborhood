/* eslint-disable prettier/prettier */
$(document).ready(function () {

  //These should not be edited. In the future we want to allow users to add their own tags.
  var tagsArray = [
    "unique_bars",
    "live_music",
    "great_shopping",
    "dog_walking_clubs",
    "many_young_people",
    "too_crowded",
    "feels_safe",
    "feels_dangerous",
    "kind_of_empty",
    "friendly_people",
    "too_many_hipsters",
    "snobby_people",
    "scenic_tours",
    "historical_markers",
    "lots_of_wildlife",
    "old_houses",
    "outdoor_murals",
    "sculpture_garden",
    "modern_buildings",
    "beautiful_sunsets",
    "distinct_skyline",
    "many_wildflowers",
    "bland",
    "needs_upkeep",
    "smells_bad",
    "industrial_area",
    "undeveloped_land",
    "lots_of_graffiti",
    "annual_aparade",
    "bike_trails",
    "fireworks_show",
    "community_car_show",
    "weekly_volunteering_events",
    "monthly_craft_fairs",
    "guided_tours",
    "many_gyms",
    "pedestrian_friendly",
    "rock_climbing"
  ];

  function formatButtonText(str) {
    str = str.replace(/[_-]/g, " ");
    return str;
  }

  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {

    $("#tags").append("<h2>Social</h2>");
    for (var i = 0; i <= (11); i++) {
      var b = $("<div>");
      b.addClass(classToAdd);
      b.addClass("btn-group-toggle");
      b.attr("data-toggle", "buttons");
      b.attr("data-name", arrayToUse[i]);
      // b.attr("data-cat", "social"),
      b.html("<label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${[i]}>" + formatButtonText(arrayToUse[i]) + "</label>");
      $(areaToAddTo).append(b);
    }

    $("#tags").append("<h2>Aesthetics</h2>");
    for (var i = 12; i <= (27); i++) {
      var c = $("<div>");
      c.addClass(classToAdd);
      c.addClass("btn-group-toggle");
      c.attr("data-toggle", "buttons");
      c.attr("data-name", arrayToUse[i]);
      // c.attr("data-cat", "aesthetics"),
      c.html(
        "<label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${[i]}>" + formatButtonText(arrayToUse[i]) + "</label>");
      $(areaToAddTo).append(c);
    }

    $("#tags").append("<h2>Activities</h2>");
    for (var i = 28; i <= (37); i++) {
      var d = $("<div>");
      d.addClass(classToAdd);
      d.addClass("btn-group-toggle");
      d.attr("data-toggle", "buttons");
      d.attr("data-name", arrayToUse[i]);
      // d.attr("data-cat", "activities"),
      d.html("<label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${[i]}>" + formatButtonText(arrayToUse[i]) + "</label>");
      $(areaToAddTo).append(d);
    }
  }

    $(document).on("click", ".tag-button", function () {
    $(".tag-button").click(function (event) {
      event.preventDefault();
    });
    $("#tagTest").empty();
    // $(".tag-button").removeClass("active");
    $(this).addClass("active");
  });

  $("#submit-results").on("click", function (event) {
    event.preventDefault();
    var user = $("#user_name").val();
    var zip = $("#zipcode").val();
    // var type;
    if ($("#resident").is(":checked")) {
      var type = "resident";
    }
    else if ($("#resident").not(":checked")) {
      var type = "visitor";
    }

    for (var i = 0; i < (38); i++) {
      if ($("#" + i).is(":checked")) {
        var ans = "true";
      }
      else {
        var ans = "false";
      }
      // var cat = $('#1').attr('data-cat');

      var ansObj = {
        "user_name": user,
        "zip_code": zip,
        "person_type": type,
        "answer": ans,
        "questionID": i + 1,
        // "category": cat,
      };

      $.post("/api/answer", ansObj)
        .then(function (data) {
          console.log(data);
          // alert("Adding tags...");
        });
    } //the end of the for

    $("#tags").html("");
    populateButtons(tagsArray, "tag-button", "#tags");
  });

  populateButtons(tagsArray, "tag-button", "#tags");
});

