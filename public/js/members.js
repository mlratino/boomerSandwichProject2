$(document).ready(function () {
  $('#doctor').click("submit", findDoctor);
  function findDoctor() {
    $(".servicesResults").empty();
    // yelp works
    var zipCode = $('#zip').val();
    if (zipCode.length != 5 || isNaN(zipCode)) {
      alert('Zip Code must be five numbers!');
    }
    var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=doctors&location=" + zipCode;
    $.ajax({
      url: queryURL,
      headers: {
        "Authorization": "Bearer " + yelpApiKey + "",
      },
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      Results = response;
      for (var i = 1; i < 6; i++) {
        $(".servicesResults").append(i + " Business Name:     " + Results.businesses[i].name);
        $(".servicesResults").append("<br />Business Address:     " + Results.businesses[i].address1);
        $(".servicesResults").append("<br />Business City:     " + Results.businesses[i].location.city);
        $(".servicesResults").append("<br />Business ZipCode:     " + Results.businesses[i].location.zip_code);
        $(".servicesResults").append("<br />Business Phone:     " + Results.businesses[i].phone);
        $(".servicesResults").append("<br /><a href='" + Results.businesses[i].url + "' target='_blank'>View Yelp Reviews</a>");
        $(".servicesResults").append("<br><hr><br>");
      }
    });
  }
  
  $('#dentist').click("submit", findDentist);
  function findDentist() {
    $(".servicesResults").empty();
    // yelp
    var zipCode = $('#zip').val();
    if (zipCode.length != 5 || isNaN(zipCode)) {
      alert('Zip Code must be five numbers!');
    }
    var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=dentists&location=" + zipCode;
    $.ajax({
      url: queryURL,
      headers: {
        "Authorization": "Bearer " + yelpApiKey + "",
      },
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      Results = response;
      for (var i = 1; i < 6; i++) {
        $(".servicesResults").append(i + " Business Name:     " + Results.businesses[i].name);
        $(".servicesResults").append("<br />Business Address:     " + Results.businesses[i].address1);
        $(".servicesResults").append("<br />Business City:     " + Results.businesses[i].location.city);
        $(".servicesResults").append("<br />Business ZipCode:     " + Results.businesses[i].location.zip_code);
        $(".servicesResults").append("<br />Business Phone:     " + Results.businesses[i].phone);
        $(".servicesResults").append("<br /><a href='" + Results.businesses[i].url + "' target='_blank'>View Yelp Reviews</a>");
        $(".servicesResults").append("<br><hr><br>");
      }
    });
  }
  
  
  $('#drugstore').click("submit", findDrugstore);
  function findDrugstore() {
    $(".servicesResults").empty();
    // yelp
    var zipCode = $('#zip').val();
    if (zipCode.length != 5 || isNaN(zipCode)) {
      alert('Zip Code must be five numbers!');
    }
    var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=drugstores&location=" + zipCode;
    $.ajax({
      url: queryURL,
      headers: {
        "Authorization": "Bearer " + yelpApiKey + "",
      },
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      Results = response;
      for (var i = 1; i < 6; i++) {
        $(".servicesResults").append(i + " Business Name:     " + Results.businesses[i].name);
        $(".servicesResults").append("<br />Business Address:     " + Results.businesses[i].address1);
        $(".servicesResults").append("<br />Business City:     " + Results.businesses[i].location.city);
        $(".servicesResults").append("<br />Business ZipCode:     " + Results.businesses[i].location.zip_code);
        $(".servicesResults").append("<br />Business Phone:     " + Results.businesses[i].phone);
        $(".servicesResults").append("<br /><a href='" + Results.businesses[i].url + "' target='_blank'>View Yelp Reviews</a>");
        $(".servicesResults").append("<br><hr><br>");
      }
    });
  }
  
  // empty zip code box
  $('#closer1').click("submit", emptyZip);
  function emptyZip(){
    $('#zip').val('');
  }
});

