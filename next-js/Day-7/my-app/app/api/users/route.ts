import { NextResponse } from 'next/server';

// let lastResponse: any = null;

export async function GET() {
  const timestamp = new Date().toISOString();
  const users = [
    { id: 1, name: 'Slice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

 

  return NextResponse.json({

    users,
  });
}
