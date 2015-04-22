    'use strict';

    module.exports = function () {
      return {
        transformTextIntoArr: function (text, callback){
          var val = text,
              arrValues = [];
          while(val){
            arrValues.push(parseFloat(val));
            val = val.slice(arrValues[arrValues.length-1].toString().length);
            if(val.length == 1) break;
            if (val) {
              arrValues.push(val[0]);
              val = val.slice(1);
            }
          }
          callback(arrValues);
          return this;
        },
        analyzeOperator: function(arrValues, callback){
          for (var i = 0; i < arrValues.length; i++) {

            if (arrValues[i] == "x" || arrValues[i] == "*" || arrValues[i] == "/") {
              (arrValues[i] == "/") ? arrValues[i-1] /= arrValues[i+1] : arrValues[i-1] *= arrValues[i+1];
              arrValues.splice(i, 2);
              i--;
              continue;
            }
            if (arrValues[i] == "-") {
              arrValues[i+1] = parseFloat("-" + arrValues[i+1]);
              arrValues.splice(i, 1);
            }
            if (arrValues[i] == "+" || arrValues[i] == ".") {
              arrValues.splice(i, 1);
            }
            console.log(arrValues);
          };
          callback(arrValues);
          return this;
        }
      };
    }; 