"use client";

export default function RevalidateButton() {
  const handleRevalidate = async () => {
    await fetch("/api/revalidate", { method: "POST" });
    // window.location.reload(); // Reloads the page to fetch fresh data
  };

  return (
    <button 
      onClick={handleRevalidate} 
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Revalidate Data
    </button>
  );
}

