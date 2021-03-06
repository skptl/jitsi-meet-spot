const SpotSession = require('../user/spot-session');
const spotSessionStore = require('../user/spotSessionStore');

describe('In share mode', () => {
    const session = spotSessionStore.createSession();
    const spotTV = session.getSpotTV();
    const spotRemote = session.getSpotRemote();

    beforeEach(() => {
        session.connectScreeshareOnlyRemoteToTV();

        const stopSharePage = spotRemote.getStopSharePage();

        stopSharePage.waitForVisible();
    });

    it('Spot-Remote automatically starts sharing on connection', () => {
        const meetingPage = spotTV.getMeetingPage();

        meetingPage.waitForMeetingJoined();

        const stopSharePage = spotRemote.getStopSharePage();

        stopSharePage.stopScreensharing();
    });

    it('Spot-Remote can enter full remote control mode', () => {
        if (SpotSession.isBackendEnabled()) {
            pending();

            // In the backend mode remote gets disconnected so it doesn't get to the full remote control mode.
            return;
        }

        const stopSharePage = spotRemote.getStopSharePage();

        stopSharePage.stopScreensharing();

        const modeSelectPage = spotRemote.getModeSelectPage();

        modeSelectPage.waitForVisible();

        modeSelectPage.selectFullRemoteControlMode();

        const remoteControlPage = spotRemote.getRemoteControlPage();

        remoteControlPage.waitForVisible();

        remoteControlPage.waitWaitingForCallViewToDisplay();
    });

    it('Spot-Remote is disconnected on share end', () => {
        if (!SpotSession.isBackendEnabled()) {
            pending();

            return;
        }

        const meetingPage = spotTV.getMeetingPage();

        meetingPage.waitForMeetingJoined();

        const stopSharePage = spotRemote.getStopSharePage();

        stopSharePage.stopScreensharing();

        const joinCodePage = spotRemote.getJoinCodePage();

        joinCodePage.waitForVisible();
    });
});
