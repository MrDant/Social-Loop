import { H3Event, EventHandlerRequest } from "h3";
import { jwtUser } from "./jwt";

export async function useAuth(event: H3Event<EventHandlerRequest>) {
  try {
    const token = getHeader(event, "authorization")?.split(" ")[1] ?? null;
    if (!token) {
      throw new Error();
    }
    event.context.user = await jwtUser(token);
    event.context.token = token;
  } catch (err) {
    throw createError({
      statusCode: 403,
      message: "Not authorized",
    });
  }
}
