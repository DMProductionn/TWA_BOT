export type TypeUserInitiator = {
  chat_id: number;
  first_name: string;
  last_name: string;
  username: string;
  is_premium: boolean;
};

export type TypeUserForUser = {
  chat_id: number;
  first_name: string;
  last_name: string;
  username: string;
  is_premium: boolean;
}

export interface IDeal {
  id: string;
  user_creator: {
    chat_id: number;
  };
  sum: string;
  status: string;
  created_at: string;
  finished_at: string;
  user_initiator: TypeUserInitiator;
  user_user_for: TypeUserForUser;
}
