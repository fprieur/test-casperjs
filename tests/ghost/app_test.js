casper
.start(casper.cli.get('baseUrl'))
.then(function () {
	    var start=Date.now();
        this.waitUntilVisible("footer", function () {
        casper.echo("Footer became visible in " + ( Date.now()-start) + " ms", "INFO_BAR");
    });
   
})
.run(function () {
	this.test.done();
});
