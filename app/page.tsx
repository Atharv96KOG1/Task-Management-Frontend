import Image from "next/image";
import Link from "next/link";
import AppNavbar from "@/components/AppNavbar";

export default function Home() {
  return (
    <>
      <AppNavbar />

      <section id="Home" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 flex items-center transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl text-blue-600 dark:text-blue-400 font-extrabold leading-tight">
              Organize Your Day,
              <br />
              Achieve
              <span className="text-purple-600 dark:text-purple-400"> More.</span>
            </h1>

            <p className="mt-5 text-xl text-gray-600 dark:text-slate-300 leading-9">
              Create Subjects, manage tasks, set reminders,
              deadlines and organize your study life in one
              beautiful dashboard.
            </p>

            <div className="mt-10 flex gap-5">
              <Link href="/dashboard" className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                {"Get Started →"}
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/img/logo.png"
              alt="Hero"
              width={600}
              height={600} />
          </div>

        </div>
      </section>


      <section id="features" className="bg-white dark:bg-slate-950 py-24 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center text-purple-600 dark:text-purple-400">Features</h2>
          <p className="text-gray-600 dark:text-slate-300 text-center mt-5">Everything you need to organize your daily work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Create Subjects
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-2xl mt-3">
                Organize work into multiple subjects.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Task Management
              </h3>
              <p className="text-gray-500 dark:text-slate-400 mt-3 text-2xl">
                Add, update and delete tasks easily.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Reminders
              </h3>
              <p className="text-gray-500 dark:text-slate-400 mt-3 text-2xl">
                Never miss important deadlines.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Priority Levels
              </h3>
              <p className="text-gray-500 dark:text-slate-400 mt-3 text-2xl">
                High, Medium and Low priority tasks.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Progress Tracking
              </h3>
              <p className="text-gray-500 dark:text-slate-400 mt-3 text-2xl">
                Track completed and pending work.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-slate-100">
                Notifications
              </h3>
              <p className="text-gray-500 dark:text-slate-400 mt-3 text-2xl">
                Receive reminders before deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="bg-blue-50 dark:bg-slate-900 py-24 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold text-purple-600 dark:text-purple-400">
            Why To-Do List ?
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-slate-300 leading-9">
            ToDoHub helps students and professionals organize
            subjects, manage tasks, set reminders and stay
            productive every day with a clean and modern
            interface.
          </p>
        </div>
      </section>


      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-slate-800 dark:to-slate-900 text-white py-8 text-center transition-colors duration-500">
        © 2026 To-Do List. All Rights Reserved.
      </footer>
    </>
  );
}
