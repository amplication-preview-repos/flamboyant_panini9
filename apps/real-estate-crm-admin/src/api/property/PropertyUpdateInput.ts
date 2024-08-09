import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  listedDate?: Date | null;
  price?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
