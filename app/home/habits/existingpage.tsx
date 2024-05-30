"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
function Dashboard() {
  return (
    <main className="flex flex-col gap-8 p-6 md:p-10">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <PlusIcon className="h-5 w-5" />
            Add Habit
          </Button>
          <Button>
            <CogIcon className="h-5 w-5" />
            Settings
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Meditate</h3>
              <Button size="sm" variant="outline">
                Complete
              </Button>
            </div>
            <Progress value={75} />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              75% complete this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Exercise</h3>
              <Button size="sm" variant="outline">
                Complete
              </Button>
            </div>
            <Progress value={50} />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              50% complete this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Read</h3>
              <Button size="sm" variant="outline">
                Complete
              </Button>
            </div>
            <Progress value={90} />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              90% complete this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Journal</h3>
              <Button size="sm" variant="outline">
                Complete
              </Button>
            </div>
            <Progress value={60} />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              60% complete this week
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <CalendarDaysIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <p className="text-2xl font-bold">28</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Days Tracked
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <p className="text-2xl font-bold">84%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Habits Completed
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FlameIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Streak Days
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TrophyIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Achievements
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Dashboard;

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function FlameIcon(props) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
