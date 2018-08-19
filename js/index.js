
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrPA9lu1xkfsBcPeIsRgdA_wr0F5eyV8M",
    authDomain: "front-end-8f7a1.firebaseapp.com",
    databaseURL: "https://front-end-8f7a1.firebaseio.com",
    projectId: "front-end-8f7a1",
    storageBucket: "",
    messagingSenderId: "578517031535"
  };
  firebase.initializeApp(config);
var rootRef = firebase.database().ref();

function selectQuery(tablename,key,value,cb){
    rootRef.child(tablename).orderByChild(key).equalTo(value).once("value",snapshot => {
      if (snapshot.exists()){
        const userData = snapshot.val();
        console.log("exists!", userData);
        cb({status:0,data:userData});
      }else{
        cb({status:1,data:[]});
      }
  });

}

function insertQuery(tablename,insertdata,cb){
  rootRef.child(tablename).push().set(insertdata,function(err){
    if(err){
      cb({status:1,data:err});
    }else{
      cb({status:0,data:null});
    }
  });
  
}

