$('#causaConsultaFc').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 3 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});

$('#causaConsultaFr').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 2 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});

$('#causaConsultaTas').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 3 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});

$('#causaConsultaTad').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 3 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});

$('#causaConsultaGlasgow').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 2 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});


$('#causaConsultaSaturacionOxigeno').on('keydown keypress', function (e) {
    if (e.key.length === 1) {
        if ($(this).val().length < 3 && !isNaN(parseFloat(e.key))) {

            $(this).val($(this).val() + e.key);


        }
        return false;
    }
});