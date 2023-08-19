import  mongodb from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Signup } from "@/models/User/page";
export async function POST(request) {
  if (request.method === "POST") {
    try {
      // Connect to MongoDB
      await mongodb();

      const { firstname,lastname, email, password} = await request.json();
      const userExists = await Signup.findOne({ email });
      if (userExists) {
        return new NextResponse(
          JSON.stringify({ error: "Email already exists" }),
          { status: 409, headers: { "Content-Type": "application/json" } }
        );
      } else {
        await Signup.create({ firstname,lastname, email, password });
        return new NextResponse(
          JSON.stringify({ message: "User Registered" }),
          { status: 201, headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      return new NextResponse(
        JSON.stringify({ error: "Unable to insert data" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }
}
