$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "183,383",
				            "death": "4,516" ,
				            "dailycount": "4,825",
				            "dailydeath": "91" ,
				            "date":"07/29" ,
				            "info":"through 8:00pm 07/28/2020" ,
				            
							"testingaverage":"20,071" ,
							"peopletested":"1,682,633" ,
							"positivity":"8.2%" ,
							"hospitalizations":"2,045" ,                    
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



