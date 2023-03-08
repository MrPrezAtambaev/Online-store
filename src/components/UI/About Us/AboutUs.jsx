import React from "react";
import "./AboutUs.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

const AboutUs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="about-us">
          <h2 className="moreAbout">More about Premium Headphones</h2>
          <p className="about">
            With Sennheiser headphones, headsets and soundbars, you can enjoy
            your favorite music in the best sound quality no matter where you
            are. Whether you're on the road or at home, out playing sports or
            relaxing on the couch – our wide range of versatile headphone models
            means you can listen to perfect sound, whenever, wherever. Discover
            the unique designs and cutting-edge technology of Sennheiser
            headphones below.
          </p>
        </div>
        <div className="accordion">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ background: "#000", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
              >
                Unbeatable range of HeadPhones and Headsets
              </Typography>
              <Typography sx={{ color: "text.secondary", textAlign: "left" }}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                <Box component="div">
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Sennheiser offers a huge variety of shapes, sizes and models
                    of headphones so that you can find the perfect one for you:
                    whether on-ear, over-ear or in-ear:
                  </Box>
                </Box>
                <Box component="div">
                  <Box component="ul">
                    <Box component="li" sx={{ marginBottom: "20px" }}>
                      On-Ear Headphones have a headband that sits on the head,
                      with padded earcups. Their comfortable fit means they are
                      easy to put on and take off – great for DJs using
                      headphones for long periods of time, but equally suited to
                      your commute to work or around the house. On-ear
                      headphones are also lightweight and often come in a
                      foldable design, which makes them ideal for traveling.
                    </Box>
                    <Box component="li" sx={{ marginBottom: "20px" }}>
                      Over-Ear Headphones look very similar to on-ear
                      headphones, but the headphone earcups completely enclose
                      the ear. With a snug but comfortable fit, over-ear
                      headphones are perfectly designed to transfer sound
                      clearly and crisply between headphones and ears. This
                      makes Over-Ear Headphones particularly suitable for
                      audiophiles and for professional use in recording studios.
                      Because over-ears are a little heavier and bulkier than
                      on-ear headphones, many music lovers use them at home to
                      enjoy first-class sound while watching TV or listening to
                      music.
                    </Box>
                    <Box component="li">
                      In-Ear Headphones, also known as earphones, consist of two
                      small ear buds, which are ergonomically designed to fit
                      neatly into the ear canal. In-Ear Headphones are small and
                      light, easy to carry around in a pocket, which makes them
                      perfect for travel. As they sit snug in the ear without
                      fear of slipping out, they are perfect for workouts and
                      sports.
                    </Box>
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ background: "#000", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
              >
                Over-Ear Headphones: Open or Closed?
              </Typography>
              <Typography sx={{ color: "text.secondary", textAlign: "left" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                <Box component="div">
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Over-ear headphones are even more customizable to your
                    tastes, as they come in three different types: open, closed
                    and half-open headphones.
                  </Box>
                  <Box
                    component="p"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Open headphones
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Open headphones deliver high and natural sound fidelity,
                    with hardly any distortion from feedback or reverberation.
                    However, they do not so effectively block out sound, which
                    means that while listening to music on open headphones, you
                    may hear ambient noise, and the outside world can hear the
                    music from your headphones. This makes them best suited for
                    quieter environments like at-home and in-studio mixing.
                  </Box>
                  <Box
                    component="p"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Closed headphones
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Closed headphones are sealed, which means they better
                    isolate the sound from your surroundings. Hardly any music
                    can be heard outside and ambient noise is (almost)
                    imperceptible to the ear with closed headphones. However,
                    the closed casing can cause more reverberation, which can
                    slightly distort the sound. These headphones are ideal for
                    use at the office or in the gym, or in the recording rooms
                    of music studios, but if you are an audiophile and fanatical
                    about sound, closed headphones may not be for you.
                  </Box>
                  <Box
                    component="p"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Half-open headphones
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Half-open headphones are the middle ground between open and
                    closed headphones. That means that they offer:
                  </Box>
                  <Box component="ul" sx={{ fontSize: "18px" }}>
                    <Box component="li" sx={{ marginBottom: "20px" }}>
                      Better noise isolation than open headphones
                    </Box>
                    <Box component="li" sx={{ marginBottom: "20px" }}>
                      Better sound quality than closed headphones
                    </Box>
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    However, in a side-by-side comparison, half-open headphones
                    perform less well overall in both areas than simply open or
                    closed headphones. Half-open headphones are for this reason
                    less widely sold than other kinds of over-ear headphones.
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ background: "#000", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, textAlign: "left" }}
              >
                State-of-the-art Headphone technology
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                <Box component="div">
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Sennheiser headphones incorporate cutting edge technology to
                    give you an excellent sound experience anytime, anywhere.
                    Below we explain what each term means in connection with
                    headphone technology and the concept behind it.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    Bluetooth
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Bluetooth headphones come in all shapes and sizes - both
                    over-ear and in-ear, or as a headset. The headphones receive
                    the music from your device via Bluetooth. Sennheiser
                    headphones are equipped with the latest Bluetooth
                    technology, ensuring stable connection without draining your
                    battery. Many models of Bluetooth Headphone are wireless ,
                    making them convenient for use while traveling and giving
                    you plenty of freedom to move. Bluetooth headphones can also
                    come with a cable running between left and right headphones,
                    which are also great for listening to music while working
                    out, running or playing sports, with a clip to attach to
                    your clothes. This type of Bluetooth headphones may also
                    feature quick-action buttons for playing, pausing and
                    skipping tracks on the go.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    True Wireless Headphones
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    True Wireless headphones, as the name suggests, are totally
                    wire-free and work via state-of-the-art Bluetooth
                    technology. With wireless Bluetooth headphones , you are
                    free to move without the restriction of a cable, for a more
                    comfortable listening experience and still with top quality
                    Sennheiser sound. True Wireless headphones are controlled
                    via voice assistant or the intuitive touchpad on the outside
                    of the headphones. Depending on the model, you can also
                    customize the settings on your True Wireless Headphones
                    using the Smart Control App, for unique sound that is
                    tailored to you.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    Noise-Canceling Headphones
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Noise-canceling headphones prevent outside noise by getting
                    in by generating artificial “anti-noise” to suppress ambient
                    sound. Microphones on the outside of the headphones pick up
                    the ambient noise and transmit it as electrical voltages.
                    Inside the headphones, these voltages are added to the
                    desired audio with an inverted frequency. This neutralizes
                    the acoustically penetrating and electrically added sound
                    components, to ensure your music keeps playing clearly with
                    no external noise getting in. Noise-Canceling Headphone
                    technology works particularly well with low-frequency sounds
                    such as the drone of aircraft engines. This makes this kind
                    of headphones ideal for use while traveling.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    Headsets
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Many Sennheiser models feature integrated microphones. This
                    way, they can function as both headphones and headset in
                    one. When listening to music on Sennheiser headphones, you
                    can easily take calls or participate in meetings while on
                    the move. Our headsets offer pleasant and distortion-free
                    sound and are comfortable to wear throughout even the
                    longest conference calls.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    Linear HD
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Sennheiser HD headphones contain highly sophisticated linear
                    HD drivers. These convert sound to ensure that low-frequency
                    bass is reproduced without distortion. All our HD headphones
                    are also equipped with Sennheiser's ActiveGard™. This
                    technology protects your ears from sudden volume peaks
                    without interrupting the audio.
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    Transducer Technology
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Sennheiser believes in the one-driver principle. Based on
                    this, we developed our 7 mm TrueResponse transducer which
                    can be found in various forms throughout our professional
                    and consumer-focused in-ear ranges. Like tiny loudspeakers,
                    the transducers convert electrical signals into soundwaves
                    you can hear.
                  </Box>
                  <Box component="p" sx={{ fontSize: "18px" }}>
                    Discover our range of top-quality headphones at Sennheiser
                    now.
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
