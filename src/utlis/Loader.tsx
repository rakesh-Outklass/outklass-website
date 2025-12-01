import { useEffect, useState } from "react";
import { useIsFetching } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export const Loader = () => {
  const location = useLocation();
  const isFetching = useIsFetching();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 100); 
    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    if (isFetching > 0) {
      setLoading(true);
    } else {
      const timeout = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isFetching]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <img
        src="/assets/Tick Tock.png"
        alt="Loading..."
        className="w-20 h-20 animate-pulse"
      />
    </div>
  );
};
