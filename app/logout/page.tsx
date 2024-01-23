// @ts-nocheck
// ** MUI Imports
import { parse } from "cookie";
import Cookies from "js-cookie";

// Component function should be outside the getServerSideProps function
const LogoutPage = () => {
  // Remove the token cookie
  Cookies.remove("baziAdm", { path: "/" });

  // Redirect to the login page
  window.location.href = "/login";

  // Return null or an empty string to satisfy Next.js requirements
  return null;
}

LogoutPage.getInitialProps = async (context) => {
  // Parse the cookies from the request headers
  const cookies = parse(context.req.headers.cookie || "");

  // Get the "token" cookie value
  const token = cookies.baziAdm;

  // Check if "token" cookie exists and is not an empty string or undefined
  if (token && token !== "undefined" && token !== "") {
    // Remove the token cookie
    context.res.setHeader(
      "Set-Cookie",
      `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    );

    // Redirect to the login page
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        token: null,
      },
    };
  }
}
