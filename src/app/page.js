import { Box, Head } from "./component";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-15 bg-white flex justify-between items-center p-10">
        <div>
          <Head title="Simple Blog" />
        </div>
        <div className="flex gap-5">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <div className=" w-full h-40 bg-gray-50 flex justify-center items-center flex-col gap-5">
        <div className="text-2xl font-bold text-center">
          Welcome to Simple Blog
        </div>
        <h1 className="text-center">
          Discover insightful articles about web development , programming , and
          technology , Clean design meets quality content.
        </h1>
      </div>
      <section>
        <h1 className="w-full h-15 font-bold text-2xl flex justify-center items-center">
          Latest Posts
        </h1>

        <div className="flex gap-6 justify-center items-center flex-wrap">
          <Box
            image="logo.jpg"
            date="2012.8.25"
            title="Champions League"
            info="Manchester United Football Club, commonly referred to as Man United (often stylised as Man Utd) or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. They compete in the Premier League, "
          />
          <Box
            image="logo1.png"
            date="2013.3.15"
            title="Premier League"
            info="founded as Newton Heath LYR Football Club in 1878, but changed their name to Manchester United in 1902. After a spell playing in Clayton, Manchester, the club moved to their current stadium, Old Trafford, in 1910."
          />
          <Box
            image="logo2.png"
            date="2015.5.21"
            title="Europa League"
            info="Domestically, Manchester United have won a joint-record twenty top-flight league titles, thirteen FA Cups, six League Cups and a record twenty-one FA Community Shields. Additionally, in international football, they have won the"
          />
          <Box
            image="logo3.png"
            date="2011.7.5"
            title="Champions League"
            info="European Cup/UEFA Champions League three times, and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each.[7][8] Appointed as manager in"
          />
          <Box
            image="logo3.png"
            date="2011.7.5"
            title="Champions League"
            info="European Cup/UEFA Champions League three times, and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each.[7][8] Appointed as manager in"
          />{" "}
          <Box
            image="logo3.png"
            date="2011.7.5"
            title="Champions League"
            info="European Cup/UEFA Champions League three times, and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each.[7][8] Appointed as manager in"
          />
          <Box
            image="logo1.png"
            date="2013.3.15"
            title="Premier League"
            info="founded as Newton Heath LYR Football Club in 1878, but changed their name to Manchester United in 1902. After a spell playing in Clayton, Manchester, the club moved to their current stadium, Old Trafford, in 1910."
          />
          <Box
            image="logo.jpg"
            date="2012.8.25"
            title="Champions League"
            info="Manchester United Football Club, commonly referred to as Man United (often stylised as Man Utd) or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. They compete in the Premier League, "
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
