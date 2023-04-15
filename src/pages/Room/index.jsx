import React from 'react';
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const RoomPage  = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = "1599688338";
        const serverSecret = "798f9bc34ef4d100fbf575da79919042";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString, "Team ViKings");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost3000/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
};

export default RoomPage;