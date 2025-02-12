import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { websiteSchema } from "@/schema/schema";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing website ID" },
        { status: 400 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch (jsonError) {
      console.error("Invalid JSON:", jsonError);
      return NextResponse.json(
        { success: false, message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const data = websiteSchema.partial().safeParse(body);
    if (!data.success) {
      return NextResponse.json(
        { success: false, error: data.error.errors },
        { status: 400 }
      );
    }

    const updatedWebsite = await prisma.website.update({
      where: {
        id: Number(id),
      },
      data: data.data,
    });

    return NextResponse.json(
      {
        success: true,
        website: updatedWebsite,
        message: "Updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating website:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
