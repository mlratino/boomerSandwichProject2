$(document).ready(function () {

  function showAll() {

    // get stored events for a user
    $.get('/api/event_data').then(function (data) {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx')
      console.log(data);
      // clear event area for updates
      $('#event-area').empty();
      // create element for each journal entry for the logged in user
      if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {
          // create div for entry
          var row = $("<div>");
          row.addClass("event");
          // create delete button for entry
          var deleteButton = $('<button>');
          deleteButton.addClass('delete btn btn-danger');
          deleteButton.text('Delete');
          // add calendar id to delete button
          deleteButton.data('id', data[i].id)
          // create edit button for entry
          var editButton = $('<button>');
          editButton.addClass('edit btn btn-info');
          editButton.text('Edit Event');
          // add calendar id to edit button
          editButton.data('id', data[i].id);
          // append retrieved calendar item and buttons to div
          var Min = data[i].min
          if (data[i].ampm == 1){
              var AMPM = "AM";
          } else if (data[i].ampm == 2){
              var AMPM = "PM";
          }
          // if minutes less than 10 add leading zero
          if (data[i].min < 10){
             Min = "0" + data[i].min;
          }
          // convert month integer to text
          var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          for (j = 1; j < 13; j++){
            if (j == data[i].month){
              var Month = Months[j-1];
            }
          }
          row.append("<p>On: " + Month + ' ' + data[i].day + ' ' + data[i].year + ' ' +
            "At: " + data[i].hour + ':' + Min + ' ' + AMPM + " Event: " +
            data[i].event + "</p>");
          row.append(deleteButton);
          row.append(' ');
          row.append(editButton);

          // put newest entry at top
          $("#event-area").prepend(row);
        }
      }
    });
  }

  var userId = '';
  $.get("/api/user_data").then(function (data) {
    userId = data.id;
  });


  // store a new event for the logged in user
  // when user clicks add-btn
  $("#event-submit").on("click", function (event) {
    event.preventDefault();
    // make a newEvent object
    var newEvent = {
      month: $("#month").val().trim(),
      day: $("#day").val().trim(),
      year: $("#year").val().trim(),
      hour: $("#hour").val().trim(),
      min: $("#min").val().trim(),
      ampm: $("#ampm").val().trim(),
      event: $("#event").val().trim(),
      UserId: userId
      //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    // console.log('&&&&&&&&&&&&&&&&&')
    // console.log(newEvent);

    // send AJAX POST-request with jQuery
    $.post("/api/new", newEvent)
      // on success, rewrite entry listing, reset form and clear event entry box
      .then(function () {
        showAll();
        $('form').get(0).reset();
        $("#event").val("");
      });
  });

  // deletes an event when the user clicks the delete button
  $(document).on('click', 'button.delete', deleteEntry);
  function deleteEntry(event) {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/event_del/" + id
    })
      .then(showAll);
  }

  // update an event when the user clicks edit button
  // only event is changed, date/time remain same
  $(document).on('click', 'button.edit', editEntry);
  function editEntry() {
    var id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/event_update/" + id,
      data: { event: $("#event").val().trim() }
    }).then(function () {
      $("#event").val("");
      showAll();
    });
  }

  // initial call to show all entries
  showAll();

});