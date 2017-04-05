# Using $scope.$apply to force $digest cycles

## Objectives

- Describe why our native APIs don't update the View
- Use $apply to force a $digest to run a Model and View sync

## Instructions

The directive in this repo is broken - it's never updated. Let's change that.

In our link function, add an event listener to listen to whenever the user presses a key on their keyboard on the page. Then, when they have, update the counter to reflect how many keys they have pressed.