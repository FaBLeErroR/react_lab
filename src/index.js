import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const listProf= [
  {prof: "Web-разработчиков",
  discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
 пользователям было быстро и удобно.`},
  {prof: "Гейм-девелоперов",
  discr: `Создают видеоигры. Погружают всех нас в новые миры.`},
  {prof: "AI/ML-cпециалистов",
  discr: `Используют в деле искусственный интеллект и машинное
 обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {prof: "Аналитиков данных",
  discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
 бизнесу получать еще больше денег.`},
  {prof: "Мобильных разработчиков",
  discr: `Создают мобильные приложения, которые найдут тебя везде.
 Умещают на маленьких экранах максимальный функционал.`}
]

const actualProf= [
  {prof: "Цифровая трансформация экономики",
  discr: `Будешь помогать бизнесменам зарабатывать быстрее и проще, 
  переводя долгие и нудные процессы в цифру, избавляя от бумажной 
  волокиты и лишних расходов
  Благодаря специалистам по цифровой трансформации мы уже не носим с 
  собой пачки бонусных карт, записываемся к врачу онлайн и без очередей, 
  и даже примеряем одежду в дополненной реальности.`},
  {prof: "Математические и цифровые методы в экономике и аналитике",
  discr: `Применение математических моделей, алгоритмов и искусственного 
  интеллекта в сквозных видах профессиональной деятельности: 
  прогнозировании и планировании, обработке структурированных и 
  неструктурированных массивов данных любого типа и обучении моделей 
  искусственного интеллекта для задач создания баз знаний и предиктивной 
  аналитики в промышленности и экономике.`},
  {prof: "Программирование робототехнических систем",
  discr: `Программа ориентирована на подготовку широких, 
  универсальных специалистов в области информационных технологий с 
  профильными интересами: в программировании робототехнических систем, 
  с навыками работы с микроконтроллерами; 3D-моделировании и макетировании 
  элементов робототехнических систем (РТС); проектировании, тестировании 
  и отладки программ для РТС; алгоритмических, математических и 
  физических основах функционирования РТС.`}
]

const listImg = ["logo_dvfu.png", "logo_imct.png"]

function Button(props) {
  return (
    <input className="button" type="button" value={props.val}/>
  )
}

function Content() {
  const [isClicked, setClicked] = React.useState(true);
  const click = () => {
    setClicked(!isClicked);
  }
  return(
    <>
      <Head listImg={listImg} />
      <Tagline/>
      <button className="button" onClick={click}>{isClicked ? "Хочу учиться!" : "Не хочу учиться:("}</button>
      {/*<Button val={isClicked ? "Хочу учиться!" : "Не хочу учиться"} onClick={click} />*/}
      <Professions title={isClicked ? "Обучаем на:" : "Список профессий:"} list={isClicked ? listProf : actualProf} />
    </>
  )
}

root.render(<Content />)

function Head(props) {
  const logoImages =listImg.map((img, index) =>
    <img key={index} src={img} />
  );
  return(
  <div className="head">
    {logoImages}
  </div>
  )
}
 
function Tagline() {
  return(
  <h1>
    Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
  </h1>
  )
}

function Professions (props) {
  
  const listProf = props.list.map((item, index) =>
  <ProfItem key={index} prof={item.prof} discr={item.discr} />
  
  );
  return (
  <div className="prof">
    <h2>{props.title} </h2>
    <ul>
      {listProf}  
    </ul>
  </div>
  
  )
}

function ProfItem(props) {

  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return(
  <li onClick={press}>
    <span className="left">{props.prof}</span>
    <span className="right">{isOpen ? "×" : "+"}</span>
    {isOpen &&
      <p> {props.discr}</p>
    }
  </li>
  ) 
}
