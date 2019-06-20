$(document).ready(function() {
    var EventTitle = $(document).find("input#title").val();
    var EventSubject = $(document).find("input#AddEventSubject").val();
    var EventStartDate = $(document).find("input#AddEventStartDate").val();
    var EventStartTime = $(document).find("input#AddEventStartTime").val();
    var ReverseEventStartDate = moment(EventStartDate, 'DD.MM.YYYY').format('YYYY-MM-DD');
    var EventEndDate = $(document).find("input#AddEventEndDate").val();
    var EventEndTime = $(document).find("input#AddEventEndTime").val();
    var ReverseEventEndDate = moment(EventEndDate, 'DD.MM.YYYY').format('YYYY-MM-DD');
    var EventLocation = $(document).find("input#AddEventLocation").val();
    const dateNow = new Date;
    $("#calendar").fullCalendar({
        businessHours: false,
        defaultDate: dateNow,
        eventLimitText: "Devamı",
        selectable: true,
        selectHelper: true,
        selectMirror: true,
        defaultView: "month",
        navLinks: true,
        nowIndicator: true,
        editable: true,
        eventLimit: true,
        snapDuration: '00:10:00',
        height: 800,
        locale: "TR",
        themeSystem: "bootstrap4",
        header: {
            left: 'title',
            center: '',
            right: 'month, agendaWeek, agendaDay, list, prev, next, /*today*/'
        },
        buttonText: {
            today: "Bugün",
            month: "Aylık",
            week: "Haftalık",
            day: "Günlük",
            list: "Liste"
        },
        select: function(start, end, jsEvent, view) {
            $('#eventAdd').find('input[name=start_date]').val(
                start.format('DD-MM-YYYY')
            );
            $('#eventAdd').find('input[name=end_date]').val(
                start.format('DD-MM-YYYY')
            );
            $('#eventAdd').modal('show');

            /*
            bind event submit. Will perform a ajax call in order to save the event to the database.
            When save is successful, close modal dialog and refresh fullcalendar.
            */
            /*
            $("#event-modal").find('form').on('submit', function() {
                $.ajax({
                    url: '',
                    data: $("#event-modal").serialize(),
                    type: 'post',
                    dataType: 'json',
                    success: function(response) {
                        // if saved, close modal
                        $("#event-modal").modal('hide');
                        
                        // refetch event source, so event will be showen in calendar
                        $("#calendar").fullCalendar( 'refetchEvents' );
                    }
                });
            });*/
        },
        dayClick: function(date, jsEvent, view) {
            $("#eventAdd").modal("toggle");
            // console.log("DayClick");
            // console.log($(this));
        },
        eventClick: function(calEvent, jsEvent, view) {            
            // console.log("calEvent:");
            // console.log(jsEvent.currentTarget);
            // var event = calEvent;
            // $(jsEvent.currentTarget)
            // $(this).css("border-color", "red");
        },
        eventRender: function(event, element, view) {
            if(!event.url) {
                element.popover({
                    animation: true,
                    placement: "auto",
                    html: true,
                    container: "#calendar",
                    title: getPopoverTitle(event),
                    trigger: "click",
                    content: getPopoverContent.bind(this, event),
                    eventData: event
                });
                // element.popover.data(event);
            }
        },
        editable: true,
        eventLimit: true,
        events: [
            {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-11",
                end: "2019-06-13",
                startTime: "12:00",
                endTime: "23:00",
                color: "blue",
                icon: "cutie icon-ios-rose",
                allDay: true,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-05",
                end: "2019-06-05",
                startTime: "12:00",
                endTime: "23:00",
                color: "indigo",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-14",
                end: "2019-06-18",
                startTime: "12:00",
                endTime: "23:00",
                color: "purple",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-07",
                end: "2019-06-07",
                startTime: "12:00",
                endTime: "12:00",
                color: "red",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-23",
                end: "2019-06-24",
                startTime: "12:00",
                endTime: "23:00",
                color: "orange",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-25",
                end: "2019-06-25",
                startTime: "12:00",
                endTime: "23:00",
                color: "green",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-23",
                end: "2019-06-24",
                startTime: "12:00",
                endTime: "23:00",
                color: "blue",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
             {
                title: "Doğum Günü",
                local: 'Buca, İzmir',
                description: "Doğum günü hediyesi alınacak.",
                start: "2019-06-25",
                end: "2019-06-25",
                startTime: "12:00",
                endTime: "23:00",
                color: "pink",
                icon: "cutie icon-ios-rose",
                allDay: false,
                link: "https://www.ciceksepeti.com"
             },
        ]
    });
});
$(function() {
    var settings = {
        locale: "ru-Ru",
        sideBySide: true
    };
    $("#event-start-picker").datetimepicker(settings);
    $("#event-end-picker").datetimepicker(settings);
});

function createEvent() {
    
};

function updateEvent()
{
    clearEventEditModal();
};

function editEvent(e)
{
    closePopovers();
    var event = $("#popover-wrap").data();
    prepareEventEditModal(event);
    $('#eventAdd').modal('show');
};

function prepareEventEditModal(event){
    $('#event-title').val(event.title);
    $('#event-type').val();
};

function clearEventEditModal(){
    $('#event-title').val('');
}

function removeEvent(e)
{
    event = $("#popover-wrap").data();
};

function doneEvent(e)
{
    event = $("#popover-wrap").data();
};

$("body").on("click", popoverCloseByOutsideClick);
$("body").on("click", "#btn-event-edit", editEvent);
$("body").on("click", "#btn-event-remove", removeEvent);
$("body").on("click", "#btn-event-done", doneEvent);
$("body").on("click", ".popover .close", closePopovers);

function popoverCloseByOutsideClick(e) {
    var isNotPopover = !$(e.target).hasClass('.popover'), isNotPopoverChild = ($(e.target).parents('.popover').length === 0), isNotEvent=!$(e.target).hasClass('.fc-event-container'), isNotEventChild = ($(e.target).parents('.fc-event-container').length === 0);
    if (isNotPopover && isNotPopoverChild && isNotEvent && isNotEventChild) {
        closePopovers();
    }
};

function closePopovers() {
    $("#calendar .popover.show").popover('hide');
    // $.each($(".popover"), function(i, el) {
    //         if ($(el).hasClass("show")) $(el).removeClass("show");
    // });
};

function getPopoverTitle(event=null) {
    var title = event.title, closeBtn='<a href="#" class="close" data-dismiss="alert">&times;</a>';
    if (!event.start && !event.end){
        title='Tüm Gün: ' + event.title;
    }
    else if(event.allDay && event.start && event.end) {
        title='Tüm Gün: ' + event.title;
    }
    else {
        title=event.title;
    }
    title+='<span class="close" data-dismiss="popover" aria-hidden="true">&times;</span>'
    return title;
};

function getPopoverContent(event){
    closePopovers();
    var template=`
        <li class="list-group-item"><span class="fa fa-calendar"></span> Başlangıç Zamanı : ${event.start}</li>
        <li class="list-group-item"><span class="fa fa-calendar"></span> Bitiş Zamanı : ${event.end}</li>
        <li class="list-group-item"><span class="fa fa-map-marker"></span> Konum : ${event.local}</li>
        <li class="list-group-item"><span class="fa fa-comment"></span> Açıklama : ${event.description}</li>
        <li class="list-group-item"><span class="fa fa-globe"></span> Link : ${event.link}</li>
        `;
    $("#eventContent").html($.parseHTML(template));
    $("#popover-wrap").data(event);
    return $("#popover-wrap").html();
};

  
  $(function() {
    var container =
      $("#add_event").length > 0 ? $("#add_event").parent() : "body";
    var container2 = $(".modal-body");
  
    $("#datepair .date")
      .datepicker({
        autoclose: true,
        container: container2,
        format: "M d, yyyy",
        maxViewMode: 1,
        orientation: "bottom auto",
        disableTouchKeyboard: true,
        keyboardNavigation: false,
        todayBtn: "linked",
        todayHighlight: true,
        toggleActive: true,
        startDate: "-3w",
        endDate: "+2m",
        templates: {
          leftArrow: '<i class="icon ion-ios-arrow-back"></i>',
          rightArrow: '<i class="icon ion-ios-arrow-forward"></i>'
        }
      })
      .datepicker("setDate", new Date());
  
    $("#datepair .time").timepicker({
      appendTo: container,
      disableTextInput: true,
      disableTouchKeyboard: true,
      forceRoundTime: true,
      orientation: "bl",
      scrollDefault: "now",
      showDuration: true,
      stopScrollPropagation: true
      //timeFormat: 'h:i A'
    });
    $("#datepair .time.start").timepicker("setTime", new Date());
  
    $("#datepair").datepair({
      defaultDateDelta: 0,
      defaultTimeDelta: 1800000
    });
  
    $("#iconpicker").iconpicker({
      arrowClass: "btn-default",
      placement: "bottom",
      cols: 13,
      rows: 5,
      footer: false,
      header: false,
      search: false,
    });
  });
  
  $(function(e) {
    var allDay = $("#allday"),
      busy = $("#busy"),
      title = $("#title"),
      icons = $("#iconpicker");
    var background = allDay.is(":checked") && busy.is(":checked");
  
    allDay.change(function(e) {
      e.preventDefault();
      if ($(this).is(":checked")) {
        $(".time-group").hide();
      } else {
        $(".time-group").show();
      }
    });
  
    busy.change(function(e) {
      var location = $("#eventloca").parent();
      var url = $("#eventurl").parent();
      var images = $("div.imgrow");
  
      e.preventDefault();
      if ($(this).is(":checked")) {
        if (allDay.is(":not(:checked)")) {
          title
            .val("Musait Değilim")
            .addClass("disabled")
            .attr("disabled", "disabled");
          icons
            .val("0")
            .selectpicker("render")
            .addClass("disabled")
            .attr("disabled", "disabled");
          location.hide();
          url.hide();
          images.hide();
        }
        if (allDay.is(":checked")) {
          $("#titleIcongrp").hide();
          location.hide();
          $(".time-group").hide();
          url.hide();
          $("#cke_desc").hide();
          images.hide();
        }
      } else if ($(this).is(":not(:checked)")) {
        if (allDay.is(":checked") || $(this).is(":not(:checked)")) {
          $(".time-group").hide();
          title
            .val("")
            .removeAttr("disabled")
            .prop("disabled", false);
          icons
            .val("")
            .selectpicker("render")
            .removeAttr("disabled")
            .prop("disabled", false);
          location.show();
          url.show();
          images.show();
        }
      }
      if ($(this).is(":checked") && allDay.is(":checked")) {
        $(".title-group").hide();
        location.hide();
        $(".time-group").hide();
        url.hide();
        $("#cke_desc").hide();
        images.hide();
      } else {
        $(".title-group").show();
        location.show();
        $(".time-group").show();
        url.show();
        $("#cke_desc").show();
        images.show();
      }
    });
    if (background) {
      $(".title-group").hide();
      location.hide();
      $(".time-group").hide();
      url.hide();
      $("#cke_desc").hide();
      images.hide();
    }
  });
  


    //  from validate
    // $(function($) {
    //     $.validator.setDefaults({
    //         rules: {
    //             title: {
    //                 required: true,
    //                 minlength: 3,
    //                 maxlength: 25
    //             },
    //             location: {
    //                 maxlength: 15
    //             },
    //             start_date: {
    //                 required: true,
    //                 date: true
    //             }
    //         },
    //         errorElement: "div",
    //         errorPlacement: function(error, element) {
    //             error.addClass("invalid-feedback");
    
    //             if (element.parent(".input-group").length) {
    //                 error.insertAfter(element.parent());
    //             } else if (
    //                 element.prop("type") === "checkbox" ||
    //                 element.prop("type") === "radio"
    //             ) {
    //                 error.insertAfter(element.next("label"));
    //             } else {
    //                 error.insertAfter(element);
    //             }
    //             error.fadeOut(800, function() {
    //                 error.fadeIn(800);
    //             });
    //         }
    //     });
    //     $(".btn-submit").click(function() {
    //         var form = $("#add_event");
    //         form.validate({
    //             submitHandler: function(form) {
    //                 form.submit();
    //             }
    //         });
    //         if (form.valid() === true) {
    //             $("#error_message").hide();
    //             $("#success_message").slideDown();
    
    //             setTimeout(function() {
    //                 $("#success_message").slideUp();
    //             }, 5000);
    //         } else {
    //             $("#success_message").hide();
    //             $("#error_message").fadeIn(800);
    //         }
    //     });
    //     $("#eventAdd").on("hidden.bs.modal", function() {
    //         $(this)
    //             .find("form")[0]
    //             .reset();
    //     });
    // });