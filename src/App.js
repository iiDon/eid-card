import { useState } from "react";
import Header from "./Header";
import Homepage from "./pages/Homepage";
function App() {
  const [isArabic, setIsArabic] = useState(false);

  const arabic = {
    lang: "English",
    title:
      "جامعة سليمان الراجحي تهنئكــم بعيد الأضحـــى المبـــارك وكل عام أنتم بخير",
    design: "لتصميم بطاثتك أدخل اسمك هنا",
    placeholder: "الاسم",
    button: "← اختيار بطاقة",
    dir: "rtl",
  };

  const english = {
    lang: "العربية",
    title: "Eid Mubarak May Allah accept from us and you the good deeds",
    design: "To Desgin you card enter your name",
    placeholder: "Your Name",
    button: "Choose Card ←",
    dir: "ltr",
  };
  return (
    <div>
      <Header
        arDir={arabic.dir}
        enDir={english.dir}
        ar={arabic.lang}
        en={english.lang}
        isArabic={isArabic}
        setIsArabic={setIsArabic}
      />
      <Homepage arabic={arabic} english={english} isArabic={isArabic} />
    </div>
  );
}

export default App;
