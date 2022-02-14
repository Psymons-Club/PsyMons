import React, { Component } from 'react'

export class Gallery extends Component {
    images = [
        {
            id: 1,
            url: "/assets/ValPostPic/RedYellowBG_2.png"
        },
        {
            id: 2,
            url: "/assets/ValPostPic/BlackYellow_14.png"
        },
        {
            id: 3,
            url: "/assets/ValPostPic/PurpleYellowBG_2.png"
        },
        {
            id: 4,
            url: "/assets/ValPostPic/BlueWhite_31.png"
        },
        {
            id: 5,
            url: "/assets/ValPostPic/WhiteYellow_55.png"
        },
        {
            id: 6,
            url: "/assets/ValPostPic/RedYellow_68.png"
        },
        {
            id: 7,
            url: "/assets/ValPostPic/BlueWhiteBG_3.png"
        },
        {
            id: 8,
            url: "/assets/ValPostPic/WhiteYellowBG_2.png"
        },    
    ]

  render() {
    return (
        <div class="font-encode dark-theme border-t border-gray-200" id="gallery">
            <h1 class="title-font sm:text-4xl text-3xl my-4 font-medium text-white font-extrabold lg:text-7xl text-center w-full">Gallery</h1>
            <div class="sm:w-2/3 my-auto mx-auto gallery">
                {this.images.map((image) => (
                    <a href={"#" + image.id}>
                        <img class="gallery-image" src={image.url}/>
                    </a>
                ))}
            </div>
            {this.images.map((image) => (
                <div class="lightbox-target" id={image.id}>
                    <img src={image.url} />
                    <a class="lightbox-close" href="#gallery"></a>
                </div>
            ))}
        </div>
    )
  }
}

export default Gallery