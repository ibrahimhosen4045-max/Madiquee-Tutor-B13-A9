import Banner from "@/component/home/Banner";
import Section1 from "@/component/home/Section1";
import Section2 from "@/component/home/Section2";
import Section3 from "@/component/home/Section3";
import Testimonials from "@/component/home/Testimonials";
import WhyChooseUs from "@/component/home/WhyChooseUs";


export default function Home() {
  
  return (
    <div className="">
      <Banner/>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Testimonials></Testimonials>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
