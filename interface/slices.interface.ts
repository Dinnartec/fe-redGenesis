export interface UserLogin {
  ok: boolean;
  uid: string;
  name: string;
  token: string;
  email?: string;
}

export interface semester {
  code: string;
  label: string;
  value: string;
  id: number;
}
export interface UserInformation {
  uid: string;
  names: string;
  surname?: string;
  email: string;
  carrerUniversity?: string;
  semester?: semester;
  city?: string;
  postalCode?: string;
  deparment?: string;
  phone?: string;
}
