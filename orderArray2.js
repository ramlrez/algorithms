const arr = [4,3,2,5,6,8,9,10,11,15,20];


/*

This sorts the array from the highest value to the lowest value
it will iterate the length of the array - 1
for each iteration, it will have another loop
which will be the j
this will make sure to do the same over and over until we finish the main loop
once the main loop ends, everything will be sorted correctly

example of how it looks: 

input: [3,1,2]

i = 0 
j = 0

 j
[3,1,2]
is 3 < to j+1(1) 
it is  
so we will j++
j = 1
   j
[3,1,2]
is 1 > to j + 1 (2)
its not so we will do 

arr[j] = arr[j+1]
arr[j+1] = arr[j]

we switching the values, so it will look like this [3,2,1]

then the loop will keep going until i is < to the length of the array (3)
so this way, we make sure we dont miss any number
and it will be sorted correctly
*/

const sortArr = (arr) => {
    let j = 0;
    let i = 0;
    while (i < arr.length) {
        while (j < arr.length - 1) {
            if (arr[j] < arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            j++;
        }
        i++
        j = 0;
    }
}
//The array before
console.log(arr);
sortArr(arr);
//The array after calling the function
console.log(arr);
