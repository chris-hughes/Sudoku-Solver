var rowOptionsTest = [ 
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 8, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 7 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 1, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 7, 8 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 2, options: [] },
	{ value: 7, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 3, 5, 6, 8, 9 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 7, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 7, 8 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 2, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 7, 8 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 2, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 2, 4, 5, 7, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] },
	{ value: 5, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 2, 4, 7, 8, 9 ] } 
];

var columnOptionsTest = [ 
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 8, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 3, 4, 7, 8 ] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 1, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 2, options: [] },
	{ value: 7, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 3, 4, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] },
	{ value: 9, options: [] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 7, options: [] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 7, 8 ] },
	{ value: 5, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 8 ] },
	{ value: 0, options: [ 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 3, 4, 5, 6, 7 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 2, 5, 6, 7, 8, 9 ] } 
];

var squareOptionsTest = [ 
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 8, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 5, 6, 7, 9 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 5, 6, 7, 9 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 5, 6, 7, 9 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 5, 6, 7, 9 ] },
	{ value: 1, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 3, 5, 6, 8 ] },
	{ value: 0, options: [ 3, 5, 6, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 2, options: [] },
	{ value: 7, options: [] },
	{ value: 4, options: [] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 3, 5, 6, 8 ] },
	{ value: 0, options: [ 3, 5, 6, 8 ] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 0, options: [ 1, 4, 5, 6, 7, 8, 9 ] },
	{ value: 9, options: [] },
	{ value: 2, options: [] },
	{ value: 0, options: [ 1, 4, 7, 8 ] },
	{ value: 7, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] },
	{ value: 0, options: [ 1, 4, 7, 8 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 1, 4, 7, 8 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 9, options: [] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] },
	{ value: 1, options: [] },
	{ value: 0, options: [ 1, 4, 7, 8 ] },
	{ value: 5, options: [] },
	{ value: 3, options: [] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] },
	{ value: 6, options: [] },
	{ value: 0, options: [ 2, 3, 4, 5, 7, 8 ] } 
];

singleValueTest = [ 
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 9, options: [] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] } 
];

var singleRecursionTest = [ 
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] },
{ value: 9, options: [] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 5, 6, 9 ] },
{ value: 0, options: [ 1, 3, 4, 6, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 5, 6, 9 ] },
{ value: 0, options: [ 1, 3, 4, 6, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 9 ] },
{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 6, 7, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 6, 7, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 6, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 2, 3, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 6, 7, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 5, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 6, 7, 8, 9 ] },
{ value: 0, options: [ 4, 5, 7, 8, 9 ] },
{ value: 1, options: [] },
{ value: 2, options: [] },
{ value: 3, options: [] },
{ value: 0, options: [ 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 7, 8, 9 ] },
{ value: 4, options: [] },
{ value: 5, options: [] },
{ value: 6, options: [] },
{ value: 0, options: [ 2, 3, 4, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 3, 4, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 2, 4, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 5, 6, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 6, 8, 9 ] },
{ value: 0, options: [ 1, 2, 3, 4, 5, 8, 9 ] },
{ value: 9, options: [] },
{ value: 7, options: [] },
{ value: 8, options: [] } 
];


exports.rowOptionsTest = rowOptionsTest;
exports.columnOptionsTest = columnOptionsTest;
exports.squareOptionsTest = squareOptionsTest;
exports.singleValueTest = singleValueTest;
exports.singleRecursionTest = singleRecursionTest;