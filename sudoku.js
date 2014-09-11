
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

// console.log(workingGrid);

function checkRows(grid){
	for (i=0;i<81;i++){
		if (!grid[i].value){
			for (j=i-(i % 9);j<i+9-(i % 9);j++){
            console.log(i,j);
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

checkRows(workingGrid);

console.log(workingGrid);