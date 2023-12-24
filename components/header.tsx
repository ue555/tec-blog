import Link from "next/link";

const Header = () => {
  return (
    <div className="neutral-50 border-t border-neutral-200 flex flex-row bg-gray">
      <div className="normal-case text-3xl py-7 pl-5 w-1/3 text-white">
        Tec Blog --Dev1
      </div>
      <div className="flex items-center justify-center w-1/3">
        <img
          src="/assets/blog/authors/kouji.jpg"
          className="w-12 h-12 rounded-full mr-4"
          alt="Ueki Kouji"
        />
      </div>
    </div>
  );
};

export default Header;
