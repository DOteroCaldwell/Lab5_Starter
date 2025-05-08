# Lab 5 - Starter
Author: Diego Otero-Caldwell

JS-based lab for UCSD's CSE 110 course - Spring 25.

## Expose
https://doterocaldwell.github.io/Lab5_Starter/expose.html


## Explore
https://doterocaldwell.github.io/Lab5_Starter/explore.html

### Check Your Understanding
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Most likely not. A unit test is for isolated and individual parts of a codbase, while sending a message between users probably iteracts with multiple services, networks, and accounts to complete.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. This is a isolated, testable, single unit of code that would be well suited for a unit test.
