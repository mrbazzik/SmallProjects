/*	requirejs.config({
		baseUrl: '',
			paths: {
					jquery: ''
				}
		});*/
		
			require(['./test'],function(test){
				test();
			});