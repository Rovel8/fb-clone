import React from "react";
import classes from './StoryReel.module.css'
import {StoryReelItem} from "./StoryReelItem/StoryReelItem";

export const StoryReel: React.FC<{}> = () => {
    return (
        <div className={classes.StoryReel}>
            <div className={classes.StoryReelItem1}>
                <StoryReelItem image={'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}
                               text={'Bill Murray'}
                               profilePic={'https://upload.wikimedia.org/wikipedia/commons/b/b9/John_Green_2020_%28C6txQ5yn5S8%29.jpg'} />
            </div>
            <div className={classes.StoryReelItem2}>
                <StoryReelItem image={'https://freepbr.com/wp-content/uploads/2016/07/copper-rock1-preview1.png'}
                               text={'Larry Page'}
                               profilePic={'https://gossipgist.com/uploads/27916/larry-page-biography.png'} />
            </div>
            <div className={classes.StoryReelItem3}>
                <StoryReelItem image={'https://media.wired.com/photos/5a593a7ff11e325008172bc2/125:94/w_2393,h_1800,c_limit/pulsar-831502910.jpg'}
                               text={'Mikael Jordan'}
                               profilePic={'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg'} />
            </div>
            <div className={classes.StoryReelItem4}>
                <StoryReelItem image={'https://content.thriveglobal.com/wp-content/uploads/2018/03/Blog_9_Ways_to_Take_Responsiblity_for_Your_Life.jpeg'}
                               text={'Shakira Isabel'}
                               profilePic={'https://zondnews.ru/upload/ps4/2020-05-01/15883387875eac20632b59e1.23987643.jpg'} />
            </div>
            <div className={classes.StoryReelItem5}>
                <StoryReelItem image={'https://i.pinimg.com/736x/31/a6/61/31a6617b12b42b29be92d3ba0df9ab08.jpg'}
                               text={'Henri Kav'}
                               profilePic={'https://www.soyuz.ru/public/uploads/files/2/7223722/20180904200807bc455b53fe.jpg'} />
            </div>
        </div>
    );
}