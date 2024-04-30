
function getPlaylistVideos(playlistId: string): Promise<any> {
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    const request: RequestInfo = new Request(
        'https://www.googleapis.com/youtube/v3/playlistItems?' + new URLSearchParams({
            'key': 'AIzaSyDCAFwU1MsjJMONCOqCcWDcvvWqMQyW8LQ',
            'playlistId': playlistId,
        }).toString(),
        {
            method: 'GET',
            headers: headers,
        })

    // For our example, the data is stored on a static `users.json` file
    return fetch(request)
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise
            return res
        })
}

class YoutubePlaylist extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
        console.log("Custom element added to page.");

        const playlistId = this.getAttribute("playlist");

        if (playlistId == null) return;

        const data = await getPlaylistVideos(playlistId);
        console.log(`received data : ${JSON.stringify(data)}`)
        // function start() {
        //     // 2. Initialize the JavaScript client library.
        //     gapi.client.init({
        //         'apiKey': 'AIzaSyDCAFwU1MsjJMONCOqCcWDcvvWqMQyW8LQ',
        //         // Your API key will be automatically added to the Discovery Document URLs.
        //         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        //         // clientId and scope are optional if auth is not required.
        //         // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        //         'scope': 'https://www.googleapis.com/auth/youtube.readonly',
        //     }).then(function () {
        //         // 3. Initialize and make the API request.
        //         return gapi.client.request({
        //             path: 'https://www.googleapis.com/youtube/v3/playlistItems',

        //             params: {
        //                 id: playlistId
        //             }
        //         });
        //     }).then(function (response) {
        //         console.log(response.result);
        //     }, function (reason) {
        //         console.log('Error: ' + reason.result.error.message);
        //     });
        // };
        // // 1. Load the JavaScript client library.
        // gapi.load('client', start);

    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }
    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(`Attribute ${name} has changed.`);
    // }
}

customElements.define("youtube-playlist", YoutubePlaylist);