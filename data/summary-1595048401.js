$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "150,319",
				            "death": "4,047" ,
				            "dailycount": "2,885",
				            "dailydeath": "62" ,
				            "date":"07/17" ,
				            "info":"through 8:00pm 07/16/2020" ,
				            
							"testingaverage":"18,275" ,
							"peopletested":"1,465,247" ,
							"positivity":"9%" ,
							"hospitalizations":"2,122" ,                    
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



