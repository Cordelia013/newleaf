import Button from "../../components/button";
import { dataDates1, dataDates2 } from "./data/dataDates";

function DateSection() {
  return (
    <>
      <section className="">
        <div className="container mx-auto px-4 ">
          <div className="">
            <div className="aspect-2 mx-auto mb-8 xs:hidden sm:block absolute -z-10 right-0">
              <img
                className="w-full h-auto"
                src="/assets/images/img2.jpg"
                alt="bg-artiste-hero"
              />
            </div>

            <h2 className="font-Desirable-Sans xs:text-5xl sm:text-7xl md:text-9xl lg:text-[15rem] -tracking-tighter pt-52 mb-20 ">
              dates
            </h2>

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 ">
              {/* firstSection date */}
              <div>
                <table className="w-[70%]">
                  <thead className="text-left">
                    <tr>
                      <th className="w-12 pb-6">N°</th>
                      <th className="w-50 pb-6">Ville/Pays</th>
                      <th className="text-right pb-6"> Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDates1.map((date, index) => (
                      <tr key={index}>
                        <td className="">{date.numero}</td>
                        <td className="">{date.ville}</td>
                        <td className="text-right">{date.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* seconde section date  */}
              <div className="xs:mt-8 sm:mt-12 ">
                <table className="w-[70%] relative right-32">
                  {dataDates2.map((date, index) => (
                    <tr key={index}>
                      <td className="w-12">{date.numero}</td>
                      <td className="w-60">{date.ville}</td>
                      <td className="text-right">{date.date}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

            <div className="mt-8">
              <Button />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DateSection;
