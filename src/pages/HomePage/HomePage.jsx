import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Your manager of contacts</PageTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        dolores. Voluptate doloribus maiores porro molestiae similique illum
        atque! Enim aut repellat laboriosam neque. Fugiat aperiam est accusamus,
        fuga error debitis!
      </p>
    </div>
  );
}
