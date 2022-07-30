import './style.css';
import * as asyncFetchStuff from './modules/asyncFetchStuff';
// contains weatherFetch
import * as Controller from './modules/Controller';
// contains getLocation

const form = document.getElementById('form-location');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Controller.initialize(form);
});
