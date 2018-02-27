# React Quiz

This quiz is designed to test your familiarity with basic React components.

## Rules

1. **Make an initial commit when you start your work**
1. You have **20 minutes** to complete what you can.
1. You must complete this work on your own within the allotted time
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and take advantage of travis checking your commits by pushing frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. You may install npm packages of your choosing, though working webpack build is included
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate may not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
1. Total possible points are 50. You will be graded out of 35 points

## Submission requirement

* **Do a fork and PR like a normal lab**

## Requirements

Build an app that displays a list of notes. Use the following component structure:

* `App` - top level App component. Notice that the component already has state of array of notes
  * `Notes` - component that accepts an array of notes to display and creates a list with a `Note` component for each note
    * `Note` - component that accepts a note and displays the date and 
    text of the note.
    * **Bonus, Not Required** `AddBook` - form for adding a new note.
    date should get set with `new Date()`
    
There are no testing requirements
