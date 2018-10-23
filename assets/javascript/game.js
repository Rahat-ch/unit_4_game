$(document).ready(function() {

  var ted = {
    name: "Ted",
    health: 30,
    attack: 8,
    image: "assets/images/ted.jpg",
    imgClass1: "class = 'slapper' id = 'ted1'",
    imgClass2: "class = 'slapper' id = 'ted2'",
    imgClassStatic: "class = 'slapper' id = 'tedStatic'",
    imgClass3: "class = 'slapper, defender' id = 'ted3'",
    counterAttack: 15,
  };

  var barney = {
    name: "Barney",
    health: 30,
    attack: 14,
    image: "assets/images/barney.jpg",
    imgClass1: "class = 'slapper' id = 'barney1'",
    imgClass2: "class = 'slapper' id = 'barney2'",
    imgClassStatic: "class = 'slapper' id = 'barneyStatic'",
    imgClass3: "class = 'slapper,defender' id = 'barney3'",
    counterAttack: 5,
  };

  var marshall = {
    name: "Marshall",
    health: 30,
    attack: 8,
    image: "assets/images/marshall.webp",
    imgClass1: "class = 'slapper' id = 'marshall1'",
    imgClass2: "class = 'slapper' id = 'marshall2'",
    imgClassStatic: "class = 'slapper' id = 'marshallStatic'",
    imgClass3: "class = 'slapper, defender' id = 'marshall3'",
    counterAttack: 20,
  };

  var lily = {
    name: "Lily",
    health: 30,
    attack: 7,
    image: "assets/images/lily.jpg",
    imgClass1: "class = 'slapper' id = 'lily1'",
    imgClass2: "class = 'slapper' id = 'lily2'",
    imgClassStatic: "class = 'slapper' id = 'lilyStatic'",
    imgClass3: "class = 'slapper, defender' id = 'lily3'",
    counterAttack: 25,
  };




// This is to display all of the slappers for selection - damn this looks messy lol

  $("#slapper_selection").append("<img src = '" + ted.image + "'" + ted.imgClass1 + " alt = 'slapper'> ");

  $("#slapper_selection").append("<img src = '" + barney.image + "'" + barney.imgClass1 + " alt = 'slapper'> ");

  $("#slapper_selection").append("<img src = '" + marshall.image + "'" + marshall.imgClass1 + " alt = 'slapper'> ");

  $("#slapper_selection").append("<img src = '" + lily.image + "'" + lily.imgClass1 + " alt = 'slapper'> ");
  $("#action_display").append("<p> Choose a Slapper to Begin </p>");

  //funciton to erase appended picture when needed
  function erase ($slapper) {
    $slapper.remove();
  };


  //click functions after selecting a character the others need to move to enemy slappers

  $("#ted1").click(function(){
    erase($("#barney1","#marshall1","#lily1","#ted1"))
    $("#selected_slapper").append("<img src = '" + ted.image + "'" + ted.imgClassStatic + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + barney.image + "'" + barney.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + marshall.image + "'" + marshall.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + lily.image + "'" + lily.imgClass2 + " alt = 'slapper'> ");

    $("#slapper_selection").remove();

    $("#action_display").append("<p> You Chose Ted! Now click an enemy to slap them! </p>");

    $("#data").data(ted);

  });

  $("#barney1").click(function(){
    erase($("#barney1","#marshall1","#lily1","#ted1"))
    $("#selected_slapper").append("<img src = '" + barney.image + "'" + barney.imgClassStatic + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + ted.image + "'" + ted.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + marshall.image + "'" + marshall.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + lily.image + "'" + lily.imgClass2 + " alt = 'slapper'> ");
    $("#slapper_selection").remove();

    $("#action_display").append("<p> You Chose Barney! Now click an enemy to slap them! </p>");

    $("#data").data(barney);

  });

  $("#marshall1").click(function(){
    erase($("#barney1","#marshall1","#lily1","#ted1"));

    $("#selected_slapper").append("<img src = '" + marshall.image + "'" + marshall.imgClassStatic + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + ted.image + "'" + ted.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + barney.image + "'" + barney.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + lily.image + "'" + lily.imgClass2 + " alt = 'slapper'> ");

    $("#slapper_selection").remove();

    $("#action_display").append("<p> You Chose Marshall! Now click an enemy to slap them! </p>");

    $("#data").data(marshall);
  });

  $("#lily1").click(function(){
    erase($("#barney1","#marshall1","#lily1","#ted1"));

    $("#selected_slapper").append("<img src = '" + lily.image + "'" + lily.imgClassStatic + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + ted.image + "'" + ted.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + barney.image + "'" + barney.imgClass2 + " alt = 'slapper'> ");

    $("#enemy_slappers").append("<img src = '" + marshall.image + "'" + marshall.imgClass2 + " alt = 'slapper'> ");

    $("#slapper_selection").remove();

    $("#action_display").append("<p> You Chose Lily! Now click an enemy to slap them! </p>");

    $("#data").data(lily);
  });

  //click functions for moving enemy slappers to defenders

  $(document).on("click", "#ted2", function(){
    erase($("#ted2"));

    $("#enemy_defender").html("<img src = '" + ted.image + "'" + ted.imgClass3 + " alt = 'slapper'> ");

    var chosenSlapper = $("#data").data();

    $("#action_display").append("<p> Your Enemy is Ted! His health is " + ted.health + ". Your health is " + chosenSlapper.health + " click Slap to hit him! </p>");
  });

  $(document).on("click", "#barney2", function(){
    erase($("#barney2"));

    $("#enemy_defender").html("<img src = '" + barney.image + "'" + barney.imgClass3 + " alt = 'slapper'> ");

    $("#action_display").append("<p> Your Enemy is Barney! His health is " + barney.health + ". Your health is " + chosenSlapper.health + " click Slap to hit him! </p>");
  });

  $(document).on("click", "#marshall2", function(){
    erase($("#marshall2"));

    $("#enemy_defender").html("<img src = '" + marshall.image + "'" + marshall.imgClass3 + " alt = 'slapper'> ");

    $("#action_display").append("<p> Your Enemy is Marshall! His health is " + marshall.health + ". Your health is " + chosenSlapper.health + " click Slap to hit him! </p>");
  });

  $(document).on("click", "#lily2", function(){
    erase($("#lily2"));

    $("#enemy_defender").html("<img src = '" + lily.image + "'" + lily.imgClass3 + " alt = 'slapper'> ");

    $("#action_display").append("<p> Your Enemy is Lily! Her health is " + lily.health + ". Your health is " + chosenSlapper.health + " click Slap to hit her! </p>");
    });


  // Game logic for slap button - currently buggy


var chosenSlapper = $("#data").data();
var turnCounter = 1;
var winCounter = 0;

//
  $("#slap_button").click(function(){
    console.log($('#ted3').length);
    if ($('#ted3').length > 0) {
      turnCounter++;
      var enemyHealth = ted.health;
      var yourHealth = chosenSlapper.health;
      var yourAttack = chosenSlapper.attack;
      var counterAttack = ted.counterAttack;



      function slapping1() {
        $("#action_display").append("<p> You attacked Ted and dealt " + yourAttack + " damage, but Ted hit you back for " + counterAttack + " damage. </p>");
        yourAttack = parseInt(yourAttack) * parseInt(turnCounter);
        enemyHealth = parseInt(enemyHealth) - parseInt(yourAttack);
        yourHealth = parseInt(yourHealth) - parseInt(counterAttack);
        $("#action_display").append("<p> Your health: " + yourHealth + "</p> <p> Enemy Health: " + enemyHealth + "<p>");
        if (enemyHealth <= 0) {
          winCounter++;
          erase($('#ted3'));
          $("#action_display").append("<p> You Beat Ted, click another opponent!")
        }
        if (winCounter === 3) {
               $("#myVideo").removeAttr("style")
               $('#myVideo').get(0).play();

               $("#action_display").append("<p> You Win!")

        };
      }

      slapping1();
      console.log("this is wincounter " + winCounter);
}

  });

  $("#slap_button").click(function(){
    console.log($('#barney3').length);
    if ($('#barney3').length > 0) {
      turnCounter++;
      var enemyHealth = barney.health;
      var yourHealth = chosenSlapper.health;
      var yourAttack = chosenSlapper.attack;
      var counterAttack = barney.counterAttack;


      function slapping2() {
        $("#action_display").append("<p> You attacked Barney and dealt " + yourAttack + " damage, but Barney hit you back for " + counterAttack + " damage. </p>");
        yourAttack = parseInt(yourAttack) * parseInt(turnCounter);
        enemyHealth = parseInt(enemyHealth) - parseInt(yourAttack);
        yourHealth = parseInt(yourHealth) - parseInt(counterAttack);
        $("#action_display").append("<p> Your health: " + yourHealth + "</p> <p> Enemy Health: " + enemyHealth + "<p>");
        if (enemyHealth <= 0) {
          winCounter++;
          erase($('#barney3'));
          $("#action_display").append("<p> You Beat Barney, click another opponent!")
        }
        if (winCounter === 3) {
               $("#myVideo").removeAttr("style")
               $('#myVideo').get(0).play();

               $("#action_display").append("<p> You Win!")

        };
      }

      slapping2();
      console.log("this is wincounter " + winCounter);
}

  });

  $("#slap_button").click(function(){
    console.log($('#marshall3').length);
    if ($('#marshall3').length > 0) {
      turnCounter++;
      var enemyHealth = marshall.health;
      var yourHealth = chosenSlapper.health;
      var yourAttack = chosenSlapper.attack;
      var counterAttack = marshall.counterAttack;


      function slapping3() {
        $("#action_display").append("<p> You attacked Marshall and dealt " + yourAttack + " damage, but Marshall hit you back for " + counterAttack + " damage. </p>");
        yourAttack = parseInt(yourAttack) * parseInt(turnCounter);
        enemyHealth = parseInt(enemyHealth) - parseInt(yourAttack);
        yourHealth = parseInt(yourHealth) - parseInt(counterAttack);
        $("#action_display").append("<p> Your health: " + yourHealth + "</p> <p> Enemy Health: " + enemyHealth + "<p>");
        if (enemyHealth <= 0) {
          winCounter++;
          erase($('#marshall3'));
          $("#action_display").append("<p> You Beat Marshall, click another opponent!")
        }
        if (winCounter === 3) {
               $("#myVideo").removeAttr("style")
               $('#myVideo').get(0).play();

               $("#action_display").append("<p> You Win! </p>")

        };
      }

      slapping3();
      console.log("this is wincounter " + winCounter);
}

  });


  $("#slap_button").click(function(){
    console.log($('#lily3').length);
    if ($('#lily3').length > 0) {
      turnCounter++;
      var enemyHealth = marshall.health;
      var yourHealth = chosenSlapper.health;
      var yourAttack = chosenSlapper.attack;
      var counterAttack = marshall.counterAttack;


      function slapping4() {
        $("#action_display").append("<p> You attacked Lily and dealt " + yourAttack + " damage, but Lily hit you back for " + counterAttack + " damage. </p>");
        yourAttack = parseInt(yourAttack) * parseInt(turnCounter);
        enemyHealth = parseInt(enemyHealth) - parseInt(yourAttack);
        yourHealth = parseInt(yourHealth) - parseInt(counterAttack);
        $("#action_display").append("<p> Your health: " + yourHealth + "</p> <p> Enemy Health: " + enemyHealth + "<p>");
        if (enemyHealth <= 0) {
          winCounter++;
          erase($('#lily3'));
          $("#action_display").append("<p> You Beat Lily, click another opponent!")
        }
        if (winCounter === 3) {
               $("#myVideo").removeAttr("style")
               $('#myVideo').get(0).play();

               $("#action_display").append("<p> You Win!")

        };
      }

      slapping4();
      console.log("this is wincounter " + winCounter);
}

  });









});
