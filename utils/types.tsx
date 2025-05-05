export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
