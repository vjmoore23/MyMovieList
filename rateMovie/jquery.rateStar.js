 $(function () {

        //var rating = 4; // the rate to display

       

        

        $(".rating-readonly").rateYo({ //read only from database (yellow star)

          rating: 4.39,
          numStars: 5,
          precision: 2,
          minValue: 1,
          maxValue: 5,
		  readOnly  : true
        });
		
		
		$(".rating-user").rateYo({ //user change it (blue star)

          rating: 0,
		  starWidth : "30px",
          numStars: 5,
          precision: 2,
          minValue: 1,
          maxValue: 5,
		 ratedFill : "#88eee2",
		 normalFill: "#707070"
		 
        }).on("rateyo.set", function (e, data) {
        
         
		  alert(data.rating); /// show entered rate value

		  
		 
         

        });
		
		
		
      });