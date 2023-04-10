import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { RangeContainer, RangeSlider, RangeThumb, RangeValue } from './styles';
import { roundByStep } from '../../utils/roundByStep';

interface RangeInputProps {
  step?: number;
  onChange: (value: number) => void;
  value: number;
}

function RangeInput({
  step = 0.5,
  onChange,
  value,
}: RangeInputProps): JSX.Element {
  const [mouseDown, setMouseDown] = useState(false);
  const sliderRef = useRef<HTMLSpanElement>(null);
  const rangeValueRef = useRef<HTMLDivElement>(null);
  const rangeThumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      rangeValueRef.current != null &&
      rangeThumbRef.current != null &&
      !mouseDown
    ) {
      rangeValueRef.current.style.width = `${value}%`;
      rangeThumbRef.current.style.left = `calc(${value}% - 8px)`;
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseDown]);

  function handleMouseUp(e: globalThis.MouseEvent): void {
    const slider = sliderRef.current;
    if (mouseDown && slider != null) {
      const { x, width } = slider.getBoundingClientRect();
      const value = Math.min(
        Math.max(roundByStep(((e.clientX - x) * 100) / width, step), 0),
        100,
      );

      onChange(value);
    }

    setMouseDown(false);
    document.body.style.userSelect = 'auto';
  }

  function handleMouseDown(e: MouseEvent): void {
    if (sliderRef.current != null && e.button === 0) {
      const slider = sliderRef.current;

      setMouseDown(true);

      const { x, width } = slider.getBoundingClientRect();
      const value = Math.min(
        Math.max(roundByStep(((e.clientX - x) * 100) / width, step), 0),
        100,
      );

      if (rangeValueRef.current != null && rangeThumbRef.current != null) {
        rangeValueRef.current.style.width = `${value}%`;
        rangeThumbRef.current.style.left = `calc(${value}% - 8px)`;
      }
    }
  }

  function handleMouseMove(e: globalThis.MouseEvent): void {
    if (mouseDown && sliderRef.current != null && e.button === 0) {
      document.body.style.userSelect = 'none';
      const slider = sliderRef.current;

      const { x, width } = slider.getBoundingClientRect();
      const value = Math.min(
        Math.max(roundByStep(((e.clientX - x) * 100) / width, step), 0),
        100,
      );

      if (rangeValueRef.current != null && rangeThumbRef.current != null) {
        rangeValueRef.current.style.width = `${value}%`;
        rangeThumbRef.current.style.left = `calc(${value}% - 8px)`;
      }
    }
  }

  return (
    <RangeContainer data-mouse-down={mouseDown} onMouseDown={handleMouseDown}>
      <RangeSlider className="range__slider" ref={sliderRef} />
      <RangeValue ref={rangeValueRef} className="range__value" />
      <RangeThumb
        className="range__thumb"
        ref={rangeThumbRef}
        onMouseDown={handleMouseDown}
      />
    </RangeContainer>
  );
}

export default RangeInput;
