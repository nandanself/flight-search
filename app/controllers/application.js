import Ember from 'ember';

export default Ember.Controller.extend({
    isWelcomeMessage:true,
    isResultFound:false,

    isReturnDateTabSelected:false,
    isTicketBooked:false,

    searchResult:null,
    selectedFlight:null,

    actions:{

        flightBookingTypeSelect(value){
            this.set('isReturnDateTabSelected',value)
        },

        searchComplete(result,returnFlightResult){
            if (result.length > 0){
                if (returnFlightResult){
                    this.set('returnFlightResult',returnFlightResult);
                }
                this.set('searchResult',result);
                this.set('isResultFound',true);
                this.set('isWelcomeMessage',false);
            }else{
                this.set('isResultFound',false);
                this.set('isWelcomeMessage',false);
            } 
            this.set('isTicketBooked',false);
        },

        flightSelected(flight){
            this.set('selectedFlight',flight);
            this.set('isTicketBooked',false);
        },

        returnflightSelected(flight){
            this.set('returnSelectedFlight',flight);
            this.set('isTicketBooked',false);
        },

        bookTicket(){
            if (this.get('isReturnDateTabSelected')){
                if (this.get('selectedFlight') && this.get('returnSelectedFlight')){
                    this.set('isTicketBooked',true);
                }
            }else{
                if (this.get('selectedFlight')){
                    this.set('isTicketBooked',true);
                } 
            }
            
        }
    }
});
