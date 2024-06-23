"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import { Sparkles } from "lucide-react";

interface SkillLevel {
  skillLevel: string;
  details: string;
}

interface Habit {
  habitId: string;
  skillLevel: SkillLevel;
}

interface Routine {
  id: string;
  title: string;
  habits: Habit[];
}

const Routines: React.FC = () => {
  const { data: session } = useSession();
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutines = async () => {
      if (!session) return;

      try {
        const routinesCollectionRef = collection(
          db,
          `users/${session.user.id}/routines`
        );
        const routineSnapshot = await getDocs(routinesCollectionRef);

        const fetchedRoutines: Routine[] = routineSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Routine[];

        setRoutines(fetchedRoutines);
      } catch (error) {
        console.error("Error fetching routines:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutines();
  }, [session]);

  if (loading) {
    return <Loading />;
  }

  if (routines.length === 0) {
    return (
      <>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You haven't added any routines yet
            </h3>
            <p className="text-sm text-muted-foreground">
              Start building healthy routines by exploring the "Goals" section
            </p>
            <p className="text-sm text-muted-foreground">
              and adding habits to your routine.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-10">
      {routines.map((routine) => (
        <div
          key={routine.id}
          className="bg-muted/80 rounded-lg p-4 flex flex-col"
        >
          <p className="font-bold text-2xl text-center mb-4">{routine.title}</p>
          <div className="space-y-4 flex-grow">
            {routine.habits.map((habit, index) => (
              <div key={index}>
                <p className="font-bold text-lg">Habit {index + 1}</p>
                <p className="text-gray-600 text-sm">
                  {habit.skillLevel.details}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Button
              id="OptimizeAIButton"
              className="flex items-center gap-1 rounded-3xl shadow-lg bg-indigo-500 hover:bg-indigo-300"
            >
              <Sparkles className="w-4 h-4" />
              <p className="font-md">Optimize with AI</p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Routines;
