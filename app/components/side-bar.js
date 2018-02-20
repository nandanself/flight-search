import Ember from 'ember';
import DummyData from 'flight-search/mixins/dummy_data';
import GeneralFunction from 'flight-search/mixins/general-function';

export default Ember.Component.extend(DummyData,GeneralFunction,{
    classNames:['side-menu'],

    isError:false,
    error:null,

    originCity:null,
    destinationCity:null,
    depatureDate:null,
    returnDate:null,
    numPassenger:1,

    searchResult:null,

    isReturnDateTabSelected:false,

    minDate:Ember.computed(function(){
        let todayDate = new Date();
        return todayDate;
    }),

    maxDate:Ember.computed(function(){
        let todayDate = new Date();
        let n=364;
        var requiredDate=new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+n);
        return requiredDate;
    }),

    filter(data,filterParams,numSeats){
        let result = data.filter((item) => {
            for(var key in filterParams){
                if(item[key] === undefined || item[key] !== filterParams[key]){
                   return false;
                }
            }    
               return true;
          }).filter((item) => {
              if (item['seat_left'] < numSeats){
                return false;
              }
              return true;
          });
          return result;
    },

    filterOnPrice(data,price){
        let result = data.filter((item)=>{
            return (item.price <= price); 
        });

        return result;
    },

    actions:{
        depatureDateSelected(value){
            this.set('depatureDate',value);
        },

        returnDateSelected(value){
            this.set('returnDate',value);
        },  

        oneWaySearchSelected(){
            Ember.$('.tab-box').removeClass('active');
            Ember.$('#depature-date').addClass('active');
            this.set('isReturnDateTabSelected',false);
            this.sendAction('onSelect',this.get('isReturnDateTabSelected'));
        },

        returnSearchSelected(){
            Ember.$('.tab-box').removeClass('active');
            Ember.$('#return-date').addClass('active');
            this.set('returnDate',null);
            this.set('isReturnDateTabSelected',true); 
            this.sendAction('onSelect',this.get('isReturnDateTabSelected'));
        },  

        passengerCountChange(numPassenger){
            this.set('numPassenger',numPassenger);
        },

        priceValueChange(price){
            let returnFlightResult = null;
            let searchResult = this.get('searchResult');
            let returnSearchFlightResult = this.get('returnFlightResult');
            this.set('price',price);
            let result = this.filterOnPrice(searchResult, price);
            if (this.get('isReturnDateTabSelected')){
                returnFlightResult = this.filterOnPrice(returnSearchFlightResult, price);
            }
            this.sendAction('searhComplete', result, returnFlightResult);
        },

        seacrhFlight(){
            let returnFlightResult = null;
            let data =  this.returnDummyData();
            let { originCity, destinationCity, numPassenger, depatureDate } = this.getProperties('originCity','destinationCity','numPassenger','depatureDate');
            console.log(originCity,destinationCity,numPassenger,depatureDate);
            if (originCity && destinationCity && numPassenger && depatureDate){
                this.set('isError',false);
                this.set('error',null);
                let filterParams = {
                    'origin_airport':originCity.toLowerCase(),
                    'arrival_airport':destinationCity.toLowerCase(),
                    'jounrey_date':this.convertingDateToSearchFormat(depatureDate),
                };         
                let result = this.filter(data,filterParams,numPassenger);
    
                if (result.length > 0 ){
                    let highestPrice = result.reduce((prev, curr) => {return prev.price > curr.price ? prev : curr })['price'];
                    this.set('highestPrice',highestPrice);
                }
            
                if (this.get('isReturnDateTabSelected')){
                    let { returnDate } = this.getProperties('returnDate');
                    let filterParamsReturn = {
                        'origin_airport':destinationCity.toLowerCase(),
                        'arrival_airport':originCity.toLowerCase(),
                        'jounrey_date':this.convertingDateToSearchFormat(returnDate),
                    };
                    returnFlightResult = this.filter(data, filterParamsReturn, numPassenger);
                    this.set('returnFlightResult',returnFlightResult);
                }
                this.set('searchResult',result);
                this.sendAction('searhComplete', result, returnFlightResult);
            }else{
                this.set('error',"Fields can't be blank");
                this.set('isError',true);
            }   
            
        },

    }
});
