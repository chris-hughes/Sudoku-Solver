var should = require('should');
var solve = require('./sudoku.js');


describe('Solve Function', function(){

	describe('Fully populated grid', function(){

	    it('should return a fully populated grid', function(){

	    	var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,
					    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
					    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
					    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
					    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
					    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
					    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
					    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
					    9, 1, 2, 3, 4, 5, 6, 7, 8 ];

			var workingGrid = grid.map(function(i){
				return i>0 ? {value: i, options: []} : {value: 0, options: [1,2,3,4,5,6,7,8,9]};
			});

			solve.solve(workingGrid).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9 ,
					    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
					    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
					    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
					    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
					    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
					    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
					    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
					    9, 1, 2, 3, 4, 5, 6, 7, 8 ]);

	    })
 	})
})