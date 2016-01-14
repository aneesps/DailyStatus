var projects = new Projects([{
    id: 1,
    value: 'SNT'
}, {
    id: 2,
    value: 'CM'
}, {
    id: 3,
    value: 'Savi'
}, {
    id: 4,
    value: 'Tolven'
}]);

var activities = new Activities([{
    id: 1,
    value: 'Coding'
}, {
    id: 2,
    value: 'Training'
}, {
    id: 3,
    value: 'Testing'
}]);

// var date=Date();







var date = new Date();
// date.setDate(date.getDate());

// var dateMsg = date.getDate(date.setDate(date.getDate()))+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();









var dates = new Dates([{
    
    id:1,    
    value: date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear()
}, {
    id:2,
    value: (date.getDate()-1)+'/'+ (date.getMonth()+1) +'/'+date.getFullYear()
}, {
    id:3,
    value: (date.getDate()-2)+'/'+ (date.getMonth()+1) +'/'+date.getFullYear()
},{
    id:4,
    value: (date.getDate()-3)+'/'+ (date.getMonth()+1) +'/'+date.getFullYear()
},{
    id:5,
    value: (date.getDate()-4)+'/'+ (date.getMonth()+1) +'/'+date.getFullYear()
}]);

// localStorage.clear();

var LS_KEY = 'MY_LS_KEY';
var data = JSON.parse( localStorage.getItem( this.LS_KEY ) );

var todayStatus = new TodayStatus();

var statusCollection = new StatusCollection();


statusCollection.add(data);




var root = new Root({
    'dates':dates,
    'projects':projects,
    'activities':activities,

    'statusCollection':statusCollection
});
root.render();
