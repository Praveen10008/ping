import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { LoginApi } from "../../api/auth";
import { IUserLogin } from "../../interface/user";


const loginSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password id required")
  });
};




export default function Login() {
  const userLogin = (values: IUserLogin) => {
    LoginApi(values).then((res) => {
      console.log(res);
    })
  };



  return (
    <article className="pros prose-xl">
      <div className="lg:w-3/4 mx-auto w-11/12">
        <div className="flex flex-wrap flex-col justify-center min-h-screen items-center ">
          <div className="sm:shadow-xl sm:p-32 text-center rounded">
            <Link to="/" className="text-5xl font-gilroy-bold cursor-pointer text-secondary">
              Ping
            </Link>
            <h3>Welcome Back</h3>
            <h4>Please enter your login details.</h4>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => userLogin(values)}  validationSchema={loginSchema}>
              {({ errors, touched }) => (
                <Form className="flex flex-wrap flex-col justify-center items-center mb-3">
                  <Field className="w-5/6 sm:w-full shadow p-2 m-3 border text-gray-700 focus:outline-none focus:shadow-secondary-light" type="text" name="email" placeholder="Email" />
                  {touched.email && errors.email && <div className=" text-red-600 text-left">{errors.email}</div>}
                  <Field className=" w-5/6 sm:w-full shadow p-2 m-3 border text-gray-700 focus:outline-none focus:shadow-secondary-light" type="password" name="password" placeholder="Password" />
                  {touched.password && errors.password && <div className=" text-red-600">{errors.password}</div>}
                  <Link to="/forgot-password" className="text-secondary text-lg py-2">
                    Forgot Password?
                  </Link>
                  <button type="submit" className="bg-secondary text-white py-2 px-8 rounded-sm m-3">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <div className="sm:flex">
              <h6 className="px-2">Don't have an account?</h6>
              <Link to="/signup" className="text-secondary">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
