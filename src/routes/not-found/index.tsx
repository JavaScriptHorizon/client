import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6">
      <h1 className="text-7xl font-bold text-primary">404</h1>

      <p className="text-xl text-muted-foreground max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
