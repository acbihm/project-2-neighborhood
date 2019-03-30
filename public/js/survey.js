$(document).ready(function () {

    var tagsArray = [
        "resident",
        "visitor",
        "zip_code",
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

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        for (var i = 3; i < (arrayToUse.length); i++) {
            var b = $("<div>");
            b.addClass(classToAdd);
            b.addClass("btn-group-toggle");
            b.attr("data-toggle", "buttons");
            b.attr("data-name", arrayToUse[i]);
            b.html(` <label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${arrayToUse[i]}> ${arrayToUse[i]}</label>`);
            $(areaToAddTo).append(b);
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
        var zip = parseInt($('#zipcode').val());
        if (typeof zip !== "number" || zip == null) {
            alert('You must enter your zip');
        }
        var tagResults = [zip,];

        if ($('#resident').is(':checked')) {
            tagResults.push(true);
            tagResults.push(false);
        };

        if ($('#visitor').is(':checked')) {
            tagResults.push(false);
            tagResults.push(true);
        };

        for (var i = 3; i < tagsArray.length; i++) {
            if ($('#' + tagsArray[i]).is(":checked")) {
                // alert(`${tagsArray[i]} is checked`)
                tagResults.push(true);
            }
            else if ($('#' + tagsArray[i]).not(":checked")) {
                // alert(`${tagsArray[i]} is NOT checked`)
                tagResults.push(false);
            }
        }
        console.log(tagResults);
        $('#tags').html('');

        populateButtons(tagsArray, "tag-button", "#tags");
    });

    populateButtons(tagsArray, "tag-button", "#tags");
});
