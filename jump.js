$(document).ready(function () {

    console.log('document is ready');
    // saveVal = $(".description").val();
    $(".saveBtn").on("click", function () {
        var comment0 = $.trim($("#act-9").val());
        if (comment0 != '') {
            alert(comment0);
            localStorage.setItem('task-0', comment0)
        }
        var comment1 = $.trim($("#act-10").val());
        if (comment1 != '') {
            alert(comment1);
            localStorage.setItem('task-1', comment1)
        }
        var comment2 = $.trim($("#act-11").val());
        if (comment2 != '') {
            alert(comment2);
            localStorage.setItem('task-2', comment2)
        }
        var comment3 = $.trim($("#act-12").val());
        if (comment3 != '') {
            alert(comment3);
            localStorage.setItem('task-3', comment3)
        }
        var comment4 = $.trim($("#act-13").val());
        if (comment4 != '') {
            alert(comment4);
            localStorage.setItem('task-4', comment4)
        }
        var comment5 = $.trim($("#act-14").val());
        if (comment5 != '') {
            alert(comment5);
            localStorage.setItem('task-5', comment5)
        }
        var comment6 = $.trim($("#act-15").val());
        if (comment6 != '') {
            alert(comment6);
            localStorage.setItem('task-6', comment6)
        }
        var comment7 = $.trim($("#act-16").val());
        if (comment7 != '') {
            alert(comment7);
            localStorage.setItem('task-7', comment7)
            $('#act-16').val(localStorage.task - 7)
        }
        var comment8 = $.trim($("#act-17").val());
        if (comment8 != '') {
            alert(comment8);
            localStorage.setItem('task-8', comment8)
        }
        // $(".description").each(function blah() {
        //     $.trim($('.description').val());
        //     var textBox = parseInt($(this).attr("id").split("-")[1]);
        //     console.log(textBox);
        //     // console.log('new value')
        //     // if (textBox.val === '') {
        //     //     console.log('didnt enter anything')
        //     // } else if  (textBox.val === 'yes') { 
        //     //     console.log('we might have something')
        //     //
        // })

    });

    function clearStorage() {
        localStorage.clear();
    }
    // $(".description").on("click", function() {

    //     var saveVal = parseInt($(this).attr("id").split("-")[1]);
    //     console.log(saveVal);
    //     // localStorage.setItem('saveVal', JSON.stringify(saveVal));
    //     // console.log($(this));
    // })


    function hourColor() {

        var currentHour = moment().hours()
        // console.log(currentHour);
        $(".time-block").each(function () {

            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour);
            if (blockHour < currentHour) {
                console.log('Hour is past')
                $(this).addClass("past");
            } else if (blockHour > currentHour) {
                console.log('Hour is soon')
                $(this).addClass("future");
            } else {
                console.log('Hour is now')
                $(this).addClass("present");
            }
        })
        if (currentHour <= 8 || currentHour >= 18) {
            clearStorage();
        }


        console.log("Dont touch this function it works")
    }

    function print() {
        $('#act-9').val(localStorage.getItem('task-0'))
        $('#act-10').val(localStorage.getItem('task-1'))
        $('#act-11').val(localStorage.getItem('task-2'))
        $('#act-12').val(localStorage.getItem('task-3'))
        $('#act-13').val(localStorage.getItem('task-4'))
        $('#act-14').val(localStorage.getItem('task-5'))
        $('#act-15').val(localStorage.getItem('task-6'))
        $('#act-16').val(localStorage.getItem('task-7'))
        $('#act-17').val(localStorage.getItem('task-8'))
    }
    print();

    hourColor();
    var interval = setInterval(hourColor, 90000);

})

























