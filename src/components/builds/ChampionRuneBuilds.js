import React from 'react';
import Swiper from 'swiper';

import ChampionRuneCard from './ChampionRuneCard';

class ChampionRuneBuilds extends React.Component {
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
                            <ChampionRuneCard />
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

export default ChampionRuneBuilds;