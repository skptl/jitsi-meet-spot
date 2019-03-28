# Manual Test Plan

This document is a manual QA test plan to run as needed. Also, it serves as a feature and behavior summary for spot-client.

Note that some of the test cases should already be automated in spot-webdriver.

Pairing
------
- [ ] Spot-Remote can pair with Spot-TV

Calendar
------
- [ ] Spot-Remote sees Spot-TV's calendar events

Home
------
- [ ] Spot-Remote starts a calendar meeting
- [ ] Spot-Remote starts an ad-hoc meeting with random name
- [ ] Spot-Remote starts an ad-hoc meeting with typed in name
- [ ] Spot-Remote starts an ad-hoc meeting on a specified domain
- [ ] Spot-Remote starts an ad-hoc meeting by dialing out
- [ ] Spot-Remote starts an ad-hoc meeting with wired screenshare
- [ ] Spot-Remote starts an ad-hoc meeting with wireless screenshare

Spot In Meeting
------
- [ ] Spot-Remote toggles audio mute
- [ ] Spot-Remote toggles video mute
- [ ] Spot-Remote toggles wireless screensharing
- [ ] Spot-Remote toggles wired screensharing
- [ ] Spot-remote hangs up
- [ ] Spot-remote submits feedback
- [ ] Spot proceeds to Home after feedback submission

Wireless SS
------
- [ ] Spot-Remote stops wireless SS by clicking the Chrome bar
- [ ] Spot-Remote stops wireless SS by clicking the hangup button
- [ ] Spot-Remote stops wireless SS by closing the browser window
- [ ] Spot-Remote cancels screenshare picker

Automatic Wired SS
------
- [ ] Spot-TV at Home automatically joins a meeting with SS when connecting a device
- [ ] Spot-TV in a meeting automatically starts SS when connecting a device
- [ ] Spot-TV in a meeting automatically stops SS when disconnecting a device

Disconnects
------
- [ ] Spot-TV reloads and Spot-Remote displays join code entry
- [ ] Spot-Remote reconnects to a Spot-TV after disconnect

Screenshare Selection
------
Wired available and wireless available
- [ ] Click start sharing shows selection buttons for both
- [ ] Click Wireless opens desktop picker
- [ ] Click start with Wireless in progress shows modal with stop button
- [ ] Clicking stop wireless screenshare button stops screenshare, displays selection again  
- [ ] Clicking Wired shows connect cable message
- [ ] Click start with wired in progress shows stop button
- [ ] Clicking stop wired screenshare button stops screenshare, displays selection again

Wired unavailable and wireless available
- [ ] Click start opens desktop picker
- [ ] Click start with wireless in progress shows modal with stop button
- [ ] Clicking stop wireless closes the modal
- [ ] There is no mention of wired screensharing

Wired available and wireless unavailable
- [ ] Click start opens the modal showing connect cable message
- [ ] Click start with wired in progress shows stop button
- [ ] Clicking stop button stops screenshare, displays start again
- [ ] On browser, clicking start button opens modal asking to use different browser
- [ ] On mobile, clicking start button opens modal asking to go to a different site

Wired unavailable and wireless unavailable
- [ ] On browser, clicking start button opens modal asking to use different browser
- [ ] On mobile, clicking start button opens modal asking to go to a different site
- [ ] There is no mention of wired screensharing