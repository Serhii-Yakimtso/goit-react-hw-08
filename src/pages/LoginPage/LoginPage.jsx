// публічний маршрут для логіна існуючого користувача,
// на якому рендериться компонент сторінки
// LoginPage з формою LoginForm.
import PageTitle from '../../components/PageTitle/PageTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}
