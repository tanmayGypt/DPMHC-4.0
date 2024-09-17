import { useEffect, useRef } from "react";

function TrustmaryWidget() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Ensure that widgetRef is available before appending the script
    if (widgetRef.current) {
      // Check if the script is already loaded to avoid duplicate entries
      const existingScript = document.querySelector(
        'script[src="https://widget.trustmary.com/FFOwNT41X"]'
      );

      if (!existingScript) {
        // Create the script element
        const script = document.createElement("script");
        script.src = "https://widget.trustmary.com/FFOwNT41X";
        script.async = true;

        // Append the script to the widget div
        widgetRef.current.appendChild(script);

        // Cleanup function to remove the script if the component unmounts
        return () => {
          if (widgetRef.current && widgetRef.current.contains(script)) {
            widgetRef.current.removeChild(script);
          }
        };
      }
    }
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <div
        ref={widgetRef}
        id="trustmary-widget"
        style={{ width: "100%", minHeight: "400px" }} // Adjust height if needed
      >
        {/* Trustmary widget should load here */}
      </div>
    </div>
  );
}

export default TrustmaryWidget;
