import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listedDate?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
