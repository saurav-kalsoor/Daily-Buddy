let gapi = window.gapi
let CLIENT_ID = "321519675065-bjkjcoud5k5u8ptsmg00rb5tcqv5dipk.apps.googleusercontent.com"
let API_KEY = "AIzaSyB-W3-dIKp74f8jvgF_hOZBEnGpx_kFrdM"
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
let SCOPES = "https://www.googleapis.com/auth/calendar.events"

//export a function that gets start time(date picker), location, name 
export const addCalendarEvent = (startDate, address, title) => {

    gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        })


        gapi.client.load('calendar', 'v3')
        let timeZone = "Asia/Kolkata";
        let duration = '01:00:00'; //duration of each event, here 60 minutes

        let msDuration = (Number(duration.split(':')[0]) * 60 * 60 + Number(duration.split(':')[1]) * 60 + Number(duration.split(':')[2])) * 1000;
        let endDate = new Date(startDate.getTime() + msDuration);
        let isoStartDate = new Date(startDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().split(".")[0];
        let isoEndDate = new Date(endDate.getTime() - (new Date().getTimezoneOffset()) * 60 * 1000).toISOString().split(".")[0];


        //sign in with pop up window
        gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                let event = {
                    'summary': title, // or event name
                    'location': address, //where it would happen
                    'start': {
                        'dateTime': isoStartDate,
                        'timeZone': timeZone
                    },
                    'end': {
                        'dateTime': isoEndDate,
                        'timeZone': timeZone
                    },
                    'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=1'
                    ],
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            { 'method': 'popup', 'minutes': 10 }
                        ]
                    }
                }

                //end of event listing
                let request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event,
                })


                request.execute(event => {
                    console.log(event)
                    window.open(event.htmlLink)
                })
            })
    })

}