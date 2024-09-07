import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const formatDate = (date) => {
  const d = new Date(date);
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

export const EducationStore = create(
  persist(
    (set) => ({
      educationList: [],
      addEducation: ({ school, degree, graduation, gpa }) => {
        const newEducation = {
          id: uuidv4(),
          school: school,
          degree: degree,
          graduation: formatDate(graduation),
          gpa: gpa,
        };
        set((state) => ({
          educationList: [...state.educationList, newEducation],
        }));
      },
      deleteEducation: (id) => {
        set((state) => ({
          educationList: state.educationList.filter(
            (education) => education.id !== id
          ),
        }));
      },
    }),
    {
      name: "education-info-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
