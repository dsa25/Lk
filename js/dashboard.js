var dashboard = localStorage?.dashboard
  ? JSON.parse(localStorage.dashboard)
  : {}

setDashboard(dashboard)

// work localStorage
function workLS(list = {}) {
  let myDB = localStorage?.dashboard ? JSON.parse(localStorage.dashboard) : {}
  for (key in list) {
    myDB[key] = list[key]
  }
  localStorage.dashboard = JSON.stringify(myDB)
}

// var post = {};
// $.ajax({
// 	url: '/user/getuserdata',
// 	data: post,
// 	type: 'post',
// 	success: function(response) {
// 		dashboard = JSON.parse(response);
// 		dashboard = dashboard == false ? {} : dashboard;
// 		setDashboard(dashboard);
// 		if(dashboard.hasOwnProperty('current_theme')){
// 			$('.user-theme a').removeClass('active');
// 			$('.user-theme a[data-theme="'+dashboard.current_theme+'"]').addClass('active');
// 		}
// 	}
// });

function setDashboard(dashboard = {}) {
  let current_theme = dashboard?.current_theme
    ? dashboard.current_theme
    : "theme_default"
  changeTheme(current_theme)

  $(".board").each(function () {
    var board = $(this)
    var name = board.attr("data-name")
    if (dashboard.hasOwnProperty(name)) {
      dashboard[name]["active"] == 0
        ? board.removeClass("active")
        : board.addClass("active")
      dashboard[name]["default"] == 0
        ? board.removeClass("default")
        : board.addClass("default")
      dashboard[name]["lock"] == 0
        ? board.removeClass("lock")
        : board.addClass("lock")
      dashboard[name]["big"] == 0
        ? board.removeClass("board-big")
        : board.addClass("board-big")
    }
    if (
      dashboard.hasOwnProperty(name + "_big_css") &&
      dashboard[name]["big"] == 1
    ) {
      board.css({
        width: dashboard[name + "_big_css"]["width"],
        height: dashboard[name + "_big_css"]["height"],
        top: dashboard[name + "_big_css"]["top"],
        left: dashboard[name + "_big_css"]["left"]
      })
    } else if (
      dashboard.hasOwnProperty(name + "_css") &&
      dashboard[name]["big"] == 0
    ) {
      board.css({
        width: dashboard[name + "_css"]["width"],
        height: dashboard[name + "_css"]["height"],
        top: dashboard[name + "_css"]["top"],
        left: dashboard[name + "_css"]["left"]
      })
    }

    if (name == "chat" && board.hasClass("board-big")) {
      board.find("#chat-message-big").removeAttr("style")
    }
  })

  $(".board").removeClass("board-disabled")

  if (dashboard.hasOwnProperty("menu_dashboard")) {
    $(".menu-dashboard a").each(function () {
      var name = $(this).attr("data-name")
      if (dashboard.menu_dashboard[name] == 0) {
        $(this).removeClass("active")
      } else {
        $(this).addClass("active")
        if (name == "lock") {
          $(".board")
            .addClass("lock")
            .resizable({ disabled: true })
            .draggable({ disabled: true })
        }
      }
    })
  }
}

function getStyleBoard(name = "all", style = true) {
  var board = name == "all" ? ".board" : '.board[data-name="' + name + '"]'
  var list = {}

  $(board).each(function () {
    var board = $(this)
    var dataName = board.attr("data-name")
    list[dataName] = {}
    list[dataName]["active"] = board.hasClass("active") ? "1" : "0"
    list[dataName]["default"] = board.hasClass("default") ? "1" : "0"
    list[dataName]["lock"] = board.hasClass("lock") ? "1" : "0"
    list[dataName]["big"] = board.hasClass("board-big") ? "1" : "0"
    dashboard[dataName] = list[dataName]

    if (style) {
      if (board.hasClass("board-big")) {
        list[dataName + "_big_css"] = {}
        list[dataName + "_big_css"]["width"] = board.css("width")
        list[dataName + "_big_css"]["height"] = board.css("height")
        list[dataName + "_big_css"]["left"] = board.css("left")
        list[dataName + "_big_css"]["top"] = board.css("top")
        dashboard[dataName + "_big_css"] = list[dataName + "_big_css"]
      } else {
        list[dataName + "_css"] = {}
        list[dataName + "_css"]["width"] = board.css("width")
        list[dataName + "_css"]["height"] = board.css("height")
        list[dataName + "_css"]["left"] = board.css("left")
        list[dataName + "_css"]["top"] = board.css("top")
        dashboard[dataName + "_css"] = list[dataName + "_css"]
      }
    }
  })

  return list
}

function getDashboardMenu() {
  var list = {}
  list.menu_dashboard = {}
  dashboard.menu_dashboard = {}
  $(".menu-dashboard a").each(function () {
    var dataName = $(this).attr("data-name")
    list["menu_dashboard"][dataName] = $(this).hasClass("active") ? "1" : "0"
    dashboard["menu_dashboard"][dataName] = list["menu_dashboard"][dataName]
  })

  return list
}

$("body").on(
  "click",
  '.menu-dashboard a:not(.active[data-name="default"])',
  function () {
    var name = $(this).attr("data-name")
    console.log(name)
    if ($(this).hasClass("active")) {
      if (name == "lock") {
        $(".board")
          .removeClass("lock")
          .resizable({ disabled: false })
          .draggable({ disabled: false })
        saveDashboard("all", false)
      }
      // else if(name == 'default'){
      // 	$('.board').removeClass('default');
      // 	saveDashboard('all', false);
      // }
      else {
        $(".board[data-name=" + name + "]").removeClass("active")
        saveDashboard(name, false)
      }
      $(this).removeClass("active")
    } else {
      $(".board[data-name=" + name + "]").addClass("active")
      if (name == "default") {
        $(".board").addClass("default active").removeClass("board-big")
        $('.menu-dashboard a:not([data-name="lock"])').addClass("active")
        let chat = $(".board-chat")
        if ($("#listMsgAll").is(":empty")) {
          // chat.find('.chat-right-pane').hide();
          // $('#chatinptsend-big').empty();
        } else {
          // chat.find('.chat-left-pane').hide();
        }
        cancelFindMsg()

        saveDashboard("all", false)
      } else if (name == "lock") {
        $(".board")
          .addClass("lock")
          .resizable({ disabled: true })
          .draggable({ disabled: true })
        $(this).addClass("active")
        saveDashboard("all", false)
      } else {
        $(this).addClass("active")
        saveDashboard(name, false)
      }
    }
    saveDashboardMenu()
  }
)

$("body").on("click", ".board__action-btn > a", function () {
  var board = $(this).closest(".board")
  var dataName = board.attr("data-name")
  if ($(this).hasClass("board__cut")) {
    $('.board[data-name="' + dataName + '"]').removeClass("active")
    $('.menu-dashboard a[data-name="' + dataName + '"]').removeClass("active")
    saveDashboardMenu()
  } else {
    if (dataName == "chat") {
      smallBigChat()
    }
    if (board.hasClass("board-big")) {
      board.removeClass("board-big")
      if (dashboard.hasOwnProperty(dataName + "_css")) {
        board.css({
          top: dashboard[dataName + "_css"]["top"],
          left: dashboard[dataName + "_css"]["left"],
          width: dashboard[dataName + "_css"]["width"],
          height: dashboard[dataName + "_css"]["height"]
        })
      }
    } else {
      board.addClass("board-big")
      if (dashboard.hasOwnProperty(dataName + "_big_css")) {
        board.css({
          top: dashboard[dataName + "_big_css"]["top"],
          left: dashboard[dataName + "_big_css"]["left"],
          width: dashboard[dataName + "_big_css"]["width"],
          height: dashboard[dataName + "_big_css"]["height"]
        })
      }
    }
  }
  saveDashboard(dataName, false)
})

setDatePicker("#calendar-dashboard", false)
setDatePicker("#datepickerSearchMsg", true, "wrap_chat_datepicker")

$("body").on("mousedown", ".board:not(.current)", function () {
  $(".board").removeClass("current")
  $(this).addClass("current")
})

function saveDashboard(dataName, style = true) {
  let list = getStyleBoard(dataName, style)
  workLS(list)
}

function saveDashboardMenu() {
  let list = getDashboardMenu()
  workLS(list)
}

$(".board:not(.lock)").draggable({
  containment: "html",
  handle: ".board__title",
  cancel: ".board__title .board__action-btn",
  start: function () {
    $(this).removeClass("default")
    $('.menu-dashboard a[data-idboard="10"]').removeClass("active")
  },
  stop: function (event, ui) {
    $('.menu-dashboard a[data-name="default"]').removeClass("active")
    saveDashboardMenu()
    var dataName = $(this).attr("data-name")
    saveDashboard(dataName)
  }
})

$(".board:not(.lock)").resizable({
  start: function (event, ui) {
    $(this).removeClass("default")
  },
  stop: function (event, ui) {
    $('.menu-dashboard a[data-name="default"]').removeClass("active")
    saveDashboardMenu()
    var dataName = $(this).attr("data-name")
    saveDashboard(dataName)
  }
})

// смена темы
$("body").on("click", ".user-theme a", function () {
  var current_theme = $(this).attr("data-theme")
  let list = { current_theme: current_theme }
  workLS(list)

  changeTheme(current_theme)

  $(this).addClass("active")
})

function changeTheme(current_theme) {
  $("html")
    .removeClass("theme_lime theme_light theme_default")
    .addClass(current_theme)
  $(".user-theme a").removeClass("active")
}
