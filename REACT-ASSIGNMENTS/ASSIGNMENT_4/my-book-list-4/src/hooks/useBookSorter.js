import { useMemo } from "react";

const useBookSorter = (books, sortKey) => {
  const sortedBooks = useMemo(() => {
    // Implement sorting logic based on sortKey
    return [...books].sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [books, sortKey]);

  return sortedBooks;
};

export default useBookSorter;
