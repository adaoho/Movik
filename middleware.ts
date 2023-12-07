// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export const middleware = (req: NextRequest) => {
//   // Middleware ini akan terjadi logicnya hanya satu
//   if (req.url.includes("/api")) {
//     const token = cookies().get("token");

//     // Read Payload, dengan jwttoken
//     if (!token) {
//       // Bikin token kalau nggak kebaca
//       return NextResponse.json({
//         statusCode: 401,
//         error: "Unauthorized",
//       });
//     }
//   }
//   // Kalau ada middleware chaining
//   return NextResponse.next({
//     // headers: req
//   });
// };
