import React from 'react';
import { Jumbotron, Thumbnail } from 'react-bootstrap';

import ali from './../../../assets/Ali_Over_Liston.jpg';

import './TributePage.scss';

const TributePage = () => (
  <div className="TributePage">
    <Jumbotron>
      <h1>Mohammad Ali</h1>
      <h3>The Greatest Ever</h3>
      <Thumbnail src={ali} alt="Ali over Liston">
        <p>
          Muhammad Ali after first round knockout of Sonny Liston during World
          Heavyweight Title fight at St. Dominic’s Arena in Lewiston, Maine on
          May 25, 1965.
        </p>
      </Thumbnail>
      <div className="TributePage__row">
        <div className="TributePage__col">
          <h4>Timeline:</h4>
          <ul className="TributePage__copy">
            <li>
              <strong>1942</strong> Born Cassius Clay on January 17, in
              Louisville, Kentucky.
            </li>
            <li>
              <strong>1954</strong> Begins training as a boxer after his bicycle
              is stolen. Over next six years, Clay wins six Kentucky Golden
              Gloves championships, two national Golden Gloves titles, and two
              AAU (Amateur Athletic Union) crowns.
            </li>
            <li>
              <strong>1960</strong> Clay wins light-heavyweight gold medal at
              the Summer Olympics in Rome, beating Poland's Zbigniew
              Pietrzykowski in a 5-0 decision. In October, he wins his first
              professional bout, against Tunney Hunsaker.
            </li>
            <li>
              <strong>1964</strong> On February 25, Clay goes up against favored
              Sonny Liston. In what will become his trademark, Clay begins
              taunting Liston, calling him an "ugly old bear," promising to
              "float like a butterfly, sting like a bee." Clay is credited with
              a knockout and becomes the heavyweight champion of the world after
              Liston fails to come out of his corner for the seventh round. Clay
              coins the phrase "I am the greatest!" -- a phrase for which he
              will forever be known. On February 26, Clay joins Nation of Islam,
              and on March 6, he changes his name to Muhammad Ali.
            </li>
            <li>
              <strong>1966</strong> Citing his religious beliefs, Ali files for
              conscientious objector status and refuses to serve in U.S.
              military, which is involved in the Vietnam War at the time.
            </li>
            <li>
              <strong>1967</strong> The U.S. government denies his status. Ali
              is convicted of draft evasion, sentenced to a maximum five years
              in prison and fined $10,000. The New York boxing association takes
              back his titles and bans him from boxing for three years.
            </li>
            <li>
              <strong>1970</strong> The New York State Supreme Court orders his
              boxing license reinstated.
            </li>
            <li>
              <strong>1971</strong> In March, Ali fights heavyweight champ Joe
              Frazier in Madison Square Garden, but loses after 15 rounds, in a
              unanimous decision.
            </li>
            Later that year, Supreme Court rules in his favor, reversing the
            1967 draft-evasion conviction, saying he should not have been
            drafted in the first place due to his religious beliefs.
            <li>
              <strong>1974</strong> In January, Ali beats Frazier. Later that
              year, he beats George Foreman in the "Rumble in the Jungle," and
              reclaims world heavyweight champion title.
            </li>
            <li>
              <strong>1975</strong> Ali again faces Frazier, beats him in fight
              known as "The Thrilla in Manila."
            </li>
            <li>
              <strong>1978</strong> In Februrary, Ali loses heavyweight title to
              Leon Spinks; regains it six months later by beating Spinks.
            </li>
            <li>
              <strong>1981</strong> Ali loses a unanimous decision to Trevor
              Berbick. In December, he announces his retirement -- at age 39 --
              ending his career with a professional record of 56 wins, 5 losses,
              37 knockouts.
            </li>
            <li>
              <strong>1984</strong> He is diagnosed with Parkinson's disease.
            </li>
            <li>
              <strong>1996</strong> Ali carries the Olympic flame for Summer
              Games in Atlanta, Georgia.
            </li>
            <li>
              <strong>1997</strong> Sports Illustrated names Ali Sportsman of
              the Century.
            </li>
            <li>
              <strong>2005</strong> Ali is awarded the Presidential Medal of
              Freedom, the highest U.S. civilian honor, by then-President George
              W. Bush.
            </li>
            <li>
              <strong>2009</strong> Ali attends the inauguration of President
              Barack Obama.
            </li>
            <li>
              <strong>2016</strong> Dies June 3 in Phoenix, Arizona. He was
              married four times and had nine children.
            </li>
            <li>
              Source:{' '}
              <a
                href="http://www.voanews.com/a/muhammad-ali-timeline-boxing-legend/3361565.html"
                target="_blank"
              >
                VOA News
              </a>
            </li>
          </ul>
          <h5>
            To read more about the incredible life of Muhammad Ali, click{' '}
            <a
              href="https://en.wikipedia.org/wiki/Muhammad_Ali"
              target="_blank"
            >
              here.
            </a>
          </h5>
        </div>
      </div>
    </Jumbotron>
  </div>
);

export default TributePage;
