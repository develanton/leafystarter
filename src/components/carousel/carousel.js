import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';
import './carousel.css'
 
class Carousel extends Component {
  
  

  render() {
    let sliderBox={
      width: "74%",
      textAlign: "right",
      color: "black",
      marginLeft:40,


    };

    let autoShow={
      autoSliding:{interval:"3s"},
      circular: "true",
      duration: "0.5s"
    };
        let data = [
            {
                des: "Dragon Trees, Socotra",
                imgSrc: "https://cdn.thecoolist.com/wp-content/uploads/2016/05/Beautiful-Socotra-Dragon-Tree.jpg"
            },
            {
                des: "Silk Cotton Trees of Ta Prohm, Cambodia",
                imgSrc: "https://i.pinimg.com/564x/d7/52/6f/d7526f28941793a5e43cb5b83203556f.jpg"
            },
            {
                des: "Tule Tree of Oaxaca, Mexico",
                imgSrc: "https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDtrCtiXdXbDjLgfs7cKFzXLTA4VLfHIuEunsRHXHZZenAjazJc1lwzFbgdAxGPaoi0IyK-8_jF-HUK208U3WMa5znCVoAJFJk19eSXJHTZMf41I6QDeQEwUTBJYfd7DXabt7NGryb1dRY-N5HJF5DGJWwkqWJT1pFEpbWqyU0giVQ/"
            },
            {
                des: "General Sherman of Sequoia National Park",
                imgSrc: "https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_ca101_nationalparks_sequoiakingsnationalparks_rf_673066812_1280x640.jpg"
            },
            {
                des: "Baobab Tree, Madagascar",
                imgSrc: "http://www.gardenbuildingsdirect.co.uk/blog/wp-content/uploads/16.jpg"
            },
            {
                des: "Almond Tree",
                imgSrc: "https://cdn3.volusion.com/sawpx.xfgjc/v/vspfiles/photos/018-7-AHALLHARDY-2.jpg?1472376618"
            },  
            
        ];
        
        return <CarouselSlider  sliderBoxStyle={sliderBox} slideItems = {data}  manner={autoShow} buttonSetting={{placeOn:"middle-inside"}} />;
    }
}

export default Carousel