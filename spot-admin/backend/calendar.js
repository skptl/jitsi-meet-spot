/**
 * @typedef Object CalendarEvent
 * @property {boolean} allDay
 * @property {string} calendarId
 * @property {string} description
 * @property {string} end - The end date as formatted with {@link Date.toISOString()}.
 * @property {string} eventId
 * @property {string} meetingLink
 * @property {string} start - The start date as formatted with {@link Date.toISOString()}.
 * @property {string} summary
 * @property {boolean} updatable
 */

const { sendJSON } = require('./utils');

function calendarRequestHandler(req, res) {
    let trailingStart = new Date();
    let trailingEnd = new Date();
    const events = [];

    for (let i = 1; i < 12; i++) {
        trailingStart = new Date(trailingEnd.getTime() + 10 * 60 * 60 * 1000);
        trailingEnd = new Date(trailingStart.getTime() + 30 * 60 * 1000);

        events.push({
            "calendarId": "cal_1",
            "eventId": "evt_external_1",
            "summary": "Meeting " + i,
            "meetingLink": "https://meet.jit.si/meeting" + i,
            "start": trailingStart.toISOString(),
            "end": trailingEnd.toISOString(),
            "updatable": true,
            "allDay": false
        });
    }

    sendJSON(res, { events });
}

module.exports = calendarRequestHandler;