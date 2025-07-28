import { useLoginMutation } from "../../entities/users/api/userApi";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { accessToken } = await login({ email, password }).unwrap();
      localStorage.setItem("accessToken", accessToken);
      // можно сразу получить профиль, либо редиректнуть
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit" disabled={isLoading}>
        Войти
      </button>
    </form>
  );
};
