
var initialGrid = [
   0, 9, 0, 0, 0, 0, 8, 3, 0 ,
   3, 0, 4, 0, 1, 0, 0, 2, 0 ,
   0, 0, 0, 0, 0, 9, 0, 1, 4 ,
   0, 0, 9, 0, 0, 1, 0, 0, 3 ,
   0, 0, 0, 2, 7, 4, 0, 0, 0 ,
   6, 0, 0, 9, 0, 0, 2, 0, 0 ,
   9, 2, 0, 7, 0, 0, 0, 0, 0 ,
   0, 6, 0, 0, 3, 0, 9, 0, 1 ,
   0, 5, 3, 0, 0, 0, 0, 6, 0 ];

// console.log(initialGrid);

var workingGrid = initialGrid.map(function(i){
	return i>0 ? {value: i, options: []} : {value: 0, options: [1,2,3,4,5,6,7,8,9]};
});

function gridToArray(grid){
   return grid.map(function(i){
      return i.value;
   })
}

// console.log(workingGrid);

function checkRows(grid){
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
}

function checkColumns(grid){
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
}

function checkSquare(grid){
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
}

// console.log(workingGrid);

function solve(grid){

   count = grid.filter(function(i){
      return i.value > 0;
   }).length;

   console.log(count);
   // if all cells have value then solution found
   if (count==81){
      // console.log(grid);
      return gridToArray(grid);
   }

   checkRows(workingGrid);
   checkColumns(workingGrid);
   checkSquare(workingGrid);

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

solve(workingGrid);

var min = Math.min.apply(Math.Min,workingGrid.map(function(i){
   return i.options.length>0 ? i.options.length : 99;
}));

// console.log(min);


exports.solve = solve;