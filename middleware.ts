import { NextRequest } from "next/server";
import { updateSession } from "./src/app/api/utils";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}