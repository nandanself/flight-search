import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['quantity-box'],
    isError:false,
    error:null,

    actions:{
        decrementValue(){
            let value = this.get('value');
            if (value === 0){
                this.set('error',"This attribute can't be less than zero");
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
                this.set('error',`This attribute can't be more than ${limit}`);
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
