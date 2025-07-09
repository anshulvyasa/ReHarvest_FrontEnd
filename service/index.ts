import axios from "axios";
import { SignUpFormType } from "@/components/authentication/signup/signup-crendentials";

export const SignUpFormService = async (formdata: SignUpFormType) => {
  const response = await axios.post(`/api/sign-up`, formdata);
  return response.data;
};

export const verifyTokenEmail = async (token: string) => {
  const response = await axios.post(
    "/api/verify-token",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
