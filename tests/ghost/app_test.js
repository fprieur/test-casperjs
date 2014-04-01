casper.test.begin("Testez des afffaires", 1, function suite(test){
casper.start("http://www.donnees.ville.montreal.qc.ca", function() {
    .then(function () {
        this.test.assertTitle("Portail données ouvertes", "le titre est bien celui que l'on attendait");    
    })
});

});
.run(function () {
	this.test.done();
});
