import { useRef, useState } from "react";

export function useMouseDrag() {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - ourRef.current.offsetLeft); // Mouse'un başlangıç pozisyonunu kaydet
    setScrollLeft(ourRef.current.scrollLeft); // Kaydırma pozisyonunu kaydet
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return; // Eğer fare basılı değilse kaydırma işlemi yapılmaz
    const x = e.pageX - ourRef.current.offsetLeft;
    const walk = (x - startX) * 1; // 2 ile çarparak kaydırma hızını arttırabilirsiniz
    ourRef.current.scrollLeft = scrollLeft - walk;
  };

  // Fareyi bıraktığında işlemi sonlandır
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Fareyi pencere dışına taşırsak da işlemi sonlandırmak için:
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    ourRef,
  };
}
