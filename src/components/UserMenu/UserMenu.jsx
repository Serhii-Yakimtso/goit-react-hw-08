import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(reponse => {
        toast.success('Success logout');
      })
      .catch(error => {
        toast.error('Error logout. Please, try again');
      });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.userName}>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
