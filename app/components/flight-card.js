import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['flight-card'],

    actions:{
        flightSelected(flight){
            if (this.get('col') === "left"){
                Ember.$('.left .buttonSelected').removeClass('buttonSelected');
            }
            if (this.get('col') === "right"){
                Ember.$('.right .buttonSelected').removeClass('buttonSelected');
            }
            Ember.$(event.target).addClass('buttonSelected');  
            this.sendAction('onSelect',flight); 
        }
    }
});