for (var i = 0; i < this.contributors.length; i++) {

        dpd.contributor.get(this.contributors[i], function (contributor) {
            dpd.email.post({
                to      : contributor.emailId,
                from    :'moneycrazehack24@gmail.com',
                subject : 'Email from MoneyCraze',
                html    : '<h1> Hello ' + contributor.name + ' Please click on below link to confirm and contribute </h1> ' + 
                        '<h2> Amount requested is ' + this.targetAmount + '</h2>' + 
                        '<href>http://localhost:2403/payment.html?profile=' + this.profileId+ '&goalId=' +this.id +'&amount='+this.targetAmount +'</href>'
             }, function ( err, results ) {
              console.log(results);
            });
    });
 
}
