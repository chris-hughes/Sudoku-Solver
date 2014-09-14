var should = require('should');
var sudoku = require('./sudoku.js');

describe('Setup', function(){

	describe('Converting array to grid', function(){

		it('should return a working grid', function(){
			sudoku.arrayToGrid([1,2,0]).should.eql([ { value: 1, options: [] },
													 { value: 2, options: [] },
													 { value: 0, options: [1,2,3,4,5,6,7,8,9] }
													]);
		})
	})

	describe('Converting grid to array', function(){

		it('should return an array', function(){
			sudoku.gridToArray([ { value: 1, options: [] },
													 { value: 2, options: [] },
													 { value: 0, options: [1,2,3,4,5,6,7,8,9] }
													]).should.eql([1,2,0]);
		})
	})
})



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

			sudoku.solve(workingGrid).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9 ,
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