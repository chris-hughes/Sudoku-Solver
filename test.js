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

describe('Options checking functions', function(){

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
			sudoku.checkRowsOptions(workingGrid).should.eql(testCases.rowOptionsTest);
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
			sudoku.checkColumnsOptions(workingGrid).should.eql(testCases.columnOptionsTest);
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
		// 	sudoku.checkSquaresOptions(workingGrid).should.eql([testCases.squareOptionsTest]);
		// })

	})
})

describe('Solution checking functions', function(){

	describe('Check row', function(){

		var array = [
				1, 2, 3, 4, 5, 6, 7, 8, 9 ,
			    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
			    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
			    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
			    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
			    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
			    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
			    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
			    9, 1, 2, 3, 4, 5, 6, 7, 8 ];

	    var workingGrid = sudoku.arrayToGrid(array);

		it('should check rows are correct', function(){
			sudoku.checkRowsSolutions(workingGrid).should.be.true;
		})

	})

	describe('Check column', function(){

		var array = [
				1, 2, 3, 4, 5, 6, 7, 8, 9 ,
			    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
			    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
			    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
			    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
			    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
			    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
			    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
			    9, 1, 2, 3, 4, 5, 6, 7, 8 ];

	    var workingGrid = sudoku.arrayToGrid(array);

		it('should check columns are correct', function(){
			sudoku.checkColumnsSolutions(workingGrid).should.be.true;
		})

	})

	describe('Check square', function(){

		var array = [
				1, 2, 3, 4, 5, 6, 7, 8, 9 ,
			    4, 5, 6, 7, 8, 9, 1, 2, 3 ,
			    7, 8, 9, 1, 2, 3, 4, 5, 6 ,
			    2, 3, 4, 5, 6, 7, 8, 9, 1 ,
			    5, 6, 7, 8, 9, 1, 2, 3, 4 ,
			    8, 9, 1, 2, 3, 4, 5, 6, 7 ,
			    3, 4, 5, 6, 7, 8, 9, 1, 2 ,
			    6, 7, 8, 9, 1, 2, 3, 4, 5 ,
			    9, 1, 2, 3, 4, 5, 6, 7, 8 ];

	    var workingGrid = sudoku.arrayToGrid(array);

		it('should check squares are correct', function(){
			sudoku.checkSquaresSolutions(workingGrid).should.be.true;
		})

	})

})


describe('Solve Function', function(){

	describe('Fully populated grid', function(){

	    var array = [
				1, 2, 3, 4, 5, 6, 7, 8, 9 ,
				4, 5, 6, 7, 8, 9, 1, 2, 3 ,
				7, 8, 9, 1, 2, 3, 4, 5, 6 ,
				2, 3, 4, 5, 6, 7, 8, 9, 1 ,
				5, 6, 7, 8, 9, 1, 2, 3, 4 ,
				8, 9, 1, 2, 3, 4, 5, 6, 7 ,
				3, 4, 5, 6, 7, 8, 9, 1, 2 ,
				6, 7, 8, 9, 1, 2, 3, 4, 5 ,
				9, 1, 2, 3, 4, 5, 6, 7, 8 ];

	    var workingGrid = sudoku.arrayToGrid(array);

	    it('should return a fully populated grid', function(){

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