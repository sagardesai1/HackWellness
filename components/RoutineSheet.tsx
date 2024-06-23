import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

interface SkillLevel {
  skillLevel: string;
  details: string;
}

interface RoutineSheetProps {
  selectedSkillLevels: { habitId: string; skillLevel: SkillLevel }[];
  onSaveSuccess: (success: boolean) => void;
}

const RoutineSheet: React.FC<RoutineSheetProps> = ({
  selectedSkillLevels,
  onSaveSuccess,
}) => {
  const { data: session } = useSession();
  const [routineTitle, setRoutineTitle] = useState("");

  const isSaveDisabled = !routineTitle.trim();

  const saveRoutine = async () => {
    if (!routineTitle.trim()) {
      return;
    }
    try {
      const routinesCollectionRef = collection(
        db,
        `users/${session?.user.id}/routines`
      );
      const newRoutineRef = await addDoc(routinesCollectionRef, {
        title: routineTitle,
        habits: selectedSkillLevels,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", newRoutineRef.id);
      onSaveSuccess(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex gap-1 fixed bottom-14 right-10 bg-indigo-600 text-white px-5 py-4 rounded-full shadow-lg z-50 hover:bg-indigo-500 focus:outline-none">
          Add to routine
          <Plus />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Confirm your Routine</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 mt-4 ">
          <div className="">
            <Input
              id="name"
              placeholder="Routine Title"
              className=""
              value={routineTitle}
              onChange={(e) => setRoutineTitle(e.target.value)}
            />
          </div>
          {selectedSkillLevels.map(({ skillLevel }, index) => (
            <div key={index} className="space-y-4 bg-muted/80 rounded-lg p-4 ">
              <div className="flex flex-col">
                <p className="font-bold text-lg">Habit {index + 1}</p>
                <p className="text-gray-600 text-sm">{skillLevel.details}</p>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="flex bottom-14 right-10">
          <SheetClose asChild>
            <Button
              className="bg-indigo-600 text-white px-5 py-4 hover:bg-indigo-500 focus:outline-none"
              type="submit"
              onClick={saveRoutine}
              disabled={isSaveDisabled}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default RoutineSheet;
