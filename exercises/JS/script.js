Exercises

//1) Iterate through a shopping list and print each item in a shopping list.

    var shoppingList = ["apples", "oranges", "carrots"];

    // iterate here
//2) Iterate through a list of shopping lists and print each item in each list.

    var shoppingLists = [
                            ["apples", "oranges", "carrots"],
                            ["ham", "turkey", "cheese"],
                            ["fruits", "vegetables", "meat"]
                        ];

    // iterate here

    var shoppingLists = [
                            ["apples", "oranges", "carrots"],
                            ["ham", "turkey", "cheese"],
                            ["fruits", "vegetables", "meat"]
                        ];

for (var i=0; i<shoppingLists.length; i++){
    console.log(shoppingLists[i])
}
//3) Word counting:

//a. Count the number of space separated words in the string below (Hint: do this with and without a for loop.).
//b. Count the number of words that in a string that have the letter a in them.
var shakespeare = "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt."
//4) Capitalize the first letter in every word in a string, i.e

"hello world" => "Hello World"
//5) Find the largest and smallest number in the array below.

    var numbers = [56, 74, 31, 89, 8,
                    22, 5, 19, 28, 100,
                    82, 72, 39, 25, 90,
                    1, 97, 83, 58, 38,
                    57, 71, 70, 7, 3,
                    12, 48, 45, 43, 84,
                    68, 49, 37, 41, 92,
                    96, 6, 66, 95, 15,
                    67, 2, 59, 4, 91,
                    44, 50, 17, 30, 88,
                    34, 55, 64, 9, 27,
                    73, 60, 32, 81, 10,
                    53, 61, 63, 51, 65,
                    36, 26, 99, 76, 47,
                    21, 14, 16, 40, 79,
                    75, 85, 42, 86, 18,
                    23, 24, 46, 69, 29,
                    77, 20, 54, 80, 87,
                    13, 94, 98, 93, 62,
                    35, 33, 11, 52];

 //array of 10 numbers
                int numbers[] = new int[]{32,43,53,54,32,65,63,98,43,23};

                //assign first element of an array to largest and smallest
                int smallest = numbers[0];
                int largetst = numbers[0];

                for(int i=1; i< numbers.length; i++)
                {
                        if(numbers[i] > largetst)
                                largetst = numbers[i];
                        else if (numbers[i] < smallest)
                                smallest = numbers[i];

                }
                System.out.println("Largest Number is : " + largetst);
                System.out.println("Smallest Number is : " + smallest);
        }
//6) You have a list of numbers in the numbers array above somehow got shuffled and one is missing. Luckily you know that the numbers were from 1 to 100. Find the missing number.

//7) Find the sum of the values in an array and the average in the numbers array above.

//8) Find the average of only the odd numbers the numbers array above.

//9) Write a loop that creates an array of 100 random integers (not decimal numbers).

//10) Find the numbers in common in two different lists of numbers.
