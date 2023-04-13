var lastCmid = 0

var activeCgid = 0

var reSmile = /:([a-z0-9A-Z_-]+):/
/*##EMOJILIST*/
var namedEmojiString =
  "-10,-1,100,1234,8ball,a,ab,abc,abcd,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,astonished,atm,b,baby,baby_bottle,baby_chick,baby_symbol,back,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,bar_chart,barber,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_medium_small_square,black_medium_square,black_nib,black_small_square,black_square,black_square_button,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,book,bookmark,bookmark_tabs,books,boom,boot,bouquet,bow,bowling,bowtie,boy,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,car,card_index,carousel_horse,cat,cat2,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cl,clap,clapper,clipboard,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couple,couple_with_heart,couplekiss,cow,cow2,credit_card,crescent_moon,crocodile,crossed_flags,crown,cry,crying_cat_face,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,de,deciduous_tree,department_store,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy,dizzy_face,do_not_litter,dog,dog2,dollar,dolls,dolphin,donut,door,doughnut,dragon,dragon_face,dress,dromedary_camel,droplet,dvd,e-mail,ear,ear_of_rice,earth_africa,earth_americas,earth_asia,egg,eggplant,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,email,end,envelope,es,euro,european_castle,european_post_office,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire,fire_engine,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four,four_leaf_clover,fr,free,fried_shrimp,fries,frog,frowning,fu,fuelpump,full_moon,full_moon_with_face,game_die,gb,gem,gemini,ghost,gift,gift_heart,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grin,grinning,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,hand,handbag,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honey_pot,honeybee,horse,horse_racing,hospital,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,joy,joy_cat,jp,key,keycap_ten,kimono,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing_smiling_eyes,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leo,leopard,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,m,mag,mag_right,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,man,man_with_gua_pi_mao,man_with_turban,mans_shoe,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,money_with_wings,moneybag,monkey,monkey_face,monorail,mortar_board,mount_fuji,mountain_bicyclist,mountain_cableway,mountain_railway,mouse,mouse2,movie_camera,moyai,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new,new_moon,new_moon_with_face,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,ok,ok_hand,ok_woman,older_man,older_woman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,open_file_folder,open_hands,open_mouth,ophiuchus,orange_book,outbox_tray,ox,package,page_facing_up,page_with_curl,pager,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil,pencil2,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig,pig2,pig_nose,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up,point_up_2,police_car,poodle,poop,post_office,postal_horn,postbox,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit,rabbit2,racehorse,radio,radio_button,rage,rage1,rage2,rage3,rage4,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ram,ramen,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat,repeat_one,restroom,revolving_hearts,rewind,ribbon,rice,rice_ball,rice_cracker,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,ru,rugby_football,runner,running,running_shirt_with_sash,sa,sagittarius,sailboat,sake,sandal,santa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,seven,shaved_ice,sheep,shell,ship,shipit,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_imp,smirk,smirk_cat,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkle,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speech_balloon,speedboat,squirrel,star,star2,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,surfer,sushi,suspect,suspension_railway,sweat,sweat_drops,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger,tiger2,tired_face,tm,toilet,tokyo_tower,tomato,tongue,top,tophat,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,v,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale,whale2,wheelchair,white_check_mark,white_circle,white_flower,white_large_square,white_medium_small_square,white_medium_square,white_small_square,white_square_button,wind_chime,wine_glass,wink,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz"

var namedEmoji = namedEmojiString.split(/,/)
console.log({ namedEmoji })

let liSmiles = ""
let fragment = document.createDocumentFragment()
// for (var i = 0; i < namedEmoji.length; i++) {
for (var i = 0; i <= 5; i++) {
  liSmiles += `<li data-smile="${namedEmoji[i]}"><img src="./img/emojis/${namedEmoji[i]}.png"></li>`
}

document
  .querySelector(".dropdown-smile .dropdown-menu")
  .insertAdjacentHTML("afterBegin", liSmiles)
// document.querySelector(".dropdown-smile .dropdown-menu").innerHTML = liSmiles

// var post = { ajaxRequest: true }
// getListGroup(post, true, [false, 0]);

// $.ajax({
// 	url: '/chat/getcontactlist',
// 	data: post,
// 	type: 'post',
// 	success: function(res) {
// 		res = JSON.parse(res);
// 		if(res.status == 1){
// 			$('.board-chat #chat-contacts-big .inbox-widget').html(res.data);
// 			$('.board-chat .search-list-contact').html(res.data);
// 		}else{
// 			$('.board-chat #chat-contacts-big .inbox-widget').html('<div class="chat-out-groups">Не найдено ни одного контакта</div>');
// 			$('.board-chat .search-list-contact').html('<div class="chat-out-groups">Не найдено ни одного контакта</div>');
// 		}

// 	}
// });

$(document).on("click", ".dropdown-smile .dropdown-menu li", function (event) {
  $("#chatinptsend-big").append(
    $(this).find("img").clone().addClass("smile_item")
  )
  event.stopPropagation()
})

$(document).on("click", ".wrapper-doc span", function () {
  $('.doc-load a[href="' + $(this).parent().find("a").attr("href") + '"]')
    .parent()
    .remove()

  if ($(".doc-load").children().length == 0) {
    $(".chat-doc").removeClass("active")
  }
})

// скрываем повторяющуюся дату
function hideRepeatDateMsg() {
  var prevDateMsg = ""
  $("#listMsgAll .date-msg").each(function () {
    if ($(this).text() == prevDateMsg) {
      $(this).css("display", "none")
    }
    prevDateMsg = $(this).text()
  })
}

function readMsg() {
  var heightListMsgAll = $("#listMsgAll").height() + 15
  $('#listMsgAll > li[data-unread="1"]').each(function () {
    var topReadMsg = $(this).position().top + $(this).height()
    if (topReadMsg <= heightListMsgAll) {
      var lastCmid1 = $(this).attr("data-cmid")
      lastCmid = lastCmid1 == undefined ? 0 : lastCmid1
      $(this).removeAttr("data-unread")
    }
  })
}

function isScrolledToBottom(el) {
  var $el = $(el)
  return el.scrollHeight - $el.scrollTop() - $el.outerHeight() < 1
}

// scroll event
$("#listMsgAll").scroll(function () {
  readMsg()

  var cgid = $(".board-chat .chat-send a").attr("data-cgid")

  var ul = document.querySelector("#listMsgAll")
  // если скролл внизу
  if (isScrolledToBottom(ul)) {
    var cmid1 = $("#listMsgAll > li:last").attr("data-cmid")
    var cmid = cmid1 == undefined ? 0 : cmid1
    var lastCmid1 = $('#listMsgAll > li[data-unread="1"]:last').attr(
      "data-cmid"
    )
    var lastCmidBottom = lastCmid1 == undefined ? 0 : lastCmid1

    $('#listMsgAll > li[data-unread="1"]').removeAttr("data-unread")

    var getUnreadMsg = $(
      '#chat-user-message-big .inbox-widget .wr_item[data-cgid="' + cgid + '"]'
    )
      .find(".inbox-item-count_msg")
      .text()
    if (getUnreadMsg) {
      var loadMethod = ""
      var post = {
        cgid,
        loadMethod,
        cmid,
        last_cmid: lastCmidBottom,
        ajaxRequest: true
      }
      // $.ajax({
      // 	url: '/chat/getgroupmessages',
      // 	data: post,
      // 	type: 'post',
      // });
    }
  } else if ($("#listMsgAll").scrollTop() == 0) {
    var cmid = $("#listMsgAll > li:first").attr("data-cmid")
    var loadMethod = "back"
    var post = { gid: "1", cmid, loadMethod, cgid, ajaxRequest: true }
    // $.ajax({
    // 	url: '/chat/getgroupmessages',
    // 	data: post,
    // 	type: 'post',
    // 	success: function(response) {
    // 		response = JSON.parse(response);
    // 		if(response.status == 1 && response.cgid == $('.board-chat .chat-send a').attr('data-cgid')){
    // 			$('#listMsgAll').prepend(response.data);

    // 			hideRepeatDateMsg();

    // 			var cmidNew = $('#listMsgAll > li:first').attr('data-cmid');
    // 			var valScroll = $('#listMsgAll > li[data-cmid=' + cmid + ']').position().top;
    // 			if (cmid != cmidNew) {
    // 					$('#listMsgAll').scrollTop(valScroll - 100);
    // 			}
    // 		} else {console.log('err status !=1 in scroll top');}
    // 	}
    // });
  }
})

var addUserGroup = []
$("body").on("click", ".search-list-contact .wr_item", function () {
  var UserId = $(this).attr("data-uid")
  if ($(this).attr("data-check") == 0) {
    $(this).attr("data-check", 1)
    var nameUser = $(this).find(".inbox-item-author span:first-child").text()
    var htmlUG =
      '<div class="item" data-uid-check="' +
      UserId +
      '"><span>' +
      nameUser +
      '</span> <a href="javascript:void(0);" class="link"><i class="fas fa-times"></i></a></div>'
    if (!addUserGroup.includes(UserId)) {
      addUserGroup.push(UserId)
      $(".list_add_user").append(htmlUG)
    }
  } else {
    $(this).attr("data-check", 0)
    $('.list_add_user .item[data-uid-check="' + UserId + '"]').remove()
    addUserGroup = addUserGroup.filter((item) => item != UserId)
  }
})

function getDataGroup() {
  var list = {}
  var nameGroup = $(".create-group-chat .chat-field").val()
  // убираем лишние пробелы
  nameGroup = nameGroup
    .replace(/\s+/g, " ")
    .replace(/^\s/, "")
    .replace(/\s$/, "")

  var listUsers = []
  var cgid = $(".chat-send a").attr("data-cgid")

  addUserGroup.forEach(function callback(item, i, addUserGroup) {
    listUsers.push({ uid: item })
  })

  var avatar = $(".ava-group-chat img").attr("src")
  list.gname = nameGroup
  list.data = listUsers
  list.avatar = avatar
  list.cgid = cgid
  return list
}

// create chat group
// сохранить изменения группы
$("body").on("click", ".create-group-chat .board__btn", function () {
  var dataGroup = getDataGroup()
  var updGr = $(this).attr("id") == "updateGrpBtn1" ? true : false

  if (dataGroup.gname == "") {
    modalMsg({
      title: "Ох...",
      text: "Кажется, вы забыли обозвать беседу...",
      type: "danger"
    })
  } else {
    if (addUserGroup.length == 0) {
      modalMsg({
        title: "Ох...",
        text: "Вы собираетесь общаться с самим собой в беседе?",
        type: "danger"
      })
    } else {
      var post = {
        cgid: dataGroup.cgid,
        gname: dataGroup.gname,
        data: dataGroup.data,
        avatar: dataGroup.avatar,
        group_type: 1
      }
      post.ajaxRequest = true
      if (updGr) {
        updateChatGroup(post)
      } else {
        createChatGroup(post)
      }
    }
  }
})

function getMaxTimeStamp() {
  var timestamp = []
  $(".wr_item.times").each(function (i, el) {
    var val = $(el).attr("data-temp")
    timestamp.push(Number(val))
  })

  return Math.max.apply(null, timestamp)
}

function getListGroup(
  post,
  start = false,
  createGrp = [false, 0],
  sendMsg = false
) {
  var maxTime = getMaxTimeStamp()

  // $.ajax({
  // 	url: '/chat',
  // 	data: post,
  // 	type: 'post',
  // 	success: function(res) {
  // 		var res = JSON.parse(res);
  // 		if(res.status == 1){

  // 			if(post.online == 1){
  // 				listOnlineUser = res.data.online;
  // 			}

  // 			$('.board-chat #chat-user-message-big .inbox-widget').html(res.data.groups);
  // 			if(activeCgid > 0){
  // 				$('#chat-user-message-big .wr_item').removeClass('active');
  // 				$('.board-chat.board-big #chat-user-message-big .wr_item[data-cgid="'+activeCgid+'"]').addClass('active');
  // 			}
  // 			$('#chat-user-message-big .wr_item .last-msg a').removeAttr('href');
  // 			$('#chat-user-message-big .wr_item .last-msg .wr_img').removeClass('fancybox_msg');
  // 			if(createGrp[0]){
  // 				$('#chat-user-message-big .inbox-widget .wr_item[data-cgid="'+createGrp[1]+'"]').click();
  // 			}

  // 			ChatSearchBy($('#search-field-group').val());
  // 			setOnlineStatus(listOnlineUser);

  // 			if(sendMsg == false){
  // 				var nextTime = getMaxTimeStamp();
  // 				if(nextTime > maxTime){audioMessage();}
  // 			}

  // 		}else{
  // 			console.log('/chat status != 1 ');
  // 			if(start){
  // 				$('.board-chat #chat-user-message .inbox-widget').html('<div class="chat-out-groups">Нет ни одной беседы</div>');
  // 			}
  // 		}
  // 	}
  // });
}

function createChatGroup(post) {
  // $.ajax({
  // 	url: '/chat/setmultigroup',
  // 	data: post,
  // 	type: 'post',
  // 	success: function(response) {
  // 		response = JSON.parse(response);
  // 		if (response.status == 0) {
  // 			modalMsg({
  // 				title: message.title,
  // 				text: message.body,
  // 				type: 'danger'
  // 			});
  // 		} else {
  // 			try {
  // 				showCreateGroupEdit();
  // 				$('.nav.nav-tabs .sgclass:last a').click();
  // 				getListGroup({'ajaxRequest': true}, false, [true, response.data.cgid]);
  // 				modalMsg({title: 'Ура!', text: 'Беседа создана!', type: 'success'});
  // 			}	catch(e) {
  // 				// $('.board-chat #chat-user-message .inbox-widget').html('<div class="chat-out-groups">Нет ни одной беседы</div>');
  // 				modalMsg({title: 'error', text: 'Беседа не создана!', type: 'danger'});
  // 			}
  // 		};
  // 	}
  // });
}

function updateChatGroup(post) {
  // $.ajax({
  // 	url: '/chat/updatechatgroup',
  // 	data: post,
  // 	type: 'post',
  // 	success: function(response) {
  // 		response = JSON.parse(response);
  // 		if (response.status == 0) {
  // 			modalMsg({
  // 				title: message.title,
  // 				text: message.body,
  // 				type: 'danger'
  // 			});
  // 		} else {
  // 			try {
  // 				showCreateGroupEdit();
  // 				$('#chat-message-big .chat-name-header').text(post.gname);
  // 				$('#chat-message-big .chat-header .inbox-item-img img').attr('src', post.avatar);
  // 				modalMsg({
  // 					title: 'Ура!',
  // 					text: 'Изменения сохранены!',
  // 					type: 'success'
  // 				});
  // 			}	catch(e) {
  // 				// $('.board-chat #chat-user-message .inbox-widget').html('<div class="chat-out-groups">Нет ни одной беседы</div>');
  // 				console.log('error Беседа: Изменения не сохранены!');
  // 			}
  // 		};
  // 	}
  // });
}

// загрузка данных для редактирования группы
$(document).on("click", "#btnEditGroup", function (event) {
  if ($(".board-chat").hasClass("board-big") == false) {
    toggleRightPane()
  }

  var cgid = $(".chat-send a").attr("data-cgid")
  var post = { cgid: cgid, ajaxRequest: true }

  // $.ajax({
  // 	url: '/chat/listgroupmember',
  // 	data: post,
  // 	type: 'post',
  // 	success: function(response) {
  // 		var response = JSON.parse(response);
  // 		showCreateGroupEdit();
  // 		$('.find-user-chat-head p').text('Редактирование беседы');
  // 		$('.create-group-chat .board__btn').text('Сохранить').attr('id', 'updateGrpBtn1');;
  // 		$('.create-group-chat .chat-field').val(response.result.group_name);
  // 		$('.ava-group-chat img').attr('src', $('#chat-message-big .inbox-item-img img').attr('src'))
  // 								.css('display', 'block');

  // 		addUserGroup = response.result.uid;

  // 		var htmlUG = '';
  // 		addUserGroup.forEach(function callback(item, i, addUserGroup){
  // 			$('.search-list-contact .wr_item[data-uid="'+item+'"]').attr('data-check', 1);
  // 			var nameUser = $('.search-list-contact .wr_item[data-uid="'+item+'"] .nameCont1').text();
  // 			htmlUG += '<div class="item" data-uid-check="'+item+'"><span>'+nameUser+'</span> <a href="javascript:void(0);" class="link"><i class="fas fa-times"></i></a></div>';
  // 		});
  // 		$('.list_add_user').html(htmlUG);
  // 	}
  // });
})

// toggle полей создание \ редактирование беседы
function showCreateGroupEdit() {
  $(".board-chat .panel-tabs").toggle()
  $(".board-chat .find-user-chat").toggle()
  $(".chat-left-pane").toggleClass("searchField")
  $("#chat-contacts-big").toggleClass("addContacts")
  $(".search-list-contact .wr_item").attr("data-check", 0)
  $(".list_add_user").empty()
  $(".create-group-chat .chat-field").val("")
  $(".ava-group-chat img").attr("src", "").css("display", "none")
  $("#ava-group-chat").val("")
  $("#searchMemberAddGroup").val("")
  $(".search-list-contact .wr_item").css("display", "block")
  $(".find-user-chat-head p").text("Создание беседы")
  $(".create-group-chat .board__btn").text("Создать").removeAttr("id")
  addUserGroup = []
}

// превью авы группы
$("#ava-group-chat").on("change", function () {
  var userFile = $("#ava-group-chat")[0].files[0]
  if (userFile) {
    var formData = new FormData()
    formData.append("file", userFile)
    var result = $.ajax({
      url: "/chat/setavatar",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      type: "post",
      success: function (response) {
        try {
          response = JSON.parse(response)
          if (response.error) {
            modalMsg({
              title: "Ошибка",
              text: response.error,
              type: "danger"
            })
          } else {
            $(".ava-group-chat img")
              .attr("src", response.src)
              .css("display", "block")
          }
        } catch (e) {
          modalMsg({
            title: "Ошибка",
            text: "Ошибка ответа от сервера. Файл не загружен",
            type: "danger"
          })
        }
      }
    })
  }
})

$("body").on("click", ".list_add_user a", function () {
  var dataUidCheck = $(this).closest(".item").attr("data-uid-check")
  addUserGroup = addUserGroup.filter((item) => item != dataUidCheck)
  $(this).closest(".item").remove()
  $('.search-list-contact > .wr_item[data-uid="' + dataUidCheck + '"]').attr(
    "data-check",
    0
  )
})

$(document).on("click", ".chat-user-message-delete", function (event) {
  event.stopPropagation()
})

function audioMessage() {
  document.getElementById("mp3").innerHTML =
    '<audio src="/sounds/message.mp3" autoplay></audio>'
}

var listOnlineUser = []
var counterOnline = 0

function startUpdateChat() {
  var post = { ajaxRequest: true }

  post.online = counterOnline == 0 || counterOnline % 4 == 0 ? 1 : 0
  counterOnline++

  var cgid = $(".board-chat .chat-send a").attr("data-cgid")

  getListGroup(post, false, [false, 0])

  var chatcontentold = $("#listMsgAll").html()

  if (cgid > 0) {
    var cmid = $("#listMsgAll > li:last").attr("data-cmid")
    cmid = cmid == undefined ? 0 : cmid

    var loadMethod = ""

    var post = { cgid, loadMethod, cmid, last_cmid: lastCmid }
    post.ajaxRequest = true
    // $.ajax({
    //   url: "/chat/getgroupmessages",
    //   data: post,
    //   type: "post",
    //   success: function (res) {
    //     res = JSON.parse(res)
    //     if (
    //       res.status == 1 &&
    //       res.cgid ==
    //         $("#chat-user-message-big .times.active").attr("data-cgid")
    //     ) {
    //       $("#listMsgAll").append(res.data)
    //       readMsg()

    //       if ($("#listMsgAll").html() != chatcontentold) {
    //         if (
    //           $("#listMsgAll").offset().top +
    //             $("#listMsgAll").outerHeight() -
    //             $("#listMsgAll > li:last").offset().top >
    //           0
    //         ) {
    //           $("#listMsgAll").scrollTo("100%", "100%", { easing: "swing" })
    //         }
    //       }
    //     }
    //   }
    // })
  }
}

var listUpdateChat = []
// var updateChat = setInterval(startUpdateChat, 5000);

function setOnlineStatus(list) {
  $("#chat-contacts-big .wr_item").removeClass("online")
  $(".search-list-contact .wr_item").removeClass("online")
  $("#listMsgAll .chat-avatar").removeClass("online")
  list.forEach(function callback(item, i, addUserGroup) {
    $('#chat-contacts-big .wr_item[data-uid="' + item + '"]').addClass("online")
    $('.search-list-contact .wr_item[data-uid="' + item + '"]').addClass(
      "online"
    )
    $('#istMsgAll > li[data-uid="' + item + '"] .chat-avatar').addClass(
      "online"
    )
  })
}

// клик по контактам
$(document).on(
  "click",
  ".board-chat #chat-contacts-big .wr_item:not(.active)",
  function () {
    cancelFindMsg()

    var cgid = $(this).attr("data-cgid")
    activeCgid = cgid
    var uid = $(this).attr("data-uid")
    $(".board-chat .chat-send a").attr("data-cgid", cgid).attr("data-uid", uid)

    $(".settings-group").hide()

    if (cgid == 0 || cgid == undefined) {
      $("#listMsgAll").empty()

      var nameGroups = $(this).find(".nameCont1").text()
      var avaGroups = $(this).find(".inbox-item-img img").attr("src")
      $(".chat-header .chat-name-header").text(nameGroups)
      $(".chat-header .inbox-item-img img").attr("src", avaGroups)

      $(
        "#chat-contacts-big .wr_item, #chat-user-message-big .wr_item"
      ).removeClass("active")
      $(this).addClass("active")
      activeCgid = 0

      // очищаем поле поиска при выборе контакта\группы
      var searchFieldGroup = $("#search-field-group").val()
      if (searchFieldGroup) {
        $("#search-field-group").val("")
        ChatSearchBy("")
      }

      var uid = $(this).attr("data-uid")

      var post = { uid: uid, group_type: 0, ajaxRequest: true }

      $.ajax({
        url: "/chat/checkgroup",
        data: post,
        type: "post",
        success: function (response) {
          response = JSON.parse(response)
          if (response.data.cgid >= 1) {
            $(
              "#chat-contacts-big .wr_item, #chat-user-message-big .wr_item"
            ).removeClass("active")
            $(".board-chat .nav.nav-tabs .sgclass:last a").click()
            $(
              '#chat-user-message-big .wr_item[data-cgid="' +
                response.data.cgid +
                '"]'
            ).click()
          } else {
            $("#listMsgAll").html(
              '<div class="chat-out-groups">Сообщений еще нет, напишите первое сообщение!</div>'
            )
            if ($(".board-chat").hasClass("board-big") == false) {
              toggleRightPane()
            }
          }
        }
      })
    } else {
      $(
        "#chat-contacts-big .wr_item, #chat-user-message-big .wr_item"
      ).removeClass("active")
      $(".board-chat .nav.nav-tabs .sgclass:last a").click()
      $('#chat-user-message-big .wr_item[data-cgid="' + cgid + '"]').click()
    }
  }
)

// клик по группам
$("body").on(
  "click",
  "#chat-user-message-big .wr_item:not(.active)",
  function () {
    if ($(".board-chat").hasClass("board-big") == false) {
      toggleRightPane()
    }

    $("#listMsgAll").empty()
    cancelFindMsg()

    $(
      "#chat-contacts-big .wr_item, #chat-user-message-big .wr_item"
    ).removeClass("active")
    $(this).addClass("active")
    activeCgid = $(this).attr("data-cgid")
    $(".board-chat .chat-send a").attr("data-cgid", activeCgid)

    $(".settings-group").hide()
    if ($(this).hasClass("owner")) {
      $(".settings-group").show()
    }

    // очищаем поле поиска при выборе контакта\группы
    var searchFieldGroup = $("#search-field-group").val()
    if (searchFieldGroup) {
      $("#search-field-group").val("")
      ChatSearchBy("")
    }
    var nameGroups = $(this).find(".nameCont1").text()
    var avaGroups = $(this).find(".inbox-item-img img").attr("src")
    $(".chat-header .chat-name-header").text(nameGroups)
    $(".chat-header .inbox-item-img img").attr("src", avaGroups)

    var countUnreadMsg = $(this).find(".inbox-item-count_msg").text()

    var loadMethod = "first"
    var post = { cgid: activeCgid, loadMethod, ajaxRequest: true }
    // $.ajax({
    //   url: "/chat/getgroupmessages",
    //   data: post,
    //   type: "post",
    //   success: function (response) {
    //     try {
    //       response = JSON.parse(response)
    //       if (response.status == 1 && response.cgid == activeCgid) {
    //         $("#listMsgAll").empty()
    //         $("#listMsgAll").append(response.data)
    //         setOnlineStatus(listOnlineUser)
    //         lastCmid = 0

    //         if (countUnreadMsg && countUnreadMsg >= 1) {
    //           var dataUnreads = $('#listMsgAll > li[data-unread="1"]:first')
    //           if (dataUnreads.attr("data-cmid")) {
    //             $("#listMsgAll").scrollTop(
    //               dataUnreads.get(0).offsetTop - $("#listMsgAll").height() + 25
    //             )
    //             readMsg()
    //           } else {
    //             setTimeout(() => {
    //               $("#listMsgAll").scrollTo("100%", "100%")
    //               readMsg()
    //             }, 130)
    //           }
    //         } else {
    //           setTimeout(() => {
    //             $("#listMsgAll").scrollTo("100%", "100%")
    //           }, 130)
    //         }
    //       } else {
    //         console.log("click group", "status != 1", "error")
    //       }
    //     } catch (e) {
    //       console.log("click group", "error ajax")
    //     }
    //   }
    // })
  }
)

function smallBigChat() {
  var chat = $(".board-chat")
  if (chat.hasClass("board-big")) {
    if ($("#listMsgAll").is(":empty")) {
      chat.find(".chat-right-pane").hide()
    } else {
      chat.find(".chat-left-pane").hide()
    }
    cancelFindMsg()
  } else {
    chat.find(".chat-right-pane").show()
    chat.find(".chat-left-pane").show()
  }
}

function toggleRightPane() {
  var chat = $(".board-chat:not(.board-big)")
  chat.find(".chat-right-pane").toggle()
  chat.find(".chat-left-pane").toggle()
  chat.find("#chat-contacts-big .wr_item").removeClass("active")
  chat.find("#chat-user-message-big .wr_item").removeClass("active")
}

function getChatGroupList(vals, wrBlock) {
  var hideContactCount = 0
  var countContacts = $(wrBlock).length
  var currBlock = $(wrBlock).parent()
  $(wrBlock).each(function () {
    var name = $(this).find(".nameCont1").text().toLowerCase()
    if (name.indexOf(vals.toLowerCase()) >= 0) {
      $(this).css("display", "block")
    } else {
      $(this).css("display", "none")
      hideContactCount++
    }
  })
  if (countContacts == hideContactCount) {
    if (!$(currBlock).find("div").is(".chat-out-groups"))
      currBlock.append('<div class="chat-out-groups">Ничего не найдено</div>')
  } else currBlock.find(".chat-out-groups").remove()
}

function ChatSearchBy(vals) {
  var searchBy = $(".sgclass a.active").attr("data-sgclass")
  var wrBlock =
    searchBy == "cont"
      ? "#chat-contacts-big .wr_item"
      : "#chat-user-message-big .wr_item"
  getChatGroupList(vals, wrBlock)
}

// поиск группы или контакта в чате, поиск при создании группы
$("#search-field-group, #searchMemberAddGroup").on("input", function () {
  clearTimeout(this.delay)
  this.delay = setTimeout(
    function () {
      if ($(this).attr("data-type") == "member") {
        getChatGroupList(
          this.value,
          "#list-member-group .search-list-contact .wr_item"
        )
      } else ChatSearchBy(this.value)
    }.bind(this),
    700
  )
})

$(document).on("click", ".board-chat .sgclass", function (event) {
  var searchBy = $(".sgclass a.active").attr("data-sgclass")
  var searchFieldGroup = document.getElementById("search-field-group")
  if (searchBy == "cont") {
    searchFieldGroup.placeholder = "Поиск по контактам"
  } else {
    searchFieldGroup.placeholder = "Поиск по группам"
  }
  ChatSearchBy($("#search-field-group").val())
})

// показать поле для поиска сообщений
$("body").on("click", ".show-field-searsh-mgs", function () {
  $(".chat-name-header").addClass("d-none")
  $(".wr_field-searsh-mgs").addClass("active")
  $(".wr_field-searsh-mgs .chat-field").focus()
})

// поиск по сообщениям
$("body").on("click", "#btnMsgSearch", function () {
  var cgid = $(".board-chat .chat-send a").attr("data-cgid")
  var msg = $(".wr_field-searsh-mgs .chat-field").val()
  var date = $("#datepickerSearchMsg").val()
  if (cgid) {
    if (msg == "" && date == "") {
      modalMsg({
        title: "Ох...",
        text: "Укажите дату или введите что-нибудь в поле поиска",
        type: "danger"
      })
      return
    } else {
      var post = {
        cgid: cgid,
        loadMethod: "search",
        text: msg,
        date: date,
        ajaxRequest: true
      }
      $.ajax({
        url: "/chat/getgroupmessages",
        data: post,
        type: "post",
        success: function (response) {
          response = JSON.parse(response)
          var wr_form_send_msg = $(".wr-form-send-msg").innerHeight()
          if (response.data) {
            // var res1 = new RegExp(msg, "g");
            // var allMsg = chat_message.data;
            // var allResult = allMsg.replace(res1, '<span class="text_red" style="color: red;">'+msg+'</span>');
            // $('#listMsgSearch').html(allResult);
            $(":root").css("--wr-form-send-msg-height", wr_form_send_msg + "px")
            $("#listMsgSearch").html(response.data)
            $("#listMsgSearch").prepend(
              '<div class="conversation-list__head">Результат поиска: </div>'
            )
            $("#listMsgSearch").scrollTop(0)
            $("#listMsgSearch").addClass("active")
          } else {
            $(":root").css("--wr-form-send-msg-height", wr_form_send_msg + "px")
            $("#listMsgSearch").html(
              '<div class="chat-out-groups">Ничего не найдено</div>'
            )
            $("#listMsgSearch").prepend(
              '<div class="conversation-list__head">Результат поиска: </div>'
            )
            $("#listMsgSearch").addClass("active")
          }
        }
      })
    }
  } else {
    modalMsg({ title: "Ох...", text: "Не выбрана беседа!", type: "danger" })
    return
  }
})

// поиск Отмена
function cancelFindMsg() {
  $(".wr_field-searsh-mgs").removeClass("active")
  $("#datepickerSearchMsg").val("")
  $(".wr_field-searsh-mgs .chat-field").val("")
  $("#listMsgSearch").removeClass("active").empty()
  $(".chat-name-header").removeClass("d-none")
}

// для просмотра картинок в чате
$(".board-chat .conversation-list").on("focusin", function () {
  $(".fancybox_msg").fancybox({
    arrows: false
  })
})
