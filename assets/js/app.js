var wheel_outcomes = ["1X", "6X", "1X", "12X", "1X", "3X", "1X", "6X", "1X", "3X", "1X", "52XA", "1X", "3X", "1X", "6X", "3X", "1X", "12X", "1X", "6X", "1X", "3X", "1X", "25X", "1X", "3X", "1X", "6X", "1X", "3X", "1X", "12X", "1X", "6X", "1X", "3X", "1X", "52XB", "3X", "1X", "3X", "1X", "3X", "1X", "12X", "1X", "6X", "1X", "3X", "1X", "25X", "1X", "3X"];

var plinko_payouts = {
    "8": {
        "low": [
            "5x",
            "1.85x",
            "1.1x",
            "1x",
            "0.5x",
            "1x",
            "1.1x",
            "1.85x",
            "5x"
        ],
        "medium": [
            "15x",
            "2.44x",
            "1.3x",
            "0.7x",
            "0.4x",
            "0.7x",
            "1.3x",
            "2.44x",
            "15x"
        ],
        "high": [
            "27x",
            "3.92x",
            "1.5x",
            "0.3x",
            "0.2x",
            "0.3x",
            "1.5x",
            "3.92x",
            "27x"
        ]
    },
    "9": {
        "low": [
            "6.7x",
            "2.1x",
            "1.4x",
            "1x",
            "0.7x",
            "0.7x",
            "1x",
            "1.4x",
            "2.1x",
            "6.7x"
        ],
        "medium": [
            "17x",
            "3.48x",
            "1.7x",
            "0.9x",
            "0.5x",
            "0.5x",
            "0.9x",
            "1.7x",
            "3.48x",
            "17x"
        ],
        "high": [
            "43x",
            "6.4x",
            "2x",
            "0.6x",
            "0.2x",
            "0.2x",
            "0.6x",
            "2x",
            "6.4x",
            "43x"
        ]
    },
    "10": {
        "low": [
            "8x",
            "2.5x",
            "1.3x",
            "1.1x",
            "1x",
            "0.5x",
            "1x",
            "1.1x",
            "1.3x",
            "2.5x",
            "8x"
        ],
        "medium": [
            "22x",
            "4x",
            "2x",
            "1.4x",
            "0.6x",
            "0.4x",
            "0.6x",
            "1.4x",
            "2x",
            "4x",
            "22x"
        ],
        "high": [
            "70x",
            "9.52x",
            "3x",
            "0.9x",
            "0.3x",
            "0.2x",
            "0.3x",
            "0.9x",
            "3x",
            "9.52x",
            "70x"
        ]
    },
    "11": {
        "low": [
            "9x",
            "2.05x",
            "1.7x",
            "1.3x",
            "1x",
            "0.7x",
            "0.7x",
            "1x",
            "1.3x",
            "1.7x",
            "2.05x",
            "9x"
        ],
        "medium": [
            "25x",
            "5x",
            "2.8x",
            "1.8x",
            "0.7x",
            "0.5x",
            "0.5x",
            "0.7x",
            "1.8x",
            "2.8x",
            "5x",
            "25x"
        ],
        "high": [
            "120x",
            "11.95x",
            "5.2x",
            "1.4x",
            "0.4x",
            "0.2x",
            "0.2x",
            "0.4x",
            "1.4x",
            "5.2x",
            "11.95x",
            "120x"
        ]
    },
    "12": {
        "low": [
            "5x",
            "2x",
            "1.55x",
            "1.3x",
            "1.1x",
            "1x",
            "0.5x",
            "1x",
            "1.1x",
            "1.3x",
            "1.55x",
            "2x",
            "6x"
        ],
        "medium": [
            "33x",
            "9x",
            "3.73x",
            "2x",
            "1.1x",
            "0.6x",
            "0.3x",
            "0.6x",
            "1.1x",
            "2x",
            "3.73x",
            "9x",
            "33x"
        ],
        "high": [
            "165x",
            "22x",
            "8.2x",
            "1.9x",
            "0.7x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.7x",
            "1.9x",
            "8.2x",
            "22x",
            "165x"
        ]
    },
    "13": {
        "low": [
            "8x",
            "3.5x",
            "2x",
            "1.9x",
            "1.2x",
            "0.9x",
            "0.7x",
            "0.7x",
            "0.9x",
            "1.2x",
            "1.9x",
            "2x",
            "3.5x",
            "8x"
        ],
        "medium": [
            "44x",
            "13x",
            "5.3x",
            "2.9x",
            "1.3x",
            "0.7x",
            "0.4x",
            "0.4x",
            "0.7x",
            "1.3x",
            "2.9x",
            "5.3x",
            "13x",
            "44x"
        ],
        "high": [
            "252x",
            "35.7x",
            "10.2x",
            "4x",
            "1x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.2x",
            "1x",
            "4x",
            "10.2x",
            "35.7x",
            "252x"
        ]
    },
    "14": {
        "low": [
            "8x",
            "3x",
            "2.4x",
            "1.4x",
            "1.1x",
            "1.1x",
            "1x",
            "0.5x",
            "1x",
            "1.1x",
            "1.1x",
            "1.4x",
            "2.4x",
            "3x",
            "8x"
        ],
        "medium": [
            "60x",
            "16x",
            "6x",
            "4x",
            "1.81x",
            "1x",
            "0.5x",
            "0.2x",
            "0.5x",
            "1x",
            "1.81x",
            "4x",
            "6x",
            "16x",
            "60x"
        ],
        "high": [
            "425x",
            "52x",
            "17.54x",
            "4.8x",
            "1.9x",
            "0.3x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.3x",
            "1.9x",
            "4.8x",
            "17.54x",
            "52x",
            "425x"
        ]
    },
    "15": {
        "low": [
            "15x",
            "7x",
            "3x",
            "1.6x",
            "1.4x",
            "1.1x",
            "1x",
            "0.7x",
            "0.7x",
            "1x",
            "1.1x",
            "1.4x",
            "1.6x",
            "3x",
            "7x",
            "15x"
        ],
        "medium": [
            "90x",
            "23x",
            "11x",
            "4.4x",
            "2.9x",
            "1.3x",
            "0.5x",
            "0.3x",
            "0.3x",
            "0.5x",
            "1.3x",
            "2.9x",
            "4.4x",
            "11x",
            "23x",
            "90x"
        ],
        "high": [
            "620x",
            "83x",
            "28x",
            "7x",
            "3x",
            "0.5x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.5x",
            "3x",
            "7x",
            "28x",
            "83x",
            "620x"
        ]
    },
    "16": {
        "low": [
            "14x",
            "5.8x",
            "1.4x",
            "1.4x",
            "1.3x",
            "1.12x",
            "1.1x",
            "1x",
            "0.5x",
            "1x",
            "1.1x",
            "1.12x",
            "1.3x",
            "1.4x",
            "1.4x",
            "5.8x",
            "14x"
        ],
        "medium": [
            "110x",
            "46x",
            "10x",
            "4x",
            "2.9x",
            "1.5x",
            "1x",
            "0.5x",
            "0.3x",
            "0.5x",
            "1x",
            "1.5x",
            "2.9x",
            "4x",
            "10x",
            "46x",
            "110x"
        ],
        "high": [
            "1000x",
            "120x",
            "22x",
            "9x",
            "4x",
            "2x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.2x",
            "0.2x",
            "2x",
            "4x",
            "9x",
            "22x",
            "120x",
            "1000x"
        ]
    }
};

function calculateDiceResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var combo = server_seed + ":" + client_seed + ":" + nonce;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var md = forge.md.sha512.create();
    md.update(combo);
    combo = md.digest().toHex();

    var combo_length = combo.length;
    var index = 0;
    var lucky = 1000000;

    while (lucky >= 1000000) {

        hex_string = combo.substr(index, 5);
        lucky = parseInt((hex_string + '').replace(/[^a-f0-9]/gi, ''), 16);

        if ((index + 5) > combo_length) {
            break;
        }

        index = index + 5;

    }

    if (lucky < 1000000) {
        roll = lucky % 10000;
        $('#result').val(roll);
    } else {
        $('#result').val("Impossible Game");
    }

    $("#server_seed_hash").val(server_seed_hash);

}

function calculatePlinkoResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();
    var rows = $("#rows").val();
    var risk = $("#risk").val();

    var seeds = [];
    var split_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var series_1 = forge.hmac.create();
    series_1.start('sha256', server_seed);
    series_1.update(client_seed + ":" + nonce + ":0");
    series_1 = series_1.digest().toHex();

    var series_2 = forge.hmac.create();
    series_2.start('sha256', server_seed);
    series_2.update(client_seed + ":" + nonce + ":1");
    series_2 = series_2.digest().toHex();

    var series_3 = forge.hmac.create();
    series_3.start('sha256', server_seed);
    series_3.update(client_seed + ":" + nonce + ":2");
    series_3 = series_3.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_1.substring(x * 2, s + 2));
    }

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_2.substring(x * 2, s + 2));
    }

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_3.substring(x * 2, s + 2));
    }

    for (x = 0; x < 20; x++) {

        let s = x * 4;

        let num1 = parseFloat(parseInt(seeds[s], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[s + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[s + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[s + 3], 16) / Math.pow(256, 4)).toFixed(12);

        let sum = Math.floor((+num1 + +num2 + +num3 + +num4) * 2);

        split_numbers.push(sum);

    }

    split_numbers = split_numbers.slice(0, rows);

    for (i = 0; i < split_numbers.length; i++) {
        position = +position + +split_numbers[i];
    }

    $("#result").val(plinko_payouts[rows][risk][position]);
    $("#server_seed_hash").val(server_seed_hash);

}

function calculateLimboResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var seeds = [];
    var split_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var hash_series = forge.hmac.create();
    hash_series.start('sha256', server_seed);
    hash_series.update(client_seed + ":" + nonce);
    hash_series = hash_series.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(hash_series.substring(x * 2, s + 2));
    }

    let num1 = parseFloat(parseInt(seeds[0], 16) / Math.pow(256, 1)).toFixed(12);
    let num2 = parseFloat(parseInt(seeds[1], 16) / Math.pow(256, 2)).toFixed(12);
    let num3 = parseFloat(parseInt(seeds[2], 16) / Math.pow(256, 3)).toFixed(12);
    let num4 = parseFloat(parseInt(seeds[3], 16) / Math.pow(256, 4)).toFixed(12);

    let roll_number = toFixed((+num1 + +num2 + +num3 + +num4) * 1000000, 0);
    let payout = toFixed(((1000000 / (+roll_number + 1) * 0.96)) / 1, 2);

    $("#result").val(payout);
    $("#server_seed_hash").val(server_seed_hash);

}

function calculateDiamondsResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var seeds = [];
    var split_numbers = [];
    var position = 0;
    var outcome = "";

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var hash_series = forge.hmac.create();
    hash_series.start('sha256', server_seed);
    hash_series.update(client_seed + ":" + nonce);
    hash_series = hash_series.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(hash_series.substring(x * 2, s + 2));
    }

    for (x = 0; x < 20; x++) {

        let s = x * 4;

        let num1 = parseFloat(parseInt(seeds[s], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[s + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[s + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[s + 3], 16) / Math.pow(256, 4)).toFixed(12);

        let sum = Math.floor((+num1 + +num2 + +num3 + +num4) * 7);

        split_numbers.push(sum);

    }

    split_numbers = split_numbers.slice(0, 5);

    split_numbers.forEach((i) => {
        outcome += '<img src="assets/img/diamonds/' + i + '.svg" style="width: 13%;"> &nbsp;';
    });

    $("#ao").html(outcome);
    $("#server_seed_hash").val(server_seed_hash);

}

function toFixed(num, fixed) {
    var re = new RegExp("^-?\\d+(?:\.\\d{0," + (fixed || -1) + "})?");
    return num.toString().match(re)[0];
}

function calculateCrashResult() {

    var client_seed = $("#client_seed").val();
    var last_seed = $("#server_seed").val();
    var games = $("#games").val();

    var actual_hash;
    var p1, p2, p3, p4, roll, crash_point;

    $("#tabled > tbody").html("");

    for (x = 0; x <= games; x++) {

        var md = forge.md.sha512.create();
        md.update(client_seed + "-" + last_seed);
        actual_hash = md.digest().toHex();

        p1 = parseInt((actual_hash.substr(0, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p2 = parseInt((actual_hash.substr(2, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p3 = parseInt((actual_hash.substr(4, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p4 = parseInt((actual_hash.substr(6, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);

        roll = Math.floor((p1 / Math.pow(256, 1) + p2 / Math.pow(256, 2) + p3 / Math.pow(256, 3) + p4 / Math.pow(256, 4)) * 1000000);
        crash_point = toFixed(parseFloat((1000000 / (roll + 1)) * 0.96), 2);

        $("#tabled > tbody").append("<tr>" + "<td>" + last_seed + "</td>" + "<td>" + crash_point + "x</td>" + "</tr>");

        var md = forge.md.sha256.create();
        md.update(last_seed);
        last_seed = md.digest().toHex();

    }

}

function calculateWheelResult() {

    var client_seed = $("#client_seed").val();
    var last_seed = $("#server_seed").val();
    var games = $("#games").val();

    var actual_hash;
    var p1, p2, p3, p4, roll, crash_point;

    $("#tabled > tbody").html("");

    for (x = 0; x <= games; x++) {

        var md = forge.md.sha512.create();
        md.update(client_seed + "-" + last_seed);
        actual_hash = md.digest().toHex();

        p1 = parseInt((actual_hash.substr(0, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p2 = parseInt((actual_hash.substr(2, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p3 = parseInt((actual_hash.substr(4, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);
        p4 = parseInt((actual_hash.substr(6, 2) + "").replace(/[^a-f0-9]/gi, ""), 16);

        roll = toFixed((p1 / Math.pow(256, 1) + p2 / Math.pow(256, 2) + p3 / Math.pow(256, 3) + p4 / Math.pow(256, 4)), 12);
        outcome = toFixed((roll * 53), 0);
        outcome = wheel_outcomes[outcome];

        $("#tabled > tbody").append("<tr>" + "<td>" + last_seed + "</td>" + "<td>" + outcome + "</td>" + "</tr>");

        var md = forge.md.sha256.create();
        md.update(last_seed);
        last_seed = md.digest().toHex();

    }

}

function calculateRouletteResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var seeds = [];
    var split_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var hash_series = forge.hmac.create();
    hash_series.start('sha256', server_seed);
    hash_series.update(client_seed + ":" + nonce);
    hash_series = hash_series.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(hash_series.substring(x * 2, s + 2));
    }

    let num1 = parseFloat(parseInt(seeds[0], 16) / Math.pow(256, 1)).toFixed(12);
    let num2 = parseFloat(parseInt(seeds[1], 16) / Math.pow(256, 2)).toFixed(12);
    let num3 = parseFloat(parseInt(seeds[2], 16) / Math.pow(256, 3)).toFixed(12);
    let num4 = parseFloat(parseInt(seeds[3], 16) / Math.pow(256, 4)).toFixed(12);

    let roll_number = toFixed((+num1 + +num2 + +num3 + +num4) * 37, 0);

    $("#result").val(roll_number);
    $("#server_seed_hash").val(server_seed_hash);

}

function calculateVideoPokerResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var seeds = [];
    var roll_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    let s = 0;

    for (n = 0; n < 8; n++) {

        var hash_series = forge.hmac.create();
        hash_series.start('sha256', server_seed);
        hash_series.update(client_seed + ":" + nonce + ":" + n);
        hash_series = hash_series.digest().toHex();

        for (x = 0; x < 32; x++) {
            s = x * 2;
            seeds.push(hash_series.substring(x * 2, s + 2));
        }

    }

    for (x = 52; x > 0; x--) {

        let num1 = parseFloat(parseInt(seeds[position + 0], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[position + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[position + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[position + 3], 16) / Math.pow(256, 4)).toFixed(12);
        let sum = toFixed((+num1 + +num2 + +num3 + +num4), 12);
        let roll_number = toFixed(sum * x, 0);

        position += 4;

        roll_numbers.push(roll_number);

    }

    let deck = Array.from(Array(52).keys());
    let initial_cards = [];
    let coming_cards = [];

    roll_numbers.every((i) => {

        let card_id = deck[i];

        if (initial_cards.length < 5) {
            initial_cards.push(card_id);
        } else if (coming_cards.length < 5) {
            coming_cards.push(card_id);
        } else {
            return false;
        }

        deck.splice(i, 1);

        return true;

    });

    let content = '';

    initial_cards.forEach((i) => {
        content += '<img src="assets/img/cards/' + i + '.png" style="width: 13%;"> &nbsp;';
    });

    $("#ic").html(content);

    content = '';

    coming_cards.forEach((i) => {
        content += '<img src="assets/img/cards/' + i + '.png" style="width: 13%;"> &nbsp;';
    });

    $("#cc").html(content);

    $("#server_seed_hash").val(server_seed_hash);

}

function calculateBlackjackResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var seeds = [];
    var roll_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    let s = 0;

    for (n = 0; n < 7; n++) {

        var hash_series = forge.hmac.create();
        hash_series.start('sha256', server_seed);
        hash_series.update(client_seed + ":" + nonce + ":" + n);
        hash_series = hash_series.digest().toHex();

        for (x = 0; x < 32; x++) {
            s = x * 2;
            seeds.push(hash_series.substring(x * 2, s + 2));
        }

    }

    for (x = 52; x > 0; x--) {

        let num1 = parseFloat(parseInt(seeds[position + 0], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[position + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[position + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[position + 3], 16) / Math.pow(256, 4)).toFixed(12);
        let sum = toFixed((+num1 + +num2 + +num3 + +num4), 12);
        let roll_number = toFixed(sum * 52, 0);

        position += 4;

        roll_numbers.push(roll_number);

    }

    let player_hand = [];
    let dealer_hand = [];
    let all_cards = [];

    let content = '';

    content += '<img src="assets/img/cards/' + roll_numbers[0] + '.png" style="width: 13%;"> &nbsp;';
    content += '<img src="assets/img/cards/' + roll_numbers[1] + '.png" style="width: 13%;"> &nbsp;';

    $("#player_cards").html(content);

    content = '';

    content += '<img src="assets/img/cards/' + roll_numbers[2] + '.png" style="width: 13%;"> &nbsp;';
    content += '<img src="assets/img/cards/' + roll_numbers[3] + '.png" style="width: 13%;"> &nbsp;';

    $("#dealer_cards").html(content);

    for (x = 4; x < 52; x++) {
        all_cards.push(roll_numbers[x]);
    }

    content = '';

    all_cards.forEach((i, g) => {
        content += '<img src="assets/img/cards/' + i + '.png" style="width: 8%; margin-bottom: 10px;"> &nbsp;';
    });

    $("#coming_cards").html(content);
    $("#server_seed_hash").val(server_seed_hash);

}

function calculateKenoResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var nonce = $("#nonce").val();

    var result = [];
    var seeds = [];
    var split_numbers = [];
    var deck = Array.from({length: 40}, (_, i) => i + 1);

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var series_1 = forge.hmac.create();
    series_1.start('sha256', server_seed);
    series_1.update(client_seed + ":" + nonce + ":0");
    series_1 = series_1.digest().toHex();

    var series_2 = forge.hmac.create();
    series_2.start('sha256', server_seed);
    series_2.update(client_seed + ":" + nonce + ":1");
    series_2 = series_2.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_1.substring(x * 2, s + 2));
    }

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_2.substring(x * 2, s + 2));
    }

    for (x = 0; x < 10; x++) {

        let s = x * 4;
        let p = 40 - x;

        let num1 = parseFloat(parseInt(seeds[s], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[s + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[s + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[s + 3], 16) / Math.pow(256, 4)).toFixed(12);

        let sum = Math.floor((+num1 + +num2 + +num3 + +num4) * p);

        split_numbers.push(sum);

    }

    for (i = 0; i < split_numbers.length; i++) {

        let number = deck[split_numbers[i]];

        result.push(number);
        deck.splice(split_numbers[i], 1);

    }

    $("#result").val(result.join(", "));
    $("#server_seed_hash").val(server_seed_hash);

}

function calculateMinesResult() {

    var client_seed = $("#client_seed").val();
    var server_seed = $("#server_seed").val();
    var mines = $("#mines").val();
    var nonce = $("#nonce").val();

    var result = [];
    var seeds = [];
    var deck = Array.from(Array(25).keys());
    var roll_numbers = [];
    var position = 0;

    var md = forge.md.sha256.create();
    md.update(server_seed);
    var server_seed_hash = md.digest().toHex();

    var series_1 = forge.hmac.create();
    series_1.start('sha256', server_seed);
    series_1.update(client_seed + ":" + nonce + ":0");
    series_1 = series_1.digest().toHex();

    var series_2 = forge.hmac.create();
    series_2.start('sha256', server_seed);
    series_2.update(client_seed + ":" + nonce + ":1");
    series_2 = series_2.digest().toHex();

    var series_3 = forge.hmac.create();
    series_3.start('sha256', server_seed);
    series_3.update(client_seed + ":" + nonce + ":2");
    series_3 = series_3.digest().toHex();

    let s = 0;

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_1.substring(x * 2, s + 2));
    }

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_2.substring(x * 2, s + 2));
    }

    for (x = 0; x < 32; x++) {
        s = x * 2;
        seeds.push(series_3.substring(x * 2, s + 2));
    }

    for (x = 25; x > 1; x--) {

        let num1 = parseFloat(parseInt(seeds[position + 0], 16) / Math.pow(256, 1)).toFixed(12);
        let num2 = parseFloat(parseInt(seeds[position + 1], 16) / Math.pow(256, 2)).toFixed(12);
        let num3 = parseFloat(parseInt(seeds[position + 2], 16) / Math.pow(256, 3)).toFixed(12);
        let num4 = parseFloat(parseInt(seeds[position + 3], 16) / Math.pow(256, 4)).toFixed(12);
        let sum = toFixed((+num1 + +num2 + +num3 + +num4), 12);
        let roll_number = toFixed(sum * x, 0);

        position += 4;

        roll_numbers.push(roll_number);

    }

    for (i = 0; i < 25; i++) {
        $("#pos" + i).css("color", "green");
    }

    for (i = 0; i < mines; i++) {

        let number = deck[roll_numbers[i]];
        deck.splice(roll_numbers[i], 1);

        $("#pos" + number).css("color", "red");

    }

    $("#server_seed_hash").val(server_seed_hash);

}

function calculateLotteryResult(){

    const client_seed = $("#client_seed").val();
    const server_seed = $("#server_seed").val();

    const md = forge.md.sha256.create();
    md.update(server_seed);

    const server_seed_hash = md.digest().toHex();

    const game_hash = forge.hmac.create();
    game_hash.start("sha256", server_seed);
    game_hash.update(client_seed);
    const hash_result = game_hash.digest().toHex();

    const remainingBalls = Array(36)
    .fill(null)
    .map((v, i) => i + 1);
    const balls = [];

    for (let i = 0; i < 5; i++) {
        const cut = i * 8;
        const random = parseInt(hash_result.substring(cut, cut + 8), 16);

        const index = Math.floor((random / 0x100000000) * remainingBalls.length);
        balls.push(remainingBalls.splice(index, 1)[0]);
    }

    const jackpot = Math.floor((parseInt(hash_result.substring(40, 48), 16) / 0x100000000) * 10) + 1;

    $("#winning_numbers").val(balls);
    $("#jackpot_number").val(jackpot);
    $("#server_seed_hash").val(server_seed_hash);
}

$("#dice-calculate-result").click(function (e) {
    calculateDiceResult();
});

$("#plinko-calculate-result").click(function (e) {
    calculatePlinkoResult();
});

$("#crash-calculate-result").click(function (e) {
    calculateCrashResult();
});

$("#limbo-calculate-result").click(function (e) {
    calculateLimboResult();
});

$("#video-poker-calculate-result").click(function (e) {
    calculateVideoPokerResult();
});

$("#diamonds-calculate-result").click(function (e) {
    calculateDiamondsResult();
});

$("#roulette-calculate-result").click(function (e) {
    calculateRouletteResult();
});

$("#keno-calculate-result").click(function (e) {
    calculateKenoResult();
});

$("#blackjack-calculate-result").click(function (e) {
    calculateBlackjackResult();
});

$("#mines-calculate-result").click(function (e) {
    calculateMinesResult();
});

$("#wheel-calculate-result").click(function (e) {
    calculateWheelResult();
});

$("#lottery-calculate-result").click(function (e) {
    calculateLotteryResult();
});

$("#year").html(new Date().getFullYear());
