# Scouting App

The Reefscape Scouting App (our
[Github repository](https://github.com/FairportRobotics/ScoutingPASS)) was
forked from another team (their
[Github repository](https://github.com/PWNAGERobotics/ScoutingPASS)).

Their [original README](./PWNAGE_README.md) contains lots and lots of
information about how they developed the application.

Github allows us to host a
[live version of the application](https://fairportrobotics.github.io/ScoutingPASS/)

| Match Scouting URL                                                                | Pit Scouting URL                                                                      |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <img src="resources/images/ScoutingPASS.png" alt="drawing" style="width:400px;"/> | <img src="resources/images/ScoutingPASS Pit.png" alt="drawing" style="width:400px;"/> |

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#tba">The Blue Alliance API</a></li>
    <li><a href="#todo">Todo</a></li>
    <li><a href="#funstuff">Fun Stuff</a></li>
  </ol>
</details>

<!-- The Blue Alliance -->
<div id="tba"></div>

## The Blue Alliance

The Blue Alliance is an organization that consumes all the match data published
by FIRST and makes this data available to developers via an API.

The URL for this API is
[The Blue Alliance API v3](https://www.thebluealliance.com/apidocs/v3). You will
need an API key which can be copied from `./resources/js/TBAInterface.js`.

<!-- Todo -->
<div id="todo"></div>

## Todo

### Store Scouting Results

When a scouting session is completed, the application displays a QR Code
encoding the results and provides the option to view the raw data.

We also want the application to store these results somewhere. Although we ca
CAN have someone ready to scan each scouter's device, we don't want to rely on
this.

Here are the options we need to consider:

- How to store the data? Do we do this with a cookie, localStorage, an image of
  the QR Code?
- Do we store individual results or do we appened results into a single
  document? If we store in a single document, this might make it easier to scan
  later.

### Where do we Receive Scouting Results

We will need to consider what software will we need to author or configure to
receive the QR Code data once scouting matches have completed.

QR Code scanners can be connected to computers and act as a keyboard. When we
scan or playback stored scans, the scanner will emit keystrokes.

We could use something like a spreadsheet to receive the results.

### Add Support for Primitive Authentication

Jacob Wyrozebski would like to limit the silliness that happens when we allow
scouters to enter their own names or initials.

His idea is to construct a list of all team members and assign each a unique,
four-digit PIN. When they first start using the Scouting App, they would enter
their PIN and we would look up their name or initials.

- How do we construct this document (probably JSON or csv)?
- How do we consume it from the source code?

<!-- Fun Stuff -->
<div id="funstuff"></div>

## Fun Stuff

### Coins

We might want to make Scouting more fun by offering "Coins" or some other
virtual collectible which can be redeemed later for snacks or prizes.

### Awards

We can also come up with awards for intreresting things that might happen during
competitions. Some examples include:

- Loser: This award goes to the student who achieved the lowest score.
- Winner: This award goes to the student who scouted the robot who achieved the
  highest score.
- Breakdown: This award goes to the student who scouted the robot which stopped
  working earliset in the match. Note that in order to figure this out, we'd
  need to add capturing this to the app.
- TBD
