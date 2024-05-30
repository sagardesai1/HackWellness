/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hxIZpKUo25l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      <div className="grid grid-cols-7 gap-4 text-center">
        <div className="font-medium text-gray-500 dark:text-gray-400">Mon</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Tue</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Wed</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Thu</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Fri</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Sat</div>
        <div className="font-medium text-gray-500 dark:text-gray-400">Sun</div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-monday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-tuesday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-wednesday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-thursday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-friday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-saturday" /> */}
        </div>
        <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square dark:bg-gray-800">
          {/* <Checkbox id="habit-1-sunday" /> */}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Habits</h2>
          <Button size="sm" variant="outline">
            + Add Habit
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              {/* <Checkbox defaultChecked id="habit-1" /> */}
              <div>
                <div className="font-medium">Meditate</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  10 minutes per day
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" size="icon" variant="ghost">
                <DeleteIcon className="h-4 w-4" />
              </Button>
              <Button className="rounded-full" size="icon" variant="ghost">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              {/* <Checkbox id="habit-2" /> */}
              <div>
                <div className="font-medium">Exercise</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  30 minutes per day
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" size="icon" variant="ghost">
                <DeleteIcon className="h-4 w-4" />
              </Button>
              <Button className="rounded-full" size="icon" variant="ghost">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              {/* <Checkbox id="habit-3" /> */}
              <div>
                <div className="font-medium">Read</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  20 pages per day
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" size="icon" variant="ghost">
                <DeleteIcon className="h-4 w-4" />
              </Button>
              <Button className="rounded-full" size="icon" variant="ghost">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
