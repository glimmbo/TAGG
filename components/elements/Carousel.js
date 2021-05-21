import { Carousel } from "react-responsive-carousel"

const ClipCarousel = ({ clipListMobile }) => {
  console.log("CAROUSEL CLIPS", clipListMobile)
  // TODO modify carousel: frame, buttons,
  return (
    <Carousel>
      {clipListMobile?.map((clip) => {
        // load a vimeo player with no controls, an overlay effect
        return <div>{clip}</div>
      })}
    </Carousel>
  )
}

export default ClipCarousel

// ==========================
// export const lazyLoaded = () => {
//   class LazyLoadedCarousel extends Component<
//     {},
//     { slides: Props["children"] },
//   > {
//     constructor(props) {
//       super(props)

//       this.state = {
//         slides: null,
//       }

//       this.loadSlides = this.loadSlides.bind(this)
//     }

//     loadSlides() {
//       this.setState({
//         slides: baseChildren.props.children,
//       })
//     }

//     render() {
//       return (
//         <div>
//           <p>Click the button to asynchronously load the slides</p>
//           <button
//             onClick={this.loadSlides}
//             style={{ padding: "10px", margin: "10px", fontSize: "1.5em" }}
//           >
//             Load slides
//           </button>
//           <Carousel>{this.state.slides}</Carousel>
//         </div>
//       )
//     }
//   }

//   return <LazyLoadedCarousel />
// }

// const YoutubeSlide = ({
//   url,
//   isSelected,
// }: {
//   url: string,
//   isSelected?: boolean,
// }) => <ReactPlayer width="100%" url={url} playing={isSelected} />

// export const youtubeAutoplayWithCustomThumbs = () => {
//   const customRenderItem = (item, props) => (
//     <item.type {...item.props} {...props} />
//   )

//   const getVideoThumb = (videoId) =>
//     `https://img.youtube.com/vi/${videoId}/default.jpg`

//   const getVideoId = (url) =>
//     url.substr("https://www.youtube.com/embed/".length, url.length)

//   const customRenderThumb = (children) =>
//     children.map((item) => {
//       const videoId = getVideoId(item.props.url)
//       return <img src={getVideoThumb(videoId)} />
//     })

//   return (
//     <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
//       <YoutubeSlide
//         key="youtube-1"
//         url="https://www.youtube.com/embed/AVn-Yjr7kDc"
//       />
//       <YoutubeSlide
//         key="youtube-2"
//         url="https://www.youtube.com/embed/mOdmi9SVeWY"
//       />
//       <YoutubeSlide
//         key="youtube-3"
//         url="https://www.youtube.com/embed/n0F6hSpxaFc"
//       />
//       <YoutubeSlide
//         key="youtube-4"
//         url="https://www.youtube.com/embed/0uGETVnkujA"
//       />
//     </Carousel>
//   )
// }
