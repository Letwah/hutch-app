import React from "react";
import "./about/about.css";

const About = () => {
  return (
    <>
      <section
        className="aboutBackground"
        style={
          {
            //   backgroundImage: `url("./assets/images/illustration/large/insights/Insights_2021_Back_Cover_artwork_only_no_titles_Hutch.jpg")`,
          }
        }
      >
        <div className="about">
          <div className="bioPic">
            <img src="../assets/images/By-Hutch-Portrait.jpeg"></img>
          </div>
          <div className="aboutDetails">
            <div>
              <h2>ABOUT </h2>
            </div>
            <div>
              <p>
                Hi, I am James Hutch. I am an artist and illustrator living in
                Suffolk. I have a distinct style that blends the world of line
                and colour. My have enjoyed working on projects in the realms of
                science, lifestyle, environment, and social well-being through
                my practice. Collaborating with like minded people on
                illustration projects is my jam, so please don't hesitate to
                reach out with any inquiries.
              </p>
            </div>
            <div>
              <button>GET IN TOUCH</button>
            </div>
          </div>
        </div>
        <div className="bioCV">
          <div>
            <h2>Bio</h2>
            Hutch studied BA Fine Art at Central St Martins, London from
            2000-2004. He now lives in Woodbridge, Suffolk with his wife
            (Photographic artist + Visual Designer Colette Smith) and son.
            Painting outside within the landscape was Hutch’s staple diet for
            many years. The Suffolk skies and woodlands near his home have
            propagated this. One hallmark of his oil paintings has been the
            staccato, obsessive brushwork that seeks to describe plane and
            contour in nature. Over time his practice has permeated many
            subjects and media. At the core Hutch is an innovative draughtsman.
            As a medium, line, transcends genre; it is timeless, classical, yet
            also contemporary, visceral and hugely adaptable. Regardless of
            technological advancements and trends, artfully drawn line will
            always be valued as a tool that can deftly communicate an exciting
            piece of research, a product, a brand identity or a story that needs
            telling. The ‘Fine Artist’ in him is seemingly allowed to morph and
            reinvent style and rationales for making, whilst the ‘Illustrator’
            consistently brings together neatly coordinated images, on brief and
            on schedule.
          </div>

          <div>
            <h2>Exhibitions</h2>
            Previous exhibitions Artist in residence placement at Helmingham
            Hall Gardens in Suffolk.{" "}
            <div>
              Had solo exhibitions at
              <ul>
                <li>Vortex Jazz Bar Gallery - Stoke Newington, London</li>
                <li>The Truman Brewery Gallery - Brick Lane, London</li>
                <li>The JLV Gallery - Cambridge Heath Road, London</li>
                <li>North House Gallery - Manningtree, Essex</li>
              </ul>
              As well as many group shows in London, Norwich, Ipswich,
              Aldeburgh, Manningtree and in Tuscany, Italy.
            </div>
            <div>
              {" "}
              Illustration clients have included Suffolk Mind charity, Essex
              University, Architect Oliver Houchell, Obsidian Wine among others.
            </div>
          </div>
          <div className="social">
          <h2>Social</h2>
          <p>Illustration instagram  </p>
          <p>Art instagram  </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
//pages are for routes
//imr + sfc
