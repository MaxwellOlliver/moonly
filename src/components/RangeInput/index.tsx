import { isMobile } from 'react-device-detect';
import { useEffect, useRef, useState } from 'react';

import { roundByStep } from '@/utils/roundByStep';

import { RangeContainer, RangeSlider, RangeThumb, RangeValue } from './styles';

interface RangeInputProps {
  step?: number;
  onChange?: (value: number) => void;
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
  const rangeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      rangeValueRef.current != null &&
      rangeThumbRef.current != null &&
      !mouseDown
    ) {
      rangeValueRef.current.style.width = `${value}%`;
      rangeThumbRef.current.style.left = `calc(${value}% - 6px)`;
    }
  }, [value]);

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [mouseDown, isMobile]);

  function getRangeValue(e: any): number {
    const slider = sliderRef.current;

    if (slider) {
      const { x, width } = slider.getBoundingClientRect();
      const value = Math.min(
        Math.max(
          roundByStep(
            ((((e as globalThis.MouseEvent).clientX ||
              ((e as TouchEvent).touches[0]
                ? (e as TouchEvent).touches[0].clientX
                : (e as TouchEvent).changedTouches[0].clientX)) -
              x) *
              100) /
              width,
            step,
          ),
          0,
        ),
        100,
      );

      return value;
    }

    return 0;
  }

  function handleMouseUp(e: any): void {
    const slider = sliderRef.current;

    if (mouseDown && slider != null) {
      const value = getRangeValue(e);

      if (onChange) onChange(value);
    }

    setMouseDown(false);
    document.body.classList.remove('no-select');
  }

  function handleMouseDown(e: any): void {
    if (
      sliderRef.current != null &&
      (!Object.hasOwn(e, 'button') || (e as globalThis.MouseEvent).button === 0)
    ) {
      setMouseDown(true);

      const value = getRangeValue(e);

      if (rangeValueRef.current != null && rangeThumbRef.current != null) {
        rangeValueRef.current.style.width = `${value}%`;
        rangeThumbRef.current.style.left = `calc(${value}% - 6px)`;
      }
    }
  }

  function handleMouseMove(e: any): void {
    if (
      mouseDown &&
      sliderRef.current != null &&
      (!Object.hasOwn(e, 'button') || (e as globalThis.MouseEvent).button === 0)
    ) {
      document.body.classList.add('no-select');

      const value = getRangeValue(e);

      if (rangeValueRef.current != null && rangeThumbRef.current != null) {
        rangeValueRef.current.style.width = `${value}%`;
        rangeThumbRef.current.style.left = `calc(${value}% - 6px)`;
      }
    }
  }

  return (
    <RangeContainer
      data-mouse-down={mouseDown}
      data-is-mobile={isMobile}
      onMouseDown={!isMobile ? handleMouseDown : undefined}
      onTouchStart={isMobile ? handleMouseDown : undefined}
      onTouchMove={isMobile ? handleMouseMove : undefined}
      onTouchEnd={isMobile ? handleMouseUp : undefined}
      ref={rangeContainerRef}
    >
      <RangeSlider className="range__slider" ref={sliderRef} />
      <RangeValue ref={rangeValueRef} className="range__value" />
      <RangeThumb className="range__thumb" ref={rangeThumbRef} />
    </RangeContainer>
  );
}

export default RangeInput;
