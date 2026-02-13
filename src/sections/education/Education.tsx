import Divider from "@/components/divider/Divider";

export default function Education() {
  return (
    <section className={"section"}>
      <div className="grid-container">
        <div className="col-span-4">
          <h2 className="text-black">Education</h2>
        </div>
        <div className="col-span-8">
          <div className="col-8-grid">
            <div className="col-span-2">
              <p className="text-black">2023—Now</p>
            </div>
            <div className="col-span-6">
              <div>
                <p className="text-black">
                  Rajiv Gandhi Institute of Technology, Kottayam
                </p>
                <p>B.Tech in Computer Science and Engineering</p>
                <p>
                  Served as the president of Computer Science Association
                  Conducted and Coordinated several events Won several prices
                  for Web development, Quizes and Idea Pitching competitions
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-black">2014—Now</p>
            </div>
            <div className="col-span-6">
              <div>
                <p className="text-black">De Paul Public School, Kottayam</p>
                <p>General Subjects</p>
                <p>
                  Led the design and implementation of interfaces, 0-1 design
                  systems, landing pages and promotional material for various YC
                  companies such as Brightdrop, Rally.video, Webapp.io, Datafold
                  and VC firms such as Saltwater.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-black">2018—2022</p>
            </div>
            <div className="col-span-6">
              <div>
                <p className="text-black">De Paul Public School, Kottayam</p>
                <p>General Subjects</p>
                <p>
                  Led the design and implementation of interfaces, 0-1 design
                  systems, landing pages and promotional material for various YC
                  companies such as Brightdrop, Rally.video, Webapp.io, Datafold
                  and VC firms such as Saltwater.
                </p>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </section>
  );
}
