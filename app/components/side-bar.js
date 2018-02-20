import Ember from 'ember';
import DummyData from 'flight-search/mixins/dummy_data';

export default Ember.Component.extend(DummyData,{
    classNames:['side-menu'],

    originCity:null,
    destinationCity:null,
    depatureDate:null,
    returnDate:null,
    numPassenger:0,

    isReturnDateTabSelected:false,

    minDate:Ember.computed(function(){
        let todayDate = new Date();
        console.log(todayDate);
        return todayDate;
    }),

    maxDate:Ember.computed(function(){
        let todayDate = new Date();
        let n=364; //number of days to add.
        var requiredDate=new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+n);
        console.log(requiredDate);
        return requiredDate;
    }),

    filter(data,filterParams,){
        let result = data.filter(function(item) {
            for(var key in filter) {
               if(item[key] === undefined || item[key] != filter[key])
                   return false;
               }
               return true;
          }).filter(function(item){
              console.log(item['seat_left']);
              if (item['seat_left'] <= 2){
                return false;
              }
              return true;
          });
          return result;
    },

    actions:{
        depatureDateSelected(value){
            console.log(value);
        },

        tabSwitch(){
            this.set('isReturnDateTabSelected',true);
        },

        seacrhFlight(){
            let data =  this.returnDummyData();
            console.log(data);
            console.log(this.get('depatureDate'));
        },

    }
});
