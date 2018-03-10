var parUserId = ctx.req.body.parentUserId;

console.log('Provided Parent User Id is ' + parUserId);

if(parUserId == 'undefined')
    parUserId = id;

dpd.profile.post({"name": ctx.req.body.username,"dob":ctx.req.body.dob,"mobileNumber":ctx.req.body.mobileNumber,
                    "paymentLink":ctx.req.body.paymentLink,"parentUserId":parUserId,"linkedUserId":this.id}, function(result, err) {
  if(err) return console.log(err);
  console.log(result, result.id);
});


