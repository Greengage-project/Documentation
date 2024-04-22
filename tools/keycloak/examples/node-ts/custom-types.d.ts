import { Request } from "express";

interface RequestKeycloak extends Request {
  kauth?: {
    grant?: {
      access_token?: {
        token?: string;
        content?: any;
      };
    };
  };
  logout?: () => void;
}
