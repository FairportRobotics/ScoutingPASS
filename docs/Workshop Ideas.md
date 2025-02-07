# Workshop Ideas

Let's start to put more focus on what we want to accomplish during our time in the workshop.

Any tasks we identify can be recorded in the [Team Todo](./Team%20Todo.md) document.


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#dogfood">Eating Our Own Dog Food</a></li>    
    <li><a href="#correcting">Correcting Scouting Data</a></li>
    <li><a href="#errors">Errors</a></li>
    <li><a href="#navigation">Navigation</a></li>
    <li><a href="#viewing_results">Viewing Results</a></li>
    <li><a href="#dry">DRY</a></li>
  </ol>
</details>


<!-- Eating Our Own Dog Food -->
<div id="dogfood"></div>

## Eating Our Own Dog Food

"Eating your own dog food" is a colloquial expression that means using or experiencing one's own products or services. We're going to do that by operating the scouting app from start to finish and attempt to do so using conditions that closly minic those at competition. Doing so will give us insight into pain points and ways we might improve the experience.

Let's walk through some practice match and pit scouting exercises from start to finish. 

  Match Scouting
  1. Open the URL for Match Scouting (how will we make this efficient at the event?)
  2. Be assigned a match and team (how will we communicate this to the scouters?)
  3. Collect match scouting data
  4. Repeat steps 2-3
  5. Scan data from scouters
  6. Flush data to Excel
  7. Scout more matches
  8. Flush data to Excel (how will we handle data for matches already scouted?)

  Pit Scouting
  1. Open the URL for Pit Scouting (how will we make this efficient at the event?)
  2. Be assigned a team (how will we communicate this to the scouters?)
  3. Collect pit scouting data
  4. Repeat steps 2-3
  5. Scan data from scouters
  6. Flush data to Excel
  7. Scout more teams
  8. Flush data to Excel (how will we handle data for teams already scouted?)

Summary

- How was that workflow? 
- Take time to think about your experience. Put yourself in the shoes of a scouter and not as a programmer.
- What can we can do to improve or optimize the experience?


<!-- Correcting Scouting Data -->
<div id="correcting"></div>

## Correcting Scouting Data

If a scouter realizes they've made a mistake, can they go back and correct it? Do they need to?


<!-- Errors -->
<div id="errors"></div>

## Errors 

What kinds of errors can we expect to see in the scouted data? Make a list. For each type of error, come up with a means of identifying and potentially fixing the error.

Exercise: Let's come up with ways to CAUSE each of the errors we identified. Practice introducing, identifying and addressing each of them. Document the process. 

Hint: [Match Scouting Instructions](./Match%20Scouting%20Instructions.md) and [Pit Scouting Instructions](./Pit%20Scouting%20Instructions.md) already exist and we can use these documents as a template and starting point to collect instructions for the user and instructions for us to use if and when something goes wrong.


<!-- Navigation -->
<div id="navigation"></div>

## Navigation

We want to be able to get to the persisted results from the initial start page for Match Scouting. Let's make sure we can do so.

Exercise: Are there other places where we want to navigate? How do we get to Pit Scouting? How will we require our users to navigate between Match Scouting, Pit Scouting and all the results? 


<!-- Viewing Results -->
<div id="viewing_results"></div>


## Viewing Results

On the results page, determine if a button click is necessary to view the QR codes for the results. Does it provide some benefit to us or the user?

Exercise: are there other places in the application where we are asking the user to click or tap something when maybe we should just default to some value or state?

Hint: Can/should we default some of the radio buttons, check boxes or text inputs? Discuss why or why not?


<!-- DRY -->
<div id="dry"></div>

## DRY

I've introduced a bug in the code. I renamed the localStorage key from "sessions" to something else. Let's fix this by refactoring using DRY (Don't Repeat Yourself). Instead of writing the key all over the place, let's come up with a better way to do it. 

Hint: Search for JavaScript enum. Let's define the string representing the key and refer to it using the enum. This way, we can change the name of the key in one place and we can be sure it won't break anything else.

Exercise: Are there any other places we can reasonably use the DRY principle? We don't want to go crazy and use it too much, but maybe we can apply this principle to the names of elements or things that are static but represent values we might want to change later.

