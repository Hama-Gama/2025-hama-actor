
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import VideoSlider from "@/components/Video-Slider";
import About from "@/components/About";
import Info from "@/components/Info";
import Social from "@/components/Social";

export default function Home() {
	
  return (
   <div className="container pr-5 pl-5 bg-[#f2f2f2]">
		<Slider />
		<Info />
		<VideoSlider title="Intro"/>
		<VideoSlider title="Acting Showreel"/>
		<VideoSlider title="Others"/>
		<About />
		<Social />
		<Footer />
	 </div>
  );
}
