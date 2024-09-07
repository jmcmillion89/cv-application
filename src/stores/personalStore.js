import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const PersonalStore = create(
  persist(
    (set) => ({
      fullname: "John Doe",
      phone: "1-222-333-4444",
      email: "johndoe@email.com",
      location: "New York, NY",
      setFullName: (fullname) => set({ fullname: fullname }),
      setPhone: (phone) => set({ phone: phone }),
      setEmail: (email) => set({ email: email }),
      setLocation: (location) => set({ location: location }),
    }),

    {
      name: "personal-info-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
