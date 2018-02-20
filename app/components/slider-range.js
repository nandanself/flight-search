import Ember from 'ember';

export default Ember.Component.extend({

    classNames:['slider-range'],

    actions:{
        sliderMoved(event) {
            this.set('sliderValue',event.target.value);
        }
    }
});
