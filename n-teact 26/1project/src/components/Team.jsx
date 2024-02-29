const TeamSection = () => {
  return (
        <main className="team container">
               <div className="team-content">
                    <h1> YOUR EXPECTATION DESERVE THE BEST </h1>
                     <p> Our Company providing you best IT support services 
                     in fast present future projects conncet with ATTPL.</p>

                     <div className="Team-btn">
                        <button className="btn-1"> Connect Us </button>
                        <button className="btn-2"> Category </button>
                     </div>

                    <div className="Serv">
                        <p>Also Services On </p>

                        <div className="brand-icons" >
                        <img src="/public/images/aws.png" alt="logo" />
                        <img className="ja" src="/public/images/azure.png" alt="logo" />
                        </div>
                    </div>

              </div>
              <div className="team-img">
                <img src="/public/images/team.png" alt="teamm" />
              </div>
         </main>
  );
};

export default TeamSection;
