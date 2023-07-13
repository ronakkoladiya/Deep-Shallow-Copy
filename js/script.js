// shallow copy tags
var shallowname = document.getElementById('shallowname');
var spreadname = document.getElementById('spreadname');
var spreadcity = document.getElementById('spreadcity');

var shalloworiginalname = document.getElementById('shalloworiginalname');
var shalloworiginalemail = document.getElementById('shalloworiginalemail');
var shalloworiginalnumber = document.getElementById('shalloworiginalnumber');
var shalloworiginalcity = document.getElementById('shalloworiginalcity');
var shalloworiginalstate = document.getElementById('shalloworiginalstate');

var shallowcopyname = document.getElementById('shallowcopyname');
var shallowcopyemail = document.getElementById('shallowcopyemail');
var shallowcopynumber = document.getElementById('shallowcopynumber');
var shallowcopycity = document.getElementById('shallowcopycity');
var shallowcopystate = document.getElementById('shallowcopystate');

var shallowspreadname = document.getElementById('shallowspreadname');
var shallowspreademail = document.getElementById('shallowspreademail');
var shallowspreadnumber = document.getElementById('shallowspreadnumber');
var shallowspreadcity = document.getElementById('shallowspreadcity');
var shallowspreadstate = document.getElementById('shallowspreadstate');


//deep copy tags
var deepname = document.getElementById('deepname');

var deeporiginalname = document.getElementById('deeporiginalname');
var deeporiginalemail = document.getElementById('deeporiginalemail');
var deeporiginalnumber = document.getElementById('deeporiginalnumber');

var deepcopyname = document.getElementById('deepcopyname');
var deepcopyemail = document.getElementById('deepcopyemail');
var deepcopynumber = document.getElementById('deepcopynumber');

// shallow original object
let shalloworiginalobj = {
    name: 'Ronak Koladiya',
    email: 'ronak@info.com',
    number: '9087645673',
    address: {
        city: 'Surat',
        state: 'Gujarat'
    }
}

// shallow copy object
let shallowcopyobj = shalloworiginalobj;

// shallow spread object
let shallowspreadobj = {...shalloworiginalobj};

//deep original object
let deeporiginalobj = {
    name: 'Ridham Kevadiya',
    email: 'ridham@info@',
    number: '6787987854'
}

// deep copy obj
let deepcopyobj = JSON.parse(JSON.stringify(deeporiginalobj));

// for normal copy name
function changeShallow(){
    shallowcopyobj.name = shallowname.value;
    printData();
}

// for spread copy name
function changeSpreadName(){
    shallowspreadobj.name = spreadname.value;
    printData();
}

// for spread copy city
function changeSpreadCity(){
    shallowspreadobj.address.city = spreadcity.value;
    printData();
}

// for deep copy name
function changeDeep(){
    deepcopyobj.name = deepname.value;
    printData();
}

// prints all data
function printData(){

    // shallow spread values
    shallowspreadname.innerHTML  = shallowspreadobj.name;
    shallowspreademail.innerHTML  = shallowspreadobj.email;
    shallowspreadnumber.innerHTML  = shallowspreadobj.number;
    shallowspreadcity.innerHTML = shallowspreadobj.address.city;
    shallowspreadstate.innerHTML = shallowspreadobj.address.state;

    // shallow copy values
    shallowcopyname.innerHTML  = shallowcopyobj.name;
    shallowcopyemail.innerHTML  = shallowcopyobj.email;
    shallowcopynumber.innerHTML  = shallowcopyobj.number;
    shallowcopycity.innerHTML = shallowcopyobj.address.city;
    shallowcopystate.innerHTML = shallowcopyobj.address.state;

    // shallow original values
    shalloworiginalname.innerHTML  = shalloworiginalobj.name;
    shalloworiginalemail.innerHTML  = shalloworiginalobj.email;
    shalloworiginalnumber.innerHTML  = shalloworiginalobj.number;
    shalloworiginalcity.innerHTML = shalloworiginalobj.address.city;
    shalloworiginalstate.innerHTML = shalloworiginalobj.address.state;

    // deep copy values
    deepcopyname.innerHTML  = deepcopyobj.name;
    deepcopyemail.innerHTML  = deepcopyobj.email;
    deepcopynumber.innerHTML  = deepcopyobj.number;

    // deep original values
    deeporiginalname.innerHTML  = deeporiginalobj.name;
    deeporiginalemail.innerHTML  = deeporiginalobj.email;
    deeporiginalnumber.innerHTML  = deeporiginalobj.number;
}

printData();