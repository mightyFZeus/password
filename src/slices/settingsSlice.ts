import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { settingsData } from '@/data/data';

interface TogglePayload {
  ide: number;
  value: boolean;
}

const initialState: {
  settings: {
    text: string;
    value: boolean;
    id: number;
  }[];
} = {
  settings: settingsData,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<TogglePayload>) {
      // Find the index in the settings array where the id matches the payload id
      const index = state.settings.findIndex(
        (setting) => setting.id === action.payload.ide,
      );

      // Check if the index is found
      if (index !== -1) {
        // Toggle the value using the found index
        state.settings[index].value = !state.settings[index].value;
      }
    },
  },
});

export const { setValue } = settingsSlice.actions;
export default settingsSlice.reducer;
