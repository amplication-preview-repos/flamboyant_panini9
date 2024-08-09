import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  interestedIn?: Array<"Option1">;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
