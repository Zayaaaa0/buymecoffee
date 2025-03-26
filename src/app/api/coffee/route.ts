export async function GET() {
  return new Response();
}
export async function POST(req: Request) {
  const body = await req.json();
  console.log({ body });
  return new Response("hi");
}
