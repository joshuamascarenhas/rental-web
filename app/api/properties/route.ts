// app/api/properties/route.ts
import { NextResponse } from "next/server";
import { firestore } from "../../../lib/firebaseAdmin"; // adjust the path if needed

export async function GET(request: Request) {
  try {
    const snapshot = await firestore.collection("properties").get();
    const properties = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
