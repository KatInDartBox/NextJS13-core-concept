"use client";

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("from error page", error);
  }, [error]);

  return (
    <div className="p-24">
      <p>you can not go back to ex</p>
    </div>
  );
}
