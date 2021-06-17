var mysql = require('mysql');
var con  = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "lista"

    });

con.connect(
    function(err){
         if (err) {
           console.log(err);
         }else{
         console.log("Connected Succesfully to the database");
            
         var sqlQuery = `INSERT INTO lista1 values (2, 'Lorik','Hoxha')`;
            con.query(sqlQuery, function(err, result) {
                 if(err){throw err;}
                else {
                    console.log('1 ROW inserted')
                }
                });
          
    }}
  );
    


  const submitBtn = document.querySelector('.submitBtn');

  submitBtn.addEventListener('click', function () {
      console.log('Button is working');
  });