'use client';

export default function VidaHealthCoachPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Vida Health Coach SSO Test</h1>
        <form action="/api/vidahealthcoach" method="POST" className="space-y-4">
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
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Test Vida Health Coach SSO
          </button>
        </form>
      </div>
    </main>
  );
} 