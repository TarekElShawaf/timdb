"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            padding: "20px",
            color: "#333",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px 60px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <h1 style={{ fontSize: "2rem", color: "#e74c3c" }}>
              Oops! Something went wrong.
            </h1>
            <p style={{ fontSize: "1rem", color: "#666" }}>
              We're sorry, but we encountered an error. Please try again or
              contact support if the issue persists.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#888" }}>
              <strong>Error:</strong> {error.message}
            </p>
            <button
              onClick={() => reset()}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
