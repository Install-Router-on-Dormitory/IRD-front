import create from "zustand";

interface DeleteModeType {
  mode: boolean;
  setToggle: () => void;
}

const useDeleteMode = create<DeleteModeType>((set) => ({
  mode: false,
  setToggle: () => set((state) => ({ mode: !state.mode })),
}));

export default useDeleteMode;
