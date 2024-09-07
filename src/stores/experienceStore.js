import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

// Utility function to format date as mm/dd/yyyy
const formatDate = (date) => {
  const d = new Date(date);
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

export const ExperienceStore = create(
  persist(
    (set) => ({
      experienceList: [],
      addExperience: ({ company, position, startDate, endDate }) => {
        const newExperience = {
          id: uuidv4(),
          company: company,
          position: position,
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        };
        set((state) => ({
          experienceList: [...state.experienceList, newExperience],
        }));
      },
      deleteExperience: (id) => {
        set((state) => ({
          experienceList: state.experienceList.filter(
            (experience) => experience.id !== id
          ),
        }));
      },
    }),
    {
      name: "experience-info-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
