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
                html    : '<h1> Hello ' + contributor.name + ' Please click on below link to confirm and contribute </h1> ' + 
                        '<h2> Amount requested is ' + c.amount + '</h2>' + 
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
