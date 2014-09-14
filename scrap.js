sudoku.solve = function(grid){

   count = grid.filter(function(i){
      return i.value > 0;
   }).length;

   console.log(count);
   // if all cells have value then solution found
   if (count==81){
      // console.log(grid);
      return sudoku.gridToArray(grid);
   }

   sudoku.checkRows(sudoku.workingGrid);
   sudoku.checkColumns(sudoku.workingGrid);
   sudoku.checkSquare(sudoku.workingGrid);

   // find cells that only have one option and deal with them
   var oneOption = grid.filter(function(i){
      return i.options.length==1;
   });

   // console.log(oneOption);
   if (oneOption.length>0){
      oneOption.forEach(function(i){
         grid[grid.indexOf(i)].value = grid[grid.indexOf(i)].options[0];
         grid[grid.indexOf(i)].options = [];
      });

      solve(grid);
   }

   // find the first cell that only has two possible options
   var twoOptions = grid.indexOf(grid.filter(function(i){
      return i.options.length==2;
   })[0]);

   // console.log(twoOptions);
   if (twoOptions<0){
      console.log(grid);
      return;
   }

   // try the first option to see if it leads to a solution
   grid[twoOptions].value = grid[twoOptions].options[1];
   // grid[twoOptions].options.shift();
   grid[twoOptions].options.pop();

   solve(grid);
}

// solve(workingGrid);

// var min = Math.min.apply(Math.Min,workingGrid.map(function(i){
//    return i.options.length>0 ? i.options.length : 99;
// }));

// console.log(min);