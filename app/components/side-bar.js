import Ember from 'ember';
import DummyData from 'flight-search/mixins/dummy_data';
import GeneralFunction from 'flight-search/mixins/general-function';

export default Ember.Component.extend(DummyData,GeneralFunction,{
    classNames:['side-menu'],

    originCity:null,
    destinationCity:null,
    depatureDate:null,
    returnDate:null,
    numPassenger:0,

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
              if (item['seat_left'] <= numSeats){
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
            console.log(value);
            this.set('depatureDate',value);
        },

        returnDateSelected(value){
            this.set('returnDate',value);
        },  

        oneWaySearchSelected(){
            console.log(Ember.$(this));
            Ember.$('.tab-box').removeClass('active');
            Ember.$('#depature-date').addClass('active');
            this.set('isReturnDateTabSelected',false);
        },

        returnSearchSelected(){
            Ember.$('.tab-box').removeClass('active');
            Ember.$('#return-date').addClass('active');
            this.set('returnDate',null);
            this.set('isReturnDateTabSelected',true); 
        },  

        passengerCountChange(numPassenger){
            this.set('numPassenger',numPassenger);
        },

        priceValueChange(price){
            let searchResult = this.get('searchResult');
            this.set('price',price);
            let result = this.filterOnPrice(searchResult,price);
            console.log(result);
            this.sendAction('searhComplete',result);
        },

        seacrhFlight(){
            let data =  this.returnDummyData();
            console.log(data);
            let { originCity, destinationCity, numPassenger, depatureDate } = this.getProperties('originCity','destinationCity','numPassenger','depatureDate');
            let filterParams = {
                'origin_airport':originCity,
                'arrival_airport':destinationCity,
                'jounrey_date':this.convertingDateToSearchFormat(depatureDate),
            };
            let result = this.filter(data,filterParams,numPassenger);
            let highestPrice = result.reduce((prev, curr) => {return prev.price > curr.price ? prev : curr })['price'];
            this.set('highestPrice',highestPrice);
            this.set('searchResult',result);
            this.sendAction('searhComplete',result);
        },

    }
});
