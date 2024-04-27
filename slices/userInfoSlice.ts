import { UserInformation } from "@/interface/slices.interface";
import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserInformation = {
  uid: "",
  names: "",
  surname: "",
  email: "",
  carrerUniversity: "",
  semester: { code: "", label: "", value: "", id: 0 },
  city: "",
  postalCode: "",
  deparment: "",
  phone: "",
};

interface UpdateUserPayload extends Partial<UserInformation> {}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInformation>) => {
      return action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<UpdateUserPayload>) => {
      return { ...state, ...action.payload };
    },
    resetUserInfo: () => {
      return { ...initialState };
    },
  },
});

export const { setUserInfo, updateUserInfo, resetUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state: RootState) => state.userInfo;
export default userInfoSlice.reducer;