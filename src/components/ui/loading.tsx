import { Loader2 } from "lucide-react";

export const LoadingSpinner = ({ className }: { className?: string }) => (
  <Loader2 className={`h-6 w-6 animate-spin ${className}`} />
);

export const LoadingPage = () => (
  <div className="flex h-screen w-full items-center justify-center bg-joey-warm">
    <LoadingSpinner className="h-8 w-8 text-joey-sage" />
  </div>
);

export const LoadingCard = () => (
  <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-gray-100 bg-white">
    <LoadingSpinner className="text-joey-sage" />
  </div>
);