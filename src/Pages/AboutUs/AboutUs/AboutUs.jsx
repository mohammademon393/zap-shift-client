import React from 'react';

const AboutUs = () => {
    return (
      <div className="bg-base-100 p-6 mt-5 mb-8 rounded-2xl">
        <h1 className="font-extrabold text-5xl">About Us</h1>
        <p className="text-[#606060] text-[16px] my-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>

        {/* all tabs */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-5">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Story"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p className="text-[#606060] text-[16px]">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time. <br /> <br />

              "Every parcel tells a story, and we’re honored to be the ones who
              deliver the ending. From the nervous excitement of a hand-wrapped
              birthday surprise to the critical documents that seal a
              life-changing deal, we treat every package as if it were our own.
              It’s more than just moving boxes; it’s about moving lives forward.
              We don't just bridge distances; we bring people closer, one
              delivery at a time." <br /> <br />

              "In a world that never stops moving, we’ve built a network that
              keeps pace. By blending cutting-edge technology with a passion for
              precision, we’ve turned the 'impossible deadline' into a standard
              delivery. Our fleet is powered by data and driven by dedication,
              ensuring that no matter how far the journey or how complex the
              route, your peace of mind is always part of the package. We’re not
              just delivering for today; we’re delivering for what’s next."{" "}
              <br /> <br />
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Mission"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p className="text-[#606060] text-[16px]">
              "At Zap-Shift, our mission is to redefine the pace of modern
              logistics. We believe that distance shouldn't be a barrier to
              progress. By leveraging smart technology and a seamless delivery
              network, we aim to make every 'shift' instant and effortless. Our
              goal is simple: to provide a lightning-fast delivery experience
              that empowers businesses and connects people across the country."{" "}
              <br /> <br />

              "Our mission at Zap-Shift is to bring absolute peace of mind to
              every doorstep. We are committed to building a logistics ecosystem
              where transparency isn't just a feature—it's a promise. Through
              real-time precision and dedicated care, we strive to be the most
              reliable link in your supply chain, ensuring that every parcel is
              handled with the respect and urgency it deserves." <br /> <br />

              "Zap-Shift exists to simplify the way the world moves. Our mission
              is to democratize high-end logistics for everyone—from small
              entrepreneurs to everyday senders. We are constantly innovating
              our routes and technology to provide an accessible, stress-free
              delivery service that scales with your needs. At Zap-Shift, we
              aren't just moving packages; we are moving your dreams forward."{" "}
              <br /> <br />
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Success"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p className="text-[#606060] text-[16px]">
              "Success for us is measured by the success of those we serve. We
              started by helping a handful of local artisans get their products
              to customers across the city. Today, Zap-Shift powers the
              logistics for hundreds of small businesses, turning 'shipping
              struggles' into 'growth opportunities.' Seeing a local brand go
              national through our platform is our greatest achievement." <br />{" "}
              <br />

              "Numbers tell part of the story, but impact tells the rest. With
              over 99% of our deliveries arriving exactly when promised, our
              success lies in the thousands of 'thank yous' we receive daily.
              Whether it was a last-minute medical supply or a forgotten
              anniversary gift, Zap-Shift’s success is built on the moments
              where we didn't just deliver a box—we saved the day." <br />{" "}
              <br />

              "From a simple idea to a high-speed logistics engine, Zap-Shift’s
              journey is a testament to constant evolution. Our success comes
              from never being satisfied with 'fast enough.' By integrating
              real-time tracking and intelligent routing, we’ve transformed the
              delivery landscape. For us, success isn't a final destination;
              it’s the drive to keep shifting the boundaries of what’s possible
              in logistics." <br /> <br />
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Team & Others"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p className="text-[#606060] text-[16px]">
              "We believe in moving more than just parcels; we move communities.
              Success at Zap-Shift means creating opportunities for our delivery
              partners and supporting the local neighborhoods we navigate every
              day. By providing flexible earning opportunities and supporting
              local commerce, we ensure that as Zap-Shift grows, everyone around
              us moves forward too. It’s not just a business model; it’s a
              commitment to shared progress." <br /> <br />

              "Zap-Shift is powered by a diverse team of dreamers, engineers,
              and logistics experts. We don’t just write code or manage fleets;
              we solve problems. From our developers optimizing every line of
              the MERN stack for speed, to our support team ensuring no query
              goes unanswered, we are united by one goal: making logistics look
              easy. Our team is the heartbeat of every 'Zap' and every 'Shift'
              we make." <br /> <br />

             "What makes Zap-Shift different? It’s our culture of 'Rapid Innovation.' We encourage our team to think outside the box—literally and figuratively. We value curiosity, transparency, and the drive to improve by 1% every single day. Whether we are brainstorming in the office or on the road with our riders, we maintain a culture where every voice is heard and every package is a priority."{" "}
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;