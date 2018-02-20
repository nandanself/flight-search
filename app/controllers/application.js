import Ember from 'ember';

export default Ember.Controller.extend({
    isWelcomeMessage:true,
    isResultFound:false,

    searchResult:null,

    actions:{
        searchComplete(result){
            this.set('searchResult',result);
            this.set('isResultFound',true);
            this.set('isWelcomeMessage',false);
        }
    }
});
