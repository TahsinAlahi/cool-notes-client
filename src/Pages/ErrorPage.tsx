import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">404: Page not found</h1>
        <p className="text-xl font-medium">
          The page you are looking for does not exist
        </p>
        <Link
          to="/"
          className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
