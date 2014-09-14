
var sudoku = {};

sudoku.initialArray = [
   0, 9, 0, 0, 0, 0, 8, 3, 0 ,
   3, 0, 4, 0, 1, 0, 0, 2, 0 ,
   0, 0, 0, 0, 0, 9, 0, 1, 4 ,
   0, 0, 9, 0, 0, 1, 0, 0, 3 ,
   0, 0, 0, 2, 7, 4, 0, 0, 0 ,
   6, 0, 0, 9, 0, 0, 2, 0, 0 ,
   9, 2, 0, 7, 0, 0, 0, 0, 0 ,
   0, 6, 0, 0, 3, 0, 9, 0, 1 ,
   0, 5, 3, 0, 0, 0, 0, 6, 0 ];

sudoku.arrayToGrid = function(array){
   return array.map(function(i){
      return i>0 ? {value: i, options: []} : {value: 0, options: [1,2,3,4,5,6,7,8,9]};
   });
}

sudoku.gridToArray = function(grid){
   return grid.map(function(i){
      return i.value;
   })
}

sudoku.workingGrid = sudoku.arrayToGrid(sudoku.initialArray);

sudoku.checkRowsOptions = function(grid){
	for (i=0;i<81;i++){
		if (!grid[i].value){
			for (j=i-(i % 9);j<i+9-(i % 9);j++){
				if (grid[j].value){
               var index = grid[i].options.indexOf(grid[j].value);
               if (index>-1){
                  grid[i].options.splice(index, 1);
               }
            }
			}
		}
	}
   return grid;
}

sudoku.checkColumnsOptions = function(grid){
   for (i=0;i<81;i++){
      if (!grid[i].value){
         for (j=i-9*Math.floor(i/9);j<i+81-9*Math.floor(i/9);j+=9){
            if (grid[j].value){
               var index = grid[i].options.indexOf(grid[j].value);
               if (index>-1){
                  grid[i].options.splice(index, 1);
               }
            }
         }
      }
   }
   return grid;
}

sudoku.checkSquaresOptions = function(grid){
   for (i=0;i<81;i++){
      if (!grid[i].value){
         for (j=i-i%3;j<i+3-(i%3);j++){
            for (k=j-(Math.floor(j/9) % 3)*9;k<j+27-(Math.floor(j/9) % 3)*9;k+=9){
               if (grid[k].value){
                  var index = grid[i].options.indexOf(grid[k].value);
                  if (index>-1){
                     grid[i].options.splice(index, 1);
                  }
               }
            }
         }
      }
   }
   return grid;
}

sudoku.checkRowsSolutions = function(grid){
   for (i=0;i<9;i++){
      rowTotal = 0;
      for (j=0;j<9;j++){
         rowTotal+=grid[i*9+j].value;
      }
      if (rowTotal!=45){
         return false;
      }
   }
   return true;
}

sudoku.checkColumnsSolutions = function(grid){
   for (i=0;i<9;i++){
      columnTotal = 0;
      for (j=0;j<9;j++){
         columnTotal+=grid[i+j*9].value;
      }
      if (columnTotal!=45){
         return false;
      }
   }
   return true;
}

sudoku.checkSquaresSolutions = function(grid){
   var checkSum = [0,3,6,27,30,33,54,57,60].map(function(i){
      squareTotal=0;
      for (j=0;j<3;j++){
         for (k=0;k<27;k+=9){
            squareTotal+=grid[i+j+k].value;
         }
      }
      return squareTotal;
   })
   return checkSum.reduce(function(a,b){
      return a+b;
   }) == 45*9 ? true : false;
}

sudoku.solve = function(grid){

   count = grid.filter(function(i){
      return i.value > 0;
   }).length;

   // if all cells have value then check if valid solution found
   if (count==81){
      if (sudoku.checkRowsSolutions(grid)    && 
          sudoku.checkColumnsSolutions(grid) && 
          sudoku.checkSquaresSolutions(grid)
         )
      {
         return true;
      }
      else {
         return false;
      }
   }
}


exports.initialGrid = sudoku.initialArray;
exports.arrayToGrid = sudoku.arrayToGrid;
exports.gridToArray = sudoku.gridToArray;
exports.checkRowsOptions = sudoku.checkRowsOptions;
exports.checkColumnsOptions = sudoku.checkColumnsOptions;
exports.checkSquaresOptions = sudoku.checkSquaresOptions;
exports.checkRowsSolutions = sudoku.checkRowsSolutions;
exports.checkColumnsSolutions = sudoku.checkColumnsSolutions;
exports.checkSquaresSolutions = sudoku.checkSquaresSolutions;
exports.solve = sudoku.solve;