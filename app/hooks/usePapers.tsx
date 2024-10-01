import React, { useState, useEffect } from "react";

interface Paper {
  tag: string;
  id: string;
  slug: string;
  title: string;
  date: string;
}

export default function usePapers() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPapers() {
      setLoading(true);
      const response = await fetch("/api/getPapers");
      const data = await response.json();

      setPapers(data);
      setLoading(false);
    }
    fetchPapers();
  }, []);

  return { papers, loading };
}
