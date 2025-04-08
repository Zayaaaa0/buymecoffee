// import { getUsers, createUser } from "@/app/back-end-user/user";
// import { UserType } from "@/util/type";

// export async function GET() {
//   const users = await getUsers();
//   return new Response(JSON.stringify({ data: users }), { status: 200 });
// }

// export async function POST(req: Request): Promise<Response> {
//   const body: { username: string; password: string; email: string } =
//     await req.json();
//   console.log({ body });

//   const users: UserType[] = await getUsers();
//   const foundUser = users.find((user) => user.username === body.username);

//   if (foundUser) {
//     return new Response(JSON.stringify({ error: "User already exists" }), {
//       status: 409,
//     });
//   }

//   const newUser: UserType = {
//     username: body.username,
//     password: body.password,
//     email: body.email,
//   };

//   await createUser(newUser);

//   const updatedUsers = await getUsers();

//   return new Response(JSON.stringify({ data: updatedUsers }), {
//     status: 201,
//   });
// }
import { runQuery } from "@/util/server/quaryService";
import { NextResponse } from "next/server";

// GET
export async function GET(): Promise<NextResponse> {
  try {
    const getUser = `SELECT * FROM "User";`;
    const users = await runQuery(getUser);

    if (users.length === 0) {
      return new NextResponse(JSON.stringify({ error: "No users found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ users }), { status: 200 });
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}

// POST
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { username, email, password } = body; // ✅ ЗӨВ

    const insertUser = `
      INSERT INTO "User" (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await runQuery(insertUser, [username, email, password]);

    return new NextResponse(JSON.stringify({ user: result[0] }), {
      status: 201,
    });
  } catch (err) {
    console.error("Error inserting user:", err);
    return new NextResponse(
      JSON.stringify({ error: "Failed to insert user" }),
      { status: 500 }
    );
  }
}
