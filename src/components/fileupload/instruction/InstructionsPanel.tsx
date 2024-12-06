import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import InstructionSection from "./InstructionSection";

const InstructionsPanel: React.FC = () => {
  return (
    <Sheet>
      <SheetTitle />
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-lg"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[700px] sm:w-[700px] overflow-y-auto" classMaxWidth="w-2/12">
        <InstructionSection />
      </SheetContent>
    </Sheet>
  );
};

export default InstructionsPanel;
