// app/test-blob/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import { useState, useEffect, ChangeEvent } from 'react';

// Type definitions
interface BlobObject {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

interface BlobListResponse {
  blobs: BlobObject[];
}

interface BlobUploadResponse {
  url: string;
  pathname: string;
  contentType: string;
  contentDisposition: string;
}

export default function BlobTestPage() {
  const [blobs, setBlobs] = useState<BlobObject[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch all blobs on component mount
  useEffect(() => {
    fetchBlobs();
  }, []);

  const fetchBlobs = async (): Promise<void> => {
    try {
      const response = await fetch('/api/blob');
      const data: BlobListResponse = await response.json();
      setBlobs(data.blobs || []);
    } catch (error) {
      console.error('Error fetching blobs:', error);
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    setUploading(true);
    
    try {
      const response = await fetch(
        `/api/blob?filename=${encodeURIComponent(selectedFile.name)}`,
        {
          method: 'POST',
          body: selectedFile,
        }
      );

      if (response.ok) {
        const blob: BlobUploadResponse = await response.json();
        console.log('Upload successful:', blob);
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
        // Refresh blob list
        await fetchBlobs();
      } else {
        const errorData = await response.json();
        alert(`Upload failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (url: string): Promise<void> => {
    if (!confirm('Are you sure you want to delete this blob?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blob?url=${encodeURIComponent(url)}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchBlobs(); // Refresh list
      } else {
        const errorData = await response.json();
        alert(`Delete failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Delete failed');
    }
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileName = (pathname: string): string => {
    return pathname.split('/').pop() || 'Unknown file';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Vercel Blob Storage Test</h1>
      
      {/* Upload Section */}
      <Navbar currentPage="test-blob" />
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload File</h2>
        <div className="space-y-4">
          <input
            id="fileInput"
            type="file"
            onChange={handleFileSelect}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {selectedFile && (
            <div className="text-sm text-gray-600">
              Selected: {selectedFile.name} ({formatBytes(selectedFile.size)})
            </div>
          )}
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {uploading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      </div>

      {/* Blobs List Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Stored Blobs ({blobs.length})</h2>
          <button
            onClick={fetchBlobs}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
          >
            Refresh
          </button>
        </div>

        {blobs.length === 0 ? (
          <p className="text-gray-500 italic">No blobs found. Upload some files to get started!</p>
        ) : (
          <div className="space-y-3">
            {blobs.map((blob: BlobObject, index: number) => (
              <div key={blob.url || index} className="border rounded-lg p-4 flex justify-between items-start">
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">
                    {getFileName(blob.pathname)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Size: {formatBytes(blob.size)} | 
                    Uploaded: {new Date(blob.uploadedAt).toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 break-all">
                    URL: {blob.url}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <a
                    href={blob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-1 px-2 rounded transition-colors"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDelete(blob.url)}
                    className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-2 rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}