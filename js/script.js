function mainClock() {
  var date = new Date()
  $("#clock .clock__time").text(
    date.toLocaleString("ru", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Yekaterinburg"
    })
  )
  $("#clock .clock__date").text(
    date.toLocaleString("ru", { month: "long", day: "numeric" })
  )
}

mainClock()

var mainClockId = setInterval(mainClock, 1000)

function modalMsg(
  list = { title: "Modal title", text: "Сообщение", type: "" }
) {
  var modal = $("#form_msg")
  modal.removeClass("success danger warning").addClass(list.type)
  modal.find(".modal-title").text(list.title)
  modal.find(".form_msg__item").text(list.text)
  modal.modal("show")
}

$('[data-toggle="tooltip"]').tooltip()

function setDatePicker(id, other_style = false, wrap_id) {
  $(id)
    .datepicker({
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      firstDay: 1,
      dateFormat: "dd.mm.y",
      showOn: "button",
      buttonImage: "./img/calendar_icon.svg",
      buttonImageOnly: true,
      buttonText: "Выбрать дату",
      prevText: '<i class="fas fa-angle-left"></i>',
      nextText: '<i class="fas fa-angle-right"></i>'
    })
    .find(".ui-datepicker-next, .ui-datepicker-prev")
    .removeAttr("title")
  if (other_style) {
    $("#ui-datepicker-div")
      .css("display", "none")
      .wrap('<div id="' + wrap_id + '" class="my-datepicker">')
  }
}
