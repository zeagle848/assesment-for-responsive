# Development Notes by William Carpenter-Frank

## Scenario 1

The aim of testing scenario 1 began with the assumption that the application itself was working fine, but the tests themselves were needing to be fixed.

The first issue was fairly simply to track down. After running the tests an error was thrown that read `Error: Can't call setValue on element with selector "#passwords" because element wasn't found`. So I then inspected the DOM and compared the id I found there with the selector in `login.page.js`. And sure enough the id was supposed to be `#password` and not `#passwords`.

The test was then able to input the password into the correct field. The next issue I had proved to be a lot less explicit.

WebdriverIO was telling me that `Step "I should view a flash message saying Access Granted" is not defined.` I still don't understand what the issue is with testing the flash message is. Put it down to me not knowing how to use WebdriverIO, or missing something blatently obvious like the id's not matching up before but I'm stumped. 

## Scenario 2

If scenario 1 was testing my ability to debug tests, then scenario 2 tested my JavaScript ability. The tests were all correct, it was the app itself that was broken. 

Disclamer: I have never used React before. This, however, proved to not be a massive issue. I understand that some of the fundamental issues that React hopes to solve in the web-development environment is maintaining a clear and immutable state, while updating the DOM to reflect any new states. 

The purpose of the app was to update when a checkbox item has been selected, and reflect that selected item in the "Selected Items" box at the bottom of the screen.

The `Test2.js` file had a helpful hint as to where changes needed to be made. It was the `handleCheckboxChange()` function that needed work. I immedietly saw that the state, which was defined at the top of the file, needed to be updated when the checkbox was checked by the user. I didn't understand how to change state properly in React, I initially tried to simply push or splice the state.selections arrray, but that didn't work, so I watched a [video](https://www.youtube.com/watch?v=O6P86uwfdR0) on youtube that quickly explained `useState()` to me. 

I've managed states in a previous project of mine, my [Todo List](https://github.com/zeagle848/todo-list) to be specific, and I recognized that I needed to return a copy of the previous state with only a single option item either added or removed. To do this I used the spread operator in conjunction with specifically the `.filter` method for when I wanted to remove an item from the selections array. 

I used the `find` variable, which I renamed to `indexOfKey`, that was declared from the start, to check whether an option existed within the selections array. If the `indexOfKey` was -1 then I knew I needed to add the option to `state.selections`. If It wasn't -1 then I knew it existed and therefore needed to be removed from `state.selections`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Running End-to-End Test

The test runner used in this project is WebDriverIO

Make sure modules are installed in /wdio directory by running:

### `npm i`

In the /wdio directory you can run:
### `npm run wdio`
