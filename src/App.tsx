import React, { useState, useEffect } from "react";

import { useState } from 'react';

const App = () => {
  // 1. Track what the user types in the inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. Track their login status and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<'admin' | 'student' | null>(null);
// --- CUSTOM INLINE ICONS (No external dependencies needed!) ---
const Icon = ({ children, className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Library = (p) => (
  <Icon {...p}>
    <path d="m16 6 4 14" />
    <path d="M12 6v14" />
    <path d="M8 8v12" />
    <path d="M4 4v16" />
  </Icon>
);
const Book = (p) => (
  <Icon {...p}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </Icon>
);
const Users = (p) => (
  <Icon {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const History = (p) => (
  <Icon {...p}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </Icon>
);
const Search = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);
const LogOut = (p) => (
  <Icon {...p}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </Icon>
);
const Plus = (p) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </Icon>
);
const ShieldCheck = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const AlertCircle = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </Icon>
);
const Clock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);
const Sparkles = (p) => (
  <Icon {...p}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </Icon>
);
const Loader2 = (p) => (
  <Icon {...p}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Icon>
);
const BrainCircuit = (p) => (
  <Icon {...p}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13h4.5a2 2 0 0 1 0 4H15" />
    <path d="M17.5 17.5v1.5a1 1 0 0 1-1 1h-2" />
    <path d="M9 13H4.5a2 2 0 0 0 0 4H9" />
    <path d="M6.5 17.5v1.5a1 1 0 0 0 1 1h2" />
  </Icon>
);
const TrendingUp = (p) => (
  <Icon {...p}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </Icon>
);
const Menu = (p) => (
  <Icon {...p}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Icon>
);
const X = (p) => (
  <Icon {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const Mail = (p) => (
  <Icon {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
);
const Lock = (p) => (
  <Icon {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Icon>
);
const UserIcon = (p) => (
  <Icon {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
);
const Settings = (p) => (
  <Icon {...p}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);
const Phone = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);
const GraduationCap = (p) => (
  <Icon {...p}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Icon>
);
const Calendar = (p) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>
);

// --- GEMINI API CONFIGURATION ---
const apiKey = ""; // Environment provides this at runtime
const GEMINI_MODEL = "gemini-2.5-flash-preview-09-2025";

const fetchGemini = async (prompt, systemInstruction = "") => {
  if (!apiKey || apiKey.trim() === "") {
    return "⚠️ AI Features require an API Key. Please add your Gemini API Key to the code to enable this feature.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: systemInstruction
      ? { parts: [{ text: systemInstruction }] }
      : undefined,
  };

  let delay = 1000;
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI."
      );
    } catch (error) {
      if (i === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};

// --- MOCK DATABASE DATA (DEFAULTS) ---
const INITIAL_USERS = [
  {
    id: "ADM-001",
    name: "Librarian Sarah",
    email: "sarah@lib.edu",
    password: "password123",
    role: "admin",
    phone: "09123456789",
  },
  {
    id: "STU-782",
    name: "Alex Rivera",
    email: "alex@student.edu",
    password: "password123",
    role: "student",
    course: "BSIT",
    year: "2nd Year",
    phone: "09112223333",
  },
  {
    id: "STU-901",
    name: "Maria Santos",
    email: "maria@student.edu",
    password: "password123",
    role: "student",
    course: "BSCS",
    year: "3rd Year",
    phone: "09998887777",
  },
  {
    id: "STU-445",
    name: "John Doe",
    email: "john@student.edu",
    password: "password123",
    role: "student",
    course: "BSIT",
    year: "1st Year",
    phone: "09776665555",
  },
  {
    id: "STU-212",
    name: "Sarah Connor",
    email: "sarah.c@student.edu",
    password: "password123",
    role: "student",
    course: "BSIS",
    year: "4th Year",
    phone: "09554443333",
  },
];

const MOCK_BOOKS = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    available: 5,
    total: 12,
    addedBy: "Librarian Sarah",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    available: 0,
    total: 8,
    addedBy: "Librarian Sarah",
  },
  {
    id: 3,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database",
    available: 3,
    total: 5,
    addedBy: "Admin System",
  },
  {
    id: 4,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "CS Theory",
    available: 2,
    total: 10,
    addedBy: "Admin System",
  },
  {
    id: 5,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Systems",
    available: 4,
    total: 4,
    addedBy: "Librarian Sarah",
  },
];

const MOCK_BORROWED = [
  {
    id: 101,
    bookId: 1,
    title: "Clean Code",
    borrowedDate: "03/10/2024, 09:30 AM",
    dueDate: "2024-04-15",
    returnedDate: "-",
    status: "borrowed",
    studentName: "Alex Rivera",
  },
  {
    id: 102,
    bookId: 99,
    title: "Deep Learning",
    borrowedDate: "02/25/2024, 02:15 PM",
    dueDate: "2024-03-10",
    returnedDate: "-",
    status: "borrowed",
    studentName: "Maria Santos",
  },
  {
    id: 103,
    bookId: 3,
    title: "Database System Concepts",
    borrowedDate: "01/12/2024, 11:00 AM",
    dueDate: "2024-01-26",
    returnedDate: "01/24/2024, 10:45 AM",
    status: "returned",
    studentName: "John Doe",
  },
];

// --- SEPARATED UI COMPONENTS ---

const LoginView = ({ handleAuth }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  // New Signup Fields
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (isSignup && !name)) {
      setError("Please fill in all basic fields.");
      return;
    }

    if (isSignup && role === "student") {
      if (!course || !year || !phone) {
        setError("Please fill in all student details (Course, Year, Phone).");
        return;
      }
    }

    const success = handleAuth(isSignup ? "signup" : "login", {
      email,
      password,
      name,
      role,
      course,
      year,
      phone,
    });

    if (!success) {
      setError(
        isSignup ? "Email already exists." : "Invalid email or password."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200">
            <Library className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">
          College Library System
        </h1>
        <p className="text-center text-slate-500 mb-6 font-medium">
          {isSignup ? "Create a new account" : "Sign in to your account"}
        </p>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-600 rounded-lg text-sm text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-3">
              <div className="flex gap-4 p-1 bg-slate-100 rounded-xl mb-4">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                    role === "student"
                      ? "bg-white shadow-sm text-indigo-600"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                    role === "admin"
                      ? "bg-white shadow-sm text-indigo-600"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Librarian
                </button>
              </div>

              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Dynamic Student Fields */}
              {role === "student" && (
                <>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Course (e.g. BSIT)"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div className="relative flex-1">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Year (e.g. 2nd)"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all font-bold shadow-lg shadow-indigo-200 mt-2"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors"
          >
            {isSignup
              ? "Already have an account? Log in"
              : "Don't have an account? Sign up"}
          </button>
        </div>

        {/* Demo hints */}
        {!isSignup && (
          <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400 text-center space-y-1">
            <p>
              Demo Admin:{" "}
              <span className="font-mono text-slate-500">sarah@lib.edu</span> /{" "}
              <span className="font-mono text-slate-500">password123</span>
            </p>
            <p>
              Demo Student:{" "}
              <span className="font-mono text-slate-500">alex@student.edu</span>{" "}
              / <span className="font-mono text-slate-500">password123</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileModal = ({ user, onClose, handleUpdateProfile }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    course: user.course || "",
    year: user.year || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Profile Settings</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {user.role === "student" && (
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Course
                </label>
                <input
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Year
                </label>
                <input
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          )}

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StudentDashboard = ({
  user,
  logout,
  books,
  searchTerm,
  setSearchTerm,
  getRecommendations,
  aiLoading,
  recommendations,
  setRecommendations,
  getBookInsight,
  insights,
  borrowed,
  handleBorrow,
  handleReturn,
  setShowProfileModal,
}) => {
  // Filter borrowed books just for this specific user. Exclude returned ones from the bookshelf
  const userBorrowed = borrowed.filter(
    (b) => b.studentName === user.name && b.status !== "returned"
  );
  const overdueBooks = userBorrowed.filter((b) => b.status === "overdue");
  const totalFine = overdueBooks.reduce(
    (sum, b) => sum + (b.fineAmount || 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Library className="w-6 h-6 text-indigo-600" />
          <span className="font-bold text-slate-800 text-lg">
            StudentPortal
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-500">ID: {user.id}</p>
          </div>
          <button
            onClick={() => setShowProfileModal(true)}
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={logout}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <main className="p-4 sm:p-6 max-w-6xl mx-auto space-y-8">
        {/* Dynamic Overdue Fine Alert */}
        {overdueBooks.length > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4 text-red-800 shadow-sm animate-in fade-in slide-in-from-top-4">
            <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
            <div>
              <p className="font-bold text-red-900">
                Outstanding Fine: ₱{totalFine}.00
              </p>
              <p className="text-sm text-red-700 opacity-90">
                You have {overdueBooks.length} book(s) currently overdue. Please
                return them to avoid further charges.
              </p>
            </div>
          </div>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Book className="w-5 h-5" /> My Bookshelf
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userBorrowed.length === 0 ? (
                <div className="col-span-2 bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
                  You haven't borrowed any books yet.
                </div>
              ) : (
                userBorrowed.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center shadow-sm transition-all ${
                      item.status === "overdue"
                        ? "bg-red-50 border-red-200"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div>
                      <h3
                        className={`font-bold ${
                          item.status === "overdue"
                            ? "text-red-900"
                            : "text-slate-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <Clock
                          className={`w-4 h-4 ${
                            item.status === "overdue"
                              ? "text-red-500"
                              : "text-slate-400"
                          }`}
                        />
                        <span
                          className={
                            item.status === "overdue"
                              ? "text-red-600 font-semibold"
                              : "text-slate-500"
                          }
                        >
                          Due: {item.dueDate}
                        </span>
                      </div>
                      {/* Dynamic Fine Element per book */}
                      {item.status === "overdue" && (
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100/80 rounded-md border border-red-200">
                          <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                          <span className="text-xs font-bold text-red-700">
                            Fine: ₱{item.fineAmount}.00 ({item.daysOverdue} days
                            overdue)
                          </span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleReturn(item)}
                      className={`w-full sm:w-auto px-4 py-2 text-xs font-bold rounded-lg transition-colors border ${
                        item.status === "overdue"
                          ? "bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-md shadow-red-200"
                          : "text-rose-600 hover:bg-rose-50 border-rose-200"
                      }`}
                    >
                      Return Book
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BrainCircuit className="w-24 h-24" />
            </div>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" /> AI
              Recommendations
            </h3>
            <p className="text-indigo-200 text-sm mb-4">
              Based on your reading history, Gemini suggests these titles.
            </p>

            {recommendations ? (
              <div className="bg-indigo-800/50 rounded-xl p-4 text-sm text-indigo-50 whitespace-pre-line leading-relaxed">
                {recommendations}
              </div>
            ) : (
              <button
                onClick={getRecommendations}
                disabled={aiLoading}
                className="mt-auto w-full py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 z-10 relative"
              >
                {aiLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "✨ Get Recommendations"
                )}
              </button>
            )}
            {recommendations && (
              <button
                onClick={() => setRecommendations("")}
                className="mt-4 text-xs text-indigo-300 hover:text-white underline underline-offset-4 z-10 relative"
              >
                Clear and Refresh
              </button>
            )}
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Explore Catalog
            </h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search catalog..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="h-32 bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <Book className="w-12 h-12 text-slate-300 group-hover:text-indigo-200" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded-full w-fit">
                      {book.category}
                    </span>
                    <h3 className="font-bold text-slate-800 mt-2 truncate">
                      {book.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-2">{book.author}</p>

                    {insights[book.id] ? (
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 mb-3 italic text-xs text-slate-600 animate-in fade-in slide-in-from-top-1 duration-300">
                        "{insights[book.id]}"
                      </div>
                    ) : (
                      <button
                        onClick={() => getBookInsight(book)}
                        className="text-[10px] font-bold text-indigo-500 hover:text-indigo-700 flex items-center gap-1 mb-3 transition-colors"
                      >
                        <Sparkles className="w-3 h-3" /> ✨ Quick Insight
                      </button>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-3">
                      <span
                        className={`text-xs font-medium ${
                          book.available > 0
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >
                        {book.available > 0
                          ? `${book.available} in stock`
                          : "Out of Stock"}
                      </span>
                      <button
                        onClick={() => handleBorrow(book)}
                        disabled={book.available === 0}
                        className="text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-slate-300 transition-all"
                      >
                        Borrow
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const AdminDashboard = ({
  user,
  logout,
  books,
  generateAdminReport,
  aiLoading,
  adminReport,
  setAdminReport,
  borrowed,
  handleAddAsset,
  handleManageAsset,
  handleArchiveAsset,
  usersDb,
  setShowProfileModal,
}) => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [transactionFilter, setTransactionFilter] = useState("all"); // all, borrowed, overdue, returned

  // Dynamically calculate live statistics
  const totalBooksCount = books.reduce((sum, book) => sum + book.total, 0);
  const currentlyOutCount = books.reduce(
    (sum, book) => sum + (book.total - book.available),
    0
  );
  const overdueCount = borrowed.filter((b) => b.status === "overdue").length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Auto-close mobile menu when a tab is clicked
  };

  // Dynamically calculate student stats from usersDb and borrowed data
  const studentData = usersDb
    .filter((u) => u.role === "student")
    .map((student) => {
      const studentLoans = borrowed.filter(
        (b) => b.studentName === student.name
      );
      // Only count active loans (exclude returned ones)
      const activeLoansCount = studentLoans.filter(
        (b) => b.status !== "returned"
      ).length;

      // Compute total fine specifically for this student
      const totalFine = studentLoans.reduce(
        (sum, b) => sum + (b.fineAmount || 0),
        0
      );

      return {
        id: student.id,
        name: student.name,
        course: student.course || "N/A", // Fallback for newly created accounts
        activeLoans: activeLoansCount,
        fines: `₱${totalFine}.00`,
      };
    });

  // Filter transactions based on the selected sub-tab
  const filteredTransactions = borrowed
    .filter((b) => {
      if (transactionFilter === "all") return true;
      return b.status === transactionFilter;
    })
    .sort((a, b) => b.id - a.id); // Sort newest first

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col lg:flex-row">
      {/* Mobile Header Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700 sticky top-0 z-30">
        <div className="flex items-center gap-2 text-indigo-400">
          <Library className="w-6 h-6" />
          <span className="font-bold text-slate-100">LMS Admin</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-slate-300 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 p-6 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Library className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">LMS Admin</span>
          </div>
          {/* Close button for mobile */}
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2">
          <div
            onClick={() => handleTabChange("inventory")}
            className={`p-3 rounded-lg flex items-center gap-3 font-medium cursor-pointer transition-colors ${
              activeTab === "inventory"
                ? "bg-slate-700 text-indigo-400"
                : "text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            <Book className="w-5 h-5" /> Inventory
          </div>
          <div
            onClick={() => handleTabChange("transactions")}
            className={`p-3 rounded-lg flex items-center gap-3 font-medium cursor-pointer transition-colors ${
              activeTab === "transactions"
                ? "bg-slate-700 text-indigo-400"
                : "text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            <History className="w-5 h-5" /> Transactions
          </div>
          <div
            onClick={() => handleTabChange("students")}
            className={`p-3 rounded-lg flex items-center gap-3 font-medium cursor-pointer transition-colors ${
              activeTab === "students"
                ? "bg-slate-700 text-indigo-400"
                : "text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            <Users className="w-5 h-5" /> Students
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-8 w-full overflow-x-hidden">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Librarian Console</h1>
            <p className="text-slate-400">Welcome back, {user.name}.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowProfileModal(true)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-indigo-400"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={logout}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 text-slate-400 hover:text-rose-400"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Logout</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Total Books",
                value: totalBooksCount,
                color: "bg-indigo-500",
              },
              {
                label: "Currently Out",
                value: currentlyOutCount,
                color: "bg-amber-500",
              },
              {
                label: "Overdue Alerts",
                value: overdueCount,
                color: "bg-rose-500",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
              >
                <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 shadow-lg relative flex flex-col justify-between group overflow-hidden">
            <div className="relative z-10">
              <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" /> AI Co-pilot
              </p>
              <h4 className="text-white font-bold mb-2">Inventory Health</h4>
            </div>
            <button
              onClick={generateAdminReport}
              disabled={aiLoading}
              className="relative z-10 w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 mt-4 md:mt-0"
            >
              {aiLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                "✨ Analyze Stock"
              )}
            </button>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
              <Sparkles className="w-16 h-16" />
            </div>
          </div>
        </div>

        {adminReport && (
          <div className="bg-slate-800 border border-indigo-500/30 p-6 rounded-2xl mb-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-indigo-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Gemini Analysis
              </h3>
              <button
                onClick={() => setAdminReport("")}
                className="text-slate-500 hover:text-white text-xs"
              >
                Dismiss
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              "{adminReport}"
            </p>
          </div>
        )}

        {/* --- INVENTORY TAB --- */}
        {activeTab === "inventory" && (
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800/50">
              <h3 className="font-bold">Inventory Records</h3>
              <button
                onClick={handleAddAsset}
                className="flex items-center justify-center w-full sm:w-auto gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                <Plus className="w-4 h-4" /> Add Assets
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 text-[10px] uppercase tracking-widest">
                    <th className="px-6 py-4">Title / Author</th>
                    <th className="px-6 py-4">Added By</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Stock Level</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {books.map((book) => (
                    <tr
                      key={book.id}
                      className="hover:bg-slate-700/20 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-200">
                          {book.title}
                        </p>
                        <p className="text-xs text-slate-500">{book.author}</p>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400 font-medium">
                        {book.addedBy || "System Admin"}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] px-2 py-1 bg-slate-900 rounded-md text-slate-300 border border-slate-700 uppercase">
                          {book.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1 w-20 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                book.available < 2
                                  ? "bg-rose-500"
                                  : "bg-emerald-500"
                              }`}
                              style={{
                                width: `${
                                  (book.available / book.total) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-500">
                            {book.available}/{book.total}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2 sm:space-x-4">
                        <button
                          onClick={() => handleManageAsset(book.id)}
                          className="text-indigo-400 hover:text-indigo-300 text-xs font-bold transition-colors"
                        >
                          Manage
                        </button>
                        <button
                          onClick={() => handleArchiveAsset(book.id)}
                          className="text-slate-500 hover:text-rose-400 text-xs font-bold transition-colors"
                        >
                          Archive
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TRANSACTIONS TAB --- */}
        {activeTab === "transactions" && (
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-700 bg-slate-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="font-bold">Transaction History</h3>

              {/* Sub-tabs for filtering */}
              <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
                {["all", "borrowed", "overdue", "returned"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setTransactionFilter(filter)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${
                      transactionFilter === filter
                        ? "bg-slate-700 text-indigo-400"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 text-[10px] uppercase tracking-widest">
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Book Title</th>
                    <th className="px-6 py-4">Date Borrowed</th>
                    <th className="px-6 py-4">Due Date</th>
                    <th className="px-6 py-4">Date Returned</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-8 text-center text-slate-500"
                      >
                        No transactions found.
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((b) => (
                      <tr
                        key={b.id}
                        className="hover:bg-slate-700/20 transition-colors"
                      >
                        <td className="px-6 py-4 text-xs font-mono text-slate-400">
                          TXN-{b.id}
                        </td>
                        <td className="px-6 py-4 text-indigo-300 text-sm font-medium">
                          {b.studentName || "Unknown Student"}
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-200">
                          {b.title}
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-xs">
                          {b.borrowedDate}
                        </td>
                        <td className="px-6 py-4 text-slate-300 text-sm">
                          {b.dueDate}
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-xs">
                          {b.returnedDate || "-"}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-[10px] px-2 py-1 rounded-md border uppercase 
                          ${
                            b.status === "overdue"
                              ? "bg-red-900/30 text-red-400 border-red-800"
                              : b.status === "returned"
                              ? "bg-slate-800 text-slate-400 border-slate-600"
                              : "bg-emerald-900/30 text-emerald-400 border-emerald-800"
                          }`}
                          >
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- STUDENTS TAB --- */}
        {activeTab === "students" && (
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-700 bg-slate-800/50">
              <h3 className="font-bold">Student Directory</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 text-[10px] uppercase tracking-widest">
                    <th className="px-6 py-4">Student ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4">Active Loans</th>
                    <th className="px-6 py-4">Fines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {studentData.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-8 text-center text-slate-500"
                      >
                        No students registered yet.
                      </td>
                    </tr>
                  ) : (
                    studentData.map((s) => (
                      <tr
                        key={s.id}
                        className="hover:bg-slate-700/20 transition-colors"
                      >
                        <td className="px-6 py-4 text-xs font-mono text-indigo-400">
                          {s.id}
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-200">
                          {s.name}
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-sm">
                          {s.course}
                        </td>
                        <td className="px-6 py-4 text-slate-300 text-sm">
                          {s.activeLoans}
                        </td>
                        <td
                          className={`px-6 py-4 text-sm font-semibold ${
                            s.fines === "₱0.00"
                              ? "text-slate-500"
                              : "text-red-400"
                          }`}
                        >
                          {s.fines}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const App = () => {
  // --- ADD LOCAL STORAGE PERSISTENCE ---
  const [usersDb, setUsersDb] = useState(() => {
    const saved = localStorage.getItem("lms_users");
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("lms_books");
    return saved ? JSON.parse(saved) : MOCK_BOOKS;
  });

  const [rawBorrowed, setRawBorrowed] = useState(() => {
    const saved = localStorage.getItem("lms_borrowed");
    return saved ? JSON.parse(saved) : MOCK_BORROWED;
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lms_currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Initialize view based on whether user is saved in storage
  const [view, setView] = useState(
    user
      ? user.role === "admin"
        ? "admin-dashboard"
        : "student-dashboard"
      : "login"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [bookToBorrow, setBookToBorrow] = useState(null);

  // Profile Settings Modal State
  const [showProfileModal, setShowProfileModal] = useState(false);

  // --- DYNAMIC OVERDUE CALCULATION ENGINE ---
  // We compute real-time overdue statuses instantly before rendering.
  const computedBorrowed = rawBorrowed.map((b) => {
    if (b.status === "returned") return b; // Ignore already returned books

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize time for exact day calculation

    const due = new Date(b.dueDate);
    due.setHours(0, 0, 0, 0);

    if (today > due) {
      const diffTime = Math.abs(today - due);
      const daysOverdue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return {
        ...b,
        status: "overdue",
        daysOverdue,
        fineAmount: daysOverdue * 15, // ₱15 per day fine rate
      };
    }

    return { ...b, fineAmount: 0 };
  });

  // Save to Local Storage whenever these states change
  useEffect(() => {
    localStorage.setItem("lms_users", JSON.stringify(usersDb));
  }, [usersDb]);
  useEffect(() => {
    localStorage.setItem("lms_books", JSON.stringify(books));
  }, [books]);
  useEffect(() => {
    localStorage.setItem("lms_borrowed", JSON.stringify(rawBorrowed));
  }, [rawBorrowed]);
  useEffect(() => {
    localStorage.setItem("lms_currentUser", JSON.stringify(user));
  }, [user]);

  // AI States
  const [aiLoading, setAiLoading] = useState(false);
  const [recommendations, setRecommendations] = useState("");
  const [insights, setInsights] = useState({});
  const [adminReport, setAdminReport] = useState("");

  const handleAuth = (type, payload) => {
    if (type === "login") {
      const existingUser = usersDb.find(
        (u) => u.email === payload.email && u.password === payload.password
      );
      if (existingUser) {
        setUser(existingUser);
        setView(
          existingUser.role === "admin"
            ? "admin-dashboard"
            : "student-dashboard"
        );
        return true;
      }
      return false;
    } else if (type === "signup") {
      const emailExists = usersDb.find((u) => u.email === payload.email);
      if (emailExists) return false;

      const newUser = {
        id:
          payload.role === "admin"
            ? `ADM-${Math.floor(Math.random() * 1000)}`
            : `STU-${Math.floor(Math.random() * 1000)}`,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        role: payload.role,
        course: payload.role === "student" ? payload.course : undefined,
        year: payload.role === "student" ? payload.year : undefined,
        phone: payload.role === "student" ? payload.phone : undefined,
      };

      setUsersDb([...usersDb, newUser]);
      setUser(newUser);
      setView(
        newUser.role === "admin" ? "admin-dashboard" : "student-dashboard"
      );
      return true;
    }
  };

  const handleUpdateProfile = (updatedFields) => {
    // Update the current active session user
    const updatedUser = { ...user, ...updatedFields };
    setUser(updatedUser);

    // Update the main database of users
    const updatedUsersDb = usersDb.map((u) =>
      u.id === user.id ? updatedUser : u
    );
    setUsersDb(updatedUsersDb);

    // Update transactions to reflect name changes
    if (user.name !== updatedFields.name) {
      setRawBorrowed(
        rawBorrowed.map((b) =>
          b.studentName === user.name
            ? { ...b, studentName: updatedFields.name }
            : b
        )
      );
    }
  };

  const logout = () => {
    setUser(null);
    setView("login");
    setRecommendations("");
    setInsights({});
    setAdminReport("");
    setShowProfileModal(false);
    localStorage.removeItem("lms_currentUser"); // Clear active session on logout
  };

  // Helper to format dates nicely
  const formatDateWithTime = (date) => {
    return date.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleBorrow = (book) => {
    if (book.available > 0) {
      setBookToBorrow(book);
    }
  };

  const confirmBorrow = (book, days) => {
    setBooks(
      books.map((b) =>
        b.id === book.id ? { ...b, available: b.available - 1 } : b
      )
    );

    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(now.getDate() + days);

    setRawBorrowed([
      ...rawBorrowed,
      {
        id: Date.now(),
        bookId: book.id,
        title: book.title,
        borrowedDate: formatDateWithTime(now),
        dueDate: dueDate.toISOString().split("T")[0],
        returnedDate: null,
        status: "borrowed",
        studentName: user.name,
      },
    ]);

    setBookToBorrow(null);
  };

  const handleReturn = (borrowedItem) => {
    const now = new Date();

    // Modify the raw state, updating it to 'returned'
    setRawBorrowed(
      rawBorrowed.map((b) =>
        b.id === borrowedItem.id
          ? { ...b, status: "returned", returnedDate: formatDateWithTime(now) }
          : b
      )
    );

    // Add book back to inventory stock
    if (borrowedItem.bookId) {
      setBooks(
        books.map((b) =>
          b.id === borrowedItem.bookId
            ? { ...b, available: b.available + 1 }
            : b
        )
      );
    }
  };

  const handleAddAsset = () => {
    const title = prompt("Enter book title:");
    if (!title) return;
    const author = prompt("Enter book author:");
    if (!author) return;

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      category: "New Addition",
      available: 5,
      total: 5,
      addedBy: user.name, // Track which librarian added it
    };
    setBooks([...books, newBook]);
  };

  const handleManageAsset = (bookId) => {
    const addedStock = prompt(
      "How many new copies are you adding to the inventory?"
    );
    const parsedStock = parseInt(addedStock, 10);

    if (!isNaN(parsedStock) && parsedStock > 0) {
      setBooks(
        books.map((b) =>
          b.id === bookId
            ? {
                ...b,
                total: b.total + parsedStock,
                available: b.available + parsedStock,
              }
            : b
        )
      );
    }
  };

  const handleArchiveAsset = (bookId) => {
    setBooks(books.filter((b) => b.id !== bookId));
  };

  const getRecommendations = async () => {
    setAiLoading(true);
    try {
      const userBorrowed = computedBorrowed.filter(
        (b) => b.studentName === user.name
      );
      const borrowedList = userBorrowed.map((b) => b.title).join(", ");
      const prompt = `Based on these currently borrowed books: ${
        borrowedList || "none"
      }, suggest 3 other technical or academic books I should read. Keep it brief.`;
      const system =
        "You are a helpful university library assistant. Provide recommendations in a friendly, concise bullet-point format.";
      const res = await fetchGemini(prompt, system);
      setRecommendations(res);
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  const getBookInsight = async (book) => {
    if (insights[book.id]) return;
    setInsights((prev) => ({ ...prev, [book.id]: "Generating..." }));
    try {
      const prompt = `Provide a one-sentence "elevator pitch" for the book "${book.title}" by ${book.author} that explains why an IT student should read it.`;
      const res = await fetchGemini(
        prompt,
        "You are a knowledgeable librarian."
      );
      setInsights((prev) => ({ ...prev, [book.id]: res }));
    } catch (err) {
      setInsights((prev) => ({
        ...prev,
        [book.id]: "Could not load insight.",
      }));
    }
  };

  const generateAdminReport = async () => {
    setAiLoading(true);
    try {
      const inventorySummary = books
        .map((b) => `${b.title} (${b.available}/${b.total})`)
        .join(", ");
      const prompt = `Analyze this library inventory: ${inventorySummary}. Which subjects are well-stocked and which might need more acquisition? Keep it professional and under 100 words.`;
      const res = await fetchGemini(
        prompt,
        "You are a senior library management consultant."
      );
      setAdminReport(res);
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 relative">
      {view === "login" && <LoginView handleAuth={handleAuth} />}

      {view === "student-dashboard" && user?.role === "student" && (
        <StudentDashboard
          user={user}
          logout={logout}
          books={books}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getRecommendations={getRecommendations}
          aiLoading={aiLoading}
          recommendations={recommendations}
          setRecommendations={setRecommendations}
          getBookInsight={getBookInsight}
          insights={insights}
          borrowed={computedBorrowed} // Pass fully computed dynamic states down
          handleBorrow={handleBorrow}
          handleReturn={handleReturn}
          setShowProfileModal={setShowProfileModal}
        />
      )}

      {view === "admin-dashboard" && user?.role === "admin" && (
        <AdminDashboard
          user={user}
          logout={logout}
          books={books}
          generateAdminReport={generateAdminReport}
          aiLoading={aiLoading}
          adminReport={adminReport}
          setAdminReport={setAdminReport}
          borrowed={computedBorrowed} // Pass fully computed dynamic states down
          handleAddAsset={handleAddAsset}
          handleManageAsset={handleManageAsset}
          handleArchiveAsset={handleArchiveAsset}
          usersDb={usersDb}
          setShowProfileModal={setShowProfileModal}
        />
      )}

      {/* --- BORROW MODAL --- */}
      {bookToBorrow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-slate-800 mb-1">
              Borrow Book
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              How many days do you want to keep{" "}
              <strong className="text-slate-700">"{bookToBorrow.title}"</strong>
              ?
            </p>

            <div className="grid grid-cols-4 gap-3 mb-8">
              {[1, 2, 3, 4, 5, 6, 7].map((days) => (
                <button
                  key={days}
                  onClick={() => confirmBorrow(bookToBorrow, days)}
                  className="py-3 flex flex-col items-center justify-center bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl font-bold transition-all border border-indigo-100 hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="text-lg">{days}</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">
                    {days === 1 ? "Day" : "Days"}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setBookToBorrow(null)}
                className="px-5 py-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-xl font-bold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PROFILE SETTINGS MODAL --- */}
      {showProfileModal && (
        <ProfileModal
          user={user}
          onClose={() => setShowProfileModal(false)}
          handleUpdateProfile={handleUpdateProfile}
        />
      )}
    </div>
  );
};

export default App;
