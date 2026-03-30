import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    let emails: string[] = [];
    try {
      const data = await fs.readFile(WAITLIST_FILE, 'utf-8');
      emails = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    if (!emails.includes(email)) {
      emails.push(email);
      await fs.writeFile(WAITLIST_FILE, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }
}
