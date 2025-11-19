import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        ar?: boolean;
        autoplay?: boolean;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
      };
    }
  }
}

export {};
