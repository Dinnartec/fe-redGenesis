import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const sesion = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Verificar si la ruta es "/auth/login"
  const url = req.nextUrl.clone();
  const isLoginPage = url.pathname === "/auth/login";

  if (sesion) {
    // Si hay una sesión activa y el usuario intenta acceder a "/auth/login"
    if (isLoginPage) {
      // Redirigir a "/myDocuments"
      return NextResponse.redirect(new URL("/myDocuments", req.url));
    }
  } else {
    // Si no hay sesión activa y el usuario no está en "/auth/login"
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    url.search = `p=${requestedPage}`;
    if (!isLoginPage) {
      // Redirigir a "/auth/login"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/login", "/myDocuments"],
};