export type userPayload = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUserUpdateFormInput = {
  name: string;
  email: string;
  username: string;
  profile: {
    age: string;
    bio: string;
  };
};

export type TUserPhotUpdateFormInput = {
  photoUrl: string;
};

export type TUserChangePasswordFormInput = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
