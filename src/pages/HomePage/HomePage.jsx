// можна розмістити інформацію про додаток
// чи його розробника.Рендерить компонент HomePage.
// import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        dolores. Voluptate doloribus maiores porro molestiae similique illum
        atque! Enim aut repellat laboriosam neque. Fugiat aperiam est accusamus,
        fuga error debitis!
      </p>
    </div>
  );
}
