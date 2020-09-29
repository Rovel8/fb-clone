import React from "react";
import classes from './Widgets.module.css';

export const Widgets: React.FC<{}> = () => {

    return (
        <iframe name="f22dbf6edc3e434" width="340px" height="1000px" data-testid="fb:page Facebook Social Plugin"
                title="fb:page Facebook Social Plugin" frameBorder="0" allowFullScreen={true}
                scrolling="no" allow="encrypted-media"
                src="https://www.facebook.com/v8.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df26f5769aecc004%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fffb398229a554%26relation%3Dparent.parent&amp;container_width=340&amp;height=1000&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=340"
                style={{border: "none", visibility: 'visible', width: 340, height: 1000}} className={classes.Widget}/>
    );
}