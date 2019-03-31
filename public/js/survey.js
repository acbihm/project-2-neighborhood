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
        $('#tags').append('<h2>Social</h2>')
        for (var i = 3; i < (14); i++) {
            var b = $("<div>");
            b.addClass(classToAdd);
            b.addClass("btn-group-toggle");
            b.attr("data-toggle", "buttons");
            b.attr("data-name", arrayToUse[i]);
            b.html(` <label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${arrayToUse[i]}> ${arrayToUse[i]}</label>`);
            $(areaToAddTo).append(b);
        }
        $('#tags').append('<h2>Aesthetics</h2>')
        for (var i = 15; i < (30); i++) {
            var c = $("<div>");
            c.addClass(classToAdd);
            c.addClass("btn-group-toggle");
            c.attr("data-toggle", "buttons");
            c.attr("data-name", arrayToUse[i]);
            c.html(` <label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${arrayToUse[i]}> ${arrayToUse[i]}</label>`);
            $(areaToAddTo).append(c);
        }
        $('#tags').append('<h2>Activities</h2>')
        for (var i = 31; i < (arrayToUse.length); i++) {
            var d = $("<div>");
            d.addClass(classToAdd);
            d.addClass("btn-group-toggle");
            d.attr("data-toggle", "buttons");
            d.attr("data-name", arrayToUse[i]);
            d.html(` <label class='btn btn-secondary'><input type='checkbox' autocomplete='off' id=${arrayToUse[i]}> ${arrayToUse[i]}</label>`);
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
        var user = $('#user_name').val();
        var zip = parseInt($('#zipcode').val());
        if (typeof zip !== "number" || zip == null) {
            alert('You must enter your zip');
        }
        var tagResults = [user, zip,];

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
                tagResults.push(true);
            }
            else if ($('#' + tagsArray[i]).not(":checked")) {
                tagResults.push(false);
            }

        }
        console.log(tagResults);
        $.post("/api/answer", tagResults)
            .then(function (data) {
                console.log(data);
                
                alert("Adding tags...");
            });

        $('#tags').html('');
        populateButtons(tagsArray, "tag-button", "#tags");
    });

    populateButtons(tagsArray, "tag-button", "#tags");
});

