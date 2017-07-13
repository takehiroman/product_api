function escape_html (string) {
	if(typeof string !== 'string') {
		return string;
	}
	return string.replace(/[&'`"<>]/g, function(match) {
		return {
			'&': '&amp;',
			"'": '&#x27;',
			'`': '&#x60;',
			'"': '&quot;',
			'<': '&lt;',
			'>': '&gt;',
		}[match]
	});
}

function allData(){
	$.ajax({
		type: 'GET',
		url:  '/api/product/all',
		success: function(json) {
			for(var i in json){
				$("#output").append("<tr> <th scope=row>" + json[i].id + "</th> <td> <img id=img src=/image/"+json[i].imageUrl+"  width=100/> </td> <td> " + json[i].name + "</td> <td>"+ json[i].price + "</td> <td><a href="+ json[i].id +">詳細ページへ</a></td> </tr>");
			}
		}
	});
}

function search() {
	var button = $(this);
	button.attr("disabled", true);
	var data = {
			name: escape_html($("#name").val()),
			price: null
	};
	// 通信実行
	$.ajax({
		type:"post",                
		url:"/api/product/sam",       
		data:JSON.stringify(data),  
		contentType: 'application/json', 

		success: function(json) { 
			$('#output').empty();
			for(var i in json){
				$("#output").append("<tr> <th scope=row>" + json[i].id + "</th> <td> <img id=img src=/image/"+json[i].imageUrl+"  width=100/> </td> <td> " + json[i].name + "</td> <td>"+ json[i].price + "</td> <td><a href="+ json[i].id +">詳細ページへ</a></td> </tr>");
			}
		},
		error: function() {         // HTTPエラー時
			alert("Server Error. Pleasy try again later.");
		},
		complete: function() {      
			button.attr("disabled", false);  
		}
	});
}