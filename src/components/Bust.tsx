import { useState, useEffect, useRef } from 'react';

export const Bust = () => {
  const [xEye, setXEye] = useState('');
  const [yEye, setYEye] = useState('');
  const [xHead, setXHead] = useState(0);
  const [yHead, setYHead] = useState(0);
  const [rotXHead, setRotXHead] = useState(0);
  const [rotYHead, setRotYHead] = useState(0);

  const eyesRef: any = useRef(null);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;

      if (innerWidth >= 1440) {
        setXEye((clientX * 100) / innerWidth + '%');
        setYEye((clientY * 100) / innerHeight + '%');

        setXHead((xHead) => xHead + (clientX - xHead) * 0.15);
        setYHead((yHead) => yHead + (clientY - yHead) * 0.15);
        setRotXHead((xHead / innerWidth) * -2 + 1);
        setRotYHead((yHead / innerHeight) * 2 - 1);
      }
    };
    window.addEventListener('mousemove', update);

    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, [xEye, yEye]);

  const styleHead = {
    transform:
      'rotateX(calc(-15deg * ' +
      rotXHead +
      '))  rotateY(calc(-15deg * ' +
      rotYHead +
      ')) translate(-50%, 0)',
  };

  const styleShadow = {
    boxShadow: `${rotXHead * 50}px ${
      rotYHead * -50
    }px 20px 0px rgba(66, 68, 90, 0.50)`,
  };

  const styleEyes = {
    left: xEye,
    top: yEye,
    transform: `translate(-${xEye}, -${yEye})`,
  };

  return (
    <div className="bust">
      <div style={styleHead} className="head">
        <div style={styleShadow} className="hair" />
        <div className="face">
          <div className="eyebrows left" />
          <div className="eyebrows right" />
          <div className={`eyes left`}>
            <div ref={eyesRef} style={styleEyes} className="ball" />
          </div>
          <div className={`eyes right`}>
            <div ref={eyesRef} style={styleEyes} className="ball" />
          </div>
          <div className="lowerEyelid left" />
          <div className="lowerEyelid right" />
          <div className="nose" />
          <div className="mouth" />
        </div>
        <div className="ears left">
          <div className="line" />
        </div>
        <div className="ears right">
          <div className="line" />
        </div>
        <div className="neck left" />
        <div className="neck right" />
        <div style={styleShadow} className="face shadow" />
        <div style={styleShadow} className="body" />
      </div>
    </div>
  );
};
