import React, { useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  Compass,
  FileText,
  Settings,
  LogOut,
  GraduationCap,
  User,
  Bell,
  Search,
  ChevronRight,
  Clock3,
  PlayCircle,
  Layers3,
  AlertCircle,
} from "lucide-react";

const menuItems = [
  {
    title: "Course Overview",
    icon: LayoutDashboard,
  },
  {
    title: "Category",
    icon: BookOpen,
  },
  {
    title: "Explore",
    icon: Compass,
  },
  {
    title: "ATS Resume Creation",
    icon: FileText,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

const allCourses = [
  {
    title: "UI/UX Design",
    lessons: 24,
    progress: 72,
    gradient: "from-fuchsia-500 via-violet-500 to-cyan-500",
  },
  {
    title: "React Mastery",
    lessons: 18,
    progress: 56,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "AI Prompt Engineering",
    lessons: 31,
    progress: 88,
    gradient: "from-orange-500 via-pink-500 to-fuchsia-500",
  },
  {
    title: "Next.js Development",
    lessons: 40,
    progress: 61,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    title: "Framer Motion",
    lessons: 16,
    progress: 45,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "Backend API",
    lessons: 22,
    progress: 83,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
];

export default function Dashboard() {
  const [expanded, setExpanded] = useState(false);

  const [activePage, setActivePage] =
    useState("Course Overview");

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [showAllCourses, setShowAllCourses] =
    useState(false);

  const DEMO_USER = "admin";

  const DEMO_PASS = "admin123";

  const visibleCourses = showAllCourses
    ? allCourses
    : allCourses.slice(0, 3);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === DEMO_USER &&
      password === DEMO_PASS
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-500/20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />

        <div className="relative z-10 w-full max-w-md rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="text-center mt-8">
            <h1 className="text-5xl font-black">
              SkillForge
            </h1>

            <p className="text-gray-400 mt-4">
              Login to continue learning
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-5"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none text-white"
            />

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3">
                <AlertCircle className="w-4 h-4" />

                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 font-semibold"
            >
              Login
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-400 mb-3">
              Demo Credentials
            </p>

            <p className="text-sm">
              Username:
              <span className="text-fuchsia-300 ml-2">
                admin
              </span>
            </p>

            <p className="text-sm mt-2">
              Password:
              <span className="text-cyan-300 ml-2">
                admin123
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="flex h-screen overflow-hidden bg-[#050816] text-white">
      {/* SIDEBAR */}
      <aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`relative flex flex-col justify-between bg-gradient-to-b from-[#1a1333] via-[#0b1023] to-[#03131c] border-r border-white/10 transition-all duration-300 ${
          expanded ? "w-72" : "w-24"
        }`}
      >
        {/* LOGO */}
        <div>
          <div
            className={`flex items-center ${
              expanded
                ? "px-6 pt-8 pb-10"
                : "justify-center pt-8 pb-10"
            }`}
          >
            <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded
                  ? "w-44 opacity-100 ml-4"
                  : "w-0 opacity-0"
              }`}
            >
              <h1 className="text-[30px] font-black bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                SkillForge
              </h1>

              <p className="text-gray-400 text-sm mt-2">
                Learning Dashboard
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="px-4 space-y-3">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  onClick={() =>
                    setActivePage(item.title)
                  }
                  className={`w-full rounded-2xl ${
                    activePage === item.title
                      ? "bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20"
                      : ""
                  }`}
                >
                  <div
                    className={`flex items-center px-5 py-4 ${
                      expanded
                        ? "justify-start"
                        : "justify-center"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-gray-300" />

                    <span
                      className={`transition-all duration-300 whitespace-nowrap ${
                        expanded
                          ? "opacity-100 ml-5"
                          : "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {item.title}
                    </span>

                    {expanded && (
                      <ChevronRight className="ml-auto w-4 h-4 opacity-60" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="px-4 pb-6">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center rounded-2xl px-5 py-4 mb-5 hover:bg-red-500/10 ${
              expanded
                ? "justify-start"
                : "justify-center"
            }`}
          >
            <LogOut className="w-6 h-6 text-rose-400" />

            <span
              className={`text-rose-300 ml-5 ${
                expanded
                  ? "opacity-100"
                  : "opacity-0 hidden"
              }`}
            >
              Logout
            </span>
          </button>

          <div
            className={`rounded-[28px] ${
              expanded
                ? "p-5 border border-white/10 bg-white/5"
                : "p-3"
            }`}
          >
            <div
              className={`flex items-center ${
                expanded
                  ? "justify-start"
                  : "justify-center"
              }`}
            >
              <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>

              <div
                className={`overflow-hidden ${
                  expanded
                    ? "opacity-100 w-40 ml-4"
                    : "opacity-0 w-0"
                }`}
              >
                <h3 className="text-2xl font-bold">
                  Admin
                </h3>

                <p className="text-gray-400 text-sm">
                  Premium Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-auto">
        {/* TOPBAR */}
        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl px-6 md:px-10 py-6">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <Search className="w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-black">
            {activePage}
          </h1>

          {/* OVERVIEW */}
          {activePage === "Course Overview" && (
            <>
              {/* STATS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    title: "Hours Learned",
                    value: "164h",
                    icon: Clock3,
                  },
                  {
                    title: "Active Courses",
                    value: "24",
                    icon: PlayCircle,
                  },
                  {
                    title: "Categories",
                    value: "12",
                    icon: Layers3,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-fuchsia-300" />
                      </div>

                      <p className="text-gray-400">
                        {item.title}
                      </p>

                      <h2 className="text-4xl font-black mt-2">
                        {item.value}
                      </h2>
                    </div>
                  );
                })}
              </div>

              {/* COURSES */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold">
                    Continue Learning
                  </h2>

                  <button
                    onClick={() =>
                      setShowAllCourses(
                        !showAllCourses
                      )
                    }
                    className="text-fuchsia-300"
                  >
                    {showAllCourses
                      ? "Show Less"
                      : "Show More"}
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                  {visibleCourses.map(
                    (course, index) => (
                      <div
                        key={index}
                        className="rounded-[32px] border border-white/10 bg-white/5 p-7"
                      >
                        <div
                          className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6`}
                        >
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold">
                          {course.title}
                        </h3>

                        <p className="text-gray-400 mt-2">
                          {course.lessons} lessons
                        </p>

                        <div className="mt-8">
                          <div className="flex justify-between mb-3 text-sm">
                            <span className="text-gray-400">
                              Progress
                            </span>

                            <span>
                              {course.progress}%
                            </span>
                          </div>

                          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                            <div
                              style={{
                                width: `${course.progress}%`,
                              }}
                              className={`h-full rounded-full bg-gradient-to-r ${course.gradient}`}
                            />
                          </div>
                        </div>

                        <button
                          className={`mt-8 w-full py-4 rounded-2xl bg-gradient-to-r ${course.gradient} font-semibold`}
                        >
                          Continue Course
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}