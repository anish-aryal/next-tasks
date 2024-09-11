
import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/app/utils/auth';

const users = [
  { id: 1, username: 'username', password: 'password' }
];

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const { username, password } = body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = generateToken({ id: user.id, username: user.username });
    return NextResponse.json({ success: true, token });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}