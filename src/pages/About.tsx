import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      <div>
        <h1 className="title">About tasks</h1>
      </div>
      <div className="about-wrapper">
        <div className="about-card">
          <h2>Module-1</h2>
          <div className="texts">
            <span>
              Module-1 da bajarishimiz kerak bo`lgan vazifa `Eslint` `Prettier`
              `tsconfig` file`larni sozlashimiz kerak va Api fetch qilib Search
              and Pagination qo`shishimiz kerak edi Module-1`ning tasklari `
              <Link to={'/'} className="linkpage">
                Home
              </Link>
              ` da bajarilgan Api uchun `https://swapi.dev/api/people/` dan
              foydalanilgan.
            </span>
          </div>
        </div>
        <div className="about-card">
          <h2>Module-2</h2>
          <div className="texts">
            <span>
              Module-2 da bajarishimiz kerak bo`lgan vazifa React Routing ni
              sozlash bo`lgan. Routing ga misol qilib `Navbar`ni yoki
              `Module-4`pagedagi bitta userga bosilganda dynamic routingni misol
              qilishimiz mumkin buning uchun `react-router-dom`dan foydalanildi.
            </span>
          </div>
        </div>
        <div className="about-card">
          <h2>Module-3</h2>
          <div className="texts">
            <span>
              Module-3 da bajarishimiz kerak bo`lgan vazifa Context`dan
              foydalanish. Bu vazifa uchun `Navbar`dan `
              <Link to={'/todo'} className="linkpage">
                Todo
              </Link>{' '}
              ` pagega o`tish kerak ushbu Todo ni yasashda Contextdan
              foydalanilgan.
            </span>
          </div>
        </div>
        <div className="about-card">
          <h2>Module-4</h2>
          <div className="texts">
            <span>
              Module-4 da bajarishimiz kerak bo`lgan vazifa loyihaga
              Redux-toolkit qo`shish, buning uchun `Navbar`dan `
              <Link to={'/user'} className="linkpage">
                Module-4
              </Link>
              ` pagega o`tish kerak. Bu datalar
              `https://jsonplaceholder.typicode.com/users` manashu API`dan
              kelayabdi, va ya`na loading ham qo`shish kerak bo`lgan buning
              uchun `react-loader-spinner` manashu kutubxonadan foydalanilgan.
            </span>
          </div>
        </div>
        <div className="about-card">
          <h2>Module-5</h2>
          <div className="texts">
            <span>
              Module-5 da bajarishimiz kerak bo`lgan vazifa loyihani Next.js ga
              ulash ya`ni routing`ni next/link ga o`zgartirish bo`lgan.
            </span>
          </div>
        </div>
        <div className="about-card">
          <h2>Module-6</h2>
          <div className="texts">
            <span>
              Module-6 da bajarishimiz kerak bo`lgan vazifa `React-hook-form` va
              `Yup` dan foydalanib `Form` yasash. Ushbu task`ni ko`rish uchun
              Navbar`dan `
              <Link to={'/form'} className="linkpage">
                Form
              </Link>
              ` pagega o`tish kerak.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
