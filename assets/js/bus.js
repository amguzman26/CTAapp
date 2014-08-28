// Pull.js file 
$.getJSON('assets/js/busstops.json', function(busstops){
    //$('#busstopslist').empty();
    
    $.each(busstops, function(i, busstops){
        $('#busstopslist').append(generateLStopLink(busstops));
    });
    
    $('#busstopslist').listview('refresh');
    
});

function generatebusstopsLink(busstops){
    
    return '<li><a href="javascript:void(0)'
            + '"onclick="goToStopDetailPage(\''
            + busstops.stop_name
            + '\',\''
            + busstops.station_descriptive_name +'\')">'
            + busstops.stop_name
            + '</a></li>';
}

function goToStopDetailPage(stopName){
    
     //create the page html template
  var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
                  + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>" 
                  + stopName + "</h4></div></div>");

  //append the new page to the page container
  stopPage.appendTo( $.mobile.pageContainer );

  //go to the newly created page
  $.mobile.changePage( stopPage );
 }  