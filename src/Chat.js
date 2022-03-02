import { useEffect, useState } from 'react';

export default function Chat() {
  return (
    <iframe
      id="ircChat"
      title="Chat"
      width="100%"
      height={window.innerHeight / 2 - 85}
      allowtransparency="true"
      frameBorder="0"
      // allow="microphone; camera; display-capture; fullscreen"
      src={`https://kiwiirc.hybridirc.com/?nick=ambassador-?&style="border:0; width:100%; height:450px;&theme=cli#bunkerhub`}
    />
  );
}
