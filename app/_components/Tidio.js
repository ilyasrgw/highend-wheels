"use client"; // This ensures that the component is rendered on the client-side.

import { useEffect } from "react";

export default function Tidio() {
  useEffect(() => {
    // Dynamically load the Tidio chat widget script
    const scriptExists = document.getElementById("tidio-chat-script");
    if (!scriptExists) {
      const script = document.createElement("script");
      script.id = "tidio-chat-script";
      script.src = "//code.tidio.co/xiceccs0tbi0yicnvngs5zfugbkxe73i.js"; // Replace with your Tidio widget code
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup the script on unmount
    return () => {
      const script = document.getElementById("tidio-chat-script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // The Tidio widget will be automatically injected into the page
}
