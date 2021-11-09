// How to traverse a tree data structure

// Write a function that returns the sum of all of the values in the list.

// Write a function(int n) that prints the integers from 1 to n (inclusive). But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”. This question was altered, and they eventually asked me to make it general for an array of values and a complementary array of Strings to print if the given value was found.

// Given the object below, create a function (Node root), that sums the values of every node in the binary tree represented by root.


// Write a function that returns the sum of all of the values in the list.

// Given the object below, create a function (Node root), that sums the values of every node in the binary tree represented by root.

// Code up Fibonacci numbers.

// How to write a insertion sort

//Write a class that simulates a deck of cards that implements a shuffle method and is able to deal a random card out of the deck 
// Design a deck of cards, how would you model it, what classes or methods would be needed, etc.
// I wrote a class for the Deck and a class for the Cards. Inside the deck class, I made a nested for loop that would iterate through each of the suits of the card and the numbers and then wrote them to an array. Inside the deal method, I used a random number generator that would pick a card, delete the element, and shift all remaining elements over so that there were no null spaces in the middle of the array, and then reduce a variable that kept track of the number cards in the deck. Inside the Card class, I made a constructor that would initialize a new card with a suit and number and then made getter methods to return the card.

// String manipulation and Linked Lists... They allow us to chose a language according to us to code

// Write an algorithm in the language of your choice to find the subset of an array of integers with the largest sum. For example in the array [1, 5, 0, -11, 4] the subset with the largest sum is [1,5]
// Looks like they're wanting to see how you analyze and solve a simple problem. This one looks like a simple sorting question -- the subset with the largest sum will just be the largest values in the set. In Java, you might use Arrays.sort(in, Collections.reverseOrder()) to put the input list in order, then return the first n values, where n is the size of the desired subset.

// If I were the person posing this problem in an interview, I wouldn't necessarily expect the applicant to come up with executable code off the top of his head. I want to see if he can recognize the nature of the problem and provide a simple workable approach to solving it. In a real work situation, I assume that he would pull up an online reference to get the details. Bonus points if the candidate mentions potential error conditions and how to recognize and handle them.

// The sum of a tree. -- I used recursion.

// Something along the lines of "Describe the data structures that you would use to build a book tracking system for a library." This involved using a whiteboard to sketch out data structures and answering questions on how I would implement various tasks (lookup by author, title, etc.)

// Given a code where a function parameter shares common name with class static variable, what happens when I try to access the variable inside the function.

// Given a sorted integer array with duplicate elements, how many distinct pairs can be chosen so they add up to a certain value.
// The idea is to keep two markers, left and right pointing to extreme ends of the array. If the two integers at the marker adds up to required number, move both of them, if the sum is less than target, increase left, otherwise decrease right. In order to handle duplicates, just count the occurrences and use basic combinatorics and moving the markers so they skip over all duplicates.

// I was asked to write a program that would sort elements based on different keys. Each element would have a certain number of keys, and each key would contain a different data type. They wanted a function that would sort the elements based on whichever key was specified in the arguments.
