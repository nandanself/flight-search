import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['quantity-box'],
    isError:false,
    error:null,

    actions:{
        decrementValue(){
            let value = this.get('value');
            if (value === 1){
                this.set('error',"Passenger can't be less than 1");
                this.set('isError',true);
            }else{
                this.decrementProperty('value');
                this.set('error',null);
                this.set('isError',false);
                this.sendAction('onChange',this.get('value'));
            }

        },

        incrementValue(){
            let limit = this.get('limitValue');
            let value =  this.get('value');
            if (value === limit){
                this.set('error',`Current booking can only be made upto ${limit} travellers.`);
                this.set('isError',true);
            }else{
                this.incrementProperty('value');
                this.set('error',null);
                this.set('isError',false);
                this.sendAction('onChange',this.get('value'));
            }
        }
    }
});
