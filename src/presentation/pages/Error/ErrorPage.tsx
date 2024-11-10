import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Not Found</h1>
      <button onClick={() => navigate("/", { replace: true })}>
        Back to Home
      </button>
    </>
  );
};

export default ErrorPage;
