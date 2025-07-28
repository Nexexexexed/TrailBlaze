import { useGetProfileQuery } from "../../entities/users/api/userApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../../entities/users/model/usersSlice";

const Profile = () => {
  const { data, isLoading, isError } = useGetProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Загрузка профиля...</div>;
  if (isError) return <div>Ошибка при получении профиля</div>;

  return (
    <div>
      <h2>Профиль</h2>
      <p>Почта: {data?.email}</p>
    </div>
  );
};

export default Profile;
