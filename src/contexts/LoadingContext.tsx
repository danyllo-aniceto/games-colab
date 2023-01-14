import { createContext, ReactNode, useState } from "react";
import { LoadingComponent } from "../components/Loading";

export interface LoadingContextData {
  loadingState: boolean;
  onToggleLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loadingState, setLoadingState] = useState(false);

  const onToggleLoading = () => setLoadingState((prev) => !prev);

  return (
    <LoadingContext.Provider value={{ loadingState, onToggleLoading }}>
      <LoadingComponent open={loadingState} onClose={() => onToggleLoading()} />
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
