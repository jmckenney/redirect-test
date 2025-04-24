'use client';

export default function ZoomusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Zoom SSO Test</h1>
        <form action="/api/zoomus" method="POST" className="space-y-4">
          <div>
            <label htmlFor="secret" className="block text-sm font-medium text-gray-700">
              Secret
            </label>
            <input
              type="text"
              id="secret"
              name="secret"
              defaultValue="foo"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Test Zoom SSO
          </button>
        </form>
      </div>
    </main>
  );
} 