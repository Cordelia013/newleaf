function Footer() {
  return (
    <>
      <div className="w-full h-[66px] justify-between items-end inline-flex mt-20  ">
        <div className="justify-start items-start gap-[140px] flex">
          <div className="w-[291px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch">
              <span className="text-[#e4e4e4] text-sm font-normal font-['Montserrat'] uppercase">
                By{" "}
              </span>
              <span className="text-[#e4e4e4] text-sm font-semibold font-['Montserrat'] uppercase">
                Agency Cordélia Virgile
              </span>
            </div>
            <div className="self-stretch text-[#e4e4e4] text-sm font-normal font-['Montserrat']">
              Copyright © 2024 - projet fictif - Agency Cordélia Virgile.
            </div>
          </div>
          <div className="text-[#e4e4e4] text-sm font-normal font-['Montserrat']">
            Image Pinterest
          </div>
          <div className="w-[129px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-[#e4e4e4] text-sm font-normal font-['Montserrat']">
              Artiste SCH
            </div>
            <div className="self-stretch text-[#e4e4e4] text-sm font-normal font-['Montserrat']">
              Orchestre de Paris
            </div>
          </div>
          <div className="ml-96">
            <img src="/assets/NewLeaf-logo.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
