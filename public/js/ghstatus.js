;(function ($) {
  "use strict";
$.extend({ghstatus: (function () {
	var gh = {
		init:function  () {
			gh.initStatus();
			gh.initMessages();
		},
		initStatus: function () {
			$.ajax({
				url: '/api/status'
			}).then(function(data) {
				$('#status').text(data.status);
			});
		},
		initMessages: function () {
			$.ajax({
				url: '/api/messages'
			}).then(function(data) {
				$.each(data,function(idx,val) {
					$('#msg-list').append("<li>" +
            			"<div>"+moment(new Date(val.created_on)).format('DD/MM/YYYY HH:mm') + " : " +val.status+"</div>" + 
            			"<div>" + val.body + "</div></li><br/>");
        		});
			});
		}
	};
 	return {
      init:gh.init
    }}())});
  }(jQuery));

  $(document).ready(function(){
    $.ghstatus.init();
  });