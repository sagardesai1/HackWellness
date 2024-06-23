import { collection, query, where, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";
interface SkillLevel {
  skillLevel: string;
  details: string;
}

interface Author {
  author: string;
  tip: string;
}

interface Myth {
  myth: string;
  rebuttal: string;
}

interface Habit {
  id: string;
  title: string;
  description: string;
  skillLevels: SkillLevel[];
  resourceLinks: string[];
  videoLinks: string[];
  authors: Author[];
  myths: Myth[];
}

interface Goal {
  id: string;
  title: string;
  habits: Habit[];
}
export const fetchGoalByTitle = async (
  desiredTitle: string
): Promise<Goal | null> => {
  try {
    const goalsCollection = collection(db, "goals");
    const q = query(goalsCollection, where("title", "==", desiredTitle));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    // Assuming there's only one goal document with the desired title
    const goalDoc = querySnapshot.docs[0];
    const goalData: Goal = {
      id: goalDoc.id,
      title: goalDoc.data().title,
      habits: [],
    };

    // Fetch habits subcollection for the found goal
    const habitsCollection = collection(goalDoc.ref, "habits");
    const habitsSnapshot = await getDocs(habitsCollection);

    const habitsData: Habit[] = await Promise.all(
      habitsSnapshot.docs.map(async (habitDoc) => {
        const habit: Habit = {
          id: habitDoc.id,
          title: habitDoc.data().title,
          description: habitDoc.data().description,
          skillLevels: [],
          resourceLinks: habitDoc.data().resourceLinks,
          videoLinks: habitDoc.data().videoLinks,
          authors: [],
        };

        // Fetch skillLevels subcollection for each habit
        const skillLevelsCollection = collection(habitDoc.ref, "skillLevels");
        const skillLevelsSnapshot = await getDocs(skillLevelsCollection);
        habit.skillLevels = skillLevelsSnapshot.docs.map((skillLevelDoc) => ({
          id: skillLevelDoc.id,
          skillLevel: skillLevelDoc.data().skillLevel,
          details: skillLevelDoc.data().details,
        }));

        // Fetch authors subcollection for each habit
        const authorsCollection = collection(habitDoc.ref, "authors");
        const authorsSnapshot = await getDocs(authorsCollection);
        habit.authors = authorsSnapshot.docs.map((authorDoc) => ({
          id: authorDoc.id,
          author: authorDoc.data().author,
          tip: authorDoc.data().tip,
        }));

        // Fetch myths subcollection for each habit
        const mythsCollection = collection(habitDoc.ref, "myths");
        const mythssSnapshot = await getDocs(mythsCollection);
        habit.myths = mythssSnapshot.docs.map((mythDoc) => ({
          id: mythDoc.id,
          myth: mythDoc.data().myth,
          rebuttal: mythDoc.data().rebuttal,
        }));

        return habit;
      })
    );

    goalData.habits = habitsData;
    return goalData;
  } catch (error) {
    console.error("Error fetching goal by title:", error);
    throw error;
  }
};
