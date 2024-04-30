declare function getPlaylistVideos(playlistId: string): Promise<any>;
declare class YoutubePlaylist extends HTMLElement {
    static observedAttributes: string[];
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    adoptedCallback(): void;
}
