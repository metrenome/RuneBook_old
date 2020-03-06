import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import { useParams } from 'react-router-dom';

import ChampionCard from '../ChampionCard';

class ChampionBase extends React.Component {
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      freeMode: {
        freemode: 'true',
      }
    });
  }
  
  render() {
    return (
      <div className="swiper-container">
         <div className="swiper-wrapper">
           <div className="swiper-slide">
             Slide 1
             {/* <ChampionCard key={champion.key}
                name={champion.name} 
                id={champion.key}
                image={champion.image}
              /> */}
            </div>
           <div className="swiper-slide">Slide 2</div>
           <div className="swiper-slide">Slide 3</div>
           <div className="swiper-slide">Slide 4</div>
           <div className="swiper-slide">Slide 5</div>
           <div className="swiper-slide">Slide 6</div>
           <div className="swiper-slide">Slide 7</div>
           <div className="swiper-slide">Slide 8</div>
           <div className="swiper-slide">Slide 9</div>
           <div className="swiper-slide">Slide 10</div>
         </div>
         <div className="swiper-pagination"></div>
         <div className="swiper-button-prev"></div>
         <div className="swiper-button-next"></div>
       </div>
    );
  }
}
// const ChampionBase = () => {
//     let { id } = useParams();
//     var SwiperContainer = new Swiper('.swiper-container', {
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       }
//     });

//     console.log(`ChampionBase sees ${id}`);
//     return (
//       <div class="swiper-container">
//         <div class="swiper-wrapper">
//           <div class="swiper-slide">Slide 1</div>
//           <div class="swiper-slide">Slide 2</div>
//           <div class="swiper-slide">Slide 3</div>
//           <div class="swiper-slide">Slide 4</div>
//           <div class="swiper-slide">Slide 5</div>
//           <div class="swiper-slide">Slide 6</div>
//           <div class="swiper-slide">Slide 7</div>
//           <div class="swiper-slide">Slide 8</div>
//           <div class="swiper-slide">Slide 9</div>
//           <div class="swiper-slide">Slide 10</div>
//         </div>
//         <div class="swiper-pagination"></div>
//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>
//       </div>
//     );
// };

export default ChampionBase;