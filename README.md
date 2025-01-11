# Scouting App

The Reefscape Scouting App (our
[Github repository](https://github.com/FairportRobotics/ScoutingPASS)) was
forked from another team (their
[Github repository](https://github.com/PWNAGERobotics/ScoutingPASS)).

Their [original README](./PWNAGE_README.md) contains lots and lots of
information about how they developed the application.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#todo">Todo</a></li>
  </ol>
</details>

<!-- Todo -->
<div id="todo"></div>

## Todo

### Improve Radio Buttons

The current implementation emits radio buttons that are not associated with the
text. Referring to the example below, if you click "Some Option", it does not
trigger or toggle the radio button. This makes for a much smaller target.

```html
<input
  id="input_r_r1"
  type="radio"
  name="r"
  value="r1"
  checked="" />
Some Option
```

What we would like to do, is associate a label with the radio button like this:

```html
<input
  id="input_r_r1"
  type="radio"
  name="r"
  value="r1"
  checked="" />
<label for="inpout_r_r1">Some Option</label>
```

This needs ot happen in `scoutingPass.js` and the `addRadio()` function.

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
