$(document).ready(function() {
    start_player_list = [];
    $("#add-player-to-list").hide();
    $("#show_start_player").hide();
    $("#ready-start").hide();
    $(".started").hide();
      $("#winner-last").hide();
      let winner_last = 'yeet'
    num_player = 0;
    $("#add-player").click(function() {
      num_player = $("#input-player").val();
      leaderboard();
      $("#add-player-to-list").show(400);
    });
  
    function shuffle(arra1) {
      var ctr = arra1.length,
        temp,
        index;
  
      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
      }
    }
  
    function leaderboard() {
      $("#name-row").empty();
      for (let i = 0; i < num_player; i++) {
        $("#name-row").append(
          `<input type='text' style="text-align:center; border-radius:10px;" id="player_${i}" class='container mb-2 mt-2' placeholder='Name of player'> `
        );
      }
    }
    $("#add-player-to-list").click(function() {
      for (var i = 0; i < num_player; i++) {
        console.log(num_player);
        start_player_list.push($(`#player_${i}`).val());
        shuffle(start_player_list);
        console.log(start_player_list);
      }
      for (let j = 0; j < num_player; j++) {
        $("#show_start_player").append(
          `<input type='text' id="player_start_list${i}" style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' placeholder='${start_player_list[j]}' disabled>`
        );
      }
      $("#start").hide(300);
  
      $("#show_start_player").show(300);
      $("#ready-start").show(300);
    });
  
    $("#ready-start").click(function() {
      $("#add-player-to-list").hide();
      $("#show_start_player").hide();
      $("#ready-start").hide();
      $(".started").show(300);
  
      if (start_player_list.length >= 2) {
        $("#game").append(
          ` <label class='container mb-2 mt-2'>Player 1</label>
            <input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_1' placeholder='${start_player_list[0]}' disabled>`
        );
        $("#game").append(
          `
            <label class='container mb-2 mt-2'>Player 2</label>
            <input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_2' placeholder='${start_player_list[1]}' disabled>`
        );
      }
    });
    let winner = [];
    let loser = [];
    $("#next-game-1").click(function() {
      winner.push(start_player_list[0]);
      loser.push(start_player_list[1]);
      console.log("avant", start_player_list, "winner", winner);
      start_player_list.shift();
      start_player_list.shift();
      console.log("apres", start_player_list, "loser", loser);
  
      if (start_player_list.length < 2 && winner.length < 2) {
        $(".started").hide();
        console.log(start_player_list);
        $("#winner-last").append(
          `<h1> Final Winner is ${winner[0]} </h1>`
        );
  
        $("#winner-last").show(300);
      }
      if (start_player_list.length >= 2) {
        $("#game").empty();
        $("#game").append(
          `<input type='text'style="text-align:center;" class='container mb-2 mt-2' id='player_1' placeholder='${start_player_list[0]}' disabled>`
        );
        $("#game").append(
          `<input type='text'style="text-align:center;" class='container mb-2 mt-2' id='player_2' placeholder='${start_player_list[1]}' disabled>`
        );
      } else if (start_player_list.length < 2) {
        for (let i = 0; i < winner.length; i++) {
          start_player_list.push(winner[i]);
        }
        
  
          winner = [];
          winner_last = start_player_list[0];
        console.log("restant start", start_player_list);
        console.log("restant winner", winner);
        $("#game").empty();
        $("#game").append(
          `<input type='text'style="text-align:center;" class='container mb-2 mt-2' id='player_1' placeholder='${start_player_list[0]}' disabled>`
        );
        $("#game").append(
          `<input type='text'style="text-align:center;" class='container mb-2 mt-2' id='player_2' placeholder='${start_player_list[1]}' disabled>`
        );
      }
    });
    $("#next-game-2").click(function() {
      winner.push(start_player_list[1]);
      loser.push(start_player_list[0]);
      console.log("avant", start_player_list, "winner", winner);
      start_player_list.shift();
      start_player_list.shift();
      console.log("apres", start_player_list, "loser", loser);
  
      if (start_player_list.length < 2 && winner.length < 2) {
        $(".started").hide();
        console.log('listtttttt', start_player_list);
  
        $("#winner-last").append(
          `<h1> Final Winner is ${winner[0]} </h1>`
        );
  
        $("#winner-last").show(300);
      }
      if (start_player_list.length >= 2) {
        $("#game").empty();
        $("#game").append(
          `<input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_1' placeholder='${start_player_list[0]}' disabled>`
        );
        $("#game").append(
          `<input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_2' placeholder='${start_player_list[1]}' disabled>`
        );
      } else if (start_player_list.length < 2) {
          console.log('yeeeeet', winner)
        for (let i = 0; i < winner.length; i++) {
          start_player_list.push(winner[i]);
        }
        
        winner = [];
        
        winner_last = start_player_list[1]
        console.log("restant start", start_player_list , winner_last);
        console.log("restant winner", winner);
        $("#game").empty();
        $("#game").append(
          `<input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_1' placeholder='${start_player_list[0]}' disabled>`
        );
        $("#game").append(
          `<input type='text'style="text-align:center; border-radius:10px;" class='container mb-2 mt-2' id='player_2' placeholder='${start_player_list[1]}' disabled>`
        );
      }
    });
  });