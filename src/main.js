import $ from 'jquery';
import './styles.css';
import { ArrayBuilder, arrayCheck, Splitter, Check, colArrayBuilder, Sort } from './sudokuChecker.js';

$(document).ready(function(){
  $('#checker').submit(function(event){
    event.preventDefault();
    var row1 = $('#row1').val();
    var row2 = $('#row2').val();
    var row3 = $('#row3').val();
    var row4 = $('#row4').val();
    var row5 = $('#row5').val();
    var row6 = $('#row6').val();
    var row7 = $('#row7').val();
    var row8 = $('#row8').val();
    var row9 = $('#row9').val();
    var rowArray = [Splitter(row1), Splitter(row2), Splitter(row3), Splitter(row4), Splitter(row5), Splitter(row6), Splitter(row7), Splitter(row8), Splitter(row9)];
    var colArray = colArrayBuilder(rowArray);
    var rowResult = arrayCheck(rowArray);
    var colResult = arrayCheck(colArray);
    if ((rowResult === true) && (colResult === true)) {
      $('#resultText').text("U A WINNAH");
    }
    if ((rowResult === false) || (colResult === false)){
      $('#resultText').text("U A LOOSAH");
    }
  })
})
