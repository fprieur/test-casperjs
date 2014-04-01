casper
.start(casper.cli.get('baseUrl'))
.then(function () {
    this.test.assertTitle("Portail données ouvertes", "le titre est bien celui que l'on attendait");    
})
.run(function () {
	this.test.done();
});
