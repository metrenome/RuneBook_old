import React from 'react';
import { Button } from '@material-ui/core/';
import Swiper from 'swiper';

class ChampionItemBuilds extends React.Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoHeight: true,
            slidesPerView: 3,
            spaceBetween: 100,
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
        const { selectedChampion } = this.props;

        return (
            <div className='swiper-root'>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                            Slide 1
                        </div>
                        <div className='swiper-slide'>Slide 2</div>
                        <div className='swiper-slide'>Slide 3</div>
                        <div className='swiper-slide'>Slide 4</div>
                        <div className='swiper-slide'>Slide 5</div>
                        <div className='swiper-slide'>Slide 6</div>
                    </div>
                    <div className='swiper-pagination'></div>
                    {/* <Button className='swiper-button-prev'>←</Button>
                    <Button className='swiper-button-next'>→</Button>  */}
                </div>
            </div>
        );
    }
}

export default ChampionItemBuilds;

// import React from 'react';
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
// import { connect } from 'react-redux';

// import history from '../../history';
// import ChampionCard from '../ChampionCard';

// class ChampionBase extends React.Component {
//   componentDidMount() {
//     new Swiper('.swiper-container', {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       freeMode: {
//         freemode: 'true',
//       }
//     });
//   }
  
//   render() {
//     if (!this.props.selectedChampion){
//       history.push('/');
//       return <div>You will be sent back to the home page.</div>
//     } else {
//       const { selectedChampion } = this.props;

//       return (
//         <div className='swiper-container'>
//           <div className='swiper-wrapper'>
//             <div className='swiper-slide'>
//               <ChampionCard key={selectedChampion.key}
//                   name={selectedChampion.name} 
//                   id={selectedChampion.key}
//                   image={selectedChampion.banner}
//                 />
//               </div>
//             <div className='swiper-slide'>Slide 2</div>
//             <div className='swiper-slide'>Slide 3</div>
//             <div className='swiper-slide'>Slide 4</div>
//             <div className='swiper-slide'>Slide 5</div>
//             <div className='swiper-slide'>Slide 6</div>
//             <div className='swiper-slide'>Slide 7</div>
//             <div className='swiper-slide'>Slide 8</div>
//             <div className='swiper-slide'>Slide 9</div>
//             <div className='swiper-slide'>Slide 10</div>
//           </div>
//           <div className='swiper-pagination'></div>
//           <div className='swiper-button-prev'></div>
//           <div className='swiper-button-next'></div>
//         </div>
//       );
//     }
//   }
// }
// // const ChampionBase = () => {
// //     let { id } = useParams();
// //     var SwiperContainer = new Swiper('.swiper-container', {
// //       navigation: {
// //         nextEl: '.swiper-button-next',
// //         prevEl: '.swiper-button-prev',
// //       },
// //       pagination: {
// //         el: '.swiper-pagination',
// //       }
// //     });

// //     console.log(`ChampionBase sees ${id}`);
// //     return (
// //       <div class='swiper-container'>
// //         <div class='swiper-wrapper'>
// //           <div class='swiper-slide'>Slide 1</div>
// //           <div class='swiper-slide'>Slide 2</div>
// //           <div class='swiper-slide'>Slide 3</div>
// //           <div class='swiper-slide'>Slide 4</div>
// //           <div class='swiper-slide'>Slide 5</div>
// //           <div class='swiper-slide'>Slide 6</div>
// //           <div class='swiper-slide'>Slide 7</div>
// //           <div class='swiper-slide'>Slide 8</div>
// //           <div class='swiper-slide'>Slide 9</div>
// //           <div class='swiper-slide'>Slide 10</div>
// //         </div>
// //         <div class='swiper-pagination'></div>
// //         <div class='swiper-button-prev'></div>
// //         <div class='swiper-button-next'></div>
// //       </div>
// //     );
// // };

// const mapStateToProps = (state) => {
//   return { selectedChampion: state.selectedChampion };
// }

// export default connect(mapStateToProps)(ChampionBase);
