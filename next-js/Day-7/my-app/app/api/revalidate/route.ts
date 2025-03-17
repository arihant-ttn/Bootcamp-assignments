import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('users'); 
  return NextResponse.json({ message: "Users data revalidated" });
}
