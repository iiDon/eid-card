import Logo from "./assets/sru-logo.png";

const Header = ({ar, en, isArabic, setIsArabic, arDir, enDir}) => {
  return (
    <header className="border-b  flex items-center w-screen justify-between p-3 px-8" dir={isArabic? arDir : enDir}>
      <img className="w-44" src={Logo} alt="No Image" />

      <div onClick={() => setIsArabic(!isArabic)} className="cursor-pointer">
        <h2  className="border rounded px-4 py-1 text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">{isArabic? ar : en}</h2>
      </div>
    </header>
  );
};

export default Header;
