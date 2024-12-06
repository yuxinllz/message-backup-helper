import { FileQuestion } from "lucide-react";

interface NoDataProps {
  message?: string;
}

export function NoData({ message = "No data available" }: NoDataProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3 animate-fade-in">
      <div className="p-3 bg-joey-warm rounded-full">
        <FileQuestion className="w-6 h-6 text-joey-sage" />
      </div>
      <p className="text-joey-muted text-sm">{message}</p>
    </div>
  );
}