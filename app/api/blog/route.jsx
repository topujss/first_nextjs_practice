import { NextResponse } from 'next/server';

// send a get request
// export async function GET(request) {
//   const { searchParams } = new URL(request.url);

//   const data = Object.fromEntries(searchParams.entries());

//   return NextResponse.json(data);
// }

// send a post request
export async function POST(request) {
  const data = await request.json();

  return NextResponse.json(data);
}

// // send a put request
// export async function PUT() {
//   const data = await request.json();
//   return NextResponse.json(data);
// }

// // send a patch request
// export async function PATCH() {
//   const data = await request.json();
//   return NextResponse.json(data);
// }
