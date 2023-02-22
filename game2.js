const table = [['result', 'home', 'weather', 'balltypes', 'score_diff', 'ball', 'strike', 'out', 'pitch_num', '1b', '2b', '3b', 'batter_today_single', 'batter_today_double', 'batter_today_triple', 'batter_today_home', 'batter_today_walk', 'batter_today_out', 'batter_today_long', 'batter_last5_single', 'batter_last5_double', 'batter_last5_triple', 'batter_last5_home', 'batter_last5_walk', 'batter_last5_out', 'batter_last5_long', 'batter_last10_single', 'batter_last10_double', 'batter_last10_triple', 'batter_last10_home', 'batter_last10_walk', 'batter_last10_out', 'batter_last10_long', 'batter_season_single', 'batter_season_double', 'batter_season_triple', 'batter_season_home', 'batter_season_walk', 'batter_season_out', 'batter_season_long', 'bs_single', 'bs_double', 'bs_triple', 'bs_home', 'bs_walk', 'bs_out', 'bs_long', 'fs_single', 'fs_double', 'fs_triple', 'fs_home', 'fs_walk', 'fs_out', 'fs_long', 'blr_single', 'blr_double', 'blr_triple', 'blr_home', 'blr_walk', 'blr_out', 'blr_long', 'pitcher_last3_single', 'pitcher_last3_double', 'pitcher_last3_triple', 'pitcher_last3_home', 'pitcher_last3_walk', 'pitcher_last3_out', 'pitcher_last3_long', 'pitcher_last5_single', 'pitcher_last5_double', 'pitcher_last5_triple', 'pitcher_last5_home', 'pitcher_last5_walk', 'pitcher_last5_out', 'pitcher_last5_long', 'pitcher_season_single', 'pitcher_season_double', 'pitcher_season_triple', 'pitcher_season_home', 'pitcher_season_walk', 'pitcher_season_out', 'pitcher_season_long', 'plr_single', 'plr_double', 'plr_triple', 'plr_home', 'plr_walk', 'plr_out', 'plr_long', 'batter_balltype_single', 'batter_balltype_double', 'batter_balltype_triple', 'batter_balltype_home', 'batter_balltype_walk', 'batter_balltype_out', 'batter_balltype_long', 'last2_speed', 'last3_speed', 'last4_speed', 'last5_speed', 'merged_result', 'normed_weather', 'normed_ball', 'normed_strike', 'normed_out', 'normed_pitch_num', 'normed_score_diff', 'predicted_result', 'file_name'],
['5', '1', '73', '12', '-4', '0', '0', '2', '1', '0', '0', '0', '0.0', '0.0', '0.0', '0.5', '0.0', '0.5', '0.5', '0.083', '0.042', '0.0', '0.042', '0.083', '0.75', '0.083', '0.087', '0.065', '0.0', '0.022', '0.043', '0.783', '0.087', '0.141', '0.052', '0.005', '0.033', '0.073', '0.696', '0.09', '0.195', '0.049', '0.0', '0.049', '0.0', '0.707', '0.098', '0.169', '0.021', '0.0', '0.036', '0.046', '0.728', '0.056', '0.141', '0.052', '0.005', '0.033', '0.073', '0.696', '0.09', '0.2', '0.053', '0.0', '0.067', '0.067', '0.613', '0.12', '0.206', '0.059', '0.0', '0.037', '0.066', '0.632', '0.096', '0.162', '0.033', '0.004', '0.027', '0.075', '0.699', '0.064', '0.162', '0.033', '0.004', '0.027', '0.075', '0.699', '0.064', '0.124', '0.108', '0.131', '0.108', '0.151', '0.124', '0.115', '89.988', '89.25', '88.882', '88.66', '3', '0.5679012345679013', '0.0', '0.0', '1.0', '0.0', '-0.16666666666666666', '3', '1.webm'],
['5', '0', '83', '13', '-1', '3', '2', '1', '8', '0', '0', '0', '1.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.083', '0.125', '0.0', '0.042', '0.042', '0.708', '0.167', '0.17', '0.085', '0.021', '0.021', '0.043', '0.66', '0.128', '0.176', '0.052', '0.008', '0.008', '0.092', '0.664', '0.068', '0.104', '0.021', '0.021', '0.0', '0.25', '0.604', '0.042', '0.201', '0.062', '0.0', '0.01', '0.067', '0.66', '0.072', '0.176', '0.052', '0.008', '0.008', '0.092', '0.664', '0.068', '0.146', '0.037', '0.0', '0.012', '0.073', '0.732', '0.049', '0.153', '0.046', '0.0', '0.015', '0.084', '0.702', '0.061', '0.146', '0.049', '0.0', '0.024', '0.084', '0.696', '0.073', '0.146', '0.049', '0.0', '0.024', '0.084', '0.696', '0.073', '0.172', '0.136', '0.136', '0.264', '0.199', '0.146', '0.179', '82.95', '84.1', '85.825', '87.5', '1', '0.691358024691358', '0.75', '1.0', '0.5', '0.35000000000000003', '-0.041666666666666664', '3', '2.webm']];
const verdict = ['短打', '長打', '保送', '出局'];
const ROW = table.length;
const wrongcorrect = ['錯', '對'];
const haveornot = ['沒', '有'];
const homeaway = ['客', '主'];
const WIN = 5;
const SHOWTIME = 1000;

let play_id;
let com_score;
let user_score;
let allow_click;
let finished;
let round;

reset_game();

async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
}

function reset_game() {
    round = 1;
    com_score = 0;
    user_score = 0;
    allow_click = 1;
    finished = 0;
    new_play();
}

function update_batter_info(val) {
    if (val == 0) {
        batter_info.innerHTML = '<br> <br> <br> <br>';
    } else {
        batter_info.innerHTML = '短打比率：' + (parseFloat(table[play_id][val]) * 100).toFixed(1) + '%<br>';
        batter_info.innerHTML += '長打比率：' + (parseFloat(table[play_id][val + 6]) * 100).toFixed(1) + '%<br>';
        batter_info.innerHTML += '保送比率：' + (parseFloat(table[play_id][val + 4]) * 100).toFixed(1) + '%<br>';
        batter_info.innerHTML += '出局比率：' + (parseFloat(table[play_id][val + 5]) * 100).toFixed(1) + '%';
    }
}

function update_pitcher_info(val) {
    if (val == 0) {
        pitcher_info.innerHTML = '<br> <br> <br> <br>';
    } else if (val == 1) {
        pitcher_info.innerHTML = '近兩球球速平均：' + parseFloat(table[play_id][96]).toFixed(2) + ' mph <br>';
        pitcher_info.innerHTML += '近三球球速平均：' + parseFloat(table[play_id][97]).toFixed(2) + ' mph <br>';
        pitcher_info.innerHTML += '近四球球速平均：' + parseFloat(table[play_id][98]).toFixed(2) + ' mph <br>';
        pitcher_info.innerHTML += '近五球球速平均：' + parseFloat(table[play_id][99]).toFixed(2) + ' mph';
    } else {
        pitcher_info.innerHTML = '短打比率：' + (parseFloat(table[play_id][val]) * 100).toFixed(1) + '%<br>';
        pitcher_info.innerHTML += '長打比率：' + (parseFloat(table[play_id][val + 6]) * 100).toFixed(1) + '%<br>';
        pitcher_info.innerHTML += '保送比率：' + (parseFloat(table[play_id][val + 4]) * 100).toFixed(1) + '%<br>';
        pitcher_info.innerHTML += '出局比率：' + (parseFloat(table[play_id][val + 5]) * 100).toFixed(1) + '%';
    }
}

function new_play() {
    play_id = getRandomInt(1, ROW);
    play.innerHTML = '請在左上角選擇你的猜測';
    document.getElementById("myVideo").src = table[play_id][108];
    update_batter_info(parseInt(batter_list.value));
    update_pitcher_info(parseInt(pitcher_list.value));
    update_scoreboard();
}

function update_scoreboard() {
    scoreboard.innerHTML = '電腦 ' + com_score + ' v.s. ' + user_score + ' 你';
    if (com_score >= WIN) {
        play.innerHTML = '遊戲結束，電腦獲勝';
        allow_click = 0;
        finished = 1;
    }
    if (user_score >= WIN) {
        play.innerHTML = '遊戲結束，玩家獲勝';
        allow_click = 0;
        finished = 1;
    }
}

async function guess(user_guess) {
    allow_click = 0;
    let com_guess = parseInt(table[play_id][107]);
    let true_ans = parseInt(table[play_id][100]);
    play.innerHTML = '你猜了' + verdict[user_guess] + '，電腦猜了' + verdict[com_guess];
    await sleep(SHOWTIME);
    var elevideo = document.getElementById("myVideo");
    elevideo.play();
    let f = 0;
    elevideo.addEventListener('ended', async function () {
        if (f) return;
        f = 1;
        console.log(111);
        let user_correct = 0, com_correct = 0;
        if (user_guess == true_ans) {
            user_correct = 1;
        }
        if (com_guess == true_ans) {
            com_correct = 1;
        }
        play.innerHTML = '正確答案為' + verdict[true_ans];
        await sleep(SHOWTIME);
        play.innerHTML = '你猜' + wrongcorrect[user_correct] + '了，電腦猜' + wrongcorrect[com_correct] + '了！';
        await sleep(SHOWTIME);
        if (com_correct == user_correct) {
            play.innerHTML = '雙方分數維持不變';
        } else if (com_correct == 1) {
            play.innerHTML = '電腦獲得一分';
            com_score++;
        } else {
            play.innerHTML = '玩家獲得一分';
            user_score++;
        }
        await sleep(SHOWTIME);
        allow_click = 1;
        new_play();
        update_scoreboard();
        var table = document.getElementById("history");
        var row = table.insertRow(round);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = round;
        cell2.innerHTML = verdict[user_guess];
        cell3.innerHTML = verdict[com_guess];
        cell4.innerHTML = verdict[true_ans];
        round++;
    });
}

document.querySelector("#short").onclick = function(e) {
    if (allow_click) {
        guess(0);
    }
};
document.querySelector("#long").onclick = function(e) {
    if (allow_click) {
        guess(1);
    }
};
document.querySelector("#walk").onclick = function(e) {
    if (allow_click) {
        guess(2);
    }
};
document.querySelector("#out").onclick = function(e) {
    if (allow_click) {
        guess(3);
    }
};
document.querySelector("#out").onclick = function(e) {
    if (allow_click) {
        guess(3);
    }
};
document.querySelector("#reset").onclick = function(e) {
    if (allow_click || finished) {
        reset_game();
    }
}
document.querySelector("#batter_list").onchange = function(e) {
    update_batter_info(parseInt(this.value));
}
document.querySelector("#pitcher_list").onchange = function(e) {
    update_pitcher_info(parseInt(this.value));
}