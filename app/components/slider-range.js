import Ember from 'ember';

export default Ember.Component.extend({

    classNames:['slider-range'],

    didReceiveAttrs(){
        this.set('value',this.get('sliderValue'));
    },
    

    actions:{
        sliderMoved(event) {
            this.set('value',event.target.value);
            this.sendAction('onChange',event.target.value);
        }
    }
});
