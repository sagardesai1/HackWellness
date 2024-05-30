/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IXljgruRB58
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800 shrink-0 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base"
          href="#"
        >
          <CalendarIcon className="w-6 h-6" />
          <span className="sr-only">Habit Tracker</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-auto">
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Habits
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Analytics
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col gap-8 p-4 md:gap-12 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Habits Completed</CardTitle>
              <CircleCheckIcon className="w-6 h-6 text-green-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">143</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Current Streak</CardTitle>
              <FlameIcon className="w-6 h-6 text-orange-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">21</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Habits Tracked</CardTitle>
              <ListIcon className="w-6 h-6 text-blue-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">12</CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto grid gap-8">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-6 h-6" />
                <CardTitle>May 2023</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <ChevronLeftIcon className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-7 gap-2 text-sm font-medium">
              <div className="text-gray-500 dark:text-gray-400">Sun</div>
              <div className="text-gray-500 dark:text-gray-400">Mon</div>
              <div className="text-gray-500 dark:text-gray-400">Tue</div>
              <div className="text-gray-500 dark:text-gray-400">Wed</div>
              <div className="text-gray-500 dark:text-gray-400">Thu</div>
              <div className="text-gray-500 dark:text-gray-400">Fri</div>
              <div className="text-gray-500 dark:text-gray-400">Sat</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">1</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">2</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">3</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">4</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">5</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">6</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">7</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">8</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">9</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">10</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">11</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">12</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">13</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">14</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">15</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">16</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">17</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">18</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">19</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">20</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">21</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">22</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">23</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">24</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">25</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">26</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">27</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">28</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">29</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">30</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center aspect-square">
                <div className="text-gray-500 dark:text-gray-400">31</div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Habits</CardTitle>
                <Button size="icon" variant="ghost">
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <Checkbox defaultChecked id="habit1" /> */}
                    {/* <Label htmlFor="habit1">Meditate</Label> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-400 rounded-full px-2 py-1 text-xs font-medium">
                      21 days
                    </div>
                    <Button size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <Checkbox id="habit2" /> */}
                    {/* <Label htmlFor="habit2">Exercise</Label> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-500 dark:text-yellow-400 rounded-full px-2 py-1 text-xs font-medium">
                      7 days
                    </div>
                    <Button size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <Checkbox id="habit3" /> */}
                    {/* <Label htmlFor="habit3">Read</Label> */}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-400 rounded-full px-2 py-1 text-xs font-medium">
                      3 days
                    </div>
                    <Button size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Insights</CardTitle>
                <Button size="icon" variant="ghost">
                  <SettingsIcon className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Habits Completed</div>
                    <div className="text-2xl font-bold">143</div>
                  </div>
                  <CircleCheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Current Streak</div>
                    <div className="text-2xl font-bold">21</div>
                  </div>
                  <FlameIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Habits Tracked</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                  <ListIcon className="w-6 h-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
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
    </svg>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
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

function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
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

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
