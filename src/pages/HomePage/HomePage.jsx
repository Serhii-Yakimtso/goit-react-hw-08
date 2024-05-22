import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Your manager of contacts</PageTitle>
      <p>
        Hello. This is a free application where you can store and manage your
        contacts
      </p>
    </div>
  );
}
