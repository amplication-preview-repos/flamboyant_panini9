import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  listedDate?: Date | null;
  price?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
