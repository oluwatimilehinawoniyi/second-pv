import { House } from "lucide-react";
import { Contact, GridLayout } from "../components";
import Navigation from "../components/common/Navigation";

export const metadata = {
  title: "About Oluwatimilehin",
  description: "Hey, I have been in this world for a while, know me!",
};

export default function page() {
  return (
    <GridLayout
      leftBar={
        <div className="hidden h-full w-full flex-col items-center pt-20 lg:flex">
          <Navigation icon={<House size={16} />} title="home" to="/" />
        </div>
      }
      display={
        <div className="pb-4 pt-20">
          <h1 className="mb-4 text-3xl font-bold">Hi there!</h1>
          <p className="mb-8">
            My grandpa always believed I’d do something in science because I was
            a curious kid. I was the one opening up toys to see who was
            “speaking” inside, connecting rotors and batteries, trying to build
            a motor car or helicopter. I always wondered: how does a remote
            control talk to a toy car or a TV? What’s the connection between
            them?
            <br />
            <br />
            As I grew up, my curiosity shifted towards people. I loved talking
            to others, understanding their challenges, and finding ways to help.
            It gave me a sense of purpose, like “everything has a solution;
            you’re just a bit of knowledge away from finding it.” This drew me
            into studying Law, focusing my curiosity on understanding human
            interactions instead of gadgets. University introduced me to people
            from all walks of life, and I happened to have roommates studying
            computer science.
            <br />
            <br />
            While I was deep into Law, I found myself engrossed in the world of
            the Internet of Things (IoT). I was fascinated—how do you instruct
            robots to work in a field? Where do these devices get their orders?
            How do they communicate with each other and with humans? The idea of
            cloud computing blew my mind. Was it the same “cloud” I’d heard of,
            or something entirely different? This curiosity sparked my passion
            for user interfaces and technology.
            <br />
            <br />
            After graduating and completing law school, I knew I wanted to
            dedicate my life to tech. Starting over didn’t scare me—I finally
            felt like I could create and understand what had once been a
            mystery. I taught myself Python and JavaScript and joined the ALX
            Software Engineering 12-month program, where I deepened my skills in
            data structures, algorithms, full-stack development, reverse
            engineering, scripting, C programming, and computer science
            fundamentals.
            <br />
            <br />I have big, hairy and audacious dreams! I want to bring
            technology to education, agriculture, and the military. I believe
            I’m on the right path, and I have a lot to learn and get my hands
            on! You can be the channel for me, and I’d love for you to join me
            on this journey. Let’s connect—drop me a message, and I’ll get back
            to you as soon as I can!
          </p>
          <Contact />
        </div>
      }
    />
  );
}
