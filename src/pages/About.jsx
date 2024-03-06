import { useDispatch } from "react-redux";
import "./about/about.css";
import { urlArtInstagram, urlIllustrationInsta } from "../config";
import { setPage } from "../features/appSlice";
import { CONTACT } from "../store/types";

const About = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flier">
        <img src="./assets/images/icons/palletjimmySmall.svg"></img>
      </div>
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
              <h2>About</h2>
            </div>
            <div>
              <p>
                Hi, I am James Hutch. I am an artist and illustrator living in
                Suffolk. I have a distinct style that blends the world of line
                and colour. My have enjoyed working on projects in the realms of
                science, lifestyle, environment, and social well-being through
                my practice. Collaborating with like minded people on
                illustration projects is my speciality, so please don&apos;t
                hesitate to reach out with any inquiries.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(setPage(CONTACT));
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
        <div className="bioCV">
          <div>
            <h2>Bio</h2>
            Hutch studied BA Fine Art at Central St Martins, London from
            2000-2004. He now lives in Woodbridge, Suffolk with his wife
            (Photographic artist + Visual Designer Colette Smith) and son.
            Painting outside within the landscape was Hutch&apos;s staple diet
            for many years. The Suffolk skies and woodlands near his home have
            propagated this. One hallmark of his oil paintings has been the
            staccato, obsessive brushwork that seeks to describe plane and
            contour in nature. Over time his practice has permeated many
            subjects and media. At the core Hutch is an innovative draughtsman.
            As a medium, line, transcends genre; it is timeless, classical, yet
            also contemporary, visceral and hugely adaptable. Regardless of
            technological advancements and trends, artfully drawn line will
            always be valued as a tool that can deftly communicate an exciting
            piece of research, a product, a brand identity or a story that needs
            telling. The &apos;Fine Artist&apos; in him is seemingly allowed to
            morph and reinvent style and rationales for making, whilst the
            &apos;Illustrator&apos; consistently brings together neatly
            coordinated images, on brief and on schedule.
          </div>

          <div>
            <h2>Exhibitions</h2>
            Previous exhibitions have included solo exhibitions at
            <div>
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
            <div className="links">
              <a href={urlIllustrationInsta}>
                Illustration Instagram
                <span>&#8680;</span>
              </a>
            </div>
            <div className="links">
              <a href={urlArtInstagram}>
                Art Instagram <span>&#8680;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
//pages are for routes
//imr + sfc
