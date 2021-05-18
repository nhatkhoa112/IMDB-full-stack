import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export { ProtectedRoute };
