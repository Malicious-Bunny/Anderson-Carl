import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile, unlink } from 'fs/promises';
import { isAuthenticated, unauthorized } from '~/lib/auth';

const UPLOAD_DIR = path.join(process.cwd(), 'public/images/uploads');

// Ensure directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// GET all images
export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const files = fs.readdirSync(UPLOAD_DIR);
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map((file) => `/images/uploads/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json({ images: [] });
  }
}

// POST upload images
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
    }

    const uploadedPaths: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = new Uint8Array(bytes);

      // Generate unique filename
      const ext = path.extname(file.name);
      const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`;
      const filepath = path.join(UPLOAD_DIR, filename);

      await writeFile(filepath, buffer);
      uploadedPaths.push(`/images/uploads/${filename}`);
    }

    return NextResponse.json({ success: true, paths: uploadedPaths });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload images' }, { status: 500 });
  }
}

// DELETE image
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const { imagePath } = await request.json();

    // Extract filename from path like "/images/uploads/filename.jpg"
    const filename = String(imagePath).split('/').pop() || '';
    const filepath = path.join(UPLOAD_DIR, filename);

    // Refuse anything resolving outside the upload directory.
    if (path.dirname(path.resolve(filepath)) !== path.resolve(UPLOAD_DIR)) {
      return NextResponse.json({ error: 'Invalid image path' }, { status: 400 });
    }

    if (!fs.existsSync(filepath)) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    await unlink(filepath);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}
