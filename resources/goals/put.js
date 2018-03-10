var contributors = ctx.req.body.contributors;

console.log(contributors);
if(typeof contributors != 'undefined')
{
    console.log('inside');
    contributors.forEach(function( c ) {
           dpd.contributor.get(c.id, function (contributor) {
            dpd.email.post({
                to      : contributor.emailId,
                from    :'moneycrazehack24@gmail.com',
                subject : 'Email from MoneyCraze',
                html    : '<h3> Hello ' + contributor.name + ', <br><br> I have created a saving goal ' + 
                            '<br><b> Goal Name: ' + this.goalName + 
                            '<br> Goal Description: ' + this.goalDescription + 
                            '<br><br><br><br>Please click on below link to confirm and contribute to halp me achieve my saving goal </h3> ' + 
                        '<br><h2> Amount requested is £' + c.amount + '</h2>' + 
                        '<href>http://localhost:2403/payment.html?profile=' + this.profileId+ '&goalId=' +this.id +'&amount='+c.amount +'</href>'
             }, function ( err, results ) {
            //   console.log(results);
            });
        });
    });
}
else
{
    console.log(ctx.req.body["collectedAmount"]);
    this.collectedAmount = this.collectedAmount + Number(ctx.req.body["collectedAmount"]);
}
