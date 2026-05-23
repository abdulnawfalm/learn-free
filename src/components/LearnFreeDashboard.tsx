import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers3,
  Compass,
  FileText,
  Settings,
  LogOut,
  BookOpen,
  Users,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

export default function LearnFreeDashboard() {
  const [collapsed, setCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeMenu, setActiveMenu] = useState("Course Overview");
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === "demo@learnfree.com" &&
      password === "learnfree123"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid demo credentials");
    }
  };

  const menus = [
    {
      name: "Course Overview",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Category",
      icon: <Layers3 size={20} />,
    },
    {
      name: "Explore",
      icon: <Compass size={20} />,
    },
    {
      name: "ATS Resume Creation",
      icon: <FileText size={20} />,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
    },
    {
      name: "Logout",
      icon: <LogOut size={20} />,
    },
  ];

  const courses = [
    {
      title: "UI/UX Design Course",
      desc: "Learn modern interface design principles and responsive workflows.",
    },
    {
      title: "Frontend Development",
      desc: "Master React, Tailwind CSS, and modern frontend architecture.",
    },
    {
      title: "Backend API Mastery",
      desc: "Build scalable APIs using Node.js and Express.",
    },
    {
      title: "Full Stack Bootcamp",
      desc: "Become a complete MERN stack developer.",
    },
    {
      title: "Mobile App Design",
      desc: "Design stunning mobile interfaces and experiences.",
    },
    {
      title: "AI Prompt Engineering",
      desc: "Learn advanced prompting strategies for AI systems.",
    },
    {
      title: "Figma Professional",
      desc: "Master Figma workflows for real-world projects.",
    },
    {
      title: "Animation Fundamentals",
      desc: "Create modern UI animations and interactions.",
    },
    {
      title: "JavaScript Essentials",
      desc: "Understand core JavaScript concepts deeply.",
    },
    {
      title: "TypeScript Advanced",
      desc: "Build scalable applications using TypeScript.",
    },
    {
      title: "Dashboard Design",
      desc: "Create premium admin dashboard interfaces.",
    },
    {
      title: "Freelancing Masterclass",
      desc: "Learn how to build and scale your freelance career.",
    },
  ];

  const visibleCourses = showAllCourses
    ? courses
    : courses.slice(0, 6);

  const renderPageContent = () => {
    switch (activeMenu) {
      case "Category":
        return (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              "Design",
              "Development",
              "Marketing",
              "Business",
              "AI Tools",
              "Productivity",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#FCFCFD] border border-gray-200 rounded-[28px] p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category}
                </h3>

                <p className="text-gray-500">
                  Professional learning category section.
                </p>
              </div>
            ))}
          </div>
        );

      case "Explore":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[#FCFCFD] border border-gray-200 rounded-[28px] p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Trending Course #{item}
                </h3>

                <p className="text-gray-500 mb-5">
                  Explore trending modern professional courses.
                </p>

                <button className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white px-5 py-3 rounded-xl text-sm font-semibold">
                  Explore Now
                </button>
              </div>
            ))}
          </div>
        );

      case "ATS Resume Creation":
        return (
          <div className="bg-[#FCFCFD] border border-gray-200 rounded-[28px] p-10">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              ATS Resume Builder
            </h3>

            <p className="text-gray-500 mb-8">
              Create modern ATS-friendly resumes professionally.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Job Role"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Professional Summary"
                className="md:col-span-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none min-h-[140px]"
              />

              <button className="w-fit bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold">
                Generate Resume
              </button>
            </div>
          </div>
        );

      default:
        return (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-[40px] leading-none font-black text-gray-900">
                  Course Overview
                </h2>

                <p className="text-gray-500 mt-3 text-[16px]">
                  Modern professional learning experience.
                </p>
              </div>

              <button
                onClick={() =>
                  setShowAllCourses(!showAllCourses)
                }
                className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-fuchsia-200"
              >
                {showAllCourses ? "View Less" : "View All"}
              </button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-[#FCFCFD] border border-gray-200 rounded-[28px] p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-200 mb-6">
                    <BookOpen size={22} />
                  </div>

                  <h3 className="text-[24px] leading-tight font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 leading-7 text-[15px] mb-6">
                    {course.desc}
                  </p>

                  <button className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-fuchsia-200">
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-[32px] shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-900">
              Learn Free
            </h1>

            <p className="text-gray-500 mt-2">
              Professional Learning Dashboard
            </p>
          </div>

          <div className="mb-6 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
            <div className="font-semibold mb-2 text-black">
              Demo Login Credentials
            </div>

            <div>Email: demo@learnfree.com</div>
            <div>Password: learnfree123</div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 py-4 text-white font-semibold"
            >
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#F5F7FB]">
      {/* Sidebar */}
      <aside
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        className={`bg-white border-r border-gray-200 transition-all duration-500 ease-in-out flex flex-col ${
          collapsed ? "w-[88px]" : "w-[270px]"
        }`}
      >
        <div className="px-6 py-8">
          <div
            className={`transition-all duration-500 overflow-hidden ${
              collapsed
                ? "opacity-0 w-0"
                : "opacity-100 w-auto"
            }`}
          >
            <h1 className="text-3xl font-black text-gray-900 whitespace-nowrap">
              Learn Free
            </h1>

            <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
              Learning Platform
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => {
                if (menu.name === "Logout") {
                  setIsLoggedIn(false);
                  return;
                }

                setActiveMenu(menu.name);
              }}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                activeMenu === menu.name
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="min-w-[24px] flex justify-center">
                {menu.icon}
              </div>

              <span
                className={`font-medium whitespace-nowrap transition-all duration-500 ${
                  collapsed
                    ? "opacity-0 translate-x-5"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {menu.name}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-4">
          <button className="w-full bg-black text-white rounded-2xl py-4 flex items-center justify-center gap-3">
            <ArrowRight size={18} />

            <span
              className={`whitespace-nowrap transition-all duration-500 ${
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              Login Access
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-7 overflow-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-[17px] text-gray-500">
              Continue learning with a professional dashboard UI.
            </p>
          </div>

          <button className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-fuchsia-200">
            Explore Courses
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "Total Courses",
              value: "128+",
              icon: <BookOpen size={26} />,
            },
            {
              title: "Students",
              value: "12.5K",
              icon: <Users size={26} />,
            },
            {
              title: "Category",
              value: "24+",
              icon: <FolderKanban size={26} />,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 font-medium text-[15px]">
                    {card.title}
                  </p>

                  <h2 className="mt-2 text-[42px] leading-none font-black text-gray-900">
                    {card.value}
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Page Content */}
        <div className="bg-white rounded-[32px] border border-gray-200 p-7">
          {renderPageContent()}
        </div>
      </main>
    </div>
  );
}