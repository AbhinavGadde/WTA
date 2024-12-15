$(document).ready(function () {
    $("#auditionForm").submit(function (e) {
        if (!$("input[name='gender']:checked").val()) {
            alert("Please select your gender.");
            e.preventDefault();
        }
    });
});
