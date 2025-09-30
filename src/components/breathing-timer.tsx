"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { Progress } from './ui/progress';

const TOTAL_SECONDS = 120; // 2 minutes

const BreathingTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (!isActive || secondsLeft === 0) {
      if(intervalRef.current) clearInterval(intervalRef.current);
      if (secondsLeft === 0) setIsActive(false);
    }
    return () => {
      if(intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;

  return (
    <div className="w-full max-w-sm mx-auto p-4 border rounded-lg bg-card shadow-sm">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Respiração Guiada</p>
        <p className="text-5xl font-mono font-bold my-2">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
      <Progress value={progress} className="w-full my-4" />
      <div className="flex justify-center gap-2 mt-4">
        <Button onClick={toggle} size="icon" aria-label={isActive ? 'Pausar' : 'Iniciar'}>
          {isActive ? <Pause /> : <Play />}
        </Button>
        <Button onClick={reset} size="icon" variant="outline" aria-label="Resetar">
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};

export default BreathingTimer;
