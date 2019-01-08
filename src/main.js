import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { RomanNumber } from './romanNumerals';


$(document).ready(function() {
  $(".button").click(function(event) {
    event.preventDefault();
    var num = $('#number').val();
    var number = new RomanNumber(num);
    if (number.numChecker()) {
      var result = number.countToNumerals();
      $('#result').append("<li>" + result + "</li>");
    } else { console.log('not a number'); }
  });
});
