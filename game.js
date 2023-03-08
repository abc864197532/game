const table = [['result', 'home', 'weather', 'balltypes', 'score_diff', 'ball', 'strike', 'out', 'pitch_num', '1b', '2b', '3b', 'batter_today_single', 'batter_today_double', 'batter_today_triple', 'batter_today_home', 'batter_today_walk', 'batter_today_out', 'batter_today_long', 'batter_last5_single', 'batter_last5_double', 'batter_last5_triple', 'batter_last5_home', 'batter_last5_walk', 'batter_last5_out', 'batter_last5_long', 'batter_last10_single', 'batter_last10_double', 'batter_last10_triple', 'batter_last10_home', 'batter_last10_walk', 'batter_last10_out', 'batter_last10_long', 'batter_season_single', 'batter_season_double', 'batter_season_triple', 'batter_season_home', 'batter_season_walk', 'batter_season_out', 'batter_season_long', 'bs_single', 'bs_double', 'bs_triple', 'bs_home', 'bs_walk', 'bs_out', 'bs_long', 'fs_single', 'fs_double', 'fs_triple', 'fs_home', 'fs_walk', 'fs_out', 'fs_long', 'blr_single', 'blr_double', 'blr_triple', 'blr_home', 'blr_walk', 'blr_out', 'blr_long', 'pitcher_last3_single', 'pitcher_last3_double', 'pitcher_last3_triple', 'pitcher_last3_home', 'pitcher_last3_walk', 'pitcher_last3_out', 'pitcher_last3_long', 'pitcher_last5_single', 'pitcher_last5_double', 'pitcher_last5_triple', 'pitcher_last5_home', 'pitcher_last5_walk', 'pitcher_last5_out', 'pitcher_last5_long', 'pitcher_season_single', 'pitcher_season_double', 'pitcher_season_triple', 'pitcher_season_home', 'pitcher_season_walk', 'pitcher_season_out', 'pitcher_season_long', 'plr_single', 'plr_double', 'plr_triple', 'plr_home', 'plr_walk', 'plr_out', 'plr_long', 'batter_balltype_single', 'batter_balltype_double', 'batter_balltype_triple', 'batter_balltype_home', 'batter_balltype_walk', 'batter_balltype_out', 'batter_balltype_long', 'last2_speed', 'last3_speed', 'last4_speed', 'last5_speed', 'merged_result', 'normed_weather', 'normed_ball', 'normed_strike', 'normed_out', 'normed_pitch_num', 'normed_score_diff', 'predicted_result', 'bat_id'],
['5', '0', '63', '9', '1', '3', '2', '1', '6', '1', '0', '0', '0.667', '0.0', '0.0', '0.0', '0.0', '0.333', '0.0', '0.222', '0.056', '0.0', '0.0', '0.111', '0.611', '0.056', '0.222', '0.056', '0.0', '0.0', '0.111', '0.611', '0.056', '0.286', '0.048', '0.0', '0.0', '0.095', '0.571', '0.048', '0.0', '0.0', '0.0', '0.0', '0.2', '0.8', '0.0', '0.167', '0.0', '0.0', '0.0', '0.0', '0.833', '0.0', '0.286', '0.048', '0.0', '0.0', '0.095', '0.571', '0.048', '0.15', '0.0', '0.05', '0.0', '0.15', '0.65', '0.05', '0.15', '0.0', '0.05', '0.0', '0.15', '0.65', '0.05', '0.184', '0.02', '0.02', '0.02', '0.122', '0.633', '0.061', '0.184', '0.02', '0.02', '0.02', '0.122', '0.633', '0.061', '0.256', '0.0', '0.0', '0.0', '0.0', '0.076', '0.0', '84.5', '82.4', '81.325', '82.8', '3', '0.44444444444444436', '0.75', '1.0', '0.5', '0.2941176470588235', '0.041666666666666664', '2', '2015006368'],
['5', '0', '69', '13', '1', '2', '2', '2', '5', '0', '0', '1', '0.333', '0.333', '0.0', '0.0', '0.0', '0.333', '0.333', '0.261', '0.043', '0.0', '0.0', '0.087', '0.609', '0.043', '0.2', '0.022', '0.0', '0.0', '0.044', '0.733', '0.022', '0.236', '0.036', '0.0', '0.0', '0.121', '0.607', '0.036', '0.1', '0.05', '0.0', '0.0', '0.0', '0.85', '0.05', '0.333', '0.0', '0.0', '0.0', '0.333', '0.333', '0.0', '0.236', '0.036', '0.0', '0.0', '0.121', '0.607', '0.036', '0.113', '0.085', '0.0', '0.028', '0.155', '0.62', '0.113', '0.089', '0.057', '0.0', '0.016', '0.114', '0.724', '0.073', '0.109', '0.057', '0.0', '0.017', '0.109', '0.709', '0.074', '0.109', '0.057', '0.0', '0.017', '0.109', '0.709', '0.074', '0.171', '0.246', '0.0', '0.0', '0.179', '0.207', '0.082', '84.55', '86.4', '87.35', '88.0', '3', '0.5185185185185186', '0.5', '1.0', '1.0', '0.23529411764705882', '0.041666666666666664', '3', '2015036126'],
['0', '1', '73', '7', '-1', '2', '2', '2', '5', '1', '1', '1', '0.0', '0.5', '0.0', '0.0', '0.0', '0.5', '0.5', '0.286', '0.0', '0.0', '0.0', '0.048', '0.667', '0.0', '0.227', '0.045', '0.0', '0.023', '0.068', '0.636', '0.068', '0.179', '0.042', '0.005', '0.016', '0.058', '0.699', '0.063', '0.163', '0.013', '0.0', '0.0', '0.0', '0.825', '0.013', '0.2', '0.0', '0.0', '0.1', '0.1', '0.6', '0.1', '0.179', '0.042', '0.005', '0.016', '0.058', '0.699', '0.063', '0.111', '0.025', '0.0', '0.037', '0.074', '0.753', '0.062', '0.137', '0.032', '0.008', '0.048', '0.081', '0.694', '0.089', '0.162', '0.046', '0.002', '0.026', '0.071', '0.693', '0.074', '0.162', '0.046', '0.002', '0.026', '0.071', '0.693', '0.074', '0.15', '0.184', '0.191', '0.212', '0.241', '0.157', '0.196', '82.35', '84.733', '85.825', '86.74', '0', '0.5679012345679013', '0.5', '1.0', '1.0', '0.23529411764705882', '-0.041666666666666664', '3', '2015141524'],
['0', '0', '61', '4', '3', '1', '0', '2', '2', '0', '0', '0', '0.0', '0.0', '0.0', '0.0', '0.0', '1.0', '0.0', '0.211', '0.105', '0.0', '0.0', '0.158', '0.526', '0.105', '0.179', '0.051', '0.0', '0.0', '0.103', '0.667', '0.051', '0.168', '0.051', '0.003', '0.01', '0.073', '0.694', '0.064', '0.196', '0.087', '0.0', '0.043', '0.0', '0.674', '0.13', '0.166', '0.066', '0.003', '0.008', '0.074', '0.683', '0.077', '0.168', '0.051', '0.003', '0.01', '0.073', '0.694', '0.064', '0.067', '0.067', '0.0', '0.0', '0.133', '0.733', '0.067', '0.091', '0.045', '0.0', '0.0', '0.136', '0.727', '0.045', '0.082', '0.061', '0.0', '0.031', '0.143', '0.684', '0.092', '0.082', '0.061', '0.0', '0.031', '0.143', '0.684', '0.092', '0.185', '0.201', '0.215', '0.21', '0.191', '0.215', '0.209', '92.85', '90.553', '89.405', '88.716', '0', '0.4197530864197531', '0.25', '0.0', '1.0', '0.058823529411764705', '0.125', '3', '2016004526'],
['1', '0', '73', '1', '1', '1', '2', '2', '4', '1', '0', '0', '0.0', '0.0', '0.0', '0.0', '0.0', '1.0', '0.0', '0.19', '0.0', '0.0', '0.19', '0.095', '0.524', '0.19', '0.095', '0.071', '0.0', '0.119', '0.119', '0.595', '0.19', '0.136', '0.058', '0.001', '0.069', '0.195', '0.541', '0.129', '0.115', '0.023', '0.0', '0.092', '0.0', '0.77', '0.115', '0.152', '0.082', '0.0', '0.07', '0.209', '0.487', '0.152', '0.136', '0.058', '0.001', '0.069', '0.195', '0.541', '0.129', '0.169', '0.042', '0.014', '0.014', '0.056', '0.704', '0.07', '0.156', '0.057', '0.008', '0.008', '0.057', '0.713', '0.074', '0.142', '0.064', '0.005', '0.034', '0.057', '0.699', '0.103', '0.142', '0.064', '0.005', '0.034', '0.057', '0.699', '0.103', '0.202', '0.124', '0.0', '0.22', '0.208', '0.201', '0.114', '83.65', '85.933', '83.2', '84.054', '1', '0.5679012345679013', '0.25', '1.0', '1.0', '0.1764705882352941', '0.041666666666666664', '3', '2016016362'],
['5', '0', '86', '1', '3', '2', '2', '0', '5', '0', '0', '0', '0.0', '0.5', '0.0', '0.0', '0.0', '0.5', '0.5', '0.222', '0.0', '0.0', '0.0', '0.0', '0.778', '0.0', '0.182', '0.0', '0.0', '0.0', '0.0', '0.818', '0.0', '0.154', '0.077', '0.0', '0.0', '0.0', '0.769', '0.077', '0.0', '0.0', '0.0', '0.0', '0.0', '1.0', '0.0', '0.143', '0.143', '0.0', '0.0', '0.0', '0.714', '0.143', '0.167', '0.0', '0.0', '0.0', '0.0', '0.833', '0.0', '0.205', '0.068', '0.0', '0.023', '0.068', '0.636', '0.091', '0.15', '0.083', '0.0', '0.017', '0.117', '0.633', '0.1', '0.116', '0.084', '0.0', '0.021', '0.095', '0.684', '0.105', '0.116', '0.084', '0.0', '0.021', '0.095', '0.684', '0.105', '0.129', '0.118', '0.0', '0.0', '0.0', '0.12', '0.039', '78.2', '81.8', '81.75', '81.46', '3', '0.728395061728395', '0.5', '1.0', '0.0', '0.23529411764705882', '0.125', '3', '2017063572'],
['3', '0', '73', '4', '0', '3', '1', '1', '5', '0', '0', '0', '1.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.136', '0.091', '0.0', '0.045', '0.136', '0.591', '0.136', '0.22', '0.049', '0.0', '0.024', '0.122', '0.585', '0.073', '0.135', '0.044', '0.008', '0.042', '0.06', '0.711', '0.094', '0.098', '0.02', '0.0', '0.02', '0.392', '0.471', '0.039', '0.144', '0.044', '0.008', '0.043', '0.062', '0.7', '0.095', '0.135', '0.044', '0.008', '0.042', '0.06', '0.711', '0.094', '0.101', '0.029', '0.014', '0.058', '0.043', '0.754', '0.101', '0.143', '0.034', '0.008', '0.042', '0.042', '0.731', '0.084', '0.124', '0.037', '0.004', '0.03', '0.072', '0.733', '0.071', '0.124', '0.037', '0.004', '0.03', '0.072', '0.733', '0.071', '0.201', '0.223', '0.19', '0.272', '0.269', '0.225', '0.228', '93.95', '93.967', '93.9', '93.72', '1', '0.5679012345679013', '0.75', '0.5', '0.5', '0.23529411764705882', '0.0', '2', '2018120069'],
['4', '0', '73', '4', '1', '3', '2', '2', '6', '0', '1', '0', '0.0', '0.0', '0.0', '0.0', '0.0', '1.0', '0.0', '0.095', '0.0', '0.0', '0.048', '0.286', '0.571', '0.048', '0.07', '0.0', '0.0', '0.093', '0.209', '0.628', '0.093', '0.064', '0.032', '0.005', '0.068', '0.144', '0.687', '0.104', '0.022', '0.013', '0.0', '0.031', '0.439', '0.496', '0.044', '0.051', '0.01', '0.01', '0.061', '0.184', '0.684', '0.082', '0.064', '0.032', '0.005', '0.068', '0.144', '0.687', '0.104', '0.101', '0.029', '0.014', '0.058', '0.043', '0.754', '0.101', '0.143', '0.034', '0.008', '0.042', '0.042', '0.731', '0.084', '0.124', '0.037', '0.004', '0.031', '0.072', '0.733', '0.072', '0.124', '0.037', '0.004', '0.031', '0.072', '0.733', '0.072', '0.162', '0.188', '0.118', '0.235', '0.223', '0.222', '0.18', '95.75', '95.4', '95.225', '95.24', '2', '0.5679012345679013', '0.75', '1.0', '1.0', '0.2941176470588235', '0.041666666666666664', '2', '2018120072'],
['5', '0', '72', '12', '-1', '1', '0', '1', '2', '1', '1', '0', '0.25', '0.0', '0.0', '0.0', '0.0', '0.75', '0.0', '0.222', '0.0', '0.0', '0.0', '0.056', '0.722', '0.0', '0.216', '0.0', '0.0', '0.0', '0.054', '0.73', '0.0', '0.165', '0.046', '0.006', '0.03', '0.082', '0.671', '0.082', '0.222', '0.072', '0.015', '0.046', '0.0', '0.644', '0.134', '0.13', '0.033', '0.008', '0.0', '0.065', '0.764', '0.041', '0.165', '0.046', '0.006', '0.03', '0.082', '0.671', '0.082', '0.111', '0.0', '0.0', '0.0', '0.0', '0.889', '0.0', '0.067', '0.0', '0.0', '0.0', '0.0', '0.933', '0.0', '0.15', '0.028', '0.001', '0.01', '0.088', '0.722', '0.039', '0.15', '0.028', '0.001', '0.01', '0.088', '0.722', '0.039', '0.117', '0.112', '0.135', '0.055', '0.113', '0.108', '0.101', '94.25', '94.418', '94.503', '94.553', '3', '0.5555555555555556', '0.25', '0.0', '0.5', '0.058823529411764705', '-0.041666666666666664', '3', '2018171937']];
const verdict = ['短打', '長打', '保送', '出局'];
const ROW = table.length;
const wrongcorrect = ['錯', '對'];
const haveornot = ['沒', '有'];
const homeaway = ['客', '主'];
const WIN = 5;
const SHOWTIME = 2000;

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
    document.getElementById("myVideo").src = table[play_id][108] + '.webm';
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