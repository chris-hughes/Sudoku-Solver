
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

sudoku.checkRows = function(grid){
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

sudoku.checkColumns = function(grid){
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

sudoku.checkSquares = function(grid){
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


sudoku.solve = function(grid){

   count = grid.filter(function(i){
      return i.value > 0;
   }).length;

   // if all cells have value then solution found
   if (count==81){
      return sudoku.gridToArray(grid);
   }

}


exports.initialGrid = sudoku.initialArray;
exports.arrayToGrid = sudoku.arrayToGrid;
exports.gridToArray = sudoku.gridToArray;
exports.checkRows = sudoku.checkRows;
exports.checkColumns = sudoku.checkColumns;
exports.checkSquares = sudoku.checkSquares;
exports.solve = sudoku.solve;