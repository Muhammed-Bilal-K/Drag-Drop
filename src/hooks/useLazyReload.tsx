import React from "react";

function useLazyReload<T>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>
): React.LazyExoticComponent<React.ComponentType<T>> {
  return React.lazy(() =>
    importFn().catch((error) => {
      console.error("Failed to load component:", error);
      location.reload();
      throw error;
    })
  );
}

export default useLazyReload;
