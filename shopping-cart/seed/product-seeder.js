var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
   new Product({
     imagePath:  'https://lh3.googleusercontent.com/LpLq5h0zsIAgfCDP2YSE1iVnVL8TGU-DTqjwWxRfEzg4brlwVSGFRdOn4aNQlrTeOwemoBELywmkV0du6eUnrG-OrKlKpHDwKo3Z6PHtT3Xl471gTSWRtvjPt2p7e6R8oLQwvSleCWe-40HJDOGWmxQ92tXT2tMmqeMCfkd3V8rnsb4L5rBGz4HBugydtpL2Upo9FFJM1oUv0Q_MI_OayySid2TSEzybLRUt9Kacqi2L9CL0eQnmMlw0I5TMI_WdyYrb27HEvWUys3x94gTfKbkggLWGVVTdKrLTeb-ftUdyQ3VpA_ltKfguKGR-Sp3jkCW50Ns4mKMBfO4eaMyeTAZRtAQLMKBQYKVzuWh51b48O8IdeGPdYqrZDN3UlyA5rpwY24NLm58hayFY3WRZzlOWEbC8XsLfoCUcwjIxmIqiSrcGyPx7SRxdgNxU5fMVf72sX9E0zC6uvMI9AciSCNdRojIulS_9SIv_Sv2qa12RRlOQRGY0tBZnY7E-zjYOm97dobDAzVRZXRhqU3KQbIE5pOlmX4rFdjMvIHyoF6M5kjs9eIvAt7g3gKLJUdK3YaCL3a3TdhLheGbnX-PELYYHMmyuIcjR1V8B7w5LYDKdgBZ24x7a8Q-tMwPSNlSk-JTP89meSLpt9-CDiyBCOa5fhrSS0iE=w459-h413-no',
     title: 'Hand Ring',
     description: 'Awesome Ring!!!!',
     price: 10
}),
new Product({
      imagePath:  'https://lh3.googleusercontent.com/LpLq5h0zsIAgfCDP2YSE1iVnVL8TGU-DTqjwWxRfEzg4brlwVSGFRdOn4aNQlrTeOwemoBELywmkV0du6eUnrG-OrKlKpHDwKo3Z6PHtT3Xl471gTSWRtvjPt2p7e6R8oLQwvSleCWe-40HJDOGWmxQ92tXT2tMmqeMCfkd3V8rnsb4L5rBGz4HBugydtpL2Upo9FFJM1oUv0Q_MI_OayySid2TSEzybLRUt9Kacqi2L9CL0eQnmMlw0I5TMI_WdyYrb27HEvWUys3x94gTfKbkggLWGVVTdKrLTeb-ftUdyQ3VpA_ltKfguKGR-Sp3jkCW50Ns4mKMBfO4eaMyeTAZRtAQLMKBQYKVzuWh51b48O8IdeGPdYqrZDN3UlyA5rpwY24NLm58hayFY3WRZzlOWEbC8XsLfoCUcwjIxmIqiSrcGyPx7SRxdgNxU5fMVf72sX9E0zC6uvMI9AciSCNdRojIulS_9SIv_Sv2qa12RRlOQRGY0tBZnY7E-zjYOm97dobDAzVRZXRhqU3KQbIE5pOlmX4rFdjMvIHyoF6M5kjs9eIvAt7g3gKLJUdK3YaCL3a3TdhLheGbnX-PELYYHMmyuIcjR1V8B7w5LYDKdgBZ24x7a8Q-tMwPSNlSk-JTP89meSLpt9-CDiyBCOa5fhrSS0iE=w459-h413-no',
      title: 'Leg Chain',
      description: 'Awesome Chain!!!!',
      price: 50
 }),
 new Product({
      imagePath:  'https://lh3.googleusercontent.com/LpLq5h0zsIAgfCDP2YSE1iVnVL8TGU-DTqjwWxRfEzg4brlwVSGFRdOn4aNQlrTeOwemoBELywmkV0du6eUnrG-OrKlKpHDwKo3Z6PHtT3Xl471gTSWRtvjPt2p7e6R8oLQwvSleCWe-40HJDOGWmxQ92tXT2tMmqeMCfkd3V8rnsb4L5rBGz4HBugydtpL2Upo9FFJM1oUv0Q_MI_OayySid2TSEzybLRUt9Kacqi2L9CL0eQnmMlw0I5TMI_WdyYrb27HEvWUys3x94gTfKbkggLWGVVTdKrLTeb-ftUdyQ3VpA_ltKfguKGR-Sp3jkCW50Ns4mKMBfO4eaMyeTAZRtAQLMKBQYKVzuWh51b48O8IdeGPdYqrZDN3UlyA5rpwY24NLm58hayFY3WRZzlOWEbC8XsLfoCUcwjIxmIqiSrcGyPx7SRxdgNxU5fMVf72sX9E0zC6uvMI9AciSCNdRojIulS_9SIv_Sv2qa12RRlOQRGY0tBZnY7E-zjYOm97dobDAzVRZXRhqU3KQbIE5pOlmX4rFdjMvIHyoF6M5kjs9eIvAt7g3gKLJUdK3YaCL3a3TdhLheGbnX-PELYYHMmyuIcjR1V8B7w5LYDKdgBZ24x7a8Q-tMwPSNlSk-JTP89meSLpt9-CDiyBCOa5fhrSS0iE=w459-h413-no',
      title: 'Neck Chain',
      description: 'Awesome Chain!!!!',
      price: 30
 }),
 new Product({
      imagePath:  'https://lh3.googleusercontent.com/LpLq5h0zsIAgfCDP2YSE1iVnVL8TGU-DTqjwWxRfEzg4brlwVSGFRdOn4aNQlrTeOwemoBELywmkV0du6eUnrG-OrKlKpHDwKo3Z6PHtT3Xl471gTSWRtvjPt2p7e6R8oLQwvSleCWe-40HJDOGWmxQ92tXT2tMmqeMCfkd3V8rnsb4L5rBGz4HBugydtpL2Upo9FFJM1oUv0Q_MI_OayySid2TSEzybLRUt9Kacqi2L9CL0eQnmMlw0I5TMI_WdyYrb27HEvWUys3x94gTfKbkggLWGVVTdKrLTeb-ftUdyQ3VpA_ltKfguKGR-Sp3jkCW50Ns4mKMBfO4eaMyeTAZRtAQLMKBQYKVzuWh51b48O8IdeGPdYqrZDN3UlyA5rpwY24NLm58hayFY3WRZzlOWEbC8XsLfoCUcwjIxmIqiSrcGyPx7SRxdgNxU5fMVf72sX9E0zC6uvMI9AciSCNdRojIulS_9SIv_Sv2qa12RRlOQRGY0tBZnY7E-zjYOm97dobDAzVRZXRhqU3KQbIE5pOlmX4rFdjMvIHyoF6M5kjs9eIvAt7g3gKLJUdK3YaCL3a3TdhLheGbnX-PELYYHMmyuIcjR1V8B7w5LYDKdgBZ24x7a8Q-tMwPSNlSk-JTP89meSLpt9-CDiyBCOa5fhrSS0iE=w459-h413-no',
      title: 'Bracelet',
      description: 'Awesome Bracelet!!!!',
      price: 70
 })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
      products[i].save(function(err, result){
      done++;
      if (done === products.length) {
           exit();
      }
      });
}

function exit() {
     mongoose.disconnect();
}