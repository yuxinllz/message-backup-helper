import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Step = ({ step, index, platform, isActive }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div
      className={`min-h-screen flex items-center snap-start transition-all duration-700 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-10"
      }`}
    >
      <Card className="w-full transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
              {index + 1}
            </span>
            {step.title}
          </CardTitle>
          <CardDescription>{step.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step.content[platform] && (
            <>
              {step.content[platform].instructions.map((instruction, i) => (
                <p key={i} className="text-gray-600">
                  {instruction}
                </p>
              ))}
              {step.content[platform].path && (
                <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                  <code className="text-sm">{step.content[platform].path}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(step.content[platform].path)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
          {step.content.shared && (
            <div className="space-y-2">
              {step.content.shared.map((text, i) => (
                <p key={i} className="text-gray-600">
                  {text}
                </p>
              ))}
            </div>
          )}
          {step.content.filename && (
            <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
              <code className="text-sm">{step.content.filename}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(step.content.filename)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
          {step.content.note && (
            <p className="text-sm text-gray-500 italic">{step.content.note}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Step;