import { getUser } from "@/app/back-end-user/user";

export async function GET() {
  const user = getUser();
  return new Response(JSON.stringify({ message: "jo" }));
}
export async function POST(req: Request) {
  const body = await req.json();
  console.log({ body });
  return new Response("jo");
}
