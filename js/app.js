
// >> functions & intialize --------------------------------------------------
function pageChange() {
    $('.changeBtn').on('click', function () {
        var $id = $('.content').attr('id');
        var $hash = $(this).attr('href');
        $('.content').hide();
        $($hash).fadeIn(1000);
    });
}

function init() {
    $('.content').hide();
    $('#START_PAGE').show();
}

init();

// >> START_PAGE --------------------------------------------------
(function () {
    let startMes =
        [
            "( ･ㅂ･)و ̑̑ <br>ジャンケンで勝負だ！",
            "かかってきなさい。<br>щ(´･ω･`щ)"
        ];

    $('#START_PAGE .loadMes').html("(Loading...)").show();
    $('#START_BTN').html("START").hide();
    setInterval(function () {
        $('#START_PAGE .loadMes').hide();
        $('#START_BTN').show();
        $('#START_PAGE .TXT').html(startMes[0]).fadeIn(500).fadeOut(2000, function () {
            $('#START_PAGE .TXT').html(startMes[1]).fadeIn(500).fadeOut(2000);
        });
    }, 5000);

    pageChange();

})();

// >> OK_PAGE --------------------------------------------------
(function () {
    $('#OK_PAGE .TXT').html('(๑و•̀ω•́)و いくぜ');
    $('#OK_BTN').html(" OK ").on('click', function () {
        gameInit();
    });
})();

// >> GAME_PAGE --------------------------------------------------
(function () {
    $('.card').on('click', function () {
        let player = ($(this).attr("value")) - 1;
        game(player); // trigger GAME_PAGE LOGIC
    });
})();

// >> GAME_PAGE LOGIC --------------------------------------------------

function game(player) {
    let resultCard = ["✊", "✌️", "🖐"];
    let enemy = Math.floor(Math.random() * 3);
    let judge = (enemy - player + 3) % 3;
    $('#enemy').html('( ･ㅂ･)ぽんっ' + resultCard[enemy]);
    $('#player').html(resultCard[player] + '(´･ω･` )<br>');

    if (judge === 0) {
        $('#RES').html("draw").css('color', "black");
    } else if (judge === 1) {
        $('#RES').html("You Win!!").css('color', "red");
    } else {
        $('#RES').html("You Lose...").css('color', "blue");
    }
}

// >> GAME_PAGE initialize --------------------------------------------------

function gameInit() {
    $('#RES').html(" ");
    $('#player').html(" ");
    $('#END_BTN').html("ヾ(｡･ω･｡)ﾉ exit");
    $('#enemy').html('(๑•̀ㅂ•́)و✧︎じゃんけん');
}
