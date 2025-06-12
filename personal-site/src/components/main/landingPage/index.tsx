import "./index.css";
/**
 * LandingPage Component renders the main page of the website
 */
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="imageContainer">
        <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQG4e72i_oCzWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626718869269?e=1755129600&v=beta&t=pYsvPpGevCqCd7O-4kEzAfTfug18xQmksZJR-6KsXa0"
          alt="Marco Gracie"
        />
      </div>
      <div className="paragraphContainer">
        <p>
          Hi, I'm Marco Gracie. A software developer interested in the
          intersection of Human Interaction and computing, along with AI. I hold
          a Bachelors of Science in computer science from Northeastern
          University, and am looking for positions that will challenge me and
          constantly give me opportunities to learn. I'm especially interested
          in positions with a math aspect, because the way math and CS go so
          hand in hand with quantifying and learning from data fascinates me. As
          such, I am taking AI related and data science related courses.
          Additionally, I have recently begun developing an app in my free time,
          and mobile development has surprised me with how much I have enjoyed
          it. I'm hoping to put all these interests and skills to good use,
          working on software at a company with a good culture and learning
          environment.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
