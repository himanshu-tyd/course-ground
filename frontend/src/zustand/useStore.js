import { create } from "zustand";

const useStore = create((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  adminCoures: [],
  setAdminCourse: (newCourse) =>
    set((state) => ({
      adminCoures: Array.isArray(newCourse)
        ? [...state.adminCoures, ...newCourse]
        : [...state.adminCoures, newCourse],
    })),
}));
export default useStore;
