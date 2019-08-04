# house-automation-js
A JavaScript application simulating house automation.

## Requirements
A JavaScript application simulating house automation: pressing a
button on a control panel would visually turn on a light, change the
temperature or close the curtains. Some constraints:
* Frameworks like React, Angular, Vue etc MUST NOT be used. Create your own
architecture
* You are allowed to use / create a build system. ES6 and Typescript are
permitted
* the solution has to be extensible and documented, so that we can develop our
own components that react to events. The application will be executed on a plain
HTTP server with no possibility to run code server side and is being viewed in 2 major
browsers of your choice.

## Description
This application has been built using plain Vanilla JS.

In order to have a decent layout the Bootstrap template has been used.

The application simulates the control of the ligths and temperatures in four rooms numerated from 1 to 4.
Extensions are allowed by modifying the index.html file, i.e. introducing a new room or a new device to be monitored (for instances door or curtains.)


## Third-party libraries
* [Bootstrap](https://getbootstrap.com/): Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.

## Setup
This application can be hosted on a plain HTTP server.

I tested the application with Chrome using python as an HTTP server.


## Download source code
The source code can be downloaded (zip) from [here](https://github.com/egch/house-automation-js/archive/master.zip).

## References/Acknowledgments
* Smart House implementaion of Thomas Knobloch: [smart-house](https://github.com/ThomasKnobloch/smart-house);
* The bootstrap template used for this app: [bootstrap-template](https://getbootstrap.com/docs/4.3/examples/album/);