import Ember from 'ember';


export default Ember.Mixin.create({

    returnDummyData(){
        let data = [
            {
                id:1,
                jounrey_date:'12-03-2018',
                origin_airport:'Pune',
                start_time:'10:00 AM',
                arrival_airport:'Bangalore',
                arrival_time:'11:30 AM',
                price:2000,
                flight_code:'Al-201',
                seat_left:1,
                company:'Air Asia',
            },
        
            {
                id:2,
                jounrey_date:'12-03-2018',
                origin_airport:'Pune',
                start_time:'1:00 PM',
                arrival_airport:'Bangalore',
                arrival_time:'2:30 PM',
                price:5500,
                flight_code:'In-202',
                seat_left:50,
                company:'Indigo',
            },
        
            {
                id:3,
                jounrey_date:'12-03-2018',
                origin_airport:'Pune',
                start_time:'4:00 PM',
                arrival_airport:'Bangalore',
                arrival_time:'5:30 PM',
                price:8000,
                flight_code:'Ki-203',
                seat_left:50,
                company:'KingFisher',
            },
        
            {
                id:4,
                jounrey_date:'12-03-2018',
                origin_airport:'Pune',
                start_time:'9:00 PM',
                arrival_airport:'Bangalore',
                arrival_time:'10:30 PM',
                price:5000,
                flight_code:'Al-204',
                seat_left:50,
                company:'Air Asia',
            },
            {
                id:5,
                jounrey_date:'15-03-2018',
                origin_airport:'Bangalore',
                start_time:'3:00 PM',
                arrival_airport:'Pune',
                arrival_time:'4:30 PM',
                price:5000,
                flight_code:'Al-205',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:6,
                jounrey_date:'16-03-2018',
                origin_airport:'Bangalore',
                start_time:'4:00 AM',
                arrival_airport:'Pune',
                arrival_time:'6:30 AM',
                price:9000,
                flight_code:'Al-206',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:7,
                jounrey_date:'17-03-2018',
                origin_airport:'Pune',
                start_time:'10:00 AM',
                arrival_airport:'Bangalore',
                arrival_time:'11:30 AM',
                price:7000,
                flight_code:'Al-207',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:8,
                jounrey_date:'17-03-2018',
                origin_airport:'Pune',
                start_time:'10:00 AM',
                arrival_airport:'Bangalore',
                arrival_time:'11:30 AM',
                price:3000,
                flight_code:'Al-208',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:9,
                jounrey_date:'18-03-2018',
                origin_airport:'Pune',
                start_time:'10:00 AM',
                arrival_airport:'Bangalore',
                arrival_time:'11:30 AM',
                price:10000,
                flight_code:'Al-209',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:10,
                jounrey_date:'19-03-2018',
                origin_airport:'Bangalore',
                start_time:'10:00 AM',
                arrival_airport:'Pune',
                arrival_time:'11:30 AM',
                price:6000,
                flight_code:'Al-210',
                seat_left:50,
                company:'Air Asia',
            },
        
            {
                id:11,
                jounrey_date:'16-03-2018',
                origin_airport:'Pune',
                start_time:'10:00 AM',
                arrival_airport:'Bangalore',
                arrival_time:'11:30 AM',
                price:7000,
                flight_code:'Al-211',
                seat_left:50,
                company:'Air Asia',
            },
        ];

        return data;
        
    }

});
