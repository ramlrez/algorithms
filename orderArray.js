// Define the array
const arr = [0,0,0,1,0,2,0,0,0,3,4,5,6,0,0,7,0,8];
// This algorithm function will sort the numbers != 0 to the start, and the numbers == 0 to the end 
const reOrderArr = (arr) => {
    let l = 0;
    let r = 1;
    let zeroPos = 0;
    while (r < arr.length) {
        if (arr[l] == 0) {
            if (arr[r] != 0) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
                l++;
                r++;
            }else{
                r++;
            }
        }else{
            l++;
            r++;
        }

    }

}
// Print the array before you run the function
console.log(arr);
reOrderArr(arr);
// Now check the result
console.log(arr);

/*
    
    The function works simple, i'll explain it
    lets say your array is [1,2,0,3]
    there are 2 pointers, the (let l = 0) and (let r = 1)

    the while loop checks the r pointer isnt greater than the array length

    so, at the first loop, we will check the arr[l] == 0
    then we will check if the arr[r] != 0
    if this condition is valid, we will switch the values in the following wayy

    [arr[l], arr[r]] = [arr[r], arr[l]]
    so basically what we do here, is make a new array with the values of 
    arr[r] and arr[l]

    then we use the destructure operator on the left side [arr[l],arr[r]] =
    to asign the values of the new array we created, this way is easier to read
    and it only takes 1 line of code

    then in the case arr[r] != 0 isnt valid, we will add to r 1 position

    in the case in the arr[l] == 0 isnt valid
    we will add 1 position to both, l, and r

    if you dont understand this algorithm at all, you can open paint 
    and draw a table like this
    L
    [1|1|0|1|]
       R
    then debug it like this, so you will understand how the algorithm works
    it took me 30 minutes cause there was a lot of errors, but i made it work.
*/
