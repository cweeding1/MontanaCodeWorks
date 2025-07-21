// app/api/blob/route.ts
import { put, list, del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

// Upload a file to blob storage
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    // Get the file data from the request
    const fileData = await request.arrayBuffer();
    
    if (!fileData || fileData.byteLength === 0) {
      return NextResponse.json({ error: 'No file data received' }, { status: 400 });
    }

    const blob = await put(filename, fileData, {
      access: 'public',
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

// List all blobs
export async function GET() {
  try {
    const { blobs } = await list();
    return NextResponse.json({ blobs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blobs' }, { status: 500 });
  }
}

// Delete a blob
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    await del(url);
    return NextResponse.json({ message: 'Blob deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}