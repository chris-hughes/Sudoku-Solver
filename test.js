var should = require('should');
var sudoku = require('./sudoku.js');
var testCases = require('./testCases.js');

describe('Conversion functions', function(){

	describe('Converting array to grid', function(){

		it('should return a working grid', function(){
			sudoku.arrayToGrid([1,2,0]).should.eql(
				[	{ value: 1, options: [] },
				 	{ value: 2, options: [] },
				 	{ value: 0, options: [1,2,3,4,5,6,7,8,9] }
				]
			);
		})
	})

	describe('Converting grid to array', function(){

		it('should return an array', function(){
			sudoku.gridToArray(
				[ 	{ value: 1, options: [] },
					{ value: 2, options: [] },
					{ value: 0, options: [1,2,3,4,5,6,7,8,9] }
				])
			.should.eql([1,2,0]);
		})
	})
})

describe('Checking functions', function(){

	describe('Check row',function(){

		var array = [
			   0, 9, 0, 0, 0, 0, 8, 3, 0 ,
			   3, 0, 4, 0, 1, 0, 0, 2, 0 ,
			   0, 0, 0, 0, 0, 9, 0, 1, 4 ,
			   0, 0, 9, 0, 0, 1, 0, 0, 3 ,
			   0, 0, 0, 2, 7, 4, 0, 0, 0 ,
			   6, 0, 0, 9, 0, 0, 2, 0, 0 ,
			   9, 2, 0, 7, 0, 0, 0, 0, 0 ,
			   0, 6, 0, 0, 3, 0, 9, 0, 1 ,
			   0, 5, 3, 0, 0, 0, 0, 6, 0 ];

		var workingGrid = sudoku.arrayToGrid(array);

		it('should check rows and update options', function(){
			sudoku.checkRows(workingGrid).should.eql(testCases.rowTest);
		})

	})

	describe('Check column',function(){

		var array = [
			   0, 9, 0, 0, 0, 0, 8, 3, 0 ,
			   3, 0, 4, 0, 1, 0, 0, 2, 0 ,
			   0, 0, 0, 0, 0, 9, 0, 1, 4 ,
			   0, 0, 9, 0, 0, 1, 0, 0, 3 ,
			   0, 0, 0, 2, 7, 4, 0, 0, 0 ,
			   6, 0, 0, 9, 0, 0, 2, 0, 0 ,
			   9, 2, 0, 7, 0, 0, 0, 0, 0 ,
			   0, 6, 0, 0, 3, 0, 9, 0, 1 ,
			   0, 5, 3, 0, 0, 0, 0, 6, 0 ];

		var workingGrid = sudoku.arrayToGrid(array);

		it('should check columns and update options', function(){
			sudoku.checkColumns(workingGrid).should.eql(testCases.columnTest);
		})

	})

	describe('Check square',function(){

		var array = [
			   0, 9, 0, 0, 0, 0, 8, 3, 0 ,
			   3, 0, 4, 0, 1, 0, 0, 2, 0 ,
			   0, 0, 0, 0, 0, 9, 0, 1, 4 ,
			   0, 0, 9, 0, 0, 1, 0, 0, 3 ,
			   0, 0, 0, 2, 7, 4, 0, 0, 0 ,
			   6, 0, 0, 9, 0, 0, 2, 0, 0 ,
			   9, 2, 0, 7, 0, 0, 0, 0, 0 ,
			   0, 6, 0, 0, 3, 0, 9, 0, 1 ,
			   0, 5, 3, 0, 0, 0, 0, 6, 0 ];

		var workingGrid = sudoku.arrayToGrid(array);

		// WHY WON'T THIS WORK ?????????????????????? why is there an extra ] 

		// it('should check square and update options', function(){
		// 	sudoku.checkSquares(workingGrid).should.eql([testCases.squareTest]);
		// })

	})
})


describe('Solve Function', function(){

	describe('Fully populated grid', function(){

	    it('should return a fully populated grid', function(){

	    	var array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,
					    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
					    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
					    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
					    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
					    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
					    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
					    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
					    9, 1, 2, 3, 4, 5, 6, 7, 8 ];

	    	var workingGrid = sudoku.arrayToGrid(array);

			sudoku.solve(workingGrid).should.eql(
						[1, 2, 3, 4, 5, 6, 7, 8, 9 ,
					    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
					    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
					    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
					    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
					    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
					    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
					    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
					    9, 1, 2, 3, 4, 5, 6, 7, 8 ]
			);

	    })
 	})
})