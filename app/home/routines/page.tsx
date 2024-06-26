"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
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
  const [notification, setNotification] = useState<string | null>(null);

  const handleButtonClick = async () => {
    if (!session) return;

    try {
      const userClicksRef = doc(db, "buttonClicks", session.user.id);
      const userClicksDoc = await getDoc(userClicksRef);

      if (userClicksDoc.exists()) {
        const newCount = userClicksDoc.data().count + 1;
        await setDoc(
          userClicksRef,
          { count: newCount, email: session.user.email },
          { merge: true }
        );
      } else {
        await setDoc(userClicksRef, { count: 1, email: session.user.email });
      }

      setNotification(
        'Feature is coming soon! Send us any feature requests in "Support" tab.'
      );
      setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
    } catch (error) {
      console.error("Error updating click count:", error);
    }
  };

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
      {notification && (
        <div
          className="flex shadow-lg fixed top-13 right-8 items-center p-4 text-sm text-green-800 rounded-lg bg-green-50"
          role="alert"
        >
          {notification}
        </div>
      )}
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
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {habit.skillLevel.details}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Button
              className="flex items-center gap-1 rounded-3xl shadow-lg bg-indigo-500 hover:bg-indigo-300"
              onClick={handleButtonClick}
            >
              <Sparkles className="w-4 h-4 dark:text-white" />
              <p className="font-md dark:text-white">Optimize with AI</p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Routines;
