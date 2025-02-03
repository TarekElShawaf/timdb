"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-message">
        We’re sorry, but an unexpected error occurred. Please try again.
      </p>
      <button className="error-button" onClick={() => reset()}>
        🔄 Try Again
      </button>
    </div>
  );
}
